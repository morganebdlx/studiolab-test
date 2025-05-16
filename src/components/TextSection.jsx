import './TextSection.css';
import arrow from '../assets/button-arrow.png';

function TextSection() {

  return (
    <>
      <div className="text-section">
        <p>ADN</p>
        <h2>V7LVET</h2>
        <p>V7LVET est né d’une conviction forte : donner à l’expertise comptable une nouvelle dimension,
        à travers le prisme du conseil stratégique et des technologies de pointe.
        Au-delà des chiffres, nous sommes un partenaire engagé, présent à chaque étape décisive de la vie de votre entreprise
        - du premier souffle à la pleine maturité.</p>
        <button className="text-section-button">En savoir plus <img className="button-arrow" src={arrow} alt="Flèche du bouton" /></button>
      </div>
    </>
  )
}

export default TextSection
