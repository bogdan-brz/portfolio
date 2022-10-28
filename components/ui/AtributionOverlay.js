import styles from "./AtributionOverlay.module.css";

const AtributionOverlay = (props) => {
    return (
        <div className={styles.overlay}>
            <div
                className={styles.content}
                style={{
                    width: props.width + "px",
                    height: props.height + "px",
                }}>
                {props.children}
            </div>
        </div>
    );
};

export default AtributionOverlay;
