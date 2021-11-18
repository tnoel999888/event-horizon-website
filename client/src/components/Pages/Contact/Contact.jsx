import React, { useState, useEffect } from "react";
import { CircularProgress } from "@material-ui/core";
import PressShot2 from "../../../assets/press-shot-2-low-res.jpg";
import sendEmail from "../../../api/email";
import EMAIL_STATUS from "./consts";
import "./contact.css";

function Contact() {
  const initialFormDetails = { name: "", email: "", message: "" };
  const [formDetails, setFormDetails] = useState(initialFormDetails);
  const [formValid, setFormValid] = useState(false);
  const [emailStatus, setEmailStatus] = useState(EMAIL_STATUS.SUBMIT.key);
  const updateFormDetails = (key, value) => setFormDetails({ ...formDetails, [key]: value });

  function resetForm() {
    setFormDetails(initialFormDetails);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setEmailStatus(EMAIL_STATUS.SENDING.key);

    sendEmail(formDetails).then((response) => {
      setEmailStatus(EMAIL_STATUS.SUBMIT.key);
      if (response.status === "success") {
        setEmailStatus(EMAIL_STATUS.SENT.key);
        resetForm();
      } else if (response.status === "fail") {
        setEmailStatus(EMAIL_STATUS.FAILED.key);
      }
    });
  }

  useEffect(() => {
    if (formDetails.name === "" || formDetails.email === "" || formDetails.message === "") {
      setFormValid(false);
    } else if (formDetails.email !== "") {
      const lastAtPos = formDetails.email.lastIndexOf("@");
      const lastDotPos = formDetails.email.lastIndexOf(".");

      if (!(
        lastAtPos < lastDotPos
          && lastAtPos > 0
          && formDetails.email.indexOf("@@") === -1
          && lastDotPos > 2
          && (formDetails.email.length - lastDotPos) > 2)
      ) {
        setFormValid(false);
      } else {
        setFormValid(true);
      }
    } else {
      setFormValid(true);
    }
  }, [formDetails]);

  const submitRenderer = (
    <button
      type="submit"
      className="btn btn-primary"
      disabled={!formValid || emailStatus === EMAIL_STATUS.SENDING.key}
    >
      Submit
    </button>
  );

  const sendingRenderer = (
    <div>
      <p className="sending-label">Sending...</p>
      <CircularProgress size="1rem" />
    </div>
  );

  const sentRenderer = <p>{EMAIL_STATUS.SENT.text}</p>;

  const failedRenderer = <p>{EMAIL_STATUS.FAILED.text}</p>;

  const renderEmailStatus = (status) => {
    switch (status) {
    case EMAIL_STATUS.SUBMIT.key:
      return submitRenderer;
    case EMAIL_STATUS.SENDING.key:
      return sendingRenderer;
    case EMAIL_STATUS.SENT.key:
      return sentRenderer;
    case EMAIL_STATUS.FAILED.key:
      return failedRenderer;
    default:
      return null;
    }
  };

  return (
    <div className="contact">
      <img className="press-shot-2" alt="" src={PressShot2} height="900" />

      <div className="email-and-form">
        <div className="title-and-email">
          <p className="title">Bookings/General Enquiries/Promo:</p>
          <a className="email" href="mailto:eventhorizonmusic@outlook.com">eventhorizonmusic@outlook.com</a>
        </div>

        <p className="form-instruction">- Or fill out the form below -</p>

        <form className="form" method="POST" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              className="form-control"
              value={formDetails.name}
              onChange={(event) => updateFormDetails("name", event.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="exampleInputEmail1">Email address:</label>
            <input
              id="exampleInputEmail1"
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              value={formDetails.email}
              onChange={(event) => updateFormDetails("email", event.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="message">Message:</label>
            <textarea
              className="form-control"
              rows="5"
              value={formDetails.message}
              onChange={(event) => updateFormDetails("message", event.target.value)}
            />
          </div>

          { renderEmailStatus(emailStatus) }
        </form>
      </div>
    </div>
  );
}

export default Contact;
