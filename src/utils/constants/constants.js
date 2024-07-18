import { theme } from "../../../tailwind.config";
import { IoLogoCss3, IoLogoAndroid, IoIosMail } from "react-icons/io";
import { IoLogoPwa } from "react-icons/io5";
import { FaHtml5, FaMapLocationDot } from "react-icons/fa6";
import {
  RiNextjsFill,
  RiJavascriptFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaJava } from "react-icons/fa6";
import {
  FaServer,
  FaAppStoreIos,
  FaGithub,
  FaVestPatches,
} from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { SiAndroidstudio, SiXcode, SiReactiveresume } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbBrandRedux } from "react-icons/tb";
import { bear } from "../ImageIndex";
import { CiMobile3 } from "react-icons/ci";
import { HiUserCircle } from "react-icons/hi";
import { RiContactsFill } from "react-icons/ri";
import { ImBook } from "react-icons/im";
import { IoFileTrayFull } from "react-icons/io5";

export const colors = theme.extend.colors;
export const array3 = [1, 2, 3];
export const skeletonLineHeight = "12px";

export const userDetails = {
  firstName: "Nagaraj",
  lastName: "S V",
  age: 23,
  gender: "Male",
};

export const contactDetails = {
  phone: "9629656832",
  gmail: "sekarnagaraj74@gmail.com",
  address:
    "A1-201, 2nd floor, Janani Blue Bells, Annai Theresa road, Padur, chennai-603103",
  mapLink:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d515.4989649160805!2d80.22141031732956!3d12.81056904541756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525bb00e2ab233%3A0xb642d9db8c9a6bf2!2sA1%20Block%2C%20Blue%20Bells%20Apartment!5e0!3m2!1sen!2sin!4v1719572241148!5m2!1sen!2sin",
};

export const navBarOptions = [
  { text: "About Me", link: "/", icon: HiUserCircle },
  { text: "Resume", link: "/resume", icon: SiReactiveresume },
  { text: "Portfolio", link: "/portfolio", icon: IoFileTrayFull },
  { text: "Contact", link: "/contact", icon: RiContactsFill },
  { text: "Extras", link: "/extracomponents", icon: ImBook },
];

export const resume = {
  description:
    "Front end developer with a proven record of success in Cyces who can assist industries in building and managing more reusable code. I have a strong desire to utilise my talents on a larger development team and am passionate about learning and growth. willing to take on more challenging issues and always looking for ways to improve the customer experience.",
  jobRole: "Frontend-developer",
};

export const hyperLinks = {
  linkedin:
    "https://www.linkedin.com/in/nagaraj-s-v-5b5085187?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B2PxkvhFwRnqRMjvwttBCyw%3D%3D",
};

export const skills_content = [
  { icon: [RiJavascriptFill], title: "JavaScript" },
  { icon: [BiLogoTypescript], title: "TypeScript" },
  { icon: [FaGithub], title: "Github" },
  { icon: [FaHtml5], title: "HTML" },
  { icon: [IoLogoCss3], title: "CSS" },
  { icon: [RiTailwindCssFill], title: "TailWindCSS" },
  { icon: [FaVestPatches], title: "Patch Package" },
  { icon: [FaServer], title: "RTK Query" },
  { icon: [FaJava], title: "Java" },
  { icon: [TbBrandRedux], title: "Redux" },
  { icon: [bear], title: "Zustand Store", image: true },
];

export const ide_content = [
  { icon: SiAndroidstudio, title: "Android Studio" },
  { icon: VscVscode, title: "Visual Studio Code" },
  { icon: SiXcode, title: "Xcode" },
];

export const project_content = [
  { icon: [IoLogoAndroid], title: "Smart Meter" },
  { icon: [CgWebsite], title: "E-Commerce Website" },
  { icon: [IoLogoAndroid], title: "SiteScribe" },
  { icon: [IoLogoAndroid, FaAppStoreIos], title: "Voxguru" },
  { icon: [IoLogoAndroid], title: "HOTI" },
  { icon: [IoLogoAndroid, FaAppStoreIos], title: "Truliv " },
  { icon: [CgWebsite], title: "Truliv Web App" },
];

