import type { FC } from "react";
import styles from "./cta.module.css"

const Cta: FC = () => {
    return (
        <div className={styles.cta}>
            <div className={styles.ctaContent}>
                <p>
                    Request early access to get started.
                </p>
                <h3>Get early Access and be part of Shaping the Future with Carlex</h3>
            </div>
            <div className={styles.ctaButton}>
                <button type="button">Get Started</button>
            </div>

        </div>
    )
}

export default Cta;