import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "低代码开发",
    Svg: require("../../static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        致远互联V8提供强大的低代码开发平台，通过可视化配置快速构建企业级应用，
        大幅提升开发效率，降低技术门槛。
      </>
    ),
  },
  {
    title: "插件化架构",
    Svg: require("../../static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        采用插件化架构设计，支持自定义插件扩展功能。开发者可以基于标准接口
        开发专属插件，实现业务功能的灵活扩展。
      </>
    ),
  },
  {
    title: "丰富的API",
    Svg: require("../../static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        提供完整的RESTful API接口，支持多种编程语言调用。无论是前端集成
        还是后端对接，都能轻松实现系统间的数据交互。
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
