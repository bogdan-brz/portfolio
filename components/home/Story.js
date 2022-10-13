import Link from "next/link";
import { Fragment } from "react";
import styles from "./Story.module.css";

const Story = () => {
    return (
        <Fragment>
            <h3 className={styles.title}>
                <Link href="/story">My story - briefly</Link>
            </h3>
        </Fragment>
    );
};

export default Story;
