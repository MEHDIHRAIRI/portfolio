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
        <div className="form-group">
          <div className="top-inputs">
            <input
              classname="top-input"
              type="text"
              onChange={(e) => {
                setData({ ...data, from_name: e.target.value });
              }}
            />
            <input
              classname="top-input"
              type="text"
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
            <a
              onClick={sendMail}
              style={{
                backgroundColor: "white",
                width: "40%",
              }}
            >
              Send
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
