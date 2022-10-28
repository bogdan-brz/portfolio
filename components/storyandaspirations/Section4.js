import Carousel from "../ui/Carousel";
import styles from "./Section4.module.css";
import laptopWebDev from "../../public/laptop-webdev.png";
import officeWebDev from "../../public/office-webdev.png";
import laptopMl from "../../public/laptop-ml.png";
import officeMl from "../../public/office-ml.png";
import { useState } from "react";

const Section4 = () => {
    const [highlightedTextId, setHighlightedTextId] = useState(0);
    return (
        <div className={styles.section4}>
            <h1 className={styles.title2}>My Aspirations - roughly</h1>
            <div className={styles.content}>
                <Carousel
                    width={440}
                    height={500}
                    slideSpeed={6000}
                    selfSliding={true}
                    images={[laptopWebDev, officeWebDev, laptopMl, officeMl]}
                    notify={(id) => setHighlightedTextId(id)}
                />
                <div className={styles.texts}>
                    <p
                        className={`${styles.text1} ${
                            highlightedTextId == 0 ? styles.highlighted : ""
                        }`}>
                        I want to start a career in web development while in
                        college. I want to start off by working for a web
                        development agency rather than freelancing because
                        that's a better way of getting experience I need.
                    </p>
                    <p
                        className={`${styles.text2} ${
                            highlightedTextId == 1 ? styles.highlighted : ""
                        }`}>
                        After working in the industry for a while, I want to
                        start my own agency and develop web solutions of my own.
                    </p>
                    <p
                        className={`${styles.text3} ${
                            highlightedTextId == 2 ? styles.highlighted : ""
                        }`}>
                        At some point I want to explore what career
                        opportunities I could have in machine learning, with an
                        engineering degree and online course certificates.
                    </p>
                    <p
                        className={`${styles.text4} ${
                            highlightedTextId == 3 ? styles.highlighted : ""
                        }`}>
                        If I am able to find good experience in the machine
                        learning industry and become knowledgable enough to lead
                        my own projects, I could augment my hypothetical web
                        development agency to provide machine learning solutions
                        as well.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Section4;
