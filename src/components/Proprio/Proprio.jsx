import db from "../../data/logements.json";
import { useParams } from "react-router-dom";

function Proprio() {
  const { id } = useParams();
  const log = db.find((item) => item.id === id);

  const nomComplet = log.host.name.split(" ");
  const prenom = nomComplet[0];
  const nom = nomComplet.slice(1).join(" ");
  return (
    <span>
      {prenom}
      <br />
      {nom}
    </span>
  );
}

export default Proprio;
