---
sidebar_position: 2
---

# 用印申请-更新

1. 添加通用文档应用依赖
   ![WX20250626-114941@2x.png](https://img.oofo.cc/v2/glALzNd.png)
2. 修改流程，添加一个标签 `UpdateCommonDoc`
   ![WX20250626-114500@2x.png](https://img.oofo.cc/v2/kTBTtle.png)
3. 实体添加 3 个字段
   |名称|编码|类型|强制编码一致|
   |---|---|---|---|
   |对应流程|commonDoc|实体->通用档案->通用档案|是|
   |是否选择流程|自动生成即可|布尔|否|
   |Url|自动生成即可|多行文本|否|

   ![WX20250626-114630@2x.png](https://img.oofo.cc/v2/w8t40J3.png)
   ![WX20250626-114826@2x.png](https://img.oofo.cc/v2/OPwrVQS.png)

4. 页面设置隐藏域放置 Url 字段
   ![WX20250626-115304@2x.png](https://img.oofo.cc/v2/FEcRH1o.png)
5. 页面添加 3 个元素
   - 是否选择流程(实体字段)
   - 选择档案(实体字段)
   - 查看数据(按钮组件)
     - 按钮类型设置为链接按钮
       ![WX20250626-115355@2x.png](https://img.oofo.cc/v2/dIpFPih.png)
       5.1 设置隐藏表达式，隐藏域中 Url 为空的时候隐藏否则正常
       ![WX20250626-115700@2x.png](https://img.oofo.cc/v2/hViv8gc.png)
       ![WX20250626-115554@2x.png](https://img.oofo.cc/v2/F5l55Rq.png)
6. 选择`选择档案`字段，修改参照设置 - 参照显示字段/参照下拉字段设置为表单标题
   ![WX20250626-120008@2x.png](https://img.oofo.cc/v2/N99DQl7.png)
   6.1 添加条件，发起人=登录用户 ID，是否使用=否
   ![WX20250626-120145@2x.png](https://img.oofo.cc/v2/Zs7DDrI.png)
   6.2 设置参照携带
   - 必选页面地址(PC)映射到隐藏域的 Url 种
   - 必选表单标题映射到当前页面的标题字段中
   - 其余印章使用情况根据需求选择
     ![WX20250626-120352@2x.png](https://img.oofo.cc/v2/O7ub7iq.png)
