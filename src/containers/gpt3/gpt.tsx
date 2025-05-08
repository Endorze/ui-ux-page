import type { FC } from "react";
import styles from "./gpt.module.css"
import { Feature } from "../../components";

const Gpt: FC = () => {
    return <div className={`${styles.gpt} sectionMargin`} id="gpt">
        <div className={styles.gptFeature}>
            <Feature horizonal title="What is Carlex" text="Carlex is a design and consulting firm specializing in custom software development. We help businesses bring their ideas to life through clean code, smart architecture, and user-focused design. From concept to launch, our team offers expert guidance in web and app development, ensuring efficient..."/>
        </div>
        <div className={styles.gptHeading}>
            <h1 className="gradientText">Why did the chicken cross the road? --To get to the other side</h1>
            <p>Explore the Library</p>
        </div>
        <div className={styles.gptContainer}>
            <Feature title="Design" text="Our team excels in design, combining creativity with precision to deliver visually stunning and user-friendly solutions. Each member brings expert knowledge, attention to detail, and a passion..."/>
            <Feature title="UI/UX" text="Our team excels in UI/UX, crafting intuitive and engaging user experiences. With a deep understanding of user behavior and design principles, we create interfaces that are both visually appealing..."/>
            <Feature title="Education" text="Our developers have top-tier education, backed by degrees from leading institutions and hands-on experience. Their strong technical foundation ensures high-quality, efficient code and innovative..."/>
        </div>
    </div>
}

export default Gpt;