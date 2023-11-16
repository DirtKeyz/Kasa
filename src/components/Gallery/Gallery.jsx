import "./Gallery.scss";
import Card from "../Card/Card";
import db from "../../data/logements.json";

function Gallery() {
  return (
    <div className="gallery">
      {db.map((logement, i) => (
        <Card
          key={i}
          id={logement.id}
          title={logement.title}
          imagePath={logement.cover}
        />
      ))}
    </div>
  );
}

export default Gallery;
