import type { FC } from "react";
import styles from "./possibility.module.css"
import img from "../../assets/possibility.png"

const Possibility: FC = () => {
return <div className={`${styles.possibility} sectionPadding`} id="possibility">
        <div className={styles.possibilityImage}>
            <img src={img} alt="image"/>
        </div>
        <div className={styles.possibilityContent}>
            <h4>Request early access to Get Started</h4>
            <h1 className="gradientText">
                The possibilities are beyond our Imagination
            </h1>
            <p>At Carlex, we see beyond limits. By merging creativity with technology, we shape a future full of potential—where today's ideas evolve into tomorrow's breakthroughs. The impossible starts here.</p>
            <h4>Request early access to Get Started</h4>
        </div>
    </div>
}

export default Possibility;