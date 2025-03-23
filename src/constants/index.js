import React from 'react';

import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';

import LMSISC from '../assets/projects/lms-isc.png';
import project1 from '../assets/projects/vieclamphuquoc-cv.png';
import project2 from '../assets/projects/laravel-quan-ao.png';
import project3 from '../assets/projects/laravel-shoes.png';
import project10 from '../assets/projects/portfolio-khoadev.png';



import javascript from '../assets/technologies/javascript.png';
import typescript from '../assets/technologies/typescript.png';
import react from '../assets/technologies/react.png';
import nextjsLight from '../assets/technologies/nextjs-white.png';
import nextjsDark from '../assets/technologies/nextjs-black.png';
import nodejs from '../assets/technologies/nodejs.png';
import redux from '../assets/technologies/redux.png';
import zustand from '../assets/technologies/zustand.png';
import tailwind from '../assets/technologies/tailwind.png';
import mongodb from '../assets/technologies/mongodb.svg';
import mysql from '../assets/technologies/mysql.png';
import sass from '../assets/technologies/sass.png';
import githubLight from '../assets/technologies/github-white.png';
import githubDark from '../assets/technologies/github-black.png';
import firebase from '../assets/technologies/firebase.png';
import figma from '../assets/technologies/figma.png';
import materialui from '../assets/technologies/materialui.png';
import sequelize from '../assets/technologies/sequelize.png';
import laravel from '../assets/technologies/laravel.png';
import php from '../assets/technologies/php.png';
import bootstrap from '../assets/technologies/bootstrap.png';



import { IoBookmarkOutline } from 'react-icons/io5';
import { IoMedalOutline } from 'react-icons/io5';
import { GoTrophy } from 'react-icons/go';
import { PiGraduationCap } from 'react-icons/pi';
import { CgWorkAlt } from 'react-icons/cg';

export const HERO_CONTENT = {
     vietnamese:
          'Xin chào, tôi là Nguyễn Lê Anh Khoa – một lập trình viên đam mê tạo ra các ứng dụng web trực quan và hiệu suất cao. Tôi luôn nỗ lực biến ý tưởng thành những trải nghiệm người dùng mượt mà. Không ngừng học hỏi và phát triển, tôi luôn cố gắng mỗi ngày để trở thành phiên bản tốt hơn của chính mình.',
     english: 'Hello, I am Nguyễn Lê Anh Khoa – a passionate developer dedicated to creating intuitive and high-performance web applications. I strive to turn ideas into seamless user experiences. Continuously learning and growing, I always aim to become a better version of myself every day.',
};

export const ABOUT_CONTENT = {
     vietnamese:
          'Là một lập trình viên website tận tâm, tôi yêu thích việc xây dựng các giao diện tinh gọn, thân thiện với người dùng nhằm nâng cao trải nghiệm số. Trong hơn hai năm qua, tôi đã trau dồi kỹ năng JavaScript và làm việc với các framework như React, Laravel, cùng các công nghệ Backend như Nodejs, Express, MySQL và MongoDB. Hành trình phát triển web của tôi được thúc đẩy bởi sự tò mò và cam kết học hỏi không ngừng. Tôi tin vào việc viết code sạch, tối ưu, đồng thời luôn chú trọng đến thiết kế và tính khả dụng. Ngoài lập trình, tôi thích đối mặt với thử thách, làm việc nhóm hiệu quả và không ngừng khám phá các công cụ mới để bắt kịp xu hướng công nghệ. Mục tiêu của tôi? Trở thành một lập trình viên full-stack toàn diện, có khả năng xây dựng các ứng dụng quy mô lớn và hiệu suất cao.',
     english: 'As a dedicated web developer, I am passionate about building sleek, user-friendly interfaces to enhance digital experiences. Over the past two years, I have honed my JavaScript skills and worked with frameworks like React and Laravel, along with backend technologies such as Node.js, Express, MySQL, and MongoDB. My journey in web development is driven by curiosity and a commitment to continuous learning. I believe in writing clean, optimized code while always prioritizing design and usability. Beyond coding, I enjoy tackling challenges, collaborating effectively in teams, and exploring new tools to stay ahead of technological trends. My goal? To become a well-rounded full-stack developer capable of building large-scale, high-performance applications.',
};

