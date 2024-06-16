import React from 'react';
import styles from '../styles/portfolio.module.scss';

import Image from 'next/image';
import { currentlyLearning } from '@/data/currentlyLearning';

const CurrentlyLearning = () => {
    return (
        <section className={styles.currentlyLearning}>
            <h2>I'm Currently Learning:</h2>

            {currentlyLearning.map((skill, index) => (
                <div key={index} className={styles.card_learning}>
                    <h3>{skill.title}</h3>
                    <p>{skill.description}</p>
                </div>
            ))}
        </section>
    )
};

export default CurrentlyLearning;