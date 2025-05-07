import type { FC } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import styles from "./navbar.module.css"
import logo from "../../assets/carlex.png"

const Navbar = () => {
    return (
        <div className={styles.gptNavbar}>
            <div className={styles.gptNavbarLinks}>
                <div className={styles.gptNavbarLinksLogo}>
                    <img src={logo} alt="logo"/> 
                </div>
                <div className={styles.gptNavbarLinksContainer}>
                    <p><a href="/">Home</a></p>
                    <p><a href="/">Home</a></p>
                    <p><a href="/">Home</a></p>
                    <p><a href="/">Home</a></p>
                    <p><a href="/">Home</a></p>
                </div>
            </div>
        </div>
    )
}

export default Navbar;