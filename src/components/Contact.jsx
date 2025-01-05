
import { Zoom } from 'react-awesome-reveal';
import image from '../assets/img.jpg';
const Contact = () => {
    return (
        <Zoom>
          <div className='my-8'>
            <div className='text-center lg:w-2/3 mx-auto p-4'>
            <h1 className="text-3xl font-bold">Contact Me</h1>
            <p>Feel free to reach out if you have any questions, project inquiries, or collaboration opportunities. I am always open to connecting and discussing new ideas!</p>
            </div>
            <div className="hero">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left w-full space-y-3">
      
      <img className='w-28 h-28 rounded-full mx-auto' src={image} alt="" />
      <p>Phone: 01924772057 (WhatsApp)</p>
      <p>Email: mdnajim1247@gmail.com</p>
      <p>Location: Dhaka Bangladesh</p>
    </div>
    <div className="card bg-base-100 w-full shadow-md">
      <form className="card-body">
        <div className="form-control">
          
          <input type="text" placeholder="Your Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          
          <input type="email" placeholder="Your Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          
          <textarea className="textarea textarea-bordered" placeholder="Your Message"></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
        </Zoom>
    );
};

export default Contact;