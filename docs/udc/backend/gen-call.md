---
sidebar_position: 1
---

# 动态表单数据读写

参考文档: [https://www.yuque.com/teamdocs/v8-client-kb/cyxtucgh7gn9gggc](https://www.yuque.com/teamdocs/v8-client-kb/cyxtucgh7gn9gggc)

以下为封装的表单数据查询/更新操作

```java
package com.seeyon.commondoc1175626759602063248.extend.common;

import cn.hutool.core.convert.Convert;
import cn.hutool.core.date.TimeInterval;
import com.seeyon.boot.exception.BusinessException;
import com.seeyon.boot.license.JsonUtils;
import com.seeyon.boot.starter.dubbo.DubboFactory;
import com.seeyon.boot.starter.dubbo.api.AppServiceProxy;
import com.seeyon.boot.starter.dubbo.dto.AppServiceInvokeDto;
import com.seeyon.boot.transport.SingleRequest;
import com.seeyon.boot.transport.SingleResponse;
import com.seeyon.boot.util.id.Ids;
import com.seeyon.bpm.dto.message.event.BpmSubmitEvent;
import com.seeyon.commondoc1175626759602063248.extend.common.utils.Lang;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * 远程调用Entity的增删改查服务
 *
 * @author Sir丶雨轩
 * @since 2025/6/23
 */
@Slf4j
@Service
public class RemoteEntityCrudService {

    @Resource
    private DubboFactory dubboFactory;

    /**
     * 微服务调用超时时间，单位毫秒
     */
    private final Integer TIMEOUT = 60000;

    /**
     * 根据ID查询对象
     *
     * @param id         对象ID
     * @param appName    微服务应用名称
     * @param subAppName 子应用名称
     * @param entityName 实体名称
     * @param method     方法名称 selectById, selectCascadeById
     * @return 对象响应
     */
    public Object select(Long id, String appName, String subAppName, String entityName, String method) {
        TimeInterval interval = new TimeInterval();
        AppServiceInvokeDto appServiceInvoke = new AppServiceInvokeDto();
        appServiceInvoke.setMethodName(method);
        appServiceInvoke.setParamType(SingleRequest.class.getName());
        appServiceInvoke.setParamJson(JsonUtils.toJson(SingleRequest.from(id)));
        appServiceInvoke.setCommandId(Ids.gidString());
        // Service所在的全路径
        appServiceInvoke.setInterfaceName("com.seeyon." + subAppName + ".api." + entityName + "AppService");

        SingleResponse<Object> result = dubboFactory.getProxy(AppServiceProxy.class, appName, DubboFactory.DEFAULT_VERSION, TIMEOUT).invokeAppService(SingleRequest.from(appServiceInvoke));

        log.info("微服务调用记录: 请求操作：{}，请求参数：{}，响应结果：{}，耗时：{}",
                appServiceInvoke.getMethodName(),
                appServiceInvoke.getParamJson(),
                JsonUtils.toJson(result),
                interval.intervalPretty());

        if(result.success()){
            return result.getData().getContent();
        }
        throw new BusinessException(result.getMessage());
    }


    /**
     * 根据ID查询对象
     *
     * @param submitEvent 提交事件
     * @return 对象响应
     */
    public Object selectById(BpmSubmitEvent submitEvent)  {
        return select(Convert.toLong(submitEvent.getFormRecordCode()), submitEvent.getAppName(), submitEvent.getDynamicAppName(), Lang.getEntityName(submitEvent), "selectById");
    }

    /**
     * 根据ID查询对象-级联查询
     *
     * @param submitEvent 提交事件
     * @return 对象响应
     */
    public Object selectCascadeById(BpmSubmitEvent submitEvent)  {
        return select(Convert.toLong(submitEvent.getFormRecordCode()), submitEvent.getAppName(), submitEvent.getDynamicAppName(), Lang.getEntityName(submitEvent), "selectCascadeById");
    }

    /**
     * 更新对象
     *
     * @param object      对象
     * @param submitEvent 提交事件
     */
    public void update(Object object, BpmSubmitEvent submitEvent) {
        String subAppName = submitEvent.getDynamicAppName();
        String entityName = Lang.getEntityName(submitEvent);
        TimeInterval interval = new TimeInterval();
        AppServiceInvokeDto appServiceInvoke = new AppServiceInvokeDto();
        appServiceInvoke.setInterfaceName("com.seeyon." + subAppName + ".api." + entityName + "AppService");
        appServiceInvoke.setMethodName("update");
        appServiceInvoke.setParamType(SingleRequest.class.getName());
        appServiceInvoke.setParamJson(JsonUtils.toJson(SingleRequest.from(object)));
        appServiceInvoke.setCommandId(Ids.gidString());
        appServiceInvoke.setGenericType("com.seeyon." + subAppName + ".dto." + entityName + "Dto");
        AppServiceProxy appServiceProxy = dubboFactory.getProxy(AppServiceProxy.class, submitEvent.getAppName(), DubboFactory.DEFAULT_VERSION, TIMEOUT);
        SingleResponse<Object> result = appServiceProxy.invokeAppService(SingleRequest.from(appServiceInvoke));
        log.info("微服务调用记录: 请求操作：{}，请求参数：{}，响应结果：{}，耗时：{}",
                appServiceInvoke.getMethodName(),
                appServiceInvoke.getParamJson(),
                JsonUtils.toJson(result),
                interval.intervalPretty());

        if(result.success()){
            return;
        }
        throw new BusinessException(result.getMessage());
    }
}

```
