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
