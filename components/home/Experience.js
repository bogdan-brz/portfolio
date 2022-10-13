import Link from "next/link";
import { Fragment } from "react";
import styles from "./Experience.module.css";

const Experience = () => {
    return (
        <Fragment>
            <h3 className={styles.title}>
                <Link href="/experience">My experience in web development</Link>
            </h3>
        </Fragment>
    );
};

export default Experience;