export const education = [
  {
    startYear: "2019",
    endYear: "2023",
    studiedAt: "Hindustan Institute of Technology and Science",
    title: "B.Tech IT-Cyber Security",
    des: "In my UG, I earned a 9.4 CGPA throughout the course of eight semesters. My institution provided me with several opportunities to display my ability in design projects each semester, as well as to participate in conferences and contests relating to IT and computer science. I had the opportunity to demonstrate my Smart Metre V3 project at the IIT Kharagpur conference.",
  },
  {
    startYear: "2018",
    endYear: "2019",
    studiedAt: "PSLV CBSE School",
    title: "12th Grade",
    des: "I graduated from 12th grade with a 95%. I wanted to study at an IIT for my undergraduate degree, so I began preparing for JEE exams and received 70.3% in JEE main and 30% in JEE advanced.",
  },
  {
    startYear: "2016",
    endYear: "2017",
    studiedAt: "Mahathma CBSE School",
    title: "10th Grade",
    des: "In my tenth grade, I earned a 9.5 CGPA, and my school provided me with opportunities for extracurricular activities such as the Science Expo, projects, and assignments. During the game time, I became interested in chess as an indoor game, skating, and basketball as outdoor games.",
  },
  // { startYear: "", endYear: "", studiedAt: "", title: "", des: "" },
];

export const experience = [
  {
    startYear: "2023",
    endYear: "Current",
    company_name: "Cyces Innovation Labs",
    title: "Mid Level Front-End Developer",
    des: "My formal career began with a position as a mobile app developer at Cyces. Here, I had the opportunity to work on real-time projects as part of a team that were utilised by thousands of users. I learned how to manage a team and the fundamentals of discussing needs with team members. I learned how a project is built from start to finish, such as from UI designs to the presence of a bug-free end result. I used my expertise to build and maintain a stronger code base for a larger development team at Cyces. They provided me the opportunity to display my web development talents on the Truliv Web App project.",
  },
  {
    startYear: "2022",
    endYear: "2023",
    company_name: "College Project",
    title: "Junior Front-End Developer",
    des: "I became interested in web development and pondered why every firm began with a website and then developed mobile apps to make it easier for users to utilise. So I used the newest framework that suited me, Next Js. I created a clothes e-commerce website that replicated Amazon's straightforward procedure. To store user and purchase information, I utilised a Firebase real-time database. I came up with the concept of showing users how their package appears at each hub, therefore I utilised Firebase's Firestore database to store photos and display them on the user end.",
  },
  {
    startYear: "2020",
    endYear: "2022",
    company_name: "College Project",
    title: "Mobile App Developer",
    des: "I used the Java programming language to develop my own creative concept that meets certain requirements, such as seeing power use data from anywhere over the internet.In the second version, I used Java to construct Firebase for storing data on power use.  After 2021, I wanted to expand and increase the user experience, and I was keen to learn javascript, so I started constructing the third version of the app in Js. In this section, I looked at otp authentication and push notifications with Firebase.",
    para: [
      "I utilised the Java programming language to create my own innovative concept that fits specific criteria, such as viewing power usage information from anywhere via the internet. In addition, iOT hardware components such as the Arduino UNO, ESP8266 wifi module, camera module, and so on were utilised to upload data from the power metre to the Firebase real-time database.",
      "The work flow is fairly simple: the camera module takes a snapshot of the digital metre reading, processes the image with Python on an Arduino Uno, and stores the number in Firebase over wifi.",
      "In a mobile device, the user must first complete the setup process, which includes entering the mobile number, otp authentication, password, and user details. After that, the user must connect to the same wifi network as the hardware device, and the user will be redirected to a webpage where he must enter the password entered in the user details page. Once done, the user launches the app, which links to the login page. Following login, the user will be taken to the dashboard page.",
    ],
  },
  // { startYear: "", endYear: "", company_name: "", title: "", des: "",},
];

