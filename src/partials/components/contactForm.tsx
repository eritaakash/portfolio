import styles from './contactForm.module.scss';
import Icons from 'feather-icons-react';

const ContactForm = () => {
    return (
        <form className={styles.contactForm}>
            <label>
                <span>Name</span>
                <input type="text" name="name" />
            </label>

            <label>
                <span>Email</span>
                <input type="text" name="name" />
            </label>

            <label>
                <span>Feedback</span>
                <textarea name="name" />
            </label>

            <button type='button'><Icons icon='send' />Send Message</button>
        </form>
    )
}

export default ContactForm;