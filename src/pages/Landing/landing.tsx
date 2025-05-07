import type { FC } from "react";
import styles from "./landing.module.css"
import { Footer, Blog, Possibility, Features, Gpt, Header } from "../../containers"
import { Cta, Brand, Navbar } from "../../components";

const Landing: FC = () => {
    return <div className={styles.App}>
        <Brand />
        <Gpt />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
    </div>
}

export default Landing;