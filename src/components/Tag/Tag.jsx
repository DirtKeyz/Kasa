import "./Tag.scss";
import db from "../../data/logements.json";
import { useParams } from "react-router-dom";

function Tag() {
  const { id } = useParams();
  const log = db.find((item) => item.id === id);

  return (
    <div className="tags">
      {log.tags.map((tag, i) => (
        <div key={i} className="tag">
          {tag}
        </div>
      ))}
    </div>
  );
}

export default Tag;
