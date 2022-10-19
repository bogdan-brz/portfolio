import styles from "./HomeBtn.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

const HomeBtn = (props) => {
    const router = useRouter();
    return (
        <a
            className={styles.header}
            style={{ "--color": props.hoverColor }}
            href="/"
            onClick={(e) => {
                e.preventDefault();
                router.push("/");
            }}>
            <FontAwesomeIcon className={styles.arrowIcon} icon={faArrowLeft} />
            <span className={styles.homeText}>Home</span>
            <FontAwesomeIcon className={styles.homeIcon} icon={faHouse} />
        </a>
    );
};

export default HomeBtn;
