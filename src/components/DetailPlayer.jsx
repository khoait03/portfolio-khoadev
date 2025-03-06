import { useEffect, useRef } from 'react';
import { RiCloseLargeFill } from 'react-icons/ri';
import { useTheme } from '../contexts/themeContext';

const DetailPlayer = ({ description, onClose }) => {
     const modalRef = useRef(null);

    const { language } = useTheme();

     useEffect(() => {
          const handleKeyDown = (e) => {
               if (e.key === 'Escape') onClose();
          };
          document.addEventListener('keydown', handleKeyDown);
          return () => document.removeEventListener('keydown', handleKeyDown);
     }, [onClose]);

     const handleClickOutside = (e) => {
          if (modalRef.current && !modalRef.current.contains(e.target)) {
               onClose();
          }
     };

     return (
          <div className="fixed inset-0 bg-black/90 dark:bg-black/50 flex items-center justify-center z-50" onClick={handleClickOutside}>
               <div ref={modalRef} className="bg-white dark:bg-[#151B21] rounded-lg relative max-w-full sm:max-w-4xl w-full p-6 overflow-auto max-h-[90vh]">
                    <div className="relative flex justify-between items-center py-4 px-6 border-b border-sky-200 dark:border-gray-800">
                         <h5 className="text-xl font-semibold">{language === 'vietnamese' ? 'Thông tin dự án' : 'Project Information'}</h5>
                         <button className="absolute top-2 right-2 border border-[#1F2937] dark:bg-[#1F2937] p-2 rounded" onClick={onClose}>
                              <RiCloseLargeFill className="text-xl font-medium" />
                         </button>
                    </div>
                    <div className="p-6 text-gray-700 dark:text-gray-400" dangerouslySetInnerHTML={{ __html: description }} />
               </div>
          </div>
     );
};

export default DetailPlayer;



