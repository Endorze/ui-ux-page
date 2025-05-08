import { Footer, Header } from "../../containers";
import { Navbar } from "../../components";
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