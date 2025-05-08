import type { FC } from "react";
import styles from "./header.module.css"
import people from "../../assets/people.png"
import ai from "../../assets/ai.png"

const Header: FC = () => {
    return <div className={`${styles.header} sectionPadding`} id="home">
        <div className={styles.headerContent}>
            <h1 className="gradientText">
                Let's build something amazing with Alexander Hallgren
            </h1>
            <p>Discover your true potential – take the first step toward the future you’ve always imagined. Be bold, embrace growth, and let nothing hold you back. This is your moment to shine. Start your journey today, because every great transformation begins with one small, yet powerful decision. The time is now.</p>
            <div className={styles.headerContentInput}>
                <input type="email" placeholder="Your Email Adress" />
                <button type="button">Get Started</button>
            </div>
            <div className={styles.headerContentPeople}>
                <img src={people} alt="people" />
                <p>1.600 people requested access to visit in the last 24 hours</p>
            </div>
        </div>
        <div className={styles.headerImage}>
            <img src={ai} alt="ai image" />
        </div>
    </div>
}

export default Header;