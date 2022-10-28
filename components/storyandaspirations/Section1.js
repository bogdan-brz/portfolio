import styles from "./Section1.module.css";
import HomeBtn from "../ui/HomeBtn";
import Image from "next/image";
import planeImg from "../../public/plane-img-2.png";
import { useEffect, useState } from "react";

const aTanIn360 = (opposite, adjacent) => {
    let angle =
        (Math.atan(Math.abs(opposite) / Math.abs(adjacent)) * 180) / Math.PI;
    if (adjacent > 0 && opposite > 0) angle = angle;
    else if (adjacent < 0 && opposite > 0) angle += (90 - angle) * 2;
    else if (adjacent < 0 && opposite < 0) angle += 180;
    else if (adjacent > 0 && opposite < 0) angle += 180 + (90 - angle) * 2;
    return angle;
};

const Section1 = () => {
    const [planePos, setPlanePos] = useState({ left: 880, top: 140 });
    const [planeRot, setPlaneRot] = useState(300);
    const [prevPlanePos, setPrevPlanePos] = useState({ left: 885, top: 143 });
    let timer = 0;
    let _planePos;
    let _prevPlanePos;
    const getX = (time) => {
        return Math.max(880 - (time % (880 - 200)), 250);
    };
    const yOfX = (x) => {
        return 0.001 * x ** 2 - 1.273 * x + 485.84;
    };
    useEffect(() => {
        setInterval(() => {
            const currX = getX(timer);
            setPlanePos((pos) => {
                _prevPlanePos = pos;
                setPrevPlanePos(pos);
                const newPos = {
                    left: currX,
                    top: yOfX(currX),
                };
                _planePos = newPos;
                return newPos;
            });
            timer += 1;
            setPlaneRot(
                aTanIn360(
                    (_planePos.top - prevPlanePos.top) * 1.3,
                    prevPlanePos.left - _planePos.left
                )
            );
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
                    left: `${planePos.left}px`,
                    top: `${planePos.top}px`,
                    transform: `rotate(${-planeRot + 260}deg)`,
                }}>
                <Image src={planeImg} layout="fill" />
            </div>
        </div>
    );
};

export default Section1;