export const projects = [
  {
    id: 1,
    startYear: "2020",
    endYear: "2021",
    company_name: "College Project",
    image_name: "java.jpeg",
    language_used: "Java",
    filter: "Java",
    tech: ["Java", "Firebase Realtime DB"],
    icons: [IoLogoAndroid],
    project_name: "Smart Meter",
    des: "I utilised the Java programming language to create my own innovative concept that fits specific criteria, such as viewing power usage information using the mobile application. Additionally, hardware components were employed to transfer data from an electricity metre to a real-time database on Firebase.",
    para: [
      "I utilised the Java programming language to create my own innovative concept that fits specific criteria, such as viewing power usage information using the mobile application. In addition, iOT hardware components such as the Arduino UNO, ESP8266 wifi module, camera module, and so on were utilised to upload data from the power metre to the Firebase real-time database.",
      "The work flow is quite straightforward; we simulated an electricity metre with an Analong display, a wifi module, and an Arduino UNO. We used Python to provide faked metre readings to an analogue display as input, and then gathered the information from the display's output pins and transmitted it to Firebase. The programme retrieves data and shows it to the user.",
      "In a mobile device, the user must first complete the setup process, which includes entering the mobile number, otp authentication, password, and user details. After that, the user must connect to the same wifi network as the hardware device, and the user will be redirected to a webpage where he must enter the password entered in the user details page. Once done, the user launches the app, which links to the login page. Following login, the user will be taken to the dashboard page.",
    ],
  },
  {
    id: 2,
    startYear: "2021",
    endYear: "2022",
    company_name: "College project",
    image_name: "react_native1.jpeg",
    language_used: "JavaScript",
    filter: "React Native",
    tech: [
      "JavaScript",
      "Firebase Realtime DB",
      "Firebase Phone Auth",
      "Firebase Push Notification",
    ],
    icons: [IoLogoAndroid],
    project_name: "Smart Meter V3",
    des: "I used Java script to make more enhancements and bring the user experience to the original version of the smart metre project. on this, I built push notification using firebase. The notice is triggered when the user surpasses 50%, 75%, and 100% of the limit the user sets on the limit setting page. I also handled app permission for internet access, wifi access, etc.",
    para: [
      "I utilised the Java Script programming language to create my own innovative concept that fits specific criteria, such as viewing power usage information from anywhere via the internet. In addition, iOT hardware components such as the Arduino UNO, ESP8266 wifi module, camera module, and so on were utilised to upload data from the power metre to the Firebase real-time database.",
      "The work flow is fairly simple: the camera module takes a snapshot of the digital metre reading, processes the image with Python on an Arduino Uno, and stores the number in Firebase over wifi.",
      "In a mobile device, the user must first complete the setup process, which includes entering the mobile number, otp authentication using firebase, password, and user details. After that, the user must connect to the same wifi network as the hardware device, and the user will be redirected to a webpage where he must enter the password entered in the user details page. Once done, the user launches the app, which links to the login page. Following login, the user will be taken to the dashboard page.",
    ],
  },
  {
    id: 3,
    startYear: "2022",
    endYear: "2023",
    company_name: "College Project",
    image_name: "nextjs_image1.png",
    language_used: "JavaScript",
    filter: "Next Js",
    tech: ["JavaScript", "Firebase Realtime DB", "Firebase FireStore DB"],
    icons: [RiNextjsFill],
    project_name: "E-Commerce Website",
    des: "From initial setup to ultimate website completion, I learned the fundamentals of HTML, CSS, and NextJS.  because its programming language is a blend of JavaScript, HTML, and CSS. It was rather simple for me to learn. With quiet information, I could create a completely functional e-commerce apparel website.",
    para: [
      "In this project, I built a website with nextJs, HTML, and CSS. It is an e-commerce clothes website that displays cloth goods for purchase and has numerous categories with filter options.",
      "The user flow is extremely simple: the user picks a product. and picks the colour, size, and number. After that, the user selects add to cart. If the user is already logged in, the cart page is displayed; otherwise, the user is directed to the login or register page before proceeding to the cart page. Proceed to checkout from the cart section page. In the checkout area, the user must pick the delivery address and payment method.",
    ],
  },
  {
    id: 4,
    startYear: "2023",
    endYear: "Current",
    company_name: "Cyces Innovation Labs",
    image_name: "react_native4.png",
    language_used: "TypeScript",
    filter: "React Native",
    tech: [
      "TypeScript",
      "Rest API",
      "Watermelon DB",
      "Redux Toolkit",
      "Media Upload",
    ],
    icons: [IoLogoAndroid],
    project_name: "SiteScribe",
    des: "It is a survey project that collects information from a construction site regarding the questions and available response alternatives or possibilities. The question and alternatives are stored in the database. The manager or administrator will allocate project and question groups. There are three buckets: yet to begin the project, finished, and a bulk upload of completed projects. because the programme functions even when the user doesn't have an internet connection.",
    para: [
      "This project is a site survey application, in which the agents will visit the building site designated by the management. The manager can oversee numerous organisations. The management will construct an organisation, question groups, and survey questions with various alternatives or response fields to which the agents may apply their input.",
      "The agents will use the mobile application to perform the survey.",
      "The mobile app also supports offline mode, which allows agents to upload their completed surveys when they have access to the network or the internet. The completed form is saved in the device storage using watermelon database.",
    ],
  },
  {
    id: 5,
    startYear: "2023",
    endYear: "Current",
    company_name: "Cyces Innovation Labs",
    image_name: "react_native2.png",
    language_used: "JavaScript",
    filter: "React Native",
    tech: ["JavaScript", "Rest API", "Media Upload"],
    icons: [IoLogoAndroid],
    project_name: "HOTI",
    des: "Hoti stands for 'Humans of the Internet,' and this application facilitates communication or connectivity among influencers, brands, and agencies. The project's ultimate objective is to locate influencers who are a good fit for their product and market it as best in class.",
    para: [],
  },
  {
    id: 6,
    startYear: "2023",
    endYear: "Current",
    company_name: "Cyces Innovation Labs",
    image_name: "react_native3.jpeg",
    language_used: "JavaScript",
    filter: "React Native",
    tech: [
      "JavaScript",
      "Rest API",
      "Redux Toolkit",
      "Zustand Store",
      "Media Upload",
      "CometChat V4",
      "Firebase Push Notification",
    ],
    icons: [IoLogoAndroid, FaAppStoreIos],
    project_name: "Voxguru",
    des: "Cometchat is integrated, and you may share any form of content(Images, Audio, Video and documents ) from another app to my app. There is also a video compressor, an iOS actionsheet, an document, and other file download options in iOS. Finally, integrated media or any type of file picker and Push Notification.",
    para: [],
  },
  {
    id: 7,
    startYear: "2024",
    endYear: "Current",
    company_name: "Cyces Innovation Labs",
    image_name: "nextjs_image2.png",
    language_used: "JavaScript",
    filter: "Next Js",
    tech: ["JavaScript", "Rest API", "Redux ToolKit", "TailwindCSS"],
    icons: [RiNextjsFill, RiTailwindCssFill, IoLogoPwa],
    project_name: "Truliv Web App(PWA)",
    des: "",
    para: [],
  },
  {
    id: 8,
    startYear: "2024",
    endYear: "Current",
    company_name: "Cyces Innovation Labs",
    image_name: "react_native5.png",
    language_used: "JavaScript",
    filter: "React Native",
    tech: ["JavaScript", "Rest API", "Redux ToolKit", "Redux Slice"],
    icons: [IoLogoAndroid, FaAppStoreIos],
    project_name: "Truliv",
    des: "",
    para: [],
  },
  // { startYear: "", endYear: "", company_name: "", title: "", des: "", para:""},
];