export const TIMELINE = [
     {
          title: {
               vietnamese: 'THỰC TẬP',
               english: 'INTERNSHIP',
          },
          company: {
               vietnamese: 'TẠI TRUNG TÂM ƯƠM TẠO CÔNG NGHỆ VÀ HỖ TRỢ ĐỔI MỚI SÁNG TẠO – INNOVATION SERVICES CENTER AND ALTA SOFTWARE',
               english: 'AT ALTA SOFTWARE AND INNOVATION SERVICES CENTER',
          },
          time: '01/2024 - 4/2025',
          description: {
               vietnamese:
                    'Tham gia học tập và phát triển và bảo trì các dự án sử dụng ReactJS và React Native. Làm việc với RESTful APIs và tích hợp các dịch vụ bên thứ ba. Làm việc nhóm, tham gia các cuộc họp trao đổi về yêu cầu và giải pháp kỹ thuật. Viết tài liệu kỹ thuật, hướng dẫn sử dụng cho các phần đã phát triển.',
               english: 'Participate in the development and maintenance of projects using ReactJS and React Native. Work with RESTful APIs and integrate third-party services. Collaborate with the team, attend meetings to discuss requirements and technical solutions. Document technical specifications and provide user guidelines for developed features.',
          },
          icon: React.createElement(CgWorkAlt),
     },

     {
          title: {
               vietnamese: 'Tốt nghiệp ngành Lập trình Web',
               english: 'Graduated in Web Development',
          },
          company: {
               vietnamese: 'Cao đẳng FPT Polytechnic cơ sở Cần Thơ',
               english: 'FPT Polytechnic College Can Tho',
          },
          time: '12/2024',
          description: {
               vietnamese: 'Chính thức tốt nghiệp ngành Lập trình Web tại Cao đẳng FPT Polytechnic cơ sở Cần Thơ với loại Giỏi. Kết thúc hành trình học tập và chuẩn bị cho công việc mới.',
               english: 'Officially graduated in Web Development at FPT Polytechnic Can Tho with a GPA of 9.1. Ended the learning journey and prepared for a new job.',
          },
          icon: React.createElement(PiGraduationCap),
     },
     {
          title: {
               vietnamese: 'THỰC TẬP',
               english: 'INTERNSHIP',
          },
          company: {
               vietnamese: 'TẠI TRUNG TÂM KINH DOANH VNPT CẦN THƠ – PHÒNG KHÁCH HÀNG TỔ CHỨC DOANH NGHIỆP',
               english: 'AT VNPT CẦN THƠ BUSINESS CENTER – ENTERPRISE CUSTOMER DEPARTMENT',
          },
          time: '08/2024 - 12/2024',
          description: {
               vietnamese:
                    'Làm việc với ReactJS, Laravel, Filament, Livewire để phát triển và bảo trì ứng dụng web. Cùng với nhóm xây dựng và phát triển website tìm kiếm việc làm. Tích hợp và làm việc với RESTful APIs và cơ sở dữ liệu. Viết tài liệu kỹ thuật và hướng dẫn sử dụng cho các tính năng đã triển khai.',
               english: 'Work with ReactJS, Laravel, Filament, and Livewire to develop and maintain web applications. Collaborate with the team to build and enhance a job search website. Integrate and work with RESTful APIs and databases. Write technical documentation and user guidelines for implemented features.',
          },
          icon: React.createElement(CgWorkAlt),
     },
     {
          title: {
               vietnamese: 'Bắt đầu học Lập trình Web',
               english: 'Started Learning Web Development',
          },
          company: {
               vietnamese: 'Cao đẳng FPT Polytechnic cơ sở Cần Thơ',
               english: 'FPT Polytechnic College Can Tho',
          },
          time: '08/2022',
          description: {
               vietnamese:
                    'Bắt đầu niềm đam mê lập trình và chọn học Lập trình Web vì thích thú với việc xây dựng giao diện và dành rất nhiều thời gian tìm hiểu, thực hành với các công nghệ và ngôn ngữ mới như C, Java, Javascript, PHP để thực hiện được mong muốn trở thành lập trình viên.',
               english: 'Started my passion for programming and chose to study Web Development because I enjoyed building interfaces. Spent a lot of time learning and practicing with new technologies and languages such as C, Java, Javascript, PHP to fulfill my desire to become a developer.',
          },
          icon: React.createElement(IoBookmarkOutline),
     },
];

