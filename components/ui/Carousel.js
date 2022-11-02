import Image from "next/image";
import styles from "./Carousel.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Transition } from "react-transition-group";
import AtributionOverlay from "./AtributionOverlay";

const Carousel = (props) => {
    const [currCarouselIndex, setCurrCarouselIndex] = useState(0);
    const [slideTimeout, setSlideTimeout] = useState(null);
    const carouselForward = () => {
        let newId;
        setCurrCarouselIndex((id) => {
            newId = id;
            if (id == props.images.length - 1) newId = 0;
            else newId++;
            return newId;
        });
        if (props.notify) props.notify(newId);
    };
    const carouselBackward = () => {
        let newId;
        setCurrCarouselIndex((id) => {
            newId = id;
            if (id == 0) newId = 4;
            else newId--;
            return newId;
        });
        if (props.notify) props.notify(newId);
    };
    const carouselSlideTimeout = () => {
        setSlideTimeout(
            setTimeout(() => {
                carouselForward();
                carouselSlideTimeout();
            }, props.slideSpeed)
        );
    };
    useEffect(() => {
        if (props.selfSliding) carouselSlideTimeout();
    }, []);
    return (
        <div
            className={styles.carousel}
            style={{ height: props.height, width: props.width }}>
            <div className={styles.leftArrow}>
                <FontAwesomeIcon
                    onClick={() => {
                        carouselBackward();
                        clearTimeout(slideTimeout);
                        if (props.selfSliding)
                            setSlideTimeout(
                                setTimeout(() => {
                                    carouselSlideTimeout();
                                }, 7000)
                            );
                    }}
                    icon={faArrowLeft}
                />
            </div>
            <div className={styles.images}>
                {props.images.map((image, i) => (
                    <Transition
                        key={i}
                        in={currCarouselIndex == i}
                        timeout={500}>
                        {(state) => (
                            <div
                                className={`${styles.carouselImg} ${styles[state]}`}>
                                <Image
                                    height={props.height + "px"}
                                    width={
                                        (image.width / image.height) *
                                            props.height +
                                        "px"
                                    }
                                    src={image.src}
                                />
                                <AtributionOverlay>
                                    {props.attributions[i]}
                                </AtributionOverlay>
                            </div>
                        )}
                    </Transition>
                ))}
            </div>
            <div className={styles.rightArrow}>
                <FontAwesomeIcon
                    onClick={() => {
                        carouselForward();
                        clearTimeout(slideTimeout);
                        if (props.selfSliding)
                            setSlideTimeout(
                                setTimeout(() => {
                                    carouselSlideTimeout();
                                }, 7000)
                            );
                    }}
                    icon={faArrowRight}
                />
            </div>
            <div className={styles.dotBar}>
                {props.images.map((image, i) => (
                    <div
                        key={i}
                        className={`${styles.dot} ${
                            currCarouselIndex == i ? styles.active : ""
                        }`}></div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
