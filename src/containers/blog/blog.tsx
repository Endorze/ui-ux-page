import type { FC } from "react";
import styles from "./blog.module.css"
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

const Blog: FC = () => {
    return <div className={`${styles.blog} sectionPadding`} id="blog">
        <div className={styles.blogHeading}>
            <h1 className="gradientText">
                A lot is happening, We are blogging about it.
            </h1>
        </div>
        <div className={styles.blogContainer}>
            <div className={styles.blogContainerGroupA}>
                <Article imgUrl={blog01} date="May 09, 2025" title="Breaking News -- I'm about to eat a chicken kebab tallrik and imma enjoy it, very mums."/>
            </div>
            <div className={styles.blogContainerGroupB}>
                <Article imgUrl={blog02} date="May 09, 2025" title="Breaking News -- I'm about to eat a chicken kebab tallrik and imma enjoy it, very mums."/>
                <Article imgUrl={blog03} date="May 09, 2025" title="Breaking News -- I'm about to eat a chicken kebab tallrik and imma enjoy it, very mums."/>
                <Article imgUrl={blog04} date="May 09, 2025" title="Breaking News -- I'm about to eat a chicken kebab tallrik and imma enjoy it, very mums."/>
                <Article imgUrl={blog05} date="May 09, 2025" title="Breaking News -- I'm about to eat a chicken kebab tallrik and imma enjoy it, very mums."/>
            </div>
        </div>
    </div>
}

export default Blog;