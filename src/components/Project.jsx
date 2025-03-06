import { TITLES, PROJECTS } from '../constants';
import { IoLinkOutline } from 'react-icons/io5';
import { motion } from 'motion/react';
import { useTheme } from '../contexts/themeContext';
import VideoPlayer from './VideoPlayer';
import DetailPlayer from './DetailPlayer';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoLogoGithub } from 'react-icons/io';
import { FaPlay, FaFolder } from 'react-icons/fa6';
import { CiFileOn } from 'react-icons/ci';
import { FaRegEye } from 'react-icons/fa';

const Project = () => {
     const { language, darkMode } = useTheme();
     const [selectedVideo, setSelectedVideo] = useState(null);
     const [selectedDetail, setSelectedDetail] = useState(null);

     return (
          <section id="projects" className="border-b border-sky-200 dark:border-neutral-800 pb-24">
               <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 0.6 }} className="my-20 text-center text-4xl">
                    {TITLES.projects[language]}
               </motion.h2>
               <div>
                    {PROJECTS.map((project, index) => (
                         <div className="mb-8 flex flex-wrap lg:justify-center gap-10" key={index}>
                              <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1 }} className="w-full lg:w-1/4">
                                   <img src={project.image} alt={project.title.english} className="h-auto lg:h-[220px] mb-6 rounded object-cover mx-auto" />
                              </motion.div>
                              <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1 }} className="w-full max-w-xl lg:w-3/4">
                                   <h4 className="mb-2 font-semibold lg:text-lg">{project.title[language]}</h4>
                                   {project.role && <p className="my-3 font-medium">{project.role}</p>}
                                   {project.link && (
                                        <div className="text-sky-600 relative mb-3 inline-flex items-center gap-1">
                                             <IoLinkOutline className="text-xl" />
                                             <a
                                                  href={project.link}
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  className="font-medium break-words break-all after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[1px] after:bg-current after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full"
                                             >
                                                  {project.link}
                                             </a>
                                        </div>
                                   )}

                                   {project.certificate && (
                                        <div className="text-sky-600 relative mb-3 inline-flex items-center gap-1">
                                             <IoLinkOutline className="text-xl" />
                                             <a
                                                  href={project.certificate}
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  className="font-medium break-words break-all after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[1px] after:bg-current after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full"
                                             >
                                                  {project.certificate}
                                             </a>
                                        </div>
                                   )}
                                   {(project.video || project.github || project.docs) && (
                                        <div className="flex gap-3 mb-3 text-neutral-200 dark:text-gray-900">
                                             {project.github && (
                                                  <Link
                                                       to={project.github}
                                                       className="inline-flex items-center gap-1 px-3 py-1 bg-gray-800 dark:bg-neutral-200 rounded hover:bg-gray-700 dark:hover:bg-neutral-50"
                                                       target="_blank"
                                                  >
                                                       <IoLogoGithub className={darkMode ? 'text-black' : 'text-white' + ' text-lg'} /> Github
                                                  </Link>
                                             )}
                                             {project.video && (
                                                  <button
                                                       onClick={() => setSelectedVideo(project.video)}
                                                       className="inline-flex items-center gap-1 px-3 py-1 bg-gray-800 dark:bg-neutral-200 rounded hover:bg-gray-700 dark:hover:bg-neutral-50 cursor-pointer"
                                                  >
                                                       <FaPlay className={darkMode ? 'text-black' : 'text-white'} /> Video demo
                                                  </button>
                                             )}
                                             {project.description[language] && (
                                                  <button
                                                       onClick={() => setSelectedDetail(project.description[language])}
                                                       className="inline-flex items-center gap-1 px-3 py-1 bg-gray-800 dark:bg-neutral-200 rounded hover:bg-gray-700 dark:hover:bg-neutral-50 cursor-pointer"
                                                  >
                                                       <FaRegEye className={darkMode ? 'text-black' : 'text-white'} /> Information
                                                  </button>
                                             )}
                                             {project.docs && (
                                                  <Link
                                                       to={project.docs}
                                                       className="inline-flex items-center gap-1 px-3 py-1 bg-gray-800 dark:bg-neutral-200 rounded hover:bg-gray-700 dark:hover:bg-neutral-50"
                                                       target="_blank"
                                                  >
                                                       <FaFolder className={darkMode ? 'text-black' : 'text-white' + ' text-lg'} /> Docs
                                                  </Link>
                                             )}
                                        </div>
                                   )}

                                   <p className="mb-4 text-gray-700 dark:text-gray-400 line-clamp-3">{project.description[language].replace(/<[^>]+>/g, '')}</p>

                                   {project.technologies.map((technology, index) => (
                                        <span className="inline-block mr-2 mb-2 rounded px-2 py-1 text-sm font-medium bg-sky-50 text-cyan-950 dark:bg-white/5 dark:text-sky-600" key={index}>
                                             {technology}
                                        </span>
                                   ))}
                              </motion.div>
                         </div>
                    ))}
               </div>
               {selectedVideo && <VideoPlayer videoUrl={selectedVideo} onClose={() => setSelectedVideo(null)} />}
               {selectedDetail && <DetailPlayer description={selectedDetail} onClose={() => setSelectedDetail(null)} />}
          </section>
     );
};

export default Project;
