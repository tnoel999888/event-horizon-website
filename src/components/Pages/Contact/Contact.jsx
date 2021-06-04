import './contact.css';
import PressShot2 from "../../../assets/press-shot-2.jpg";
import { useState, useEffect } from 'react';
import { Spinner } from "react-bootstrap";

const EMAIL_STATUS = {
  SUBMIT: {
    key: 'SUBMIT',
    text: 'Submit'
  },
  SENDING: {
    key: 'SENDING',
    text: 'Sending'
  }
}

function Contact() {
  const initialFormDetails = { name: '', email: '', message: '' };
  const [formDetails, setFormDetails] = useState(initialFormDetails);
  const [formValid, setFormValid] = useState(false);
  const [emailStatus, setEmailStatus] = useState(EMAIL_STATUS.SUBMIT.key);
  const updateFormDetails = (key, value) => setFormDetails({ ...formDetails, [key]: value });

  useEffect(() => {
    if (formDetails.name === '' || formDetails.email === '' || formDetails.message === '') {
      setFormValid(false);
    } else if (formDetails.email !== '') {
        let lastAtPos = formDetails.email.lastIndexOf('@');
        let lastDotPos = formDetails.email.lastIndexOf('.');

        if (!(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          formDetails.email.indexOf('@@') === -1 &&
          lastDotPos > 2 &&
          (formDetails.email.length - lastDotPos) > 2)
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
      <img className="press-shot-2" alt="" src={PressShot2} height="900"/>

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
              type="text"
              className="form-control"
              value={formDetails.name}
              onChange={event => updateFormDetails('name', event.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="exampleInputEmail1">Email address:</label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              value={formDetails.email}
              onChange={event => updateFormDetails('email', event.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="message">Message:</label>
            <textarea
              className="form-control"
              rows="5"
              value={formDetails.message}
              onChange={event => updateFormDetails('message', event.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={!formValid || emailStatus === EMAIL_STATUS.SENDING.key}
          >
            { EMAIL_STATUS[emailStatus].text }
            {emailStatus === EMAIL_STATUS.SENDING.key &&
              <Spinner
                className="spinner"
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            }
          </button>
        </form>
      </div>
    </div>
  );

  function resetForm(){
    setFormDetails(initialFormDetails)
  }

  function handleSubmit(e) {
    e.preventDefault();
    setEmailStatus(EMAIL_STATUS.SENDING.key);

    fetch('http://localhost:3002/send', {
      method: "POST",
      body: JSON.stringify(formDetails),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then(
      (response) => (response.json())
    ).then((response) => {
      setEmailStatus(EMAIL_STATUS.SUBMIT.key);
      if (response.status === 'success') {
        alert("Email sent successfully!");
        resetForm();
      } else if(response.status === 'fail') {
        alert("Email failed to send.")
      }
    })
  }
}

export default Contact;
