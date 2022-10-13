import styles from "./Card.module.css";

const Card = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.front}>{props.front}</div>
                <div className={styles.back}>{props.back}</div>
            </div>
        </div>
    );
};

export default Card;
