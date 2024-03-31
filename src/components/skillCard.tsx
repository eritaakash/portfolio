import React from 'react';
import styles from '../styles/components/skillCard.module.scss';

import Image from 'next/image';

const SkillCard = ({ icon, title }) => {
    return (
        <div className={styles.skillCard}>
            <Image src={icon} alt={title} width={50} height={50} />
            <h3>{title}</h3>
        </div>
    );
};

export default SkillCard;