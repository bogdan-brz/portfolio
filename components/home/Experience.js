import Link from "next/link";
import styles from "./Experience.module.css";
import laptopImg from "../../public/laptop.jpg";
import Image from "next/image";

const ExperienceFront = () => {
    return (
        <div className={styles.front}>
            <Image src={laptopImg} layout="fill" />
            <h3 className={styles.title}>Experience</h3>
        </div>
    );
};

const ExperienceBack = () => {
    return (
        <div className={styles.back}>
            <h3 className={styles.title}>
                <Link href="/experience">
                    My projects in web development and machine learning
                </Link>
            </h3>
        </div>
    );
};

export { ExperienceFront, ExperienceBack };
