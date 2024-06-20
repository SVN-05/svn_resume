import { theme } from "../../../tailwind.config";
import { IoLogoCss3, IoLogoAndroid } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa6";
import { RiNextjsFill, RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaJava } from "react-icons/fa6";
import { FaServer, FaAppStoreIos, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { CgWebsite } from "react-icons/cg";
import { SiAndroidstudio, SiXcode } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export const colors = theme.extend.colors;
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
};

export const navBarOptions = [
  { text: "About Me", link: "/" },
  { text: "Resume", link: "/resume" },
  { text: "Portfolio", link: "" },
  { text: "Contact", link: "" },
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
  { icon: [RiJavascriptFill], title: "JavaScript", des: "" },
  { icon: [BiLogoTypescript], title: "TypeScript", des: "" },
  { icon: [FaGithub], title: "Github", des: "" },
  { icon: [FaHtml5], title: "HTML", des: "" },
  { icon: [IoLogoCss3], title: "CSS", des: "" },
  { icon: [RiTailwindCssFill], title: "TailWindCSS", des: "" },
  { icon: [FaServer], title: "RTK Query", des: "" },
  { icon: [FaJava], title: "Java", des: "" },
];

export const ide_content = [
  { icon: SiAndroidstudio, title: "Android Studio", des: "" },
  { icon: VscVscode, title: "Visual Studio Code", des: "" },
  { icon: SiXcode, title: "Xcode", des: "" },
];

export const project_content = [
  { icon: [IoLogoAndroid], title: "Smart Meter", des: "" },
  { icon: [CgWebsite], title: "E-Commerce Website", des: "" },
  { icon: [IoLogoAndroid], title: "SiteScribe", des: "" },
  { icon: [IoLogoAndroid, FaAppStoreIos], title: "Voxguru", des: "" },
  { icon: [IoLogoAndroid], title: "HOTI", des: "" },
  { icon: [IoLogoAndroid, FaAppStoreIos], title: "Truliv ", des: "" },
  { icon: [CgWebsite], title: "Truliv Web App", des: "" },
];

export const education = [
  {
    startYear: "2016",
    endYear: "2017",
    studiedAt: "Mahathma CBSE School",
    title: "10th Grade",
    des: "In my tenth grade, I earned a 9.5 CGPA, and my school provided me with opportunities for extracurricular activities such as the Science Expo, projects, and assignments. During the game time, I became interested in chess as an indoor game, skating, and basketball as outdoor games.",
  },
  {
    startYear: "2018",
    endYear: "2019",
    studiedAt: "PSLV CBSE School",
    title: "12th Grade",
    des: "I graduated from 12th grade with a 95%. I wanted to study at an IIT for my undergraduate degree, so I began preparing for JEE exams and received 70.3% in JEE main and 30% in JEE advanced.",
  },
  {
    startYear: "2019",
    endYear: "2023",
    studiedAt: "Hindustan Institute of Technology and Science",
    title: "B.Tech IT-Cyber Security",
    des: "In my UG, I earned a 9.4 CGPA throughout the course of eight semesters. My institution provided me with several opportunities to display my ability in design projects each semester, as well as to participate in conferences and contests relating to IT and computer science. I had the opportunity to demonstrate my Smart Metre V3 project at the IIT Kharagpur conference.",
  },
  // { startYear: "", endYear: "", studiedAt: "", title: "", des: "" },
];

export const experience = [
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
  {
    startYear: "2022",
    endYear: "2023",
    company_name: "College Project",
    title: "Junior Front-End Developer",
    des: "I became interested in web development and pondered why every firm began with a website and then developed mobile apps to make it easier for users to utilise. So I used the newest framework that suited me, Next Js. I created a clothes e-commerce website that replicated Amazon's straightforward procedure. To store user and purchase information, I utilised a Firebase real-time database. I came up with the concept of showing users how their package appears at each hub, therefore I utilised Firebase's Firestore database to store photos and display them on the user end.",
  },
  {
    startYear: "2023",
    endYear: "Current",
    company_name: "Cyces Innovation Labs",
    title: "Mid Level Front-End Developer",
    des: "My formal career began with a position as a mobile app developer at Cyces. Here, I had the opportunity to work on real-time projects as part of a team that were utilised by thousands of users. I learned how to manage a team and the fundamentals of discussing needs with team members. I learned how a project is built from start to finish, such as from UI designs to the presence of a bug-free end result. I used my expertise to build and maintain a stronger code base for a larger development team at Cyces. They provided me the opportunity to display my web development talents on the Truliv Web App project.",
  },
  // { startYear: "", endYear: "", company_name: "", title: "", des: "",},
];