export const PROJECTS = [
     {
          title: {
               vietnamese: 'Hệ thống quản lý học tập (LMS) - ALTA SOFTWARE AND ISC',
               english: 'Learning Management System (LMS) - ALTA SOFTWARE AND ISC',
          },
          image: LMSISC,
          role: 'Frontend Developer',
          members: 1,
          github: 'https://github.com/khoait03/lms-isc',
          link: 'https://lms-isc.vercel.app',
          docs: '',
          description: {
               vietnamese:
                    "<p><strong>Hệ thống Learning Management System (LMS)</strong> là nền tảng hỗ trợ lưu trữ và quản lý tài liệu giảng dạy, đề thi, bài giảng và thông báo, giúp tối ưu hóa quá trình giảng dạy và học tập.</p><h3 class='mt-4 font-semibold'>Lãnh đạo:</h3><ul class='list-disc list-inside'><li>Quản lý toàn bộ hệ thống LMS.</li><li>Giám sát quá trình giảng dạy và học tập.</li><li>Quản lý nội dung, tài liệu giảng dạy.</li><li>Phê duyệt các thông báo quan trọng.</li></ul><h3 class='mt-4 font-semibold'>Giảng viên & giáo viên:</h3><ul class='list-disc list-inside'><li>Đăng tải bài giảng, tài liệu học tập.</li><li>Quản lý đề thi và bài kiểm tra.</li><li>Gửi thông báo đến học viên.</li><li>Theo dõi tiến độ học tập của học viên.</li></ul><h3 class='mt-4 font-semibold'>Học viên:</h3><ul class='list-disc list-inside'><li>Truy cập và tải tài liệu học tập.</li><li>Làm bài kiểm tra và nộp bài tập.</li><li>Nhận thông báo từ giảng viên và nhà trường.</li><li>Quản lý quá trình học tập cá nhân.</li></ul>",

               english: "<p><strong>The Learning Management System (LMS)</strong> is a platform that supports storing and managing teaching materials, exams, lectures, and announcements, optimizing the teaching and learning process.</p><h3 class='mt-4 font-semibold'>Leadership:</h3><ul class='list-disc list-inside'><li>Manage the entire LMS system.</li><li>Supervise the teaching and learning process.</li><li>Oversee content and teaching materials.</li><li>Approve important announcements.</li></ul><h3 class='mt-4 font-semibold'>Teacher:</h3><ul class='list-disc list-inside'><li>Upload lectures and learning materials.</li><li>Manage exams and tests.</li><li>Send notifications to students.</li><li>Monitor student progress.</li></ul><h3 class='mt-4 font-semibold'>Students:</h3><ul class='list-disc list-inside'><li>Access and download learning materials.</li><li>Take tests and submit assignments.</li><li>Receive notifications from instructors and the institution.</li><li>Manage their learning progress.</li></ul>",
          },
          technologies: ['React', 'TypeScript', 'Axios', 'Redux Toolkit', 'Tailwind css'],
     },
     {
          title: {
               vietnamese: 'Website tuyển dụng và tìm kiếm việc làm vieclamphuquoc.com.vn',
               english: 'Recruitment and job search website vieclamphuquoc.com.vn',
          },
          image: project1,
          role: 'Fullstack Developer',
          members: 1,
          video: 'https://www.youtube.com/embed/IS3ubQKLMe4',
          github: 'https://github.com/khoait03/CanThoItJob',
          link: 'https://vieclamphuquoc.com.vn',
          docs: 'https://drive.google.com/drive/folders/1QbdybF4YuB_olhK7RtlbUMVA1TGmIZfb?usp=sharing',
          description: {
               vietnamese:
                    "<p><strong>VieclamPhuQuoc.com.vn</strong> là một nền tảng tuyển dụng và tìm kiếm việc làm dành riêng cho khu vực <strong>Phú Quốc</strong>. Website kết nối nhà tuyển dụng và ứng viên, giúp quá trình tuyển dụng trở nên <em>nhanh chóng</em> và <em>hiệu quả</em> hơn.</p><h3 class='mt-4 font-semibold'>Ứng viên:</h3><ul class='list-disc list-inside'><li>Đăng ký, đăng nhập tài khoản.</li><li>Tìm kiếm và ứng tuyển việc làm.</li><li>Sử dụng công cụ tạo CV chuyên nghiệp.</li><li>Quản lý danh sách công việc đã ứng tuyển.</li></ul><h3 class='mt-4 font-semibold'>Nhà tuyển dụng:</h3><ul class='list-disc list-inside'><li>Đăng tin tuyển dụng, tiếp cận ứng viên tiềm năng.</li><li>Nhận và quản lý CV từ ứng viên.</li><li>Gửi email thông báo kết quả tuyển dụng.</li><li>Tạo lịch phỏng vấn và quản lý quy trình tuyển dụng.</li><li>Mua gói đăng tin để nâng cao hiệu quả tuyển dụng.</li></ul><h3 class='mt-4 font-semibold'>Quản trị viên:</h3><ul class='list-disc list-inside'><li>Quản lý toàn bộ hệ thống.</li><li>Duyệt tin tuyển dụng trước khi hiển thị.</li><li>Quản lý bài viết, nội dung trên website.</li></ul>",

               english: "<p><strong>VieclamPhuQuoc.com.vn</strong> is a recruitment and job search platform specifically for the <strong>Phu Quoc</strong> region, connecting employers and job seekers to streamline the hiring process efficiently.</p><h3 class='mt-4 font-semibold'>Job Seekers:</h3><ul class='list-disc list-inside'><li>Register and log in.</li><li>Search and apply for jobs.</li><li>Use a professional CV creation tool.</li><li>Manage their applied job list.</li></ul><h3 class='mt-4 font-semibold'>Employers:</h3><ul class='list-disc list-inside'><li>Post job listings and reach potential candidates.</li><li>Receive and manage CVs from applicants.</li><li>Send recruitment result notifications.</li><li>Schedule interviews and manage hiring processes.</li><li>Purchase job posting packages for better recruitment efficiency.</li></ul><h3 class='mt-4 font-semibold'>Administrators:</h3><ul class='list-disc list-inside'><li>Oversee the entire system.</li><li>Approve job postings before publication.</li><li>Manage articles and website content.</li></ul>",
          },
          technologies: ['ReactJs', 'Laravel', 'Filament', 'Bootstap 5', 'Tailwind css', 'Mysql', 'Pusher'],
     },
     {
          title: {
               vietnamese: 'Website thương mại điện tử bán quần áo',
               english: 'E-commerce website selling clothes',
          },
          image: project2,
          role: 'Fullstack Developer',
          members: 1,
          video: 'https://www.youtube.com/embed/pbN7TXLamng',
          github: 'https://github.com/khoait03',
          link: 'https://quanao.themedemo.site',
          // https://drive.google.com/drive/folders/11bGHs0TBA1qzt3fFi6Blt5DG_CHJz4WZ?usp=sharing
          docs: '',
          description: {
               vietnamese:
                    "<p><strong>Website thương mại điện tử</strong> bán quần áo với các tính năng hiện đại:</p> <ul class='list-disc list-inside'><li><strong>Tìm kiếm</strong>, lọc theo biến thể sản phẩm, thương hiệu và mức giá.</li><li>Hỗ trợ <strong>giỏ hàng</strong>, <strong>mã giảm giá</strong>, <strong>thanh toán online</strong> qua Momo, VNPay, COD.</li></ul> <p><strong>Hệ thống đặt hàng:</strong></p> <ul class='list-disc list-inside'><li>Theo dõi trạng thái đơn hàng.</li><li>Gửi thông báo tự động qua email.</li></ul> <p><strong>Quản lý menu:</strong></p> <ul class='list-disc list-inside'><li>Nhiều cấp.</li><li>Hỗ trợ widget, chương trình sale.</li></ul> <p><strong>Phân quyền tài khoản:</strong></p> <ul class='list-disc list-inside'><li>Theo từng vai trò.</li></ul> <p><strong>Quản lý đơn hàng:</strong></p> <ul class='list-disc list-inside'><li>Cập nhật trạng thái đơn.</li><li>Duyệt đơn hàng.</li></ul>",

               english: "<p><strong>An e-commerce website</strong> for selling clothes with modern features:</p> <ul class='list-disc list-inside'><li><strong>Search</strong> and filter by product variations, brands, and price range.</li><li>Supports <strong>shopping cart</strong>, <strong>discount codes</strong>, and <strong>online payments</strong> via Momo, VNPay, and COD.</li></ul> <p><strong>Order tracking system:</strong></p> <ul class='list-disc list-inside'><li>Automatically sends email notifications.</li></ul> <p><strong>Multi-level menu management:</strong></p> <ul class='list-disc list-inside'><li>Supports widgets and sales programs.</li></ul> <p><strong>User role-based account permissions:</strong></p> <ul class='list-disc list-inside'><li>Different roles with specific permissions.</li></ul> <p><strong>Order management:</strong></p> <ul class='list-disc list-inside'><li>Update order status.</li><li>Approve orders.</li></ul>",
          },
          technologies: ['Laravel', 'HTML', 'CSS', 'Bootstap 5', 'Mysql', 'JWT', 'Pusher'],
     },
     {
          title: {
               vietnamese: 'Website thương mại điện tử bán giày và phụ kiện ',
               english: 'E-commerce website for selling shoes and accessories',
          },
          image: project3,
          role: 'Fullstack Developer',
          members: 1,
          video: 'https://www.youtube.com/embed/-Zi5mvXNTTQ',
          github: 'https://github.com/khoait03',
          link: 'https://shoes.themedemo.site',
          // https://drive.google.com/drive/folders/1454qsENP3aAEaPl4sf4TTJnO3y60iWZJ?usp=sharing
          docs: '',
          description: {
               vietnamese:
                    "<p><strong>Website thương mại điện tử</strong> bán phụ kiện giày dép với các tính năng:</p> <ul class='list-disc list-inside'><li><strong>Tìm kiếm</strong>, lọc theo thương hiệu và mức giá.</li><li>Hỗ trợ <strong>giỏ hàng</strong>, <strong>mã giảm giá</strong>, <strong>thanh toán online</strong> qua Momo, VNPay, COD.</li><li><strong>Đặt hàng</strong>: theo dõi trạng thái đơn hàng và gửi thông báo tự động qua email.</li><li><strong>Phân quyền tài khoản</strong> theo từng vai trò.</li><li><strong>Quản lý đơn hàng</strong>: cập nhật trạng thái đơn, duyệt đơn.</li></ul>",

               english: "<p><strong>An e-commerce website</strong> for selling shoe accessories with features:</p> <ul class='list-disc list-inside'><li><strong>Search</strong> and filter by brand and price range.</li><li>Supports <strong>shopping cart</strong>, <strong>discount codes</strong>, and <strong>online payments</strong> via Momo, VNPay, and COD.</li><li><strong>Order tracking</strong> with automatic email notifications.</li><li><strong>User role-based account permissions</strong>.</li><li><strong>Order management</strong>: update order status and approve orders.</li></ul>",
          },
          technologies: ['Laravel', 'HTML', 'CSS', 'Bootstap 5', 'Mysql'],
     },
     {
          title: {
               vietnamese: 'Personal Portfolio Website',
               english: 'Personal Portfolio Website',
          },
          image: project10,
          github: 'https://github.com/khoait03/portfolio-khoadev',
          link: 'https://portfolio-khoadev.vercel.app',
          description: {
               vietnamese: 'Một website cá nhân giới thiệu bản thân, dự án, kỹ năng và thông tin liên hệ.',
               english: 'A personal website introducing myself, projects, skills, and contact information.',
          },
          technologies: ['ReactJs', 'Tailwind', 'Framer Motion'],
     },
];

