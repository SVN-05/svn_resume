export const sendContactForm = async (formData) => {
  try {
    await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  } catch (error) {
    console.error("Error sending contact form:", error);
  }
};
