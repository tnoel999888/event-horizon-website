import "./contact.css";
import React, { useState, useEffect } from "react";
import { CircularProgress } from "@material-ui/core";
import PressShot2 from "../../../assets/press-shot-2.jpg";

function Contact() {
  const initialFormDetails = { name: "", email: "", message: "" };
  const [formDetails, setFormDetails] = useState(initialFormDetails);
  const [formValid, setFormValid] = useState(false);
  const [emailStatus, setEmailStatus] = useState("SUBMIT");
  const updateFormDetails = (key, value) => setFormDetails({ ...formDetails, [key]: value });

  const EMAIL_STATUS = {
    SUBMIT: {
      key: "SUBMIT",
      text: "Submit",
      render: () => (
        <button
          type="submit"
          className="btn btn-primary"
          disabled={!formValid || emailStatus === EMAIL_STATUS.SENDING.key}
        >
          Submit
        </button>
      ),
    },
    SENDING: {
      key: "SENDING",
      text: "Sending",
      render: () => (
        <div>
          <p className="sending-label">Sending...</p>
          <CircularProgress size="1rem" />
        </div>
      ),
    },
    SENT: {
      key: "SENT",
      text: "Sent!",
      render: () => <p>{EMAIL_STATUS.SENT.text}</p>,
    },
    FAILED: {
      key: "FAILED",
      text: "Email Failed to send",
      render: () => <p>{EMAIL_STATUS.FAILED.text}</p>,
    },
  };

  function resetForm() {
    setFormDetails(initialFormDetails);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setEmailStatus(EMAIL_STATUS.SENDING.key);

    fetch("http://localhost:3002/send", {
      method: "POST",
      body: JSON.stringify(formDetails),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(
      (response) => (response.json()),
    ).then((response) => {
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

          { EMAIL_STATUS[emailStatus].render() }
        </form>
      </div>
    </div>
  );
}

export default Contact;
