
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
            <div className='text-center'>
            <h1 className="text-3xl font-bold mb-2">Contact Me</h1>
            <p className='mb-4'>Feel free to reach out if you have any questions, project inquiries, or collaboration opportunities. I am always open to connecting and discussing new ideas!</p>
            </div>
            <div className="">
  <div className="flex flex-col lg:flex-row-reverse gap-6">
    <div className="text-center w-full space-y-3 py-9 rounded-lg shadow bg-gray-200 dark:bg-gray-800">
      
      <img className='w-28 h-28 rounded-full mx-auto' src={image} alt="" />
      <p><span className='font-semibold'>Name:</span> Nazim Uddin</p>
      <p><span className='font-semibold'>Phone:</span> +8801924772057 (WhatsApp)</p>
      <p><span className='font-semibold'>Email:</span> mdnajim1247@gmail.com</p>
      <p><span className='font-semibold'>Location:</span> Dhaka Bangladesh</p>
    </div>

<div className='bg-gray-200 dark:bg-gray-800 shadow p-6 rounded-lg w-full'>
<form ref={form} onSubmit={sendEmail}>
      <div>
      <label>Name</label>
      <input type="text" name="form_name" className="input input-bordered w-full bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200" placeholder='type Here Your Name' required />
      </div>
      <div>
      <label>Email</label>
      <input type="email" name="form_email" className="input input-bordered w-full bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200" placeholder='type Here Your Email' required />
      </div>
      <div>
      <label>Message</label>
      <textarea name="message" className="textarea textarea-bordered w-full bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200" placeholder='type Here Your Message' required />
      </div>
      <input type="submit" value="Send" className='text-center btn btn-sm btn-primary w-full'/>
    </form>
</div>

  </div>
</div>
        </div>
        </Zoom>
    );
};

export default Contact;