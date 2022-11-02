import styles from "./AtributionOverlay.module.css";

const AtributionOverlay = (props) => {
    return (
        <div className={styles.overlay}>
            <div
                className={styles.content}
                style={{
                    width: props.width ? props.width + "px" : "100%",
                    height: props.height ? props.height + "px" : "100%",
                }}>
                {props.children}
            </div>
        </div>
    );
};

export default AtributionOverlay;
