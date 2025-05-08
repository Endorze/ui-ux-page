import type { FC } from "react";
import styles from "./feature.module.css"

type Props = {
    title: string,
    text: string,
    horizonal?: true
}

const Feature: FC<Props> = ({title, text, horizonal}) => {
    return (
        <div className={[styles.featureContainer, horizonal && styles.featureContainerHorizontal].join(' ')}>
            <div className={styles.featureContainerTitle}>
                <div />
                <h1>{title}</h1>
            </div>
            <div className={styles.featureContainerText}>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Feature;