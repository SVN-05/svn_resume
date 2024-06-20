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
  { icon: [FaJava], title: "Java", des: "" },
  { icon: [FaServer], title: "RTK Query", des: "" },
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
    des: "",
  },
  {
    startYear: "2018",
    endYear: "2019",
    studiedAt: "PSLV CBSE School",
    title: "12th Grade",
    des: "",
  },
  {
    startYear: "2019",
    endYear: "2023",
    studiedAt: "Hindustan Institute of Technology and Science",
    title: "B.Tech IT-Cyber Security",
    des: "",
  },
  // { startYear: "", endYear: "", studiedAt: "", title: "", des: "" },
];

export const experience = [
  {
    startYear: "2020",
    endYear: "2022",
    company_name: "College Project",
    title: "Mobile App Developer",
    des: "I utilised the Java programming language to create my own innovative concept that fits specific criteria, such as viewing power usage information from anywhere via the internet. Additionally, hardware components were employed to transfer data from an electricity metre to a real-time database on Firebase.",
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
    des: "",
  },
  {
    startYear: "2023",
    endYear: "Current",
    company_name: "Cyces Innovation Labs",
    title: "Mid Level Front-End Developer",
    des: "",
  },
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
];
