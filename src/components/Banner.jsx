import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import image from '../assets/img.jpg';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';

const Banner = () => {
    return (
        <div>
            <Zoom>
            <div className=" ">
  <div className="flex flex-col lg:flex-row-reverse p-4">
    <img
      src={image}
      className="w-60 h-60 md:w-96 md:h-96 mx-auto rounded-full animate-pulse" />
    <div className='lg:w-4/6 p-2'>
    <Slide>
    <p className='text-green-500 text-xl'>Hi I am Nazim Uddin</p>
      <h1 className="text-2xl md:text-3xl font-bold">Frontend Developer</h1>
      </Slide>
      <Fade className='text-purple-600 text-sm md:text-xl' delay={1e3} cascade damping={1e-1}>
      Web Developer, Full Stack Developer
      </Fade>
      <p className="py-4">
      A Frontend Developer specializes in creating the visual and interactive elements of a website or application. They use languages like HTML, CSS, and JavaScript, along with frameworks and libraries such as React, Angular, or Vue.js, to design user interfaces (UI) and ensure seamless user experiences (UX). Their work involves optimizing performance, ensuring cross-browser compatibility, and collaborating with designers and backend developers to bring digital products to life.
      </p>      <div className='flex items-center gap-3 text-3xl mb-4'>
        <a href="https://github.com/Nazim1247"><FaGithub /></a>
        <a className='text-blue-500' href="https://www.linkedin.com/in/hm-nazim-uddin"><FaLinkedin /></a>
        <a className='text-blue-500' href="https://web.facebook.com/hm.nazim.uddin.86882?rdid=agS7SqQb8EJgkEO6&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F1BPK8VijLn%2F%3F_rdc%3D1%26_rdr"><FaFacebook /></a>
        <a className='text-red-500' href="https://youtube.com/@najimuddin-cv5eb?si=_8af_dlegJFyWeNJ"><FaYoutube /></a>
      </div>
      <a href="https://drive.google.com/uc?export=download&id=1tB7HYhOpPPAaDWW-2epgTZR9E1G0jY0R"><button className="btn btn-primary animate-pulse">Download Resume</button></a>
    </div>
  </div>
</div>
            </Zoom>
        </div>
    );
};

export default Banner;