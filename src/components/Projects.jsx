
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
            <div className='flex flex-col lg:flex-row items-center gap-6 justify-center'>

            <div className='space-y-4 bg-gray-200 dark:bg-gray-800 shadow p-4 rounded-lg hover:scale-110 transition'>
            <h2 className='text-xl font-bold text-center'>Dream House</h2>

            <a href="https://assignment-12-2f479.web.app"><img title='Click to view live site' className='rounded-lg' src={project3} alt="" /></a>

            <div className='flex justify-center items-center gap-4'>
            <p className=''><Link to='/project3Details' className='btn btn-sm btn-primary' href="">Details</Link></p>
            <a href="https://assignment-12-2f479.web.app"><button className='btn btn-sm btn-primary'>Live Link</button></a>
            <a href="https://github.com/Nazim1247/Assignment-12-client"><button className='btn btn-sm btn-primary'>Github Link</button></a>
            </div>
            </div>
            
            <div className='space-y-4 bg-gray-200 dark:bg-gray-800 shadow p-4 rounded-lg hover:scale-110 transition'>
            <h2 className='text-xl font-bold text-center'>Online Tutor Booking Platform</h2>

            <a href="https://assignment-11-6b184.web.app"><img title='Click to view live site' className='rounded-lg' src={project1} alt="" /></a>

            <div className='flex justify-center items-center gap-4'>
            <p className=''><Link to='/projectDetails' className='btn btn-sm btn-primary' href="">Details</Link></p>
            <a href="https://assignment-11-6b184.web.app"><button className='btn btn-sm btn-primary'>Live Link</button></a>
            <a href="https://github.com/Nazim1247/Assignment-11-client"><button className='btn btn-sm btn-primary'>Github Link</button></a>
            </div>
            </div>
            <div className='space-y-4 bg-gray-200 dark:bg-gray-800 shadow p-4 rounded-lg hover:scale-110 transition'>
            <h2 className='text-xl font-bold text-center'>Sport Equipment Online Store</h2>

            <a href="https://my-assignment-10-7291e.web.app"><img title='Click to view live site' className='rounded-lg' src={project2} alt="" /></a>

            <div className='flex justify-center items-center gap-4'>
            <p className=''><Link to='/project2Details' className='btn btn-sm btn-primary' href="">Details</Link></p>
            <a href="https://my-assignment-10-7291e.web.app"><button className='btn btn-sm btn-primary'>Live Link</button></a>
            <a href="https://github.com/Nazim1247/Assignment-10-client"><button className='btn btn-sm btn-primary'>Github Link</button></a>
            </div>
            </div>
            
        </div>
        </div>
        </Zoom>
    );
};

export default Projects;