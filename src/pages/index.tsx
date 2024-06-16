import React from 'react';
import styles from '../styles/portfolio.module.scss';

import Intro from '@/components/intro';
import TechStack from '@/components/stack';
import CurrentlyLearning from '@/components/learn';

const Portfolio = () => {
    return (
        <main className={styles.main}>
            <Intro />
            <TechStack />
            <CurrentlyLearning />
        </main>
    )
}

export default Portfolio;