import React from 'react';
import styles from '../styles/portfolio.module.scss';

import Image from 'next/image';
import { myStack } from '@/data/myStack';

const TechStack = () => {
    return (
        <section className={styles.aboutMe}>
            <h2>My Tech Stack</h2>

            {myStack.map((skill, index) => (
                <div key={index} className={styles.card}>
                    <Image
                        src={skill.icon}
                        alt={skill.title}
                        width={50}
                        height={50}
                    />
                    <p>{skill.title}</p>
                </div>
            ))}
        </section>
    )
}

export default TechStack;