import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import * as styles from "./Home.module.css";

const HomeContainer = () => (
  <main className={styles.main}>
    <title>Gatsby | Optimised Images</title>

    <h1 className={styles.heading}>Gatsby Optimised Images</h1>

    <section className={styles.heroImage}>
      <StaticImage
        src={'../../images/hero.jpg'}
        alt="Hero Car"
        placeholder="blurred"
        layout="constrained"
        width={1200}
        height={800}
        loading="eager"
        formats={["auto", "webp", "avif"]}
        quality={80}
      />
    </section>

    <section className={styles.otherImages}>
        <StaticImage
          src="../../images/car1.jpg"
          alt="Car 1"
          placeholder="blurred"
          layout="constrained"
          width={450}
          height={300}
          loading="lazy"
          formats={["auto", "webp", "avif"]}
          quality={50}
        />
        <StaticImage
          src="../../images/car2.jpg"
          alt="Car 2"
          placeholder="blurred"
          layout="constrained"
          width={450}
          height={300}
          loading="lazy"
          formats={["auto", "webp", "avif"]}
          quality={50}
        />
        <StaticImage
          src="../../images/car3.jpg"
          alt="Car 3"
          placeholder="blurred"
          layout="constrained"
          width={450}
          height={300}
          loading="lazy"
          formats={["auto", "webp", "avif"]}
          quality={50}
        />
    </section>
  </main>
);

export default HomeContainer;
