import styles from "./Experience.module.css";
import HomeBtn from "../ui/HomeBtn";
import Project from "./Project";

const Experience = () => {
    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <HomeBtn color="rgb(0, 0, 0" hoverColor="rgb(0, 0, 255)" />
                <h1 className={styles.title}>Web Development Projects</h1>
                <div className="column">
                    <Project
                        name="This Portfolio"
                        date="10/28/2022"
                        githubLink="https://github.com/bogdan-brz/portfolio"
                        projectLink=""
                        deployLink="">
                        <p>
                            This Portfolio was made in NextJs. I made it for the
                            purpose of showcasing my web development ability
                            when looking for an internship. I utilized
                            react-fontawesome for the home icon, and
                            react-transition-group for some animations, but
                            other than than everything was made from scratch -
                            no component libraries used.
                        </p>
                    </Project>
                    <Project
                        name="JobFOMO - school project"
                        date="04/07/2022"
                        githubLink="https://github.com/bogdan-brz/jobfomo"
                        projectLink=""
                        deployLink="">
                        <p>
                            I made this website for a project in business class.
                            It was a website for people to sign up to (students
                            and businesses) for the purpose of our business. It
                            was made with EJS, CSS, and Javascript on the front
                            end, and an ExpressJs server on the back. I hosted
                            it on AWS lightsail with its own domain:{" "}
                            <i>jobfomo.com</i>. It featured an elaborate admin
                            panel, that was only accessible to me and my
                            "collegues". It was connected to a database, and
                            allowed us to send emails to students that signed up
                            from a google workspace email I created (I used
                            nodemailer on the server to send those emails).
                        </p>
                    </Project>
                    <Project
                        name="Pierogi restaurant website"
                        date="10/08/2022"
                        githubLink="https://github.com/bogdan-brz/restaurant-website"
                        projectLink=""
                        deployLink="">
                        <p>
                            This project is a restaurant website in a polish
                            style. It has the front-end features of a typical
                            restaurant, like online order. It is made in NextJs.
                        </p>
                    </Project>
                    <Project
                        name="Small e-commerce store"
                        date="10/11/2022"
                        githubLink="https://github.com/bogdan-brz/small-store-website"
                        projectLink=""
                        deployLink="">
                        <p>
                            This small e-commerce store is a website for a small
                            business that wants to move online. It has a
                            functional cart, image carousel, and original
                            layout. It is made in NextJs.
                        </p>
                    </Project>
                    <Project
                        name="Doodle-jump-like game for my girlfriend"
                        date="10/20/2022"
                        githubLink=""
                        projectLink="https://murmuring-mesa-01288.herokuapp.com/"
                        deployLink="">
                        <p>
                            This is a small game I made for my girlfriend (she
                            helped me with the drawings). Check out the link to
                            the right to see what's it's all about. I made it in
                            plain HTML, CSS, and Javascript. I utilized some
                            concepts like object-oriented-programming, which I
                            picked up making games in unity.
                        </p>
                    </Project>
                    <Project
                        name="Aptly Setup"
                        date="09/13/2022"
                        githubLink="https://github.com/bogdan-brz/my-aptly-setup"
                        projectLink=""
                        deployLink="">
                        <p>
                            This is my first project in NextJs. It's a website
                            that lists project-templates (I made a few myself
                            for the purpose of the project). It's main feature
                            is nice UI in the <i>select</i> tab.
                        </p>
                    </Project>
                </div>
                <h1 className={styles.title}>Machine Learning Projects</h1>
                <div className="column">
                    <h3 className={styles.disclaimer}>
                        Next 4 projects revolve around digit recognition, and
                        they build on each other
                    </h3>
                    <Project
                        name="Digit Recognition - annotation"
                        date="09/13/2022"
                        githubLink="https://github.com/bogdan-brz/browser-hand-digits-annotation"
                        projectLink=""
                        deployLink="">
                        <p>
                            This is not exactly my project, rather an annotation
                            of a working project I was trying to recreate. I
                            include it here, because it took time and effort to
                            complete, and left me understanding important
                            concepts for datascience in Javascript (ex.
                            DataBuffers)
                        </p>
                    </Project>
                    <Project
                        name="Digit Recognition in NodeJs"
                        date="09/13/2022"
                        githubLink="https://github.com/bogdan-brz/handwritten-digit-recognition-nodejs"
                        projectLink=""
                        deployLink="">
                        <p>
                            This project trains a neaural network server-side in
                            NodeJs to recognize handwritten digits. The server
                            serves a simple website with a canvas where you can
                            draw your own digits and check whether the network
                            recognizes them correctly. I used tensorflowjs for
                            creating the neural network.
                        </p>
                    </Project>
                    <Project
                        name="Digit Recognition in Python exported to NodeJs"
                        date="09/13/2022"
                        githubLink="https://github.com/bogdan-brz/python-to-nodejs-mnist"
                        projectLink=""
                        deployLink="">
                        <p>
                            In this project I trained a neural network in python
                            in tensorflow, and then exported the trained model
                            to tensorflowjs. From there it was the same project
                            as the previous.
                        </p>
                    </Project>
                    <Project
                        name="Digit Recognition in Python exported to Javascript (in the browser)"
                        date="09/13/2022"
                        githubLink="https://github.com/bogdan-brz/python-to-nodejs-mnist"
                        projectLink=""
                        deployLink="">
                        <p>
                            In this project I used the same model I trained in
                            Python, but this time exported it and used it in
                            tensorflowjs in the browser. Since it is in the
                            browser, I didn't need to have an ExpressJs server
                            (used the chrome app web server instead.)
                        </p>
                    </Project>
                </div>
            </div>
        </div>
    );
};

export default Experience;
