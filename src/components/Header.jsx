import { Link } from "react-router-dom";
import { CONTACT } from "../constants";
import { IoCodeSlash } from 'react-icons/io5';

const Header = () => {
  


  return (
       // fixed top-0 left-0 w-full z-50
       <nav className="mb-16 flex justify-between items-center py-6">
            <div className="flex shrink-0 items-center">
                 <h1 className="lg:ml-4 font-bold text-2xl flex items-center">
                      KHOA <IoCodeSlash />
                      NGUYEN
                 </h1>
            </div>
            <div className="my-4 lg:mr-4 flex items-center justify-center gap-4 text-2xl">
                 <Link target="_blank" to={CONTACT.github.url}>
                      {CONTACT.github.icon}
                 </Link>
                 <Link target="_blank" to={CONTACT.linkedin.url}>
                      {CONTACT.linkedin.icon}
                 </Link>
                 <Link target="_blank" to={CONTACT.facebook.url}>
                      {CONTACT.facebook.icon}
                 </Link>
            </div>
       </nav>
  );
};

export default Header;
