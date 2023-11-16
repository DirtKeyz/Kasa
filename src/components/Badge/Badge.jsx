import "./Badge.scss";
import db from "../../data/logements.json";
import { useParams } from "react-router-dom";

function Badge() {
  const { id } = useParams();
  const log = db.find((item) => item.id === id);

  return <img className="badge" src={log.host.picture} alt="badge" />;
}

export default Badge;
