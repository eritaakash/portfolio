import Icons from 'feather-icons-react';
import styles from './about.module.scss';

import { useState, useEffect } from 'react';
import InfoCard from '../components/infoCard';

const About = () => {

    const [age, setAge] = useState(0);

    const calculateAge = () => {
        const birthDate = new Date(2006, 6, 15);
        const difference = Date.now() - birthDate.getTime();
        const age = new Date(difference);
        setAge(Math.abs(age.getUTCFullYear() - 1970));
    }

    useEffect(() => {
        calculateAge();
    }, []);

    return (
        <section className={styles.aboutContainer}>
            <section className={styles.about}>
                <h2>About Me</h2>
                
                <section className={styles.cardsList}>

                    <InfoCard content={
                        <>
                            <h3><Icons icon="user" size={50} /> Who am I?</h3>
                            <ul>
                                <li><Icons icon='gift' /> My age: <span>{age}y</span></li>

                                <li><Icons icon='book' /> Education: <span>Student</span></li>
                                <ul>
                                    <li><Icons icon='clock' /> Institution: <span>College</span></li>
                                    <li><Icons icon='help-circle' /> Stream: <span>Computer Science</span></li>
                                    <li><Icons icon='clock' /> Duration: <span>3y</span></li>
                                </ul>

                                <li><Icons icon='navigation' /> Location: <span>India</span></li>
                                <li><Icons icon='globe' /> Languages: <span>English, Hindi</span></li>
                                <li><Icons icon='briefcase' /> Career Aspirations: <span>Web Developer</span></li>

                            </ul>
                        </>
                    } />

                    <InfoCard content={
                        <>
                            <h3><Icons icon="user" size={50} /> My Tech Stack</h3>
                            <ul>
                                <li><Icons icon='monitor' /> Frontend: <span>Next.js</span></li>
                                <ul>
                                    <li><Icons icon='layout' /> UI: <span>React.js</span></li>
                                    <li><Icons icon='layers' /> Styling: <span>Sass</span></li>
                                    <li><Icons icon='feather' /> Icons: <span>Feather</span></li>
                                </ul>
                                <li><Icons icon='server' /> Backend: <span>Express</span></li>
                                <li><Icons icon='database' /> Database: <span>MongoDB</span></li>
                                <li><Icons icon='activity' /> Runtime: <span>Node.js</span></li>
                                <li><Icons icon='github' /> Version Control: <span>Git</span></li>
                            </ul>
                        </>
                    } />

                </section>
            </section>
        </section>
    )
};

export default About;