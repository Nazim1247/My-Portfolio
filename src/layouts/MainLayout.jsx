import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const MainLayout = () => {
    return (
        <div className="max-w-[1280px] mx-auto bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
            <div className="bg-primary text-gray-200 shadow-md sticky top-0 z-50 w-full">
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