import { Zoom } from "react-awesome-reveal";


const About = () => {
    return (
        <Zoom>
            <div className='text-center lg:w-2/3 mx-auto my-8 p-4'>
            <h2 className="text-3xl font-bold">About Me</h2>
            <p>Hi, I am Nazim Uddin! A passionate Frontend Developer who loves building modern, user-friendly web applications. My journey started with curiosity about web development, leading me to master React, Tailwind CSS, Node.js, and MongoDB.
            <span className="font-semibold italic">What I Love:</span> Creating interactive UI/UX designs, optimizing performance, and solving coding challenges.
            <span className="font-semibold italic">Beyond Code:</span> I enjoy playing sports, exploring design trends, and staying updated with new technologies.
            Passionate about turning ideas into reality through clean code and sleek designs!
            </p>
        </div>
        </Zoom>
    );
};

export default About;