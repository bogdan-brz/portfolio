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
                Hi, I'm <span>Bogdan</span>
            </h1>
            <h2 className={styles.subtitle}>
                In this portfolio you will find my story, experience, and
                aspirations. You will also find out whether I'm the right web
                developer for your business.
            </h2>
            <div className={styles.cards}>
                {/* <Card front={<StoryFront />} back={<StoryBack />}></Card> */}
                <Card front={<ExperienceFront />} back={<ExperienceBack />} />
                <Card front={<StoAndAspFront />} back={<StoAndAspBack />} />
                {/* <Card
                    front={<AspirationsFront />}
                    back={<AspirationsBack />}></Card> */}
            </div>
        </div>
    );
};

export default Home;
