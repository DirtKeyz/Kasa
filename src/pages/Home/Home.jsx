import "./Home.scss";
import Banner from "../../components/Banner/Banner";
import Gallery from "../../components/Gallery/Gallery";

function Home() {
  return (
    <div>
      <Banner
        imagePath="src/assets/banner.png"
        bannerText="Chez vous, partout et ailleurs"
      />
      <Gallery />
    </div>
  );
}

export default Home;
