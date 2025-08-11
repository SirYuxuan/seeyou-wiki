---
sidebar_position: 1
---

# 脚本找人
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
 <TabItem value="heyue" label="合约法规部经办人">
```javascript
let contractType = app-approval.attribute1;
let userDtoList = seq.list();

let addUser = lambda(id, name) -> {
    let userDto = new com.seeyon.bpm.dto.match.BpmUserDto();
    userDto.id = id;
    userDto.name = name;
    seq.add(userDtoList, userDto);
} end;

if (contractType == "REP_10307" || contractType == "REP_10000" || contractType == "REP_10001" || contractType == "REP_10083" ||
    contractType == "REP_10002" || contractType == "REP_10007" || contractType == "REP_10082" || contractType == "REP_10005" ||
    contractType == "REP_10030" || contractType == "REP_10024" || contractType == "REP_10106" || contractType == "REP_10287" ||
    contractType == "建设工程-") {
    addUser("7046068771735684765", "周方");
    addUser("-414123767954520493", "谢卿");
    addUser("-7774467675966192373", "胡坤章");
    addUser("6318668487415318319", "孙馨");
    addUser("-6787722564719718891", "胡继辉");
    addUser("5254587769801887190", "康召泽");
    addUser("7850715012205659809", "马华琴");
    addUser("8036617657955601603", "卢晓禹");
    addUser("5081009774768374225", "张瑜");
    addUser("-2658009661099521597", "张庆兵");
    addUser("5406398481609673385", "乔静静");
    addUser("5170775470999881948", "胡中辉");
    addUser("4285135350532752015", "张春晖");
    addUser("2865975474806868704", "刘中文");
}
elsif (contractType == "REP_10069" || contractType == "REP_10072" || contractType == "REP_10062" || contractType == "REP_10071" ||
       contractType == "REP_10074" || contractType == "REP_10019" || contractType == "REP_10009" || contractType == "REP_10023" ||
       contractType == "设备系统-屏蔽门设备" || contractType == "设备系统-电梯扶梯设备" || contractType == "设备系统-车辆段工艺设备" ||
       contractType == "设备系统-人防设备" || contractType == "设备系统-技防安检设备" || contractType == "设备系统-设备其它" ||
       contractType == "设备系统-车辆、牵引" || contractType == "服务-勘察") {
    addUser("-2668172489956965714", "胡志超");
    addUser("-885456920472368399", "段明丽");
    addUser("-8455165997429928517", "高学洁");
    addUser("3087180171934580806", "楚文治");
}
elsif (contractType == "REP_10063" || contractType == "REP_10066" || contractType == "REP_10070" || contractType == "REP_10187" ||
       contractType == "REP_10068" || contractType == "REP_10067" || contractType == "REP_10061" || contractType == "REP_10073" ||
       contractType == "REP_10064" || contractType == "REP_10065" || contractType == "设备系统-供电系统设备" ||
       contractType == "设备系统-信号系统" || contractType == "设备系统-气体灭火设备" || contractType == "设备系统-给排水设备" ||
       contractType == "设备系统-综合监控设备" || contractType == "设备系统-自动售检票、清分" || contractType == "设备系统-通信设备" ||
       contractType == "设备系统-通风空调设备" || contractType == "设备系统-钢轨设备") {
    addUser("7046068771735684765", "周方");
    addUser("-414123767954520493", "谢卿");
    addUser("-7774467675966192373", "胡坤章");
    addUser("6318668487415318319", "孙馨");
    addUser("-6787722564719718891", "胡继辉");
    addUser("5254587769801887190", "康召泽");
    addUser("7850715012205659809", "马华琴");
    addUser("8036617657955601603", "卢晓禹");
    addUser("5081009774768374225", "张瑜");
    addUser("-2658009661099521597", "张庆兵");
    addUser("5406398481609673385", "乔静静");
    addUser("5170775470999881948", "胡中辉");
    addUser("4285135350532752015", "张春晖");
    addUser("2865975474806868704", "刘中文");
}
else {
    addUser("5476393173901066522", "高艺青");
    addUser("-3997149437076618982", "陈雪皎");
    addUser("-7699939886903309667", "李新宇");
    addUser("7326491799139075561", "刘恩龙");
    addUser("811970075287440122", "张娜");
    addUser("-8455165997429928517", "高学洁");
}

return userDtoList;
```
 </TabItem>
 <TabItem value="caiwu" label="财务部经办人">
 ```javascript
 let contractType = app-approval.attribute1;
let userDtoList = seq.list();

let addUser = lambda(id, name) -> {
    let userDto = new com.seeyon.bpm.dto.match.BpmUserDto();
    userDto.id = id;
    userDto.name = name;
    seq.add(userDtoList, userDto);
} end;

if (contractType == "REP_10106" || contractType == "REP_10030" || 
    contractType == "REP_10287" || contractType == "REP_10029" || 
    contractType == "前期迁改-") {
    addUser("9174806833393779856", "杨运强");
    addUser("-819726942878216520", "刘岩");
    addUser("5945484139910939619", "张泽皓");
    addUser("3470575438214680242", "徐翠连");
}
elsif (contractType == "REP_10307" || contractType == "REP_10000" || 
       contractType == "REP_10001" || contractType == "REP_10083" || 
       contractType == "REP_10002" || contractType == "REP_10007" || 
       contractType == "REP_10082" || contractType == "REP_10005" || 
       contractType == "建设工程-" || contractType == "开发成本-") {
    addUser("9174806833393779856", "杨运强");
    addUser("-819726942878216520", "刘岩");
    addUser("3470575438214680242", "徐翠连");
    addUser("5945484139910939619", "张泽皓");
    addUser("6492356366768751557", "雒康");
    addUser("4795068498531140073", "张亚伟");
}
elsif (contractType == "REP_10022" || contractType == "REP_10021" || 
       contractType == "REP_10028" || contractType == "REP_10023" || 
       contractType == "REP_10025" || contractType == "REP_10167" || 
       contractType == "REP_10027" || contractType == "REP_10024" || 
       contractType == "REP_10026" || contractType == "服务-") {
    addUser("9174806833393779856", "杨运强");
    addUser("-819726942878216520", "刘岩");
    addUser("3470575438214680242", "徐翠连");
    addUser("5945484139910939619", "张泽皓");
    addUser("6492356366768751557", "雒康");
}
elsif (contractType == "REP_10071" || contractType == "REP_10063" || 
       contractType == "REP_10066" || contractType == "REP_10069" || 
       contractType == "REP_10074" || contractType == "REP_10070" || 
       contractType == "REP_10187" || contractType == "REP_10072" || 
       contractType == "REP_10068" || contractType == "REP_10067" || 
       contractType == "REP_10061" || contractType == "REP_10019" || 
       contractType == "REP_10009" || contractType == "REP_10062" || 
       contractType == "REP_10073" || contractType == "REP_10064" || 
       contractType == "REP_10065" || contractType == "设备系统-") {
    addUser("9174806833393779856", "杨运强");
    addUser("-819726942878216520", "刘岩");
    addUser("5945484139910939619", "张泽皓");
    addUser("3470575438214680242", "徐翠连");
    addUser("4795068498531140073", "张亚伟");
}
else {
    addUser("9174806833393779856", "杨运强");
    addUser("-819726942878216520", "刘岩");
    addUser("3470575438214680242", "徐翠连");
    addUser("5945484139910939619", "张泽皓");
    addUser("6492356366768751557", "雒康");
}

return userDtoList;
 ```
 </TabItem>
</Tabs>