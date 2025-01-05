import { FaFacebook, FaGithub, FaYoutube } from 'react-icons/fa';
import image from '../assets/img.jpg';

const Banner = () => {
    return (
        <div>
            <div className="hero lg:w-3/4 mx-auto">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={image}
      className="lg:w-96 rounded-lg" />
    <div>
        <p>Hi I am Nazim Uddin</p>
      <h1 className="text-3xl font-bold">Frontend Developer</h1>
      <p className="py-6">
      A Frontend Developer specializes in creating the visual and interactive elements of a website or application. They use languages like HTML, CSS, and JavaScript, along with frameworks and libraries such as React, Angular, or Vue.js, to design user interfaces (UI) and ensure seamless user experiences (UX). Their work involves optimizing performance, ensuring cross-browser compatibility, and collaborating with designers and backend developers to bring digital products to life.
      </p>
      <div className='flex items-center gap-3 text-3xl mb-6'>
        <a href="https://github.com/Nazim1247"><FaGithub /></a>
        <a className='text-blue-500' href="https://web.facebook.com/hm.nazim.uddin.86882?rdid=agS7SqQb8EJgkEO6&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F1BPK8VijLn%2F%3F_rdc%3D1%26_rdr"><FaFacebook /></a>
        <a className='text-red-500' href="https://youtube.com/@najimuddin-cv5eb?si=_8af_dlegJFyWeNJ"><FaYoutube /></a>
      </div>
      <a href="https://docs.google.com/document/d/1VQ7nFEn27QH6-mBFwsVJwLJhCM40OnjVh3ofymu5IuM/edit?usp=sharing"><button className="btn btn-primary">Download Resume</button></a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;