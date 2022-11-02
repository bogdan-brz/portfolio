import styles from "./HomeBtn.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const HomeBtn = (props) => {
    return (
        <a
            className={styles.header}
            style={{
                "--hoverColor": props.hoverColor,
                "--color": props.color,
            }}>
            <Link href="/">
                <div>
                    <FontAwesomeIcon
                        className={styles.arrowIcon}
                        icon={faArrowLeft}
                    />
                    <span className={styles.homeText}>Home</span>
                    <FontAwesomeIcon
                        className={styles.homeIcon}
                        icon={faHouse}
                    />
                </div>
            </Link>
        </a>
    );
};

export default HomeBtn;
