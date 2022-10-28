import styles from "./StoryAndAspirations.module.css";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";

const StoryAndAspirations = () => {
    return (
        <div className={styles.page}>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
        </div>
    );
};

export default StoryAndAspirations;
