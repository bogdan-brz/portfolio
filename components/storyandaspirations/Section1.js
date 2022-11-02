import styles from "./Section1.module.css";
import HomeBtn from "../ui/HomeBtn";
import Image from "next/image";
import planeImg from "../../public/plane-img-2.png";
import { useEffect, useState } from "react";
import AtributionOverlay from "../ui/AtributionOverlay";

const planeAtribLink = "https://www.vecteezy.com/free-vector/airplane-icon";

const aTanIn360 = (opposite, adjacent) => {
    let angle =
        (Math.atan(Math.abs(opposite) / Math.abs(adjacent)) * 180) / Math.PI;
    if (adjacent > 0 && opposite > 0) angle = angle;
    else if (adjacent < 0 && opposite > 0) angle += (90 - angle) * 2;
    else if (adjacent < 0 && opposite < 0) angle += 180;
    else if (adjacent > 0 && opposite < 0) angle += 180 + (90 - angle) * 2;
    return angle;
};

let startLeft;
let startTop;
let startRot;
let endLeft;
let a;
let b;
let c;
let timeMulitiplier;

const Section1 = () => {
    useEffect(() => {
        if (window.innerWidth >= 3500) {
            startLeft = 1930;
            startTop = 370;
            startRot = 300;
            endLeft = 575;
            a = 0.0005;
            b = -1.37;
            c = 1150;
            timeMulitiplier = 1.5;
        } else if (window.innerWidth >= 2500) {
            startLeft = 1380;
            startTop = 265;
            startRot = 300;
            endLeft = 415;
            a = 0.00075;
            b = -1.4607;
            c = 852;
            timeMulitiplier = 1;
        } else {
            startLeft = 880;
            startTop = 140;
            startRot = 300;
            endLeft = 250;
            a = 0.001;
            b = -1.273;
            c = 485.84;
            timeMulitiplier = 1;
        }
    }, []);
    const [planeData, setPlaneData] = useState({
        left: startLeft,
        top: startTop,
        rot: startRot,
    });
    let timer = 0;
    const getX = (time) => {
        return Math.max(
            startLeft - (time % (startLeft - 0.8 * endLeft)),
            endLeft
        );
    };
    const yOfX = (x) => {
        return a * x ** 2 + b * x + c;
    };
    useEffect(() => {
        setInterval(() => {
            setPlaneData((data) => {
                const newLeft = getX(timer);
                const newTop = yOfX(newLeft);
                const newRot = aTanIn360(
                    (newTop - data.top) * 1.3,
                    data.left - newLeft
                );
                return { left: newLeft, top: newTop, rot: newRot };
            });
            timer += timeMulitiplier;
        }, 10);
    }, []);
    return (
        <div className={styles.section1}>
            <div className={styles.homeBtn}>
                <HomeBtn
                    color="rgb(255, 255, 255)"
                    hoverColor="rgb(170, 170, 170)"
                />
            </div>
            <div className={styles.disclaimer}>
                * The only libraries used to make this portfolio are
                react-frontawesome and react-transition-group
            </div>
            <h1 className={styles.title}>My Story - briefly</h1>
            <p className={styles.text1}>
                I currently live in San Diego, California, but I was born in
                Kraków, Poland.
            </p>
            <p className={styles.text2}>
                I moved here when I was 12 - around 6 years ago.
            </p>
            <div
                className={styles.planeImg}
                style={{
                    left: `${planeData.left}px`,
                    top: `${planeData.top}px`,
                    transform: `rotate(${-planeData.rot + 270}deg)`,
                }}>
                <Image src={planeImg} layout="fill" />
                <AtributionOverlay width={120}>
                    image from: <a href={planeAtribLink}>vecteezy.com</a>
                </AtributionOverlay>
            </div>
        </div>
    );
};

export default Section1;
