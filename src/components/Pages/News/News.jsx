import React, { useState } from "react";
import "./news.css";
import instagramMedia from "../../../api-responses/instagram-media";
import CarouselIcon from "../../../assets/icons/copy.png";
import CarouselIconHover from "../../../assets/icons/copy-hover.png";
import VideoIcon from "../../../assets/icons/play-button-arrowhead.png";
import VideoIconHover from "../../../assets/icons/play-button-arrowhead-hover.png";

function News() {
  const mediaData = instagramMedia.data;
  const [hoverCaption, setHoverCaption] = useState("");
  const [hoverIndex, setHoverIndex] = useState(null);

  const MEDIA = {
    VIDEO: {
      type: "VIDEO",
      alt: "video-icon",
      icon: VideoIcon,
      hoverIcon: VideoIconHover,
    },
    CAROUSEL_ALBUM: {
      type: "CAROUSEL_ALBUM",
      alt: "carousel-album-icon",
      icon: CarouselIcon,
      hoverIcon: CarouselIconHover,
    },
    IMAGE: {
      type: "IMAGE",
      alt: "image-icon",
      icon: null,
      hoverIcon: null,
    },
  };

  const getMediaIcon = (mediaType, hover) => (
    hover ? MEDIA[mediaType].hoverIcon : MEDIA[mediaType].icon
  );

  const getMediaAlt = (mediaType) => MEDIA[mediaType].alt;

  return (
    <h1 className="news">
      {mediaData.map((mediaItem, index) => {
        const itemIsHovered = index === hoverIndex;
        const mediaIcon = getMediaIcon(mediaItem.media_type, itemIsHovered);

        return (
          <a
            href={mediaItem.permalink}
            className="insta-media-container"
            onMouseEnter={() => {
              setHoverCaption(mediaItem.caption);
              setHoverIndex(index);
            }}
            onMouseLeave={() => setHoverIndex(-1)}
          >
            { mediaIcon && <img src={mediaIcon} alt={getMediaAlt(mediaItem.media_type)} className="insta-media-icon" /> }
            { itemIsHovered && <div className="insta-media-caption">{hoverCaption}</div> }
            <div
              className="insta-media-img"
              style={{ backgroundImage: `url(${mediaItem.thumbnail_url ? mediaItem.thumbnail_url : mediaItem.media_url})` }}
            />
          </a>
        );
      })}
    </h1>
  );
}

export default News;
