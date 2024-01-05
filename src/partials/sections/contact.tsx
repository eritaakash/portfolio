import styles from './contact.module.scss';
import ContactForm from '@/partials/components/contactForm';

import InfoCard from '../components/infoCard';
import Icons from 'feather-icons-react';

import { useState } from 'react';

const Contact = () => {

    const [form, setForm] = useState(false);

    const redirectUser =(e) => {
        const target = e.target.id;
        switch(target) {
            case 'linkedin':
                window.open('https://www.linkedin.com/in/eritaakash/', '_blank');
                break;
            case 'github':
                window.open('https://github.com/eritaakash', '_blank');
                break;
            case 'email':
                window.open('https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRttNmKlNGrSndfPrnhSnKxbsLfDWrgTgbfmlQNRbmlDmJjbtwMCTnzKmQcnsmnVNhZBFRB', '_blank');
                break;
            default:
                break;
        }
    }
    return (
        <section className={styles.contactContainer}>
            <section className={styles.contact}>
                <h2>Contact Me</h2>
                <p>Feel free to contact me for any queries or suggestions. Message me on the any one of the listed profiles and I'll respond shortly </p>
                
                <section className={styles.formParent}>
                    { form && <ContactForm /> }

                    <InfoCard content={
                        <>
                            <h3>Contact Details</h3>
                            <p>Connect with me:</p>

                            <ul className={styles.clickableLinksList}>
                                <li><Icons icon='linkedin' />Linkedin: <span onClick={redirectUser} id='linkedin'>@eritaakash <Icons icon='external-link' /></span></li>
                                <li><Icons icon='github' />GitHub: <span onClick={redirectUser} id='github'>/eritaakash <Icons icon='external-link' /></span></li>
                                <li><Icons icon='mail' />E-mail <span onClick={redirectUser} id='email'>eritaakash <Icons icon='external-link'/></span></li>
                            </ul>
                        </>
                    } />

                    <InfoCard content={
                        <>
                            <h3>Why contact me?</h3>
                            <p>You can contact me in the following cases:</p>

                            <ul>
                                <li><Icons icon='box' />Project Development</li>
                                <li><Icons icon='code' />Collaboration</li>
                                <li><Icons icon='message-circle' />Feedback</li>
                                <li><Icons icon='alert-circle' />Bug Reports</li>
                                <li><Icons icon='help-circle' />Technical Support</li>
                                <li><Icons icon='user' />Hiring Opportunities</li>
                                <li><Icons icon='heart' />General Inquiries</li>
                            </ul>
                        </>
                    } />
                </section>
            </section>
        </section>
    )
};

export default Contact;