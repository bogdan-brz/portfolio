import HomeBtn from "../ui/HomeBtn";
import styles from "./StoAndAsp.module.css";
import cvmsLogo from "../../public/cvms-logo.png";
import ccaLogo from "../../public/cca-logo.png";
import erauLogo from "../../public/erau-logo.png";
import Image from "next/image";

const StoAndAsp = () => {
    return (
        <div className={styles.page}>
            <div className={styles.section1}>
                <div className={styles.homeBtn}>
                    <HomeBtn
                        color="rgb(255, 255, 255)"
                        hoverColor="rgb(170, 170, 170)"
                    />
                </div>
                <h1 className={styles.title}>My Story - briefly</h1>
                <p className={styles.text + " " + styles.text1}>
                    I currently live in San Diego, California, but I was born in
                    Kraków, Poland.
                </p>
                <p className={styles.text + " " + styles.text2}>
                    I moved here when I was 12, so around 6 years ago.
                </p>
            </div>
            <div className={styles.section2}>
                <p className={styles.text + " " + styles.text3}>
                    I completed middle school and high school here, and am
                    currently applying to college to study engineering.
                </p>
                <div className={styles.logos}>
                    <Image src={cvmsLogo} width="350px" height="175px" />
                    <div className={styles.logo2}>
                        <Image src={ccaLogo} width="350px" height="175px" />
                    </div>
                    <Image src={erauLogo} width="200px" height="200px" />
                </div>
            </div>
        </div>
    );
};

export default StoAndAsp;
