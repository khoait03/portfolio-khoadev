import { TOOLTIP } from '../constants';

// import { useTheme } from '../contexts/themeContext';
import { CiLight } from 'react-icons/ci';
import { CiDark, CiUser, CiFolderOn, CiMail } from 'react-icons/ci';

const Tooltip = () => {
    //  const { language } = useTheme();

     return (
          <div className="fixed bottom-10 right-5 bg-white text-neutral-900 dark:bg-neutral-800 dark:text-neutral-200 flex flex-col gap-2 items-center rounded-full py-1 shadow-lg">
               <button className="p-2 cursor-pointer" onClick={toggleLanguage}>
                    {language === 'vietnamese' ? 'EN' : 'VI'}
               </button>
               <button className="p-2 cursor-pointer" onClick={toggleDarkMode}>
                    {darkMode ? <CiLight className="text-2xl" /> : <CiDark className="text-2xl" />}
               </button>
               <a href="#user" className="relative group p-2 cursor-pointer">
                    <CiUser className="text-2xl" />
                    <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                         {TOOLTIP.user[language]}
                    </span>
               </a>

               <a href="#projects" className="relative group p-2 cursor-pointer">
                    <CiFolderOn className="text-2xl" />
                    <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                         Projects
                    </span>
               </a>

               <a href="#contact" className="relative group p-2 cursor-pointer">
                    <CiMail className="text-2xl" />
                    <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                         Contact
                    </span>
               </a>
          </div>
     );
};

export default Tooltip;
