import './contact.css';
import PressShot2 from "../../../assets/press-shot-2.jpg";

function Contact() {
  return (
    <div className="contact">
      <div className="title-and-email">
        <p className="title">Bookings/General Enquiries/Promo:</p>
        <a className="email" href="mailto:eventhorizonmusic@outlook.com">eventhorizonmusic@outlook.com</a>
      </div>
      <img className="press-shot-2" alt="" src={PressShot2} height="900"/>
    </div>    
  );
}

export default Contact;
