
import { FaArrowRightLong } from 'react-icons/fa6';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import { Link } from 'react-router-dom';
import { Zoom } from 'react-awesome-reveal';

const Projects = () => {
    return (
        <Zoom>
            <div className='mt-8'>
            <h2 className='text-3xl font-bold text-center py-4'>My Projects</h2>
            <div className='md:flex items-center gap-6 justify-center'>
            <div>
            <img className='lg:w-full md:w-56 p-4' src={project1} alt="" />
            <p className='text-center'><Link to='/projectDetails' className='btn btn-primary' href="">View Details <FaArrowRightLong /></Link></p>
            </div>
            <div>
            <img className='lg:w-full md:w-56 p-4' src={project2} alt="" />
            <p className='text-center'><Link to='/project2Details' className='btn btn-primary' href="">View Details <FaArrowRightLong /></Link></p>
            </div>
            <div>
            <img className='lg:w-full md:w-56 p-4' src={project3} alt="" />
            <p className='text-center'><Link to='/project3Details' className='btn btn-primary' href="">View Details <FaArrowRightLong /></Link></p>
            </div>
        </div>
        </div>
        </Zoom>
    );
};

export default Projects;