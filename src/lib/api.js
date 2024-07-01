export const sendContactForm = async (formData) => {
  try {
    await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    }).then(async (res) => {
      const response = await res?.json();
      return response;
    });
  } catch (error) {
    console.error("Error sending contact form:", error);
    return error;
  }
};
