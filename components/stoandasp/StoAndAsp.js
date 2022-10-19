import HomeBtn from "../ui/HomeBtn";
import styles from "./StoAndAsp.module.css";

const StoAndAsp = () => {
    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <HomeBtn hoverColor="rgb(0, 180, 0)" />
                <h1 className={styles.title}>My Story - briefly</h1>
            </div>
        </div>
    );
};

export default StoAndAsp;