export const projects = [
  {
    startYear: "2020",
    endYear: "2021",
    company_name: "College Project",
    title: "Smart Meter",
    des: "I utilised the Java programming language to create my own innovative concept that fits specific criteria, such as viewing power usage information from anywhere via the internet. Additionally, hardware components were employed to transfer data from an electricity metre to a real-time database on Firebase.",
    para: [
      "I utilised the Java programming language to create my own innovative concept that fits specific criteria, such as viewing power usage information from anywhere via the internet. In addition, iOT hardware components such as the Arduino UNO, ESP8266 wifi module, camera module, and so on were utilised to upload data from the power metre to the Firebase real-time database.",
      "The work flow is fairly simple: the camera module takes a snapshot of the digital metre reading, processes the image with Python on an Arduino Uno, and stores the number in Firebase over wifi.",
      "In a mobile device, the user must first complete the setup process, which includes entering the mobile number, otp authentication, password, and user details. After that, the user must connect to the same wifi network as the hardware device, and the user will be redirected to a webpage where he must enter the password entered in the user details page. Once done, the user launches the app, which links to the login page. Following login, the user will be taken to the dashboard page.",
    ],
  },
  {
    startYear: "2021",
    endYear: "2022",
    company_name: "College project",
    title: "Smart Meter V3",
    des: "I used Java script to make more enhancements and bring the user experience to the original version of the smart metre project. on this, I built push notification using firebase. The notice is triggered when the user surpasses 50%, 75%, and 100% of the limit the user sets on the limit setting page. I also handled app permission for internet access, wifi access, etc.",
    para: [
      "I utilised the Java programming language to create my own innovative concept that fits specific criteria, such as viewing power usage information from anywhere via the internet. In addition, iOT hardware components such as the Arduino UNO, ESP8266 wifi module, camera module, and so on were utilised to upload data from the power metre to the Firebase real-time database.",
      "The work flow is fairly simple: the camera module takes a snapshot of the digital metre reading, processes the image with Python on an Arduino Uno, and stores the number in Firebase over wifi.",
      "In a mobile device, the user must first complete the setup process, which includes entering the mobile number, otp authentication using firebase, password, and user details. After that, the user must connect to the same wifi network as the hardware device, and the user will be redirected to a webpage where he must enter the password entered in the user details page. Once done, the user launches the app, which links to the login page. Following login, the user will be taken to the dashboard page.",
    ],
  },
  {
    startYear: "2022",
    endYear: "2023",
    company_name: "College Project",
    title: "E-Commerce Website",
    des: "",
  },
  {
    startYear: "2023",
    endYear: "Current",
    company_name: "Cyces Innovation Labs",
    title: "SiteScribe",
    des: "",
  },
  {
    startYear: "2023",
    endYear: "Current",
    company_name: "Cyces Innovation Labs",
    title: "HOTI",
    des: "",
  },
  {
    startYear: "2023",
    endYear: "Current",
    company_name: "Cyces Innovation Labs",
    title: "Voxguru",
    des: "",
  },
  {
    startYear: "2024",
    endYear: "Current",
    company_name: "Cyces Innovation Labs",
    title: "Truliv",
    des: "",
  },
  {
    startYear: "2024",
    endYear: "Current",
    company_name: "Cyces Innovation Labs",
    title: "Truliv Web App(PWA)",
    des: "",
  },
  // { startYear: "", endYear: "", company_name: "", title: "", des: "", para:""},
];

export const certificates = [
  { image: "", title: "", conducted_by: "", project_name: "", date: "" },
  { image: "", title: "", conducted_by: "", project_name: "", date: "" },
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
