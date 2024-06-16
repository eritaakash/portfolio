import React from 'react';
import styles from '../styles/portfolio.module.scss';

import Image from 'next/image';

const Intro = () => {
    return (
        <section className={styles.intro}>

            <div className={styles.textContainer}>
                <h2>Hello, I'm</h2>
                <h1>Aakash</h1>
                <h3>A CSE Student</h3>
            </div>

            <div className={styles.imageContainer}>
                <Image
                    src="/icons/author.png"
                    alt="Aakash"
                    width={200}
                    height={200}
                    className={styles.image}
                />
            </div>

        </section>
    )
}

export default Intro;