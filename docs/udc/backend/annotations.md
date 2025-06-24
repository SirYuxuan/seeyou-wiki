---
sidebar_position: 1
---

# 常用注解

本章节整理 UDC 平台后端开发中常用的注解及其说明。

---

### 1. `@MessageListener` - 跨模块/应用事件监听

通过 `@MessageListener` 注解可以监听不同模块的事件，如 BPM、AFFAIR 等，并根据方法参数类型进行区分。

- **用途** 监听系统内的 MQ 消息
- **`topic` 参数**：指定监听的主题，如 `BPM`（流程引擎）、`AFFAIR`（协同事项）等。

**示例代码：**

```java
// 监听 BPM 事件
@MessageListener(topic = "BPM")
public void onBpmEvent(BpmEvent event) {
    if (event instanceof BpmSubmitEvent) {
        // ... 处理流程提交事件
    } else if (event instanceof BpmStopEvent) {
        // ... 处理流程终止事件
    }
}

// 监听协同事项事件
@MessageListener(topic = "AFFAIR")
public void onAffairEvent(AffairEvent event) {
    // ... 处理协同事项相关事件
}
```

> **提示**：更多具体的事件类型，可前往对应模块的 DTO 包下查看，如 `com.seeyon.bpm.dto.message.event`（BPM）或 `com.seeyon.ctp.affair.dto.message`（AFFAIR）。

---

### 2. `@EventSubscribe` 和 `@EventHandler` - 监听实体操作

使用 `@EventSubscribe` 和 `@EventHandler` 注解组合，可以监听指定实体（如 `MattersInfoDto`）的新增、更新、删除等操作。

- **`@EventSubscribe`**: 标记一个方法为事件订阅者。
- **`@EventHandler`**: （与 `@EventSubscribe` 结合使用）标记在类上。

**示例代码：**

```java
@Service
@EventHandler
class Demo{
    @EventSubscribe
    public void onAfterUpdateEvent(AfterUpdateEvent<MattersInfoDto> afterUpdateEvent) {
        // 获取更新后的实体数据
        MattersInfoDto mattersInfo = afterUpdateEvent.getData();

        // ... 在此处理更新事件的业务逻辑
        System.out.println("MattersInfoDto 实体已更新：" + mattersInfo.getId());
    }
}
```

> **提示**：可监听的事件类型包括 `AfterUpdateEvent`（更新后）、`AfterCreateEvent`（创建后）、`BeforeDeleteEvent`（删除前）等。泛型 `<MattersInfoDto>` 指定了所操作的实体类型。

---

### 3. `@AppService` 和 `@AppServiceOperation` - 开放 OpenAPI

通过 `@AppService` 和 `@AppServiceOperation` 注解，可以将一个服务方法发布为 OpenAPI 接口，供外部系统调用。

- **`@AppService`**: 标记一个服务类，并可指定应用名称。
- **`@AppServiceOperation`**: 标记具体的方法为 OpenAPI 操作，并可配置其元数据。
- **`@OpenApi`**: 用于更详细地配置 OpenAPI 的属性。

**示例代码：**

```java
@AppService(value = "用户中心") // 定义服务所属应用
public class UserApprovalService {

    @AppServiceOperation(
        value = "获取用户审批级别", // 操作名称
        openApi = @OpenApi,      // 启用 OpenAPI
        returnValue = "审批结果值" // 返回值说明
    )
    public String getUserApprovalLevel(String userId) {
        // ... 业务逻辑
        return "Level-5";
    }
}
```
