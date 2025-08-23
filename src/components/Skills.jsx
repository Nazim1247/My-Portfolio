import { DiMongodb } from "react-icons/di";
import { FaFire, FaGitAlt, FaGithub, FaNodeJs } from "react-icons/fa";
import { FaCss3Alt, FaHtml5, FaJs, FaReact } from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiNetlify } from "react-icons/si";
import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.avif';
import img3 from '../assets/img3.jpeg';
import img4 from '../assets/img4.jpg';
import { Zoom } from "react-awesome-reveal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 


const Skills = () => {
    const settings = {
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1, }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 1, }
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 1, }
      },
    ]
  };
    return (
        
    <div className="">

    <div className="text-center mx-auto">
    <h2 className="text-3xl font-bold text-green-500">My Skills</h2>
    <div className="mt-8 text-3xl">
    <Slider {...settings}>

      <div className="px-2">
        <div className="shadow w-full text-center py-4 rounded-lg dark:bg-gray-800 hover:scale-110 transition bg-gray-200">
          <a className="text-orange-500 text-7xl" href="https://html.com/"><FaHtml5 className="mx-auto"/></a>
          <h3>HTML</h3>
        </div>
      </div>

      <div className="px-2">
        <div className="shadow text-center w-full py-4 rounded-lg dark:bg-gray-800 hover:scale-110 transition bg-gray-200">
          <a className="text-yellow-400 text-7xl" href="https://www.w3schools.com/css/"><FaCss3Alt className="mx-auto"/></a>
          <h3>CSS</h3>
        </div>
      </div>

      <div className="lg:px-2">
        <div className="shadow text-center w-full py-4 rounded-lg dark:bg-gray-800 hover:scale-110 transition bg-gray-200">
          <a className="text-blue-500 text-7xl" href="https://tailwindcss.com/"><RiTailwindCssFill className="mx-auto"/></a>
          <h3>Tailwind CSS</h3>
        </div>
      </div>

      <div className="px-2">
        <div className="shadow text-center w-full py-4 rounded-lg dark:bg-gray-800 hover:scale-110 transition bg-gray-200">
          <a className="text-yellow-500 text-7xl" href="https://www.javascripttutorial.net/"><FaJs className="mx-auto"/></a>
          <h3>Javascript</h3>
        </div>
      </div>

      <div className="px-2">
        <div className="shadow text-center w-full py-4 rounded-lg dark:bg-gray-800 hover:scale-110 transition bg-gray-200">
          <a className="text-blue-500 text-7xl" href="https://react.dev/reference/react"><FaReact className="mx-auto"/></a>
          <h3>React</h3>
        </div>
      </div>

      <div className="px-2">
        <div className="shadow text-center w-full py-4 rounded-lg dark:bg-gray-800 hover:scale-110 transition bg-gray-200">
          <a className="text-7xl" href="https://www.netlify.com/"><SiExpress className="mx-auto"/></a>
          <h3>ExpressJS</h3>
        </div>
      </div>

      <div className="px-2">
        <div className="shadow text-center w-full py-4 rounded-lg dark:bg-gray-800 hover:scale-110 transition bg-gray-200">
          <a className="text-green-500 text-7xl" href="https://www.w3schools.com/nodejs/"><FaNodeJs className="mx-auto"/></a>
          <h3>NodeJS</h3>
        </div>
      </div>

      <div className="px-2">
        <div className="shadow text-center w-full py-4 rounded-lg dark:bg-gray-800 hover:scale-110 transition bg-gray-200">
          <a className="text-green-500 text-7xl" href="https://www.mongodb.com/"><DiMongodb className="mx-auto"/></a>
          <h3>MongoDB</h3>
        </div>
      </div>

      <div className="px-2">
        <div className="shadow text-center w-full py-4 rounded-lg dark:bg-gray-800 hover:scale-110 transition bg-gray-200">
          <a className="text-7xl" href="https://nextjs.org/"><RiNextjsFill className="mx-auto"/></a>
          <h3>Next.js</h3>
        </div>
      </div>

      <div className="px-2">
        <div className="shadow text-center w-full py-4 rounded-lg dark:bg-gray-800 hover:scale-110 transition bg-gray-200">
          <a className="text-orange-500 text-7xl" href="https://firebase.google.com/"><FaFire className="mx-auto"/></a>
          <h3>Firebase</h3>
        </div>
      </div>

      <div className="px-2">
        <div className="shadow text-center w-full py-4 rounded-lg dark:bg-gray-800 hover:scale-110 transition bg-gray-200">
          <a className="text-7xl" href="https://www.w3schools.com/git/git_intro.asp?remote=github"><FaGithub className="mx-auto"/></a>
          <h3>GitHub</h3>
        </div>
      </div>

      <div className="px-2">
        <div className="shadow text-center w-full py-4 rounded-lg dark:bg-gray-800 hover:scale-110 transition bg-gray-200">
          <a className="text-orange-500 text-7xl" href="https://www.w3schools.com/git/git_intro.asp?remote=github"><FaGitAlt className="mx-auto"/></a>
          <h3>Git</h3>
        </div>
      </div>

      <div className="px-2">
        <div className="shadow text-center w-full py-4 rounded-lg dark:bg-gray-800 hover:scale-110 transition bg-gray-200">
          <a className="text-green-500 text-7xl" href="https://www.w3schools.com/git/git_intro.asp?remote=github"><SiNetlify className="mx-auto"/></a>
          <h3>Netlify</h3>
        </div>
      </div>

    </Slider>
    </div>
    </div>


        <Zoom>
        <div className="text-center mt-8">
            <h2 className="text-3xl font-bold text-green-500">Others Skills</h2>
            <p>In addition to frontend development, I possess a diverse set of skills, including expertise in UI/UX design, ensuring that every interface is intuitive and engaging. I am also proficient in web performance optimization, ensuring fast loading times and smooth interactions, enhancing the overall user experience. My focus is always on delivering high-quality, responsive designs that work seamlessly across devices and platforms.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 mt-6">
            <div className="flex flex-col md:flex-row items-center gap-4 shadow p-2 rounded-md dark:bg-gray-800 bg-gray-200 hover:scale-105 
                transition">
                <img className="md:w-48 rounded-lg" src={img1} alt="" />
                <div>
                    <h2 className="text-xl font-semibold mb-2">Frontend Developer</h2>
                    <p>A Frontend Developer specializes in building the visual and interactive aspects of websites and applications. They work with technologies like HTML, CSS, and JavaScript to create user-friendly interfaces, ensuring that the design is both functional and visually appealing.</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 shadow p-2 rounded-md dark:bg-gray-800 bg-gray-200 hover:scale-105 
                transition">
                <img className="md:w-48 rounded-lg" src={img2} alt="" />
                <div>
                    <h2 className="text-xl font-semibold mb-2">UI/UX Design</h2>
                    <p>UI/UX Design focuses on creating intuitive, user-centered designs for digital products. UI (User Interface) involves designing the visual elements, such as buttons, layouts, and typography, while UX (User Experience) ensures that the overall interaction is smooth, engaging.</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 shadow p-2 rounded-md dark:bg-gray-800 bg-gray-200 hover:scale-105 
                transition">
                <img className="md:w-48 rounded-lg" src={img3} alt="" />
                <div>
                    <h2 className="text-xl font-semibold mb-2">Responsive Design</h2>
                    <p>Responsive Design is an approach to web design that ensures a website looks and functions well across all devices, from desktops to smartphones. It uses flexible layouts, images, and CSS media queries to adjust the content and design based on the screen size and resolution.</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 shadow p-2 rounded-md dark:bg-gray-800 bg-gray-200 hover:scale-105 
                transition">
                <img className="md:w-48 rounded-lg" src={img4} alt="" />
                <div>
                    <h2 className="text-xl font-semibold mb-2">Web Performance Optimization</h2>
                    <p>Web Performance Optimization involves improving the speed and efficiency of a website to provide a faster, smoother user experience. It includes techniques like reducing page load times, compressing images, minimizing code, and leveraging caching to ensure that the website loads quickly and performs well on all devices and network conditions.</p>
                </div>
            </div>
        </div>
        </Zoom>
        </div>
    );
};

export default Skills;