import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import socialsData from "./consts";
import "./footer.css";

function Footer() {
  const [socials, setSocials] = useState(socialsData);

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