export const certificates = [
  {
    image: "",
    title: "Android App Developer",
    conducted_by: "My Captain",
    project_name: "FB Login & Sign Up Page and Scientific Calculator",
    date: null,
  },
  {
    image: "",
    title: "IMP-2021 Conference, NaTToE-2021",
    conducted_by: "INAE & IIT Hyderabad",
    project_name: "Smart Meter V3",
    date: "9-10 July, 2021",
  },
  // { image: "", title: "", conducted_by: "", project_name: "", date: "" },
];

export const resume_skills = [
  {
    title: "Coding Skills",
    content: [
      { title: "JavaScript", percentage: 95 },
      { title: "TypeScript", percentage: 75 },
      { title: "HTML/CSS", percentage: 90 },
      { title: "TailwindCss", percentage: 90 },
      { title: "RTK Query", percentage: 75 },
      { title: "Java", percentage: 60 },
    ],
  },
  {
    title: "FrameWork Skills",
    content: [
      { title: "React", percentage: 90 },
      { title: "React Native", percentage: 95 },
      { title: "Next Js", percentage: 90 },
    ],
  },
  // {
  //   title: "",
  //   content: [
  //     { title: "", percentage: 0 },
  //     { title: "", percentage: 0 },
  //     { title: "", percentage: 0 },
  //   ],
  // },
];

export const portfolio_nav_options = ["All", "React Native", "Next Js", "Java"];

export const images_array = [
  "nextjs_image2.png",
  "react_native5.png",
  "react_native3.jpeg",
  "react_native2.png",
  "react_native4.png",
  "nextjs_image1.png",
  "react_native1.jpeg",
  "java.jpeg",
];

export const contactMessageFields = {
  name: "Name",
  email: "Email",
  subject: "Subject",
  msg: "Message",
};

export const contact_left_content = [
  {
    icon: CiMobile3,
    title: "+91 9999999999",
    des: "Contact me at this number if you have any questions or require assistance in creating your mobile or online application.",
  },
  {
    icon: FaMapLocationDot,
    title: "India",
    des: "Contact me at this number if you have any questions or require assistance in creating your mobile or online application.",
  },
  {
    icon: IoIosMail,
    title: "hello@example.com",
    des: "Contact me at this number if you have any questions or require assistance in creating your mobile or online application.",
  },
];

export const accordian_data = [
  {
    title: "React Native",
    des: "React Native is an open-source UI software framework created by Meta Platforms, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling developers to use the React framework along with native platform capabilities.",
  },
  {
    title: "Next Js",
    des: "Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.",
  },
  {
    title: "Node Js",
    des: "Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting. ",
  },
];
