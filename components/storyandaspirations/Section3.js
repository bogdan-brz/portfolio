import Image from "next/image";
import styles from "./Section3.module.css";
import battleshipsImg from "../../public/battleships-img.png";
import unityImg1 from "../../public/unity-img-1.png";
import unityImg2 from "../../public/unity-img-2.png";
import unityImg3 from "../../public/unity-img-3.png";
import unityImg4 from "../../public/unity-img-4.png";
import unityImg5 from "../../public/unity-img-5.png";
import pythonLogo from "../../public/python-logo.png";
import cSharpLogo from "../../public/c-sharp-logo.png";
import htmlCssJsLogo from "../../public/html-css-js-logos.png";
import reactJsLogo from "../../public/reactjs-logo.png";
import nextJsLogo from "../../public/nextjs-logo.png";
import tensorflowLogo from "../../public/tensorflow-logo.png";
import Carousel from "../ui/Carousel";
import AtributionOverlay from "../ui/AtributionOverlay";
import { useEffect, useState } from "react";

const pythonAtribLink = "https://www.python.org/community/logos/";
const cSharpAtribLink = "https://github.com/exercism/meta/issues/27";
const htmlCssJsAtribLlink = "https://www.freepnglogos.com/pics/html5-logo";
const reactJsAtribLink =
    "https://commons.wikimedia.org/wiki/File:React-icon.svg";
const nextJsAtribLink = "https://en.wikipedia.org/wiki/File:Nextjs-logo.svg";
const tensorflowAtribLink = "https://en.wikipedia.org/wiki/TensorFlow";

const Section3 = () => {
    const [carouselSize, setCarouselSize] = useState({ height: 0, width: 0 });
    useEffect(() => {
        if (window.innerWidth >= 3500) {
            setCarouselSize({ width: 396, height: 345.6 });
        } else if (window.innerWidth >= 2500) {
            setCarouselSize({ width: 396, height: 345.6 });
        } else {
            setCarouselSize({ width: 320, height: 288 });
        }
    }, []);
    return (
        <div className={styles.section3}>
            <div className={styles.row + " " + styles.row1}>
                <p className={styles.text1}>
                    I started playing around in Python when I was about 12 years
                    old. The most notable project of mine from that period was a
                    game of battleships played against the computer.
                </p>
                <div className={styles.img1}>
                    <Image src={battleshipsImg} layout="fill" />
                    <AtributionOverlay>
                        honest recollection of the game's visuals
                    </AtributionOverlay>
                </div>
                <div className={styles.logo1}>
                    <Image src={pythonLogo} layout="fill" />
                    <AtributionOverlay>
                        image from: <a href={pythonAtribLink}>python.org</a>
                    </AtributionOverlay>
                </div>
            </div>
            <div className={styles.row + " " + styles.row2}>
                <div className={styles.logo2}>
                    <Image src={cSharpLogo} layout="fill" />
                    <AtributionOverlay>
                        image from: <a href={cSharpAtribLink}>github.com</a>
                    </AtributionOverlay>
                </div>
                <Carousel
                    height={carouselSize.height}
                    width={carouselSize.width}
                    selfSliding={true}
                    slideSpeed={3000}
                    images={[
                        unityImg1,
                        unityImg2,
                        unityImg3,
                        unityImg4,
                        unityImg5,
                    ]}
                    attributions={[
                        "screenshot of my project in unity: modifiable terrain",
                        "screenshot of my project in unity: rugged terrain",
                        "screenshot of my project in unity: smooth terrain",
                        "screenshot of my project in unity: bird's eye view",
                        "screenshot of my project in unity: higher bird's eye view",
                    ]}
                />
                <p className={styles.text2}>
                    I then moved on to game-making with C# in the Unity game
                    engine. I was fascinated with the concept of terrain
                    generation and spent some time exploring it. Working in that
                    environment left me with a good understanding of
                    object-oriented programming.
                </p>
            </div>
            <div className={styles.row + " " + styles.row3}>
                <p className={styles.text3}>
                    At 16, I got into web development. I started out making
                    websites with plain HTML, CSS, and Javascript, then I picked
                    up ReactJs, and finally NextJs.
                </p>
                <div className={styles.logo3}>
                    <Image src={htmlCssJsLogo} layout="fill" />
                    <AtributionOverlay>
                        image from:{" "}
                        <a href={htmlCssJsAtribLlink}>freepnglogos.com</a>
                    </AtributionOverlay>
                </div>
                <div className={styles.logo4}>
                    <Image src={reactJsLogo} layout="fill" />
                    <AtributionOverlay>
                        image from: <a href={reactJsAtribLink}>wikipedia</a>
                    </AtributionOverlay>
                </div>
                <div className={styles.logo5}>
                    <Image src={nextJsLogo} layout="fill" />
                    <AtributionOverlay>
                        image from: <a href={nextJsAtribLink}>wikipedia</a>
                    </AtributionOverlay>
                </div>
            </div>
            <div className={styles.row + " " + styles.row4}>
                <div className={styles.logo6}>
                    <Image src={tensorflowLogo} layout="fill" />
                    <AtributionOverlay>
                        image from: <a href={tensorflowAtribLink}>wikipedia</a>
                    </AtributionOverlay>
                </div>
                <div className={styles.video}>
                    <video autoPlay muted controls>
                        <source src="/digits-video.mp4" />
                    </video>
                </div>
                <p className={styles.text4}>
                    More recently I took an interest in machine learning, so I
                    revived my python skills and worked through a few online
                    courses. My projects so far are implementations of basic
                    machine learning algorithms from scratch, and deep learning
                    networks in tensorflow.
                </p>
            </div>
        </div>
    );
};

export default Section3;
