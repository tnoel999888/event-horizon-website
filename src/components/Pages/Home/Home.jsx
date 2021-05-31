import './home.css';
import Carousel from 'react-bootstrap/Carousel'

function Home() {
  return (
    <Carousel className="carousel">
      <Carousel.Item className="carousel-item">
        <div className="press-shot-3" />
        <Carousel.Caption>
          <h3>About:</h3>
          <p>25 year old DJ/Producer based in London, UK.<br/> Tech House/UK Bass/Lofi House/Garage/Drum & Bass/Dubstep.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <div className="press-shot-1" />
        <Carousel.Caption>
          <h3>Releases:</h3>
          <p>Night Bass, Monstercat, Circus Records, IN/ROTATION, Maraki Records, Crucast, Deeprot, The Wub Club, Saucy Records, Supersize, Strictly Flava, Yosh, 3000 Bass, Feuille Vierge, Gassed, Brøken, Project Allout Records, Pack London, Open Outlets, Articulate Sound, Certified.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <div className="press-shot-4" />
        <Carousel.Caption>
          <h3>Support From:</h3>
          <p>My Nu Leng, AC Slater, Phlegmatic Dogs, Matroda, Bleu Clair, Holy Goof, Notion, Skepsis, Darkzy, TS7, Shapes + more.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> 
  );
}

export default Home;
