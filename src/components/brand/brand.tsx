import type { FC } from "react";
import styles from "./brand.module.css"
import { atlassian, google, slack, shopify, dropbox } from "./imports";

const Brand: FC = () => {
    return (
        <div className={`${styles.brand} sectionPadding`}>
            <div>
                <img src={google}/>
            </div>
            <div>
                <img src={slack}/>
            </div>
            <div>
                <img src={atlassian}/>
            </div>
            <div>
                <img src={shopify}/>
            </div>
            <div>
                <img src={dropbox}/>
            </div>
        </div>
    )
}

export default Brand;