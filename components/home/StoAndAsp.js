import styles from "./StoAndAsp.module.css";
import stoAndAspImg from "../../public/stoandasp.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const StoAndAspFront = () => {
    return (
        <div className={styles.front}>
            <Image src={stoAndAspImg} layout="fill" />
            <h3 className={styles.title + " " + styles.first}>Story</h3>
            <h3 className={styles.plus}>+</h3>
            <h3 className={styles.title + " " + styles.second}>Aspirations</h3>
        </div>
    );
};

const StoAndAspBack = () => {
    const [screenWidth, setScreenWidth] = useState(0);
    useEffect(() => {
        setScreenWidth(window.innerWidth);
    }, []);
    return (
        <div className={styles.back}>
            <h3 className={styles.title}>
                <Link href="/storyandaspirations">
                    My story and aspirations - educational and career
                </Link>
            </h3>
            <div className={styles.dislaimer}>
                <div>* Best viewing on screens at least 1600px wide</div>
                <div
                    className={`${styles.second} ${
                        screenWidth > 1600 ? styles.green : styles.red
                    }`}>
                    Your screen is {screenWidth}px wide
                </div>
            </div>
        </div>
    );
};

export { StoAndAspFront, StoAndAspBack };
