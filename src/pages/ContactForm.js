import React, { useState } from "react";
import "./ContactForm.css";
import emailjs from "emailjs-com";
export const ContactForm = () => {
  const [data, setData] = useState({});
  const sendMail = () => {
    emailjs.send("service_lwemd0i", "template_dk1zswi", data).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  };
  return (
    <div className="contact-container">
      <div className="form">
        <h1 className="form-title">Contact Form</h1>
        <div className="top-inputs">
          <input
            className="left-input"
            type="text"
            placeholder="Name"
            onChange={(e) => {
              setData({ ...data, from_name: e.target.value });
            }}
          />
          <input
            className="right-input"
            type="text"
            placeholder="Email"
            onChange={(e) => {
              setData({ ...data, subject: e.target.value });
            }}
          />
        </div>
        <div className="bottom-inputs">
          <textarea
            className="text-area"
            rows={7}
            type="text"
            onChange={(e) => {
              setData({ ...data, message: e.target.value });
            }}
            placeholder="Message"
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <button onClick={sendMail} className="form-button">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
