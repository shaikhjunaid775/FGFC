import Footer from "../component/Footer";
import Blob from "../component/Blob";
import Header from "../component/Header";
import KycPrompt from "../component/KycPrompt";
import Menu from "../component/Menu";
import PortfolioCard from "../component/PortfolioCard";
import TickerTape from "../component/Ticker";
// import ProfileCard from "../component/ProfileCard";

function Home() {
  return (
    <>
    <Blob />
      <div className="h-screen">
        <Header />
          <TickerTape />
          <KycPrompt />
          <PortfolioCard />
          <Menu />
        <Footer />
      </div>
    </>
  );
}

export default Home;
