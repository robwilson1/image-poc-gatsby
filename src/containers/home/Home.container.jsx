import * as React from "react";
import * as styles from './Home.module.css'

import heroCar from '../../images/hero.jpg'
import car1 from '../../images/car1.jpg'
import car2 from '../../images/car2.jpg'
import car3 from '../../images/car3.jpg'

const HomeContainer = () => (
  <main className={styles.main}>
    <title>Gatsby | Unoptimised Images</title>

    <h1 className={styles.heading}>
      Gatsby Unoptimised Images
    </h1>

    <section className={styles.heroImage}>
        <img src={heroCar} alt="Hero" height={800} />
    </section>

    <section className={styles.otherImages}>
        {[car1, car2, car3].map(
            (car, idx) => <img src={car} alt={`Car ${idx + 1}`} height={300} />
        )}

    </section>


  </main>
)

export default HomeContainer;
