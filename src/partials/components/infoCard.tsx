import styles from './card.module.scss';

const InfoCard = ({ content }) => {
    return (
        <section className={styles.infoCard}>
            {content}
        </section>
    )
};

export default InfoCard;