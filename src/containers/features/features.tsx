import type { FC } from "react";
import styles from "./features.module.css"
import { Feature } from "../../components";



const featuresData = [
    {
        title: "Our Vision for Tomorrow",
        text: "We aim to redefine digital experiences through cutting-edge design, seamless performance, and future-ready technology."
    },
    {
        title: "Sustainable Growth",
        text: "By integrating scalable solutions and eco-friendly practices, we ensure long-term value for both clients and the planet."
    },
    {
        title: "Innovation at the Core",
        text: "We're committed to staying ahead by constantly exploring new technologies and evolving with market trends."
    },
    {
        title: "Empowering Businesses",
        text: "Through smart automation and tailored digital tools, we help businesses streamline operations and thrive in a connected world."
    },
];


const Features: FC = () => {
    return (
    <div className={`${styles.features} sectionPadding`} id="features">
        <div className={styles.featuresHeading}>
            <h1 className="gradientText">The future is here—it's time to embrace it. Step into tomorrow today and bring it to life.</h1>
            <p>Request early access to get started</p>
        </div>
        <div className={styles.featuresContainer}>
            {featuresData.map((data, index) => (
                <Feature title={data.title} text={data.text} key={index} horizonal/>
            ))}
        </div>
    </div>
    )
}

export default Features;