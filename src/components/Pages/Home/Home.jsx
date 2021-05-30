import './home.css';
import PressShot1 from '../../../assets/press-shot-1.jpg'
import PressShot2 from '../../../assets/press-shot-2.jpg'
import PressShot3 from '../../../assets/press-shot-3.jpg'
import Carousel from 'react-bootstrap/Carousel'

function Home() {
  return (
    <Carousel className="carousel">
      <Carousel.Item className="carousel-item">
        <img
          className="carousel-img"
          src={PressShot2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>About:</h3>
          <p>25 year old DJ/Producer based in London, UK.<br/> Tech House/UK Bass/Lofi House/Garage/Drum & Bass/Dubstep.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <img
          className="carousel-img"
          src={PressShot1}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Releases:</h3>
          <p>Night Bass, Monstercat, Circus Records, IN/ROTATION, Maraki Records, Crucast, Deeprot, The Wub Club, Saucy Records, Supersize, Strictly Flava, Yosh, 3000 Bass, Feuille Vierge, Gassed, Brøken, Project Allout Records, Pack London, Open Outlets, Articulate Sound, Certified.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <img
          className="carousel-img"
          src={PressShot3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Support From:</h3>
          <p>My Nu Leng, AC Slater, Phlegmatic Dogs, Matroda, Bleu Clair, Holy Goof, Notion, Skepsis, Darkzy + more.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> 
  );
}

export default Home;
