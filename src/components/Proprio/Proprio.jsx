function Proprio({ props }) {
  const nomComplet = props.host.name.split(" ");
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
