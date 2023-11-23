import "./Tag.scss";

function Tag({ props }) {
  return (
    <div className="tags">
      {props.tags.map((tag, i) => (
        <div key={i} className="tag">
          {tag}
        </div>
      ))}
    </div>
  );
}

export default Tag;
