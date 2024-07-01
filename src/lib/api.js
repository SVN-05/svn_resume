export const sendContactForm = async (formData) => {
  try {
    await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      return res.json();
    });
  } catch (error) {
    console.error("Error sending contact form:", error);
    return error;
  }
};
