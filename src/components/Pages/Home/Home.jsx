import './home.css';
import Carousel from 'react-bootstrap/Carousel'

const carouselItems = [
  {
    className: "press-shot-3",
    header: "About:",
    description: "25 year old DJ/Producer based in London, UK. Tech House/UK Bass/Lofi House/Garage/Drum & Bass/Dubstep."
  },
  {
    className: "press-shot-1",
    header: "Releases:",
    description: "Night Bass, Monstercat, Circus Records, IN/ROTATION, Maraki Records, Crucast, Deeprot, The Wub Club, Saucy Records, Supersize, Strictly Flava, Yosh, 3000 Bass, Feuille Vierge, Gassed, Brøken, Project Allout Records, Pack London, Open Outlets, Articulate Sound, Certified."
  },
  {
    className: "press-shot-4",
    header: "Support From:",
    description: "My Nu Leng, AC Slater, Phlegmatic Dogs, Matroda, Bleu Clair, Holy Goof, Notion, Skepsis, Darkzy, TS7, Shapes + more."
  },
]

function Home() {
  return (
    <Carousel className="carousel">
      {carouselItems.map(carouselItem => (
        <Carousel.Item className="carousel-item">
          <div className={carouselItem.className} />
          <Carousel.Caption>
            <h3>{carouselItem.header}</h3>
            <p>{carouselItem.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel> 
  );
}

export default Home;
