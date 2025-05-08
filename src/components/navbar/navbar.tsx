import { useState, type FC } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import styles from "./navbar.module.css"
import logo from "../../assets/carlex.png"

const Menu: FC = () => {
    return (
        <>
            <p><a href="/">Home</a></p>
            <p><a href="/">Home</a></p>
            <p><a href="/">Home</a></p>
            <p><a href="/">Home</a></p>
            <p><a href="/">Home</a></p>
        </>
    )
}

const Navbar: FC = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className={styles.gptNavbar}>
            <div className={styles.gptNavbarLinks}>
                <div className={styles.gptNavbarLinksLogo}>
                    <img src={logo} alt="logo" />
                </div>
                <div className={styles.gptNavbarLinksContainer}>
                    <Menu />
                </div>
            </div>
            <div className={styles.gptNavbarSign}>
                <p>Sign in</p>
                <button type="button">Sign up</button>
            </div>
            <div className={styles.gptNavbarMenu}>
                {toggleMenu ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} /> : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <div className={`${styles.gptNavbarMenuContainer} scale-up-center`}>
                        <div className={styles.gptNavbarMenuContainerLinks}>
                            <Menu />
                        </div>
                        <div className={styles.gptNavbarMenuContainerLinksSign}>
                            <p>Sign in</p>
                            <button type="button">Sign up</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar;