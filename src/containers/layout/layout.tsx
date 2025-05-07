import { Footer, Blog, Possibility, Features, Gpt, Header } from "../../containers";
import { Cta, Brand, Navbar } from "../../components";
import { Outlet } from "react-router-dom";


const Layout = () => {
    return (
        <div>
            <div className="gradientBg">
                <Navbar />
                <Header />
            </div>
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout;