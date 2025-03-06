import { useEffect, useRef, useState } from 'react';
import { RiCloseLargeFill } from 'react-icons/ri';
import { useTheme } from '../contexts/themeContext';

const DetailPlayer = ({ description, onClose }) => {
     const modalRef = useRef(null);
     const contentRef = useRef(null);
     const { language } = useTheme();
     const [showBottomClose, setShowBottomClose] = useState(false);

     useEffect(() => {
          const handleKeyDown = (e) => {
               if (e.key === 'Escape') onClose();
          };
          document.addEventListener('keydown', handleKeyDown);
          return () => document.removeEventListener('keydown', handleKeyDown);
     }, [onClose]);

     useEffect(() => {
          if (modalRef.current && contentRef.current) {
               const modalHeight = modalRef.current.clientHeight;
               const contentHeight = contentRef.current.scrollHeight;
               setShowBottomClose(contentHeight > modalHeight);
          }
     }, [description]);

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
                    <div ref={contentRef} className="p-6 text-gray-700 dark:text-gray-400 overflow-auto" dangerouslySetInnerHTML={{ __html: description }} />

                    {/* Thêm nút Đóng bên dưới nếu nội dung quá dài */}
                    {showBottomClose && (
                         <div className="p-4 flex justify-center">
                              <button className="bg-sky-50 text-cyan-950 dark:bg-white/5 dark:text-sky-600 px-4 py-2 rounded" onClick={onClose}>
                                   <div className="flex items-center gap-1">
                                        <RiCloseLargeFill className="font-medium" />
                                        {language === 'vietnamese' ? 'Đóng' : 'Close'}
                                   </div>
                              </button>
                         </div>
                    )}
               </div>
          </div>
     );
};

export default DetailPlayer;
