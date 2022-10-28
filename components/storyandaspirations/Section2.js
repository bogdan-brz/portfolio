import styles from "./Section2.module.css";
import cvmsLogo from "../../public/cvms-logo.png";
import ccaLogo from "../../public/cca-logo.png";
import erauLogo from "../../public/erau-logo.png";
import Image from "next/image";
import gradCapImg from "../../public/grad-cap.png";
import AtributionOverlay from "../ui/AtributionOverlay";
const cvmsAtribLink =
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcv.sduhsd.net%2Findex.html&psig=AOvVaw0mdygHV2JH0qvSeLCHZBiA&ust=1667070509708000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNC1g9_Pg_sCFQAAAAAdAAAAABAD";
const ccaAtribLink =
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcc.sduhsd.net%2F&psig=AOvVaw3ATaEUZznXSEYbeYIfJGJC&ust=1667071337844000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCIDb3-nSg_sCFQAAAAAdAAAAABAH";
const erauAtribLink =
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FEmbry%25E2%2580%2593Riddle_Aeronautical_University&psig=AOvVaw0rT83thrjMKiEjO9Kwswgl&ust=1667071451259000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLC2wZ_Tg_sCFQAAAAAdAAAAABAD";
const gradCapAtribLink =
    "https://pixabay.com/vectors/graduation-cap-hat-achievement-309661/";

const Section2 = () => {
    return (
        <div className={styles.section2}>
            <p className={styles.text}>
                I completed middle school and high school here, and am currently
                applying to college to study engineering.
            </p>
            <div className={styles.logos}>
                <div className={styles.logo1}>
                    <Image src={cvmsLogo} width="350px" height="175px" />
                    <AtributionOverlay width={170} height={170}>
                        image from: <a href={cvmsAtribLink}>school website</a>
                    </AtributionOverlay>
                </div>
                <div className={styles.logo2}>
                    <Image src={ccaLogo} width="350px" height="175px" />
                    <AtributionOverlay width={290} height={170}>
                        image from: <a href={ccaAtribLink}>district website</a>
                    </AtributionOverlay>
                </div>
                <div className={styles.logo3}>
                    <Image src={erauLogo} width="200px" height="200px" />
                    <AtributionOverlay width={190} height={190}>
                        image from: <a href={erauAtribLink}>wikipedia</a>
                    </AtributionOverlay>
                </div>
            </div>
            <div className={styles.gradCapImg}>
                <Image src={gradCapImg} layout="fill" />
                <AtributionOverlay width={170} height={100}>
                    image from: <a href={gradCapAtribLink}>pixabay</a>
                </AtributionOverlay>
            </div>
            <div className={styles.questionMark}>?</div>
        </div>
    );
};

export default Section2;
