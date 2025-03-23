import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

import { useTheme } from "./contexts/themeContext";

import { CiLight } from "react-icons/ci";
import { CiDark, CiUser, CiFolderOn, CiMail, CiAlarmOn, CiStar } from 'react-icons/ci';

const App = () => {
  const { language, darkMode, toggleLanguage, toggleDarkMode } = useTheme();

  return (
       <div className="font-inter overflow-x-hidden text-gray-900 dark:text-neutral-200 antialiased">
            <div className="fixed top-0 -z-10 size-full">
                 {darkMode ? (
                      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
                 ) : (
                      <div className="absolute inset-0 -z-10 h-full w-full bg-white">
                           <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
                      </div>
                 )}
            </div>
            <div className="container mx-auto px-4 lg:px-8 relative">
                 <Header />
                 <Hero />
                 {/* <About /> */}
                 <Experience />
                 <Project />
                 <Technologies />
                 <Contact />

                 <div className="fixed bottom-5 right-5 md:bottom-auto md:top-1/2 md:-translate-y-1/2 bg-white text-neutral-900 dark:bg-neutral-800 dark:text-neutral-200 flex flex-row md:flex-col gap-2 items-center rounded-full px-3 py-2 shadow-lg">
                      {/* <div className="fixed bottom-10 right-5 bg-white text-neutral-900 dark:bg-neutral-800 dark:text-neutral-200 flex flex-col gap-2 items-center rounded-full py-1 shadow-lg"> */}
                      <button className="relative group p-2 cursor-pointer" onClick={toggleLanguage}>
                           {language === 'vietnamese' ? 'EN' : 'VI'}
                           <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-lg px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity w-auto min-w-max whitespace-nowrap hidden md:block ">
                                <span>{language === 'vietnamese' ? 'Ngôn ngữ' : 'Language'}</span>
                           </span>
                      </button>
                      <button className="relative group p-2 cursor-pointer" onClick={toggleDarkMode}>
                           {darkMode ? <CiLight className="text-2xl" /> : <CiDark className="text-2xl" />}
                           <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-lg px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity w-auto min-w-max whitespace-nowrap hidden md:block ">
                                <span>{language === 'vietnamese' ? 'Sáng - Tối' : 'Dark Mode'}</span>
                           </span>
                      </button>
                      <a href="#hero" className="relative group p-2 cursor-pointer">
                           <CiUser className="text-2xl" />
                           <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-lg px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity w-auto min-w-max whitespace-nowrap hidden md:block ">
                                <span>{language === 'vietnamese' ? 'Giới thiệu' : 'About me'}</span>
                           </span>
                      </a>

                      <a href="#experiences" className="relative group p-2 cursor-pointer">
                           <CiAlarmOn className="text-2xl" />
                           <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-lg px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity w-auto min-w-max whitespace-nowrap hidden md:block">
                                {language === 'vietnamese' ? 'Hành trình' : 'Timeline'}
                           </span>
                      </a>

                      <a href="#projects" className="relative group p-2 cursor-pointer">
                           <CiFolderOn className="text-2xl" />
                           <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-lg px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity w-auto min-w-max whitespace-nowrap hidden md:block">
                                {language === 'vietnamese' ? 'Dự án' : 'Project'}
                           </span>
                      </a>
                      
                      <a href="#skill" className="relative group p-2 cursor-pointer">
                           <CiStar className="text-2xl" />
                           <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-lg px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity w-auto min-w-max whitespace-nowrap hidden md:block ">
                                <span>{language === 'vietnamese' ? 'Kỹ năng' : 'Skill'}</span>
                           </span>
                      </a>

                      <a href="#contact" className="relative group p-2 cursor-pointer">
                           <CiMail className="text-2xl" />
                           <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-lg px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity w-auto min-w-max whitespace-nowrap hidden md:block">
                                {language === 'vietnamese' ? 'Liên hệ' : 'Contact'}
                           </span>
                      </a>
                 </div>
            </div>
            <div className="text-center py-4">Copyright 2025 Nguyen Le Anh Khoa. All Rights Reserved</div>
       </div>
  );
};

export default App;
