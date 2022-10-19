import Image from "next/image";
import styles from "./Story.module.css";
import grassImg from "../../public/grass.jpg";

const Story = () => {
    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <div className="row">
                    <div className={styles.img}>
                        <Image src={grassImg} layout="fill" />
                    </div>
                    <div className={styles.p1}>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Eaque quaerat ullam quisquam praesentium,
                            voluptatum voluptatem harum, tempora quibusdam at ex
                            expedita nesciunt animi unde distinctio, laboriosam
                            ea numquam ipsam natus! Sint sapiente officia, ad
                            dolorem
                        </p>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Eaque quaerat ullam quisquam praesentium,
                            voluptatum voluptatem harum, tempora quibusdam at ex
                            expedita nesciunt animi unde distinctio, laboriosam
                            ea numquam ipsam natus! Sint sapiente officia, ad
                            dolorem
                        </p>
                    </div>
                </div>

                <div className={styles.p2}>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Eaque quaerat ullam quisquam praesentium,
                        voluptatum voluptatem harum, tempora quibusdam at ex
                        expedita nesciunt animi unde distinctio, laboriosam ea
                        numquam ipsam natus! Sint sapiente officia, ad dolorem
                    </p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Eaque quaerat ullam quisquam praesentium,
                        voluptatum voluptatem harum, tempora quibusdam at ex
                        expedita nesciunt animi unde distinctio, laboriosam ea
                        numquam ipsam natus! Sint sapiente officia, ad dolorem
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Story;
