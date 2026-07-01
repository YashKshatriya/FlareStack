import { useState } from "react";

/**
 * Sends form data using EmailJS. Replace SERVICE_ID and TEMPLATE_ID
 * with your actual EmailJS service and template IDs from your EmailJS dashboard.
 */
const SERVICE_ID = "service_r6v02ps";
const TEMPLATE_ID = "template_jmkk0mc";

export function useFormSubmit() {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  async function submit(data) {
    setStatus("loading");
    try {
      const response = await window.emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        data,
        "RuH6lpEkC-aSm3IXx"
      );
      
      if (response.status === 200) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }
  }

  return { status, submit, setStatus };
}
