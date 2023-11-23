import "./Badge.scss";

function Badge({ props }) {
  return <img className="badge" src={props.host.picture} alt="badge" />;
}

export default Badge;
