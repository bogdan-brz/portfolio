import styles from "./Experience.module.css";
import HomeBtn from "../ui/HomeBtn";
import Project from "./Project";

const Experience = () => {
    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <HomeBtn color="rgb(0, 0, 0" hoverColor="rgb(0, 0, 255)" />
                <h1 className={styles.title}>Web Development</h1>
                <div className="column">
                    <h2 className={styles.subtitle}>My Projects:</h2>
                    <Project
                        name="Pierogi restaurant website"
                        githubLink="https://github.com/bogdan-brz/restaurant-website"
                        projectLink=""
                        deployLink="">
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Eaque quaerat ullam quisquam praesentium,
                            voluptatum voluptatem harum, tempora quibusdam at ex
                            expedita nesciunt animi unde distinctio, laboriosam
                            ea numquam ipsam natus! Sint sapiente officia, ad
                            dolorem eaque facere voluptatibus amet sunt id minus
                            laboriosam voluptatum aspernatur eius possimus
                            eligendi! Quisquam quas ipsum facere consectetur
                            molestiae alias fuga error minima aliquam repellat!
                        </p>
                    </Project>
                    <Project
                        name="Small e-commerce store"
                        githubLink=""
                        projectLink=""
                        deployLink="">
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Eaque quaerat ullam quisquam praesentium,
                            voluptatum voluptatem harum, tempora quibusdam at ex
                            expedita nesciunt animi unde distinctio, laboriosam
                            ea numquam ipsam natus! Sint sapiente officia, ad
                            dolorem eaque facere voluptatibus amet sunt id minus
                            laboriosam voluptatum aspernatur eius possimus
                            eligendi! Quisquam quas ipsum facere consectetur
                            molestiae alias fuga error minima aliquam repellat!
                        </p>
                    </Project>
                    <Project
                        name="Doodle-jump-like game for my girlfriend"
                        githubLink=""
                        projectLink=""
                        deployLink="">
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Eaque quaerat ullam quisquam praesentium,
                            voluptatum voluptatem harum, tempora quibusdam at ex
                            expedita nesciunt animi unde distinctio, laboriosam
                            ea numquam ipsam natus! Sint sapiente officia, ad
                            dolorem eaque facere voluptatibus amet sunt id minus
                            laboriosam voluptatum aspernatur eius possimus
                            eligendi! Quisquam quas ipsum facere consectetur
                            molestiae alias fuga error minima aliquam repellat!
                        </p>
                    </Project>
                </div>
                <h1 className={styles.title}>Machine Learning</h1>
                <div className="column"></div>
            </div>
        </div>
    );
};

export default Experience;
