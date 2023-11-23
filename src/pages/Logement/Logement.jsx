import "./Logement.scss";
import Barre from "../../components/Barre/Barre";
import Badge from "../../components/Badge/Badge";
import Tag from "../../components/Tag/Tag";
import Error from "../Error/Error";
import Proprio from "../../components/Proprio/Proprio";
import Note from "../../components/Note/Note";
import Carrousel from "../../components/Carrousel/Carrousel";
import db from "../../data/logements.json";
import { useParams } from "react-router-dom";

function Logement() {
  //recuperation de la bonne fiche logement et renvoi sur 404 si ID inexistant

  const { id } = useParams();
  const log = db.find((item) => item.id === id);
  if (!log) {
    return <Error />;
  }

  //affichage equipements sous forme de liste

  const equipementsLog = log.equipments.map((equipment, i) => {
    return <li key={i}>{equipment}</li>;
  });

  return (
    <div className="page_logement">
      <Carrousel props={log} />
      <div className="global_infos">
        <div className="location">
          <div className="title_logement">{log.title}</div>
          <div className="subtitle_logement">{log.location}</div>
          <Tag props={log} />
        </div>
        <div className="infos_proprietaire">
          <div className="notation">
            <Note note={log.rating} />
          </div>
          <div className="identite">
            <div className="proprietaire">
              <Proprio props={log} />
            </div>
            <Badge props={log} />
          </div>
        </div>
      </div>
      <div className="descr-equip">
        <div className="barre">
          <Barre barreTitle="Description" barreContent={log.description} />
        </div>
        <div className="barre">
          <Barre barreTitle="Equipements" barreContent={equipementsLog} />
        </div>
      </div>
    </div>
  );
}

export default Logement;
