import Banner from "../../components/Banner/Banner";
import Barre from "../../components/Barre/Barre";
import "./About.scss";

function About() {
  return (
    <>
      <Banner imagePath="src/assets/banner_about.png" bannerText="" />
      <div className="barres">
        <div className="barre">
          <Barre
            barreTitle="Fiabilité"
            barreContent="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
 régulièrement vérifiées par nos équipes."
          />
        </div>
        <div className="barre">
          <Barre
            barreTitle="Respect"
            barreContent="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
        </div>
        <div className="barre">
          <Barre
            barreTitle="Service"
            barreContent="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
          />
        </div>
        <div className="barre">
          <Barre
            barreTitle="Sécurité"
            barreContent="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
          correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
          locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
          également des ateliers sur la sécurité domestique pour nos hôtes."
          />
        </div>
      </div>
    </>
  );
}

export default About;
