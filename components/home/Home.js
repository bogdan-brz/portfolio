import styles from "./Home.module.css";
import Card from "../ui/Card";
// import { AspirationsBack, AspirationsFront } from "./Aspirations";
import { ExperienceBack, ExperienceFront } from "./Experience";
// import { StoryBack, StoryFront } from "./Story";
import { StoAndAspBack, StoAndAspFront } from "./StoAndAsp";

const Home = () => {
    return (
        <div className={styles.page}>
            <h1 className={styles.title}>
                Hi, I&apos;m <span>Bogdan</span>
            </h1>
            <h2 className={styles.subtitle}>
                In this portfolio you will find my story, experience, and
                aspirations. The experience page lists my projects in web
                development and machine learning, and the story and aspirations
                page provides some information about me.
            </h2>
            <div className={styles.cards}>
                <Card front={<ExperienceFront />} back={<ExperienceBack />} />
                <Card front={<StoAndAspFront />} back={<StoAndAspBack />} />
            </div>
            <div className={styles.contactSection}>
                <div className={styles.contactText}>
                    Your can reach me via email at{" "}
                    <span className={styles.emailText}>
                        bogdan.brzuchacz@gmail.com
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Home;
