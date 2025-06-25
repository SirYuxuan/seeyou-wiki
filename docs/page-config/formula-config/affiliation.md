---
sidebar_position: 1
---

# 隶属关系

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="person-only" label="单独选人" default>

```json
{
  "type": "__EXPRESS_TOKENS",
  "data": [
    {
      "desc": "张三",
      "value": "-6510150242326985413",
      "type": "CONSTANT",
      "controlData": {
        "controlType": "REFERENCE",
        "controlProperties": "{\"appName\":\"organization\",\"fullName\":\"com.seeyon.organization.domain.core.entity.OrgMember\",\"multi\":true}"
      },
      "uid": "8ff482f6-13f8-4691-81b9-3d8e7ab97679"
    }
  ]
}
```

  </TabItem>
    <TabItem value="dept-only" label="单独选部门" default>

```json
{
  "type": "__EXPRESS_TOKENS",
  "data": [
    {
      "uid": "6d41d5a0-d7f0-41eb-95b2-93255f976412",
      "type": "CONSTANT",
      "value": "-3135774222341027440",
      "desc": "办公室",
      "controlData": {
        "controlType": "REFERENCE",
        "controlProperties": "{\"appName\":\"organization\",\"fullName\":\"com.seeyon.organization.domain.core.entity.OrgUnit\",\"multi\":true}"
      }
    }
  ]
}
```

  </TabItem>
  <TabItem value="person-affiliated" label="人员隶属" default>

```json
{
  "type": "__EXPRESS_TOKENS",
  "data": [
    {
      "controlData": null,
      "desc": "人员隶属",
      "subOps": [
        [
          {
            "uid": "925ddd43-fca9-4a5a-a53c-6d3672e0e83e",
            "type": "VARIABLE",
            "value": "caseSender.id",
            "desc": "实体.发起人.ID"
          }
        ],
        [
          {
            "uid": "cd8e2e1b-be2f-47a5-94b6-9c707e848cbd",
            "type": "CONSTANT",
            "value": "-7291653495739430590",
            "desc": "机电设备部",
            "controlData": {
              "controlType": "REFERENCE",
              "controlProperties": "{\"appName\":\"organization\",\"fullName\":\"com.seeyon.organization.domain.core.entity.OrgUnit\",\"multi\":true}"
            }
          }
        ]
      ],
      "type": "FUNCTION",
      "uid": "aac9d39b-f466-4ff6-aac3-3f509359e7b7",
      "value": "memberBelongsTo",
      "g_l_index": "1"
    }
  ]
}
```

  </TabItem>

  <TabItem value="person-not-affiliated" label="人员不隶属">

```json
{
  "type": "__EXPRESS_TOKENS",
  "data": [
    {
      "desc": "条件返回",
      "value": "ifs",
      "type": "FUNCTION",
      "subOps": [
        [
          {
            "desc": "人员隶属",
            "value": "memberBelongsTo",
            "type": "FUNCTION",
            "subOps": [
              [
                {
                  "value": "caseSender.id",
                  "desc": "实体.发起人.ID",
                  "type": "VARIABLE",
                  "uid": "3d740226-29dd-4a84-ae04-103b46feb709"
                }
              ],
              [
                {
                  "desc": "人力资源部",
                  "value": "-6867100092081747374",
                  "type": "CONSTANT",
                  "controlData": {
                    "controlType": "REFERENCE",
                    "controlProperties": "{\"appName\":\"organization\",\"fullName\":\"com.seeyon.organization.domain.core.entity.OrgUnit\",\"multi\":true}"
                  },
                  "uid": "b8e6aed3-13f8-4381-8303-35b93bd4651a"
                }
              ]
            ],
            "uid": "c17b34c1-183a-4bb5-8ffa-0edc0f9126be"
          }
        ],
        [
          {
            "desc": "false",
            "value": "false",
            "uid": "27ec1ca0-212b-45c4-ac7e-e0b69fe32ce0",
            "type": "OPERATOR"
          }
        ],
        [
          {
            "desc": "true",
            "value": "true",
            "uid": "7bb9d4ea-d349-4521-b3c8-fa5573f74795",
            "type": "OPERATOR"
          }
        ]
      ],
      "uid": "0cc8a3c2-1976-44db-8018-f9d43fc5dd37"
    }
  ]
}
```

  </TabItem>

  <TabItem value="org-affiliated" label="组织隶属">

```json
{
  "type": "__EXPRESS_TOKENS",
  "data": [
    {
      "desc": "组织隶属",
      "value": "unitBelongsTo",
      "type": "FUNCTION",
      "subOps": [
        [
          {
            "value": "caseSender.institution.id",
            "desc": "实体.发起人.机构.ID",
            "type": "VARIABLE",
            "uid": "1a0df7ed-f5a6-48ac-89f7-7afb376c6392"
          }
        ],
        [
          {
            "desc": "运营分公司;郑州市轨道交通置业有限公司;河南郑许轨道交通有限公司",
            "value": "-5508799475888143556;-3750311746663199610;-3021995804539597756",
            "type": "CONSTANT",
            "controlData": {
              "controlType": "REFERENCE",
              "controlProperties": "{\"appName\":\"organization\",\"fullName\":\"com.seeyon.organization.domain.core.entity.OrgUnit\",\"multi\":true}"
            },
            "uid": "58ea66ab-331b-460b-b2d8-fdc6d6bcc062"
          }
        ]
      ],
      "uid": "d9be9598-4e73-485b-a3f2-c156c360efdd"
    }
  ]
}
```

  </TabItem>

  <TabItem value="org-not-affiliated" label="组织不隶属">

```json
{
  "type": "__EXPRESS_TOKENS",
  "data": [
    {
      "uid": "385637b3-4730-4142-9284-1a0f8b0c8c3d",
      "type": "FUNCTION",
      "value": "ifs",
      "desc": "条件返回",
      "subOps": [
        [
          {
            "uid": "e21f0faf-9c99-49c4-a45f-0a6c16e28e2b",
            "type": "FUNCTION",
            "value": "unitBelongsTo",
            "desc": "组织隶属",
            "subOps": [
              [
                {
                  "uid": "91a1f1fc-92e4-4789-9542-e3a87ec4716e",
                  "type": "VARIABLE",
                  "value": "caseSender.department.id",
                  "desc": "实体.发起人.部门.ID"
                }
              ],
              [
                {
                  "uid": "6077a105-2a9e-42ca-bc45-1d2fb637172e",
                  "type": "CONSTANT",
                  "value": "2428649533698244651",
                  "desc": "郑州交通发展投资集团有限公司",
                  "controlData": {
                    "controlType": "REFERENCE",
                    "controlProperties": "{\"appName\":\"organization\",\"fullName\":\"com.seeyon.organization.domain.core.entity.OrgUnit\",\"multi\":true}"
                  }
                }
              ]
            ]
          }
        ],
        [
          {
            "uid": "7356dc63-241a-4ce3-b5ac-39686d26f04a",
            "type": "OPERATOR",
            "value": "false",
            "desc": "false"
          }
        ],
        [
          {
            "uid": "7160fcca-dce7-406b-b73b-f3e38fce8d1d",
            "type": "OPERATOR",
            "value": "true",
            "desc": "true"
          }
        ]
      ]
    }
  ]
}
```

  </TabItem>
</Tabs>
