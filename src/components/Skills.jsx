import { DiMongodb } from "react-icons/di";
import { FaFire, FaGithub, FaNodeJs } from "react-icons/fa";
import { FaCss3Alt, FaHtml5, FaJs, FaReact } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNetlify } from "react-icons/si";
import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.avif';
import img3 from '../assets/img3.jpeg';
import img4 from '../assets/img4.jpg';
import { Zoom } from "react-awesome-reveal";


const Skills = () => {
    return (
        <Zoom>
            <div className="">
            <div className="text-center lg:w-2/3 mx-auto p-4">
            <h2 className="text-3xl font-bold">Skills</h2>
            <p>Expert in crafting responsive, user-friendly web interfaces using modern technologies like React, JavaScript, and CSS, with a focus on delivering seamless user experiences.</p>
        <div className="grid grid-cols-5 gap-6 mt-8 md:ml-12 text-3xl">
            <a className="text-orange-500" href="https://html.com/"><FaHtml5 /></a>
            <a className="text-yellow-400" href="https://www.w3schools.com/css/"><FaCss3Alt /></a>
            <a className="text-blue-500" href="https://tailwindcss.com/"><RiTailwindCssFill /></a>
            <a className="text-green-500" href="https://www.netlify.com/"><SiNetlify /></a>
            <a className="text-yellow-500" href="https://www.javascripttutorial.net/"><FaJs /></a>
            <a className="text-blue-500" href="https://react.dev/reference/react"><FaReact /></a>
            <a className="text-green-500" href="https://www.w3schools.com/nodejs/"><FaNodeJs /></a>
            <a className="text-green-500" href="https://www.mongodb.com/"><DiMongodb /></a>
            <a className="text-orange-500" href="https://firebase.google.com/"><FaFire /></a>
            <a href="https://www.w3schools.com/git/git_intro.asp?remote=github"><FaGithub /></a>
        </div>
        </div>
        <div className="text-center mt-8 lg:w-2/3 mx-auto p-4">
            <h2 className="text-3xl font-bold">Others Skills</h2>
            <p>In addition to frontend development, I possess a diverse set of skills, including expertise in UI/UX design, ensuring that every interface is intuitive and engaging. I am also proficient in web performance optimization, ensuring fast loading times and smooth interactions, enhancing the overall user experience. My focus is always on delivering high-quality, responsive designs that work seamlessly across devices and platforms.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-4 p-4">
            <div className="flex flex-col md:flex-row items-center gap-4 border shadow p-2 rounded-md">
                <img className="md:w-48" src={img1} alt="" />
                <div>
                    <h2 className="text-xl font-semibold mb-2">Frontend Developer</h2>
                    <p>A Frontend Developer specializes in building the visual and interactive aspects of websites and applications. They work with technologies like HTML, CSS, and JavaScript to create user-friendly interfaces, ensuring that the design is both functional and visually appealing.</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 border shadow p-2 rounded-md">
                <img className="md:w-48" src={img2} alt="" />
                <div>
                    <h2 className="text-xl font-semibold mb-2">UI/UX Design</h2>
                    <p>UI/UX Design focuses on creating intuitive, user-centered designs for digital products. UI (User Interface) involves designing the visual elements, such as buttons, layouts, and typography, while UX (User Experience) ensures that the overall interaction is smooth, engaging.</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 border shadow p-2 rounded-md">
                <img className="md:w-48" src={img3} alt="" />
                <div>
                    <h2 className="text-xl font-semibold mb-2">Responsive Design</h2>
                    <p>Responsive Design is an approach to web design that ensures a website looks and functions well across all devices, from desktops to smartphones. It uses flexible layouts, images, and CSS media queries to adjust the content and design based on the screen size and resolution.</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 border shadow p-2 rounded-md">
                <img className="md:w-48" src={img4} alt="" />
                <div>
                    <h2 className="text-xl font-semibold mb-2">Web Performance Optimization</h2>
                    <p>Web Performance Optimization involves improving the speed and efficiency of a website to provide a faster, smoother user experience. It includes techniques like reducing page load times, compressing images, minimizing code, and leveraging caching to ensure that the website loads quickly and performs well on all devices and network conditions.</p>
                </div>
            </div>
        </div>
        </div>
        </Zoom>
    );
};

export default Skills;