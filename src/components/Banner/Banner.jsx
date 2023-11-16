import "./Banner.scss";

function Banner({ imagePath, bannerText }) {
  return (
    <div className="banner">
      <img src={imagePath} alt="banner" />
      <h1>{bannerText}</h1>
    </div>
  );
}

export default Banner;
