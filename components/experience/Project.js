import styles from "./Project.module.css";

const Project = (props) => {
    const { name, githubLink, projectLink, deployLink } = props;
    return (
        <div className={styles.project}>
            <div className="row">
                <div className={"column " + styles.left}>
                    <h2 className={styles.projectTitle}>{name}</h2>
                    {props.children}
                </div>
                <div className={"column " + styles.right}>
                    {projectLink && (
                        <div className={styles.linkContainer}>
                            <h5 className={styles.linkTitle}>
                                Link to deployed project:
                            </h5>
                            <a className={styles.link} href={projectLink}>
                                {projectLink}
                            </a>
                        </div>
                    )}
                    {githubLink && (
                        <div className={styles.linkContainer}>
                            <h5 className={styles.linkTitle}>
                                Link to the project's github repository:
                            </h5>
                            <a className={styles.link} href={githubLink}>
                                {githubLink}
                            </a>
                        </div>
                    )}
                    {deployLink && (
                        <div className={styles.linkContainer}>
                            <h5 className={styles.linkTitle}>
                                Deploy this project here:
                            </h5>{" "}
                            <a className={styles.link} href={deployLink}>
                                {deployLink}
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Project;
