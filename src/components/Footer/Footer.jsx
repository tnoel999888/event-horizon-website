import React, { useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import './footer.css';

function Footer() {
  const [socials, setSocials] = useState([
    {
      label: 'Instagram',
      className: 'instagram',
      hovering: false,
      url: 'https://www.instagram.com/eventhorizonmusicuk/'
    },
    {
      label: 'Facebook',
      className: 'facebook',
      hovering: false,
      url: 'https://www.facebook.com/eventhorizonmusic/'
    },
    {
      label: 'Twitter',
      className: 'twitter',
      hovering: false,
      url: 'https://twitter.com/eventhorizon_uk'
    },
    {
      label: 'Soundcloud',
      className: 'soundcloud',
      hovering: false,
      url: 'https://soundcloud.com/event_horizonmusic'
    },
    {
      label: 'Spotify',
      className: 'spotify',
      hovering: false,
      url: 'https://open.spotify.com/artist/4SEMFplTKKlp8dDnnImaYf?si=UTLUsV2TSMqTgJqGVbcR1w'
    },
  ]);

  const updateSocial = (i, newState) => {
    const socialsCopy = [...socials];
    socialsCopy[i] = { ...socialsCopy[i], ...newState }
    setSocials(socialsCopy);
  }

  return (
    <div className="footer">
      <div>
        {socials.map((social, i) => (
          <div
            key={i} 
            onMouseOver={() => updateSocial(i, { hovering: true })} 
            onMouseLeave={() => updateSocial(i, { hovering: false })} 
            className={social.className}
          >
            <SocialIcon url={social.url} fgColor={!socials[i].hovering ? "#9e9e9e" : "white"} bgColor={!socials[i].hovering ? "black" : null} />
          </div>
        ))}
      </div>
    </div>    
  );
}

export default Footer;
