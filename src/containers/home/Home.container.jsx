import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import * as styles from "./Home.module.css";

const heroCar = "../../images/hero.jpg";
const car1 = "../../images/car1.jpg";
const car2 = "../../images/car2.jpg";
const car3 = "../../images/car3.jpg";

const HomeContainer = () => (
  <main className={styles.main}>
    <title>Gatsby | Optimised Images</title>

    <h1 className={styles.heading}>Gatsby Optimised Images</h1>

    <section className={styles.heroImage}>
      <StaticImage
        src={heroCar}
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
          src={car1}
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
          src={car2}
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
          src={car3}
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
