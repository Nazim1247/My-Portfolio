
import { Zoom } from 'react-awesome-reveal';
import image from '../assets/img.jpg';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_226e92c', 'template_8lf42co', form.current, {
        publicKey: '6pY8emc24oYEA_fbW',
      })
      .then(
        (result) => {
          console.log('SUCCESS!',result);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

    return (
        <Zoom>
          <div className='my-8'>
            <div className='text-center lg:w-2/3 mx-auto p-4'>
            <h1 className="text-3xl font-bold">Contact Me</h1>
            <p>Feel free to reach out if you have any questions, project inquiries, or collaboration opportunities. I am always open to connecting and discussing new ideas!</p>
            </div>
            <div className="hero">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center w-full space-y-3">
      
      <img className='w-28 h-28 rounded-full mx-auto' src={image} alt="" />
      <p>Phone: 01924772057 (WhatsApp)</p>
      <p>Email: mdnajim1247@gmail.com</p>
      <p>Location: Dhaka Bangladesh</p>
    </div>

<form ref={form} onSubmit={sendEmail}>
      <div>
      <label>Your Name</label>
      <input type="text" name="form_name" className="input input-bordered" required />
      </div>
      <div>
      <label>Your Email</label>
      <input type="email" name="form_email" className="input input-bordered" required />
      </div>
      <div>
      <label>Your Message</label>
      <textarea name="message" className="textarea textarea-bordered w-full" required />
      </div>
      <input type="submit" value="Send" className='text-center btn btn-sm btn-primary w-full'/>
    </form>

  </div>
</div>
        </div>
        </Zoom>
    );
};

export default Contact;