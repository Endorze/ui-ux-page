import type { FC } from "react";
import styles from "./article.module.css"

type Props = {
    imgUrl: string,
    date: string,
    title: string,
}

const Article: FC<Props> = ({imgUrl, date, title}) => {
    return (
        <div className={styles.article}>
            <div className={styles.articleImage}>
                <img src={imgUrl} alt="blog image"/>
            </div>
            <div className={styles.articleContainer}>
                <div>
                    <p>{date}</p>
                    <h3>{title}</h3>
                </div>
                <p>Read Full Article</p>
            </div>
        </div>
    )
}

export default Article;