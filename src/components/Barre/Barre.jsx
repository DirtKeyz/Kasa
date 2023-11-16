import { useState } from "react";
import "./Barre.scss";

function Barre({ barreTitle, barreContent }) {
  const [isOpen, setIsOpen] = useState(false);

  const functionToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`barre_complete ${isOpen ? "open" : ""}`}>
        <div className="barre" onClick={functionToggle}>
          <p className="barreTitle">{barreTitle}</p>
          <i
            className={`fa-solid fa-chevron-down ${isOpen ? "rotate" : ""}`}
          ></i>
        </div>
        {isOpen && <p className="barreContent">{barreContent}</p>}
      </div>
    </>
  );
}

export default Barre;
