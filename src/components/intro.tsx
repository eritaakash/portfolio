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
                <img
                    src={'https://avatars.githubusercontent.com/u/144517292?s=400&u=99bbb3e810ad5f4a38685a17384ab4bd26b97df7&v=4'}
                    alt="Aakash"
                    className={styles.image}
                />
            </div>

        </section>
    )
}

export default Intro;