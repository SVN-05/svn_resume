import { theme } from "../../../tailwind.config";
import { IoLogoCss3, IoLogoAndroid } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa6";
import { RiNextjsFill, RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaJava } from "react-icons/fa6";
import { FaServer, FaAppStoreIos } from "react-icons/fa";
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
  { text: "Resume", link: "" },
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
