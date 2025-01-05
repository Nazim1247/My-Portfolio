import { FaAngleUp } from "react-icons/fa";
import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";


const Home = () => {
    return (
        <div>
           <div id="home"><Banner></Banner></div>
           <div id="about"><About></About></div>
           <div id="skills"><Skills></Skills></div>
           <div id="projects"><Projects></Projects></div>
           <div id="contact"><Contact></Contact></div>
           <a className="text-3xl flex justify-end mb-4 mr-4" href="#home"><FaAngleUp /></a>
        </div>
    );
};

export default Home;