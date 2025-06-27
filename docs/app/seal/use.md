---
sidebar_position: 1
---

# 用印申请-保存

### 流程应用(UDC 应用)

1. 修改流程，添加一个标签 `SaveCommonDoc`
   ![1750908399205.jpg](https://img.oofo.cc/v2/HiStF3j.jpeg)
2. 表单的标题字段编码修改为 （字段名称不影响，只修改编码即可）`formTitle`
   ![1750908559769.jpg](https://img.oofo.cc/v2/o2HjYji.jpeg)
3. 添加用印情况字段

   - 是否使用字段必须使用 boolean(布尔类型)，数量字段使用整数型! (字段名称不影响，编码正确即可)
     |名称|编码|类型|
     |---|---|---|
     |附件|fujian|附件-多选|
     |党委章|useDwh|布尔|
     |党委章-数量|dwhNum|整数|
     |法定代表人名章|useFrz|布尔|
     |法定代表人名章-数量|frzNum|整数|
     |行政章|useXzz|布尔|
     |行政章-数量|xzzNum|整数|
     |总经理手签章|useSqq|布尔|
     |总经理手签章-数量|sqqNum|整数|
     |法定代表人手签章|useFrsqq|布尔|
     |法定代表人手签章-数量|frsqqNum|整数|
     |法定代表人身份证复印件|useFrsfz|布尔|
     |法定代表人身份证复印件-数量|frsfzNum|整数|

     ![WX20250626-113052@2x.png](https://img.oofo.cc/v2/zQD0mt6.png)

### 公文应用

    > 需要在页面添加一个隐藏字段->是否保存用印数据(布尔)，给定默认值`是`


    ![WX20250626-113931@2x.png](https://img.oofo.cc/v2/PmIyBdB.png)
    ![WX20250626-113822@2x.png](https://img.oofo.cc/v2/wi4Cozx.png)

    > 修改6种章的是否使用字段
    这里只演示一种，6种章的布尔字段均已建好，禁止从新建立扩展字段

    > 需要用印的文档必须使用附件字段，附件字段使用扩展字段-附件(fileExt01)

    ![1750909293703.jpg](https://img.oofo.cc/v2/3LQfKGi.jpeg)
