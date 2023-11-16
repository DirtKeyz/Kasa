import { Link } from "react-router-dom";
import "./Card.scss";

function Card({ title, imagePath, id }) {
  return (
    <Link to={`/logement/${id}`}>
      <div className="card">
        <div className="overlay"></div>
        <div className="card_title">{title}</div>
        <img src={imagePath} alt="image du logement"></img>
      </div>
    </Link>
  );
}

export default Card;
