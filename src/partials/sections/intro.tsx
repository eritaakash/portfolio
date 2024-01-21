import styles from './intro.module.scss';
import Icons from 'feather-icons-react';

const Intro = () => {


    const redirect = () => {
        window.open('https://github.com/eritaakash', '_blank');
    };
    
    return (
        <section className={styles.introContainer}>
            <section className={styles.intro}>
                <h1>Hi, I'm <span className={styles.name}>Aakash</span></h1>
                <p>I'm a full-stack web developer</p>
                <button onClick={redirect}> <Icons icon='github'/> <p>GitHub</p> <Icons icon='external-link' className={styles.extLink}/> </button>
            </section>

            <p className={styles.copyrightNotice} style={{ fontSize: '0.8rem' }}>
                &copy; Confetti Doodles Background from <a href="https://www.svgbackgrounds.com/" target="_blank" rel="noreferrer">SVGBackgrounds.com</a>
            </p>
        </section>
    )
};

export default Intro;