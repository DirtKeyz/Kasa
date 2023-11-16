import "./Note.scss";

function Note(props) {
  const maxNote = 5;
  const note = [];

  for (let i = 0; i < maxNote; i++) {
    if (i < props.note) {
      note.push(<i key={i} className="fa fa-star star-filled"></i>);
    } else {
      note.push(<i key={i} className="fa fa-star star-empty"></i>);
    }
  }

  return note;
}

export default Note;
