import './CardsSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


function CardsSection() {

  return (
      <div className="cards-section">
        <div className="intro">
          <div className="intro-left">
            <h2>Avantages</h2>
          </div>
          <div className="intro-right">
            <p>Rejoindre <strong>V7LVET</strong>, c’est choisir un cabinet où <strong>le conseil est au cœur du
              métier</strong>, où chaque mission est une opportunité de créer une véritable valeur
              ajoutée pour votre entreprise.</p>
            <button className="cards-section-button">En savoir plus <FontAwesomeIcon icon={faArrowRight} className="intro-arrow"/></button>
          </div>
        </div>
        <div className="cards">
          <div className="row row-one">
            <div className="card">
            <button className="arrow-card"><FontAwesomeIcon icon={faArrowRight} className="card-arrow"/></button>
              <h3>Card 1</h3>
              <p>This is the first card.</p>
            </div>
            <div className="card">
              <h3>Card 2</h3>
              <p>This is the second card.</p>
            </div>
            <div className="card">
              <h3>Card 3</h3>
              <p>This is the third card.</p>
            </div>
          </div>
          <div className="row row-two">
            <div className="card">
              <h3>Card 4</h3>
              <p>This is the fourth card.</p>
            </div>
            <div className="card">
              <h3>Card 5</h3>
              <p>This is the fifth card.</p>
            </div>
          </div>
        </div>
      </div>
  );
}

export default CardsSection;
