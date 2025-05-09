import type { FC } from "react";
import styles from "./footer.module.css"
import logo from "../../assets/carlex.png"

const Footer: FC = () => {
    return <div className={`${styles.footer} sectionPadding`}>
        <div className={styles.footerHeading}>
            <h1 className="gradientText">Do you want to get involved with Carlex before others</h1>
        </div>
        <div className={styles.footerButton}>
            <p>Request Early Access</p>
        </div>

        <div className={styles.footerLinks}>
            <div className={styles.footerLinksLogo}>
                <img src={logo} alt="logo"/>
                <p>Uppsala SE &copy; 2025 All Rights Reserved</p>
            </div>
            <div className={styles.footerLinksDiv}>
                <h4>Links</h4>
                <p>Social Media</p>
                <p>Github</p>
                <p>Vanderguard</p>
                <p>Mirror</p>
            </div>
            <div className={styles.footerLinksDiv}>
                <h4>Company</h4>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
                <p>Contact</p>
            </div>
            <div className={styles.footerLinksDiv}>
                <h4>Get In Touch</h4>
                <p>Fakeadress B92 99484 SE Uppsala</p>
                <p>012-345 678</p>
                <p>info@carlex.com</p>
            </div>
        </div>
        <div className={styles.footerCopyright}>
            <p>&copy; 2025 All Rights Reserved</p>
        </div>
    </div>
}

export default Footer;