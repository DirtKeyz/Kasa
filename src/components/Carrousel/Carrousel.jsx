import "./Carrousel.scss";
import { useState } from "react";

function Carrousel({ props }) {
  const slides = props.pictures;
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((index + 1) % slides.length);
  };

  const prev = () => {
    setIndex((index - 1 + slides.length) % slides.length);
  };

  const showArrows = slides.length > 1;

  return (
    <div className="carrousel">
      <div className="container">
        {slides.map((slide, i) => (
          <img
            key={i}
            className={`image ${i === index ? "active" : ""}`}
            src={slide}
            alt={`Slide n°${i + 1}`}
          />
        ))}
      </div>
      {showArrows && (
        <button className="button previous" onClick={prev}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
      )}
      {showArrows && (
        <button className="button next" onClick={next}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      )}
      {showArrows && (
        <div className="infoSlides">
          {index + 1}/{slides.length}
        </div>
      )}
    </div>
  );
}

export default Carrousel;
