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

    const ServiceCards = (...content) => {
        return (
            <>
                {
                    content.map((card, index) => {
                        return (
                            <section className={styles.serviceCard} key={index}>
                                {card}
                            </section>
                        )
                    })
                }
            </>
        )
    }

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
                            <h3><Icons icon="bookmark" size={50} /> My Tech Stack</h3>
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

                    <InfoCard content={
                        <>
                            <h3><Icons icon="code" size={50} /> Programming Languages</h3>
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

                <h2 style={{ marginTop: '4.5rem' }}>Services Offered</h2>
                

                <section className={styles.cardsList}>
                    {
                        ServiceCards(
                            <>
                                
                                <h3><Icons icon='server' size={50} className={styles.parentIcon} /> Backend Development</h3>
                                <p>A server that supports your client-side projects</p>

                                <ul>
                                    <li><Icons icon='folder' /> Documented and comprehensive project file structure</li>
                                    <li><Icons icon='check-circle' />TypeScript for type-checking and bug prevention</li>
                                    <li><Icons icon='package'/> Integration of a backend library & its middlewares</li>
                                    <li><Icons icon='database' />Database integration for CRUD operations & Data management</li>
                                    <li><Icons icon='activity' />Usage of WebSockets to provide updated data in real-time</li>
                                    <li><Icons icon='shield' />Implementing secure user authentication and authorization mechanisms.</li>
                                </ul>
                            </>,
                            <>
                                
                                <h3><Icons icon='monitor' size={50} className={styles.parentIcon} /> Frontend Development</h3>
                                <p>A client-side project built with great detail and care</p>

                                <ul>
                                    <li><Icons icon='folder' /> Documented and comprehensive project file structure</li>
                                    <li><Icons icon='check-circle' />Development of given User Interface with great accuracy</li>
                                    <li><Icons icon='code' />Alternatively, developing an attractive UI from scratch</li>
                                    <li><Icons icon='package' /> Integration of utility modules (for icons, components, etc.)</li>
                                    <li><Icons icon='activity' />Usage of WebSockets to provide updated data in real-time</li>
                                    <li><Icons icon='shield' />Implementing secure user authentication and authorization mechanisms.</li>
                                </ul>
                            </>,
                            <>
                                
                                <h3><Icons icon='key' size={50} className={styles.parentIcon} />Maintainance & Other</h3>
                                <p>Keeping developmental issues away from your projects</p>

                                <ul>
                                    <li><Icons icon='crosshair' />Bug fixing</li>
                                    <li><Icons icon='activity' />Regular updates of project's status</li>
                                    <li><Icons icon='code' />Addition of requested features</li>
                                </ul>
                            </>
                        )
                    }

                    
                </section>
            </section>
        </section>
    )
};

export default About;