export const CONTACT = {
     address: {
          vietnamese: 'Huyện Châu Thành, Tỉnh Tiền Giang',
          english: 'Chau Thanh District, Tien Giang Province',
          icon: React.createElement(FaMapMarkerAlt),
     },
     email: 'nguyenleanhkhoa.dev@gmail.com',
     phone: '0336216546',
     linkedin: {
          url: 'https://www.linkedin.com/',
          icon: React.createElement(FaLinkedin),
     },
     github: {
          url: 'https://github.com/khoait03',
          icon: React.createElement(FaGithub),
     },
     facebook: {
          url: 'https://www.facebook.com/',
          icon: React.createElement(FaFacebook),
     },
};

export const SKILLS = [
     {
          name: 'javascript',
          src: javascript,
          link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
     },
     {
          name: 'typescript',
          src: typescript,
          link: 'https://www.typescriptlang.org',
     },
     {
          name: 'php',
          src: php,
          link: 'https://www.php.net',
     },
     {
          name: 'laravel',
          src: laravel,
          link: 'https://laravel.com',
     },
     {
          name: 'react',
          src: react,
          link: 'https://react.dev',
     },
     {
          name: 'nextjs',
          light: nextjsDark,
          dark: nextjsLight,
          link: 'https://nextjs.org',
     },
     {
          name: 'nodejs',
          src: nodejs,
          link: 'https://nodejs.org/en',
     },
     {
          name: 'redux',
          src: redux,
          link: 'https://redux.js.org',
     },
     {
          name: 'zustand',
          src: zustand,
          link: 'https://zustand.docs.pmnd.rs',
     },
     {
          name: 'tailwind',
          src: tailwind,
          link: 'https://tailwindcss.com',
     },
     {
          name: 'bootstrap',
          src: bootstrap,
          link: 'https://getbootstrap.com',
     },
     {
          name: 'material-ui',
          src: materialui,
          link: 'https://mui.com',
     },
     {
          name: 'sass',
          src: sass,
          link: 'https://sass-lang.com',
     },
     {
          name: 'mongodb',
          src: mongodb,
          link: 'https://www.mongodb.com',
     },
     {
          name: 'mysql',
          src: mysql,
          link: 'https://www.mysql.com',
     },
     {
          name: 'sequelize',
          src: sequelize,
          link: 'https://sequelize.org',
     },
     {
          name: 'firebase',
          src: firebase,
          link: 'https://firebase.google.com',
     },
     {
          name: 'github',
          light: githubDark,
          dark: githubLight,
          link: 'https://github.com',
     },
     {
          name: 'figma',
          src: figma,
          link: 'https://www.figma.com',
     },
];

export const TITLES = {
     hero: {
          vietnamese: 'Nguyễn Lê Anh Khoa',
          english: 'Nguyen  Le Anh Khoa',
     },
     about: {
          vietnamese: ['Đôi nét về', ' bản thân'],
          english: ['About', ' Me'],
     },
     experiences: {
          vietnamese: 'Kinh nghiệm học tập và làm việc',
          english: 'Timeline',
     },
     projects: {
          vietnamese: 'Dự án',
          english: 'Projects',
     },
     technologies: {
          vietnamese: 'Kỹ năng',
          english: 'Skills',
     },
     contact: {
          vietnamese: 'Liên hệ',
          english: 'Contact',
     },
};

export const TOOLTIP = {
     user: {
          vietnamese: ['Đôi nét về', ' bản thân'],
          english: ['About', ' Me'],
     },
     experiences: {
          vietnamese: 'Hành trình',
          english: 'Timeline',
     },
     projects: {
          vietnamese: 'Dự án',
          english: 'Projects',
     },
     technologies: {
          vietnamese: 'Kỹ năng',
          english: 'Skills',
     },
     contact: {
          vietnamese: 'Liên hệ',
          english: 'Contact',
     },
};
