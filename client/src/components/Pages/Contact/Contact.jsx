import React, { useState, useEffect } from "react";
import { CircularProgress } from "@material-ui/core";
import { block } from "bem-cn";
import PressShot2 from "../../../assets/press-shot-2-low-res.jpg";
import sendEmail from "../../../api/email";
import EMAIL_STATUS from "./consts";
import API_RESPONSE_STATUSES from "../../../api/consts";
import "./contact.scss";

const classname = block("contact");

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
      if (response.status === API_RESPONSE_STATUSES.SUCCESS) {
        setEmailStatus(EMAIL_STATUS.SENT.key);
        resetForm();
      } else if (response.status === API_RESPONSE_STATUSES.FAIL) {
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
      {EMAIL_STATUS.SUBMIT.text}
    </button>
  );

  const sendingRenderer = (
    <div>
      <p className={classname("sending-label")}>{EMAIL_STATUS.SENDING.text}</p>
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
    <div className={classname()}>
      <img className={classname("press-shot-2")} alt="" src={PressShot2} height="900" />

      <div className={classname("email-and-form")}>
        <div className={classname("title-and-email")}>
          <p className={classname("title")}>Bookings/General Enquiries/Promo:</p>
          <a className={classname("email")} href="mailto:eventhorizonmusic@outlook.com">eventhorizonmusic@outlook.com</a>
        </div>

        <p className={classname("form-instruction")}>- Or fill out the form below -</p>

        <form className="form" method="POST" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className={classname("form-label")} htmlFor="name-input">Name:</label>
            <input
              id="name-input"
              data-testid="name-input"
              type="text"
              className="form-control"
              value={formDetails.name}
              onChange={(event) => updateFormDetails("name", event.target.value)}
            />
          </div>

          <div className="form-group">
            <label className={classname("form-label")} htmlFor="email-address-input">Email address:</label>
            <input
              id="email-address-input"
              data-testid="email-address-input"
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              value={formDetails.email}
              onChange={(event) => updateFormDetails("email", event.target.value)}
            />
          </div>

          <div className="form-group">
            <label className={classname("form-label")} htmlFor="message-input">Message:</label>
            <textarea
              id="message-input"
              data-testid="message-input"
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
