import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const MainLayout = () => {
    return (
        <div className="max-w-[1280px] mx-auto">
            <div className="bg-base-200 shadow-md sticky top-0 z-50">
            <Navbar></Navbar>
            </div>
            <div className="min-h-[415px] w-11/12 mx-auto">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;