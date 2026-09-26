import emailjs from "@emailjs/browser";

export const sendMessage = (formData) => {
  return emailjs.send(
    "service_d3gi9ql",      // Service ID
    "template_zwmdnjm",     // Template ID
    {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.message,
    },
    "igG73VYa1BXQVaEck"      // Public Key
  );
};