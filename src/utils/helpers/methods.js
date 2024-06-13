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
