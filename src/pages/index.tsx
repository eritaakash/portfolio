import React from 'react';
import styles from '../styles/portfolio.module.scss';

import WavySVG from '../components/heroWave';
import QuotationMark from '@/components/quoteMark';

import { skills } from '@/helpers/skills';
import SkillCard from '@/components/skillCard';

const Portfolio = () => {
    return (
        <main className={styles.main}>
            <section className={styles.hero}>

                <section>
                    <h1>Hey, I'm <span>Aakash!</span></h1>
                    <a href='https://github.com/eritaakash' target='_blank'>GitHub</a>
                </section>


                <WavySVG />
            </section>

            <section className={styles.about}>

                <div className={styles.customQuoteBlock}>

                    <QuotationMark position={'upperLeft'} />
                    <p className={styles.h2Description}>I'm a Computer Sciecnce student - currently in first year. I'm always looking for new opportunities to learn and grow.</p>
                    <QuotationMark position={'lowerRight'} />

                </div>

                <h2 className={styles.heading2}>My Skills</h2>


                <section className={styles.skillCardsContainer}>

                    <div className={styles.opacityGradientLeft}></div>
                    <div className={styles.opacityGradientRight}></div>

                    <div className={styles.skillCards}>
                        {
                            skills.map((skill, index) => (
                                <SkillCard key={index} {...skill} />
                            ))
                        }
                    </div>
                </section>


                <h2 className={styles.heading2}>Featured Projects</h2>
                <div className={styles.comingSoon}>
                    <p>Coming soon...!</p>
                </div>

                <div className={styles.copyrights}>
                    <p>&copy; Quotation Marks SVG from <a href='https://www.svgbackgrounds.com/' target='_blank'>SVGBackgrounds</a></p>
                    <p>&copy; Logos taken from <a href='https://www.worldvectorlogo.com/' target='_blank'>WorldVectorLogo</a></p>
                </div>
            </section>
        </main>
    )
}

export default Portfolio;