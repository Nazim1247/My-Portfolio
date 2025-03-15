import { Zoom } from "react-awesome-reveal";


const About = () => {
    return (
        <Zoom>
            <div className='text-center lg:w- mx-auto my-8'>
            <h2 className="text-3xl font-bold">About Me</h2>
            <p><span className="font-semibold text-lg">Hi, I am Nazim Uddin! </span>
            I am a passionate Frontend Developer who loves building modern, user-friendly, and efficient web applications. My journey began with a deep curiosity about web development, which led me to master React, Tailwind CSS, Node.js, and MongoDB. Over time, I have honed my skills in creating seamless user experiences, writing clean, maintainable code, and building scalable web solutions.
            <br />
            <span className="font-semibold text-lg"> What I Love: </span> I thrive on designing interactive UI/UX, optimizing application performance, and tackling challenging coding problems. I enjoy exploring new technologies, frameworks, and best practices to enhance my development workflow and create high-quality applications.
            <br />
            <span className="font-semibold text-lg"> Beyond Code: </span> Outside of programming, I have a passion for sports, exploring design trends, and staying updated with the latest advancements in web development. I believe in continuous learning and love turning creative ideas into reality through clean code and sleek, responsive designs.

           I’m always open to exciting projects, collaboration, and learning opportunities—let’s connect and build something amazing!
           </p>
        </div>
        </Zoom>
    );
};

export default About;