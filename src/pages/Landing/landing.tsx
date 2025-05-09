import type { FC } from "react";
import styles from "./landing.module.css"
import { Blog, Possibility, Features, Gpt } from "../../containers"
import { Cta, Brand } from "../../components";

const Landing: FC = () => {
    return <div className={styles.App}>
        <Brand />
        <Gpt />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
    </div>
}

export default Landing;