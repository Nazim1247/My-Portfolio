import { FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
    return (
        <div className="bg-neutral">
           <footer className="footer text-neutral-content items-center py-4 w-11/12 mx-auto">
  <aside className="grid-flow-col items-center">
    
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a href="https://www.linkedin.com/in/hm-nazim-uddin">
      <FaLinkedin className="text-2xl text-blue-500 bg-white" />
    </a>
    <a className='text-blue-500 bg-white text-2xl' href="https://web.facebook.com/hm.nazim.uddin.86882?rdid=agS7SqQb8EJgkEO6&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F1BPK8VijLn%2F%3F_rdc%3D1%26_rdr"><FaSquareFacebook /></a>
    <a className='text-red-500 bg-white text-2xl' href="https://youtube.com/@najimuddin-cv5eb?si=_8af_dlegJFyWeNJ"><IoLogoYoutube /></a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;