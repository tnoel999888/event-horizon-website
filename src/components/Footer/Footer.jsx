import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import "./footer.css";

function Footer() {
  const [socials, setSocials] = useState([
    {
      label: "Instagram",
      className: "instagram",
      hovering: false,
      url: "https://www.instagram.com/eventhorizonmusicuk/",
    },
    {
      label: "Facebook",
      className: "facebook",
      hovering: false,
      url: "https://www.facebook.com/eventhorizonmusic/",
    },
    {
      label: "Twitter",
      className: "twitter",
      hovering: false,
      url: "https://twitter.com/eventhorizon_uk",
    },
    {
      label: "Soundcloud",
      className: "soundcloud",
      hovering: false,
      url: "https://soundcloud.com/event_horizonmusic",
    },
    {
      label: "Spotify",
      className: "spotify",
      hovering: false,
      url: "https://open.spotify.com/artist/4SEMFplTKKlp8dDnnImaYf?si=UTLUsV2TSMqTgJqGVbcR1w",
    },
  ]);

  const updateSocial = (i, newState) => {
    const socialsCopy = [...socials];
    socialsCopy[i] = { ...socialsCopy[i], ...newState };
    setSocials(socialsCopy);
  };

  return (
    <div className="footer">
      {socials.map((social, i) => (
        <div
          key={social.label}
          onFocus={() => updateSocial(i, { hovering: true })}
          onBlur={() => updateSocial(i, { hovering: false })}
          onMouseOver={() => updateSocial(i, { hovering: true })}
          onMouseLeave={() => updateSocial(i, { hovering: false })}
          className={social.className}
        >
          <SocialIcon url={social.url} fgColor={!socials[i].hovering ? "#848484" : "#ffffff"} bgColor={!socials[i].hovering ? "#000000" : null} />
        </div>
      ))}
    </div>
  );
}

export default Footer;
