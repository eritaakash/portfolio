import React from 'react';
import styles from '@/styles/portfolio.module.scss';

const QuotationMark = ({ position }) => {
    return (
        <div className={styles[position]}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 250" fill="var(--fg-primary)">
                <path d="M125 112.16c-6.02 0-11.42.28-16.25.81 7.1-29.03 22.95-44.36 45.88-56.04 5.33-2.71 7.63-9.1 5.23-14.57l-6.04-13.77c-2.59-5.91-9.62-8.44-15.38-5.53-22.1 11.11-37.39 23.92-48.76 40.63C74.42 86.11 67 115.6 67 153.83v16.52c0 31.95.11 57.81 58 57.81 58 0 58-25.97 58-58s.38-58-58-58z"></path>
            </svg>
        </div>
    )
};

export default QuotationMark;