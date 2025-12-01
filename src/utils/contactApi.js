const API_BASE_URL = import.meta.env.VITE_API_URL || "https://codedbyjessi.com";

export const submitContactForm = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/contact/submit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to submit form");
    }

    return data;
  } catch (error) {
    console.error("Contact form submission error:", error);
    throw error;
  }
};
