import React from 'react';

import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';


import project3 from '../assets/projects/portfolio-khoadev.png';
import project4 from '../assets/projects/vieclamphuquoc-cv.png';

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
                    'Tham gia phát triển và bảo trì các dự án sử dụng ReactJS và React Native. Làm việc với RESTful APIs và tích hợp các dịch vụ bên thứ ba. Làm việc nhóm, tham gia các cuộc họp trao đổi về yêu cầu và giải pháp kỹ thuật. Viết tài liệu kỹ thuật, hướng dẫn sử dụng cho các phần đã phát triển.',
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
               vietnamese: 'Cao đẳng FPT Polytechnic Cần Thơ',
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
               vietnamese: 'Website tuyển dụng và tìm kiếm việc làm vieclamphuquoc.com.vn',
               english: 'Recruitment and job search website vieclamphuquoc.com.vn',
          },
          image: project4,
          role: 'Fullstack Developer',
          members: 1,
          video: 'https://www.youtube.com/embed/68vfSs5y8mo',
          github: 'https://github.com/',
          link: 'https://vieclamphuquoc.com.vn',
          docs: 'https://vieclamphuquoc.com.vn',
          description: {
               vietnamese:
                    'VieclamPhuQuoc.com.vn là một nền tảng tuyển dụng và tìm kiếm việc làm dành riêng cho khu vực Phú Quốc. Website kết nối nhà tuyển dụng và ứng viên, giúp quá trình tuyển dụng trở nên nhanh chóng và hiệu quả hơn. Ứng viên: Đăng ký, đăng nhập tài khoản. Tìm kiếm và ứng tuyển việc làm. Sử dụng công cụ tạo CV chuyên nghiệp. Quản lý danh sách công việc đã ứng tuyển. Nhà tuyển dụng: Đăng tin tuyển dụng, tiếp cận ứng viên tiềm năng. Nhận và quản lý CV từ ứng viên. Gửi email thông báo kết quả tuyển dụng. Tạo lịch phỏng vấn và quản lý quy trình tuyển dụng. Mua gói đăng tin để nâng cao hiệu quả tuyển dụng. Quản trị viên: Quản lý toàn bộ hệ thống. Duyệt tin tuyển dụng trước khi hiển thị. Quản lý bài viết, nội dung trên website.',
               english: 'VieclamPhuQuoc.com.vn is a recruitment and job search platform specifically for the Phu Quoc region, connecting employers and job seekers to streamline the hiring process efficiently. Job seekers can register, log in, search and apply for jobs, use a professional CV creation tool, and manage their applied job list. Employers can post job listings, receive and manage CVs, send recruitment result notifications, schedule interviews, and purchase job posting packages to enhance recruitment efficiency. Administrators oversee the entire system, approve job postings before publication, and manage articles and website content.',
          },
          technologies: ['ReactJs', 'Laravel', 'Filament', 'Bootstap 5', 'Tailwind css', 'Mysql', 'JWT', 'Pusher'],
     },
     {
          title: {
               vietnamese: 'Personal Portfolio Website',
               english: 'Personal Portfolio Website',
          },
          image: project3,
          github: 'https://github.com/khoait03/portfolio-khoadev',
          link: 'https://portfolio.themedemo.site/',
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
