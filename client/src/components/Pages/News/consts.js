import VideoIcon from "../../../assets/icons/play-button-arrowhead.png";
import CarouselIcon from "../../../assets/icons/copy.png";

const MEDIA = {
  VIDEO: {
    type: "VIDEO",
    alt: "video-icon",
    icon: VideoIcon,
  },
  CAROUSEL_ALBUM: {
    type: "CAROUSEL_ALBUM",
    alt: "carousel-album-icon",
    icon: CarouselIcon,
  },
  IMAGE: {
    type: "IMAGE",
    alt: "image-icon",
    icon: null,
  },
};

const getMediaIcon = (mediaType) => MEDIA[mediaType].icon;

const getMediaAlt = (mediaType) => MEDIA[mediaType].alt;

export { MEDIA, getMediaIcon, getMediaAlt };
