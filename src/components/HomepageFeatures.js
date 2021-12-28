import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '使用方便',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus从一开始就被设计为易于安装，并用于快速启动和运行您的网站。
      </>
    ),
  },
  {
    title: '关注重要的事情',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        让你节省时间并完全专注于项目文档。 你只须专注于使用 Markdown/MDX 格式编写文档和文章即可，
      </>
    ),
  },
  {
    title: '基于 React 技术构建',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        基于 React，你可以扩展或自定义项目的页面布局。 Docusaurus 被扩展的同时仍然能够重用相同的页眉和页脚。
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
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
