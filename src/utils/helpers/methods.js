import { toast } from "react-toastify";

export const getInitials = (name) => {
  const initials = name
    ?.split(" ")
    .map((word) => word[0])
    .join("");
  return initials;
};

export const getFirstletter = (text = "") => {
  const letter = text?.charAt(0);
  return letter;
};

export const toastFunction = (message, method = "success", sec = 3000) => {
  toast?.[method](message, {
    position: "bottom-center",
    autoClose: sec,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

export const formatDateTime = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const now = new Date();
  const dayName = days[now.getDay()];
  const monthName = months[now.getMonth()];
  const date = now.getDate();
  const hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const period = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12; // Convert to 12-hour format
  const dateObject = `${dayName}, ${monthName} ${date}`;
  const timeObject = `${formattedHours}:${minutes} ${period}`;
  const body = {
    date: dateObject,
    time: timeObject,
  };
  return body;
};
