import Link from "next/link";
import { Fragment } from "react";
import styles from "./Aspirations.module.css";

const Aspirations = () => {
    return (
        <Fragment>
            <h3 className={styles.title}>
                <Link href="/aspirations">
                    My educational and career aspirations
                </Link>
            </h3>
        </Fragment>
    );
};

export default Aspirations;
