import Card from "../ui/Card";
import Aspirations from "./Aspirations";
import Experience from "./Experience";
import styles from "./Home.module.css";
import Story from "./Story";

const Home = () => {
    return (
        <div className={styles.page}>
            <h1 className={styles.title}>
                Hi, I'm <span>Bogdan</span>
            </h1>
            <h2 className={styles.subtitle}>
                In this portfolio you will find my story, experience, and
                aspirations. You will also find out whether I'm the right web
                developer for your business.
            </h2>
            <div className={styles.cards}>
                <Card
                    front={<h3 className={styles.cardFrontTitle}>Story</h3>}
                    back={<Story />}></Card>
                <Card
                    front={
                        <h3 className={styles.cardFrontTitle}>Experience</h3>
                    }
                    back={<Experience />}></Card>
                <Card
                    front={
                        <h3 className={styles.cardFrontTitle}>Aspirations</h3>
                    }
                    back={<Aspirations />}></Card>
            </div>
        </div>
    );
};

export default Home;
