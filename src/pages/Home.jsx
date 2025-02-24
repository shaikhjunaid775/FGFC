import Footer from "../component/Footer";
import Blob from "../component/Blob";
import Header from "../component/Header";
import KycPrompt from "../component/KycPrompt";
import Menu from "../component/Menu";
import PortfolioCard from "../component/PortfolioCard";
import TickerTape from "../component/Ticker";
// import ProfileCard from "../component/ProfileCard";
import Sliders from "../component/Sliders";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { useLocation, useNavigate  } from "react-router-dom";

function Home() {
  const isVerified = false; // Change to false for "Unverified"
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.message) {
      toast.success(location.state.message);
      
      // Replace state to prevent duplicate toasts
      navigate(".", { replace: true, state: {} });
    }
  }, [location.state, navigate]);

  return (
    <>
      <Toaster />
      <Blob />
      <div className="h-screen">
        <Header />
        <TickerTape />
        {!isVerified ? <KycPrompt isVerified={isVerified} /> : null}
        <PortfolioCard />
        <Menu />
        <Sliders />
        <Footer />
      </div>
    </>
  );
}

export default Home;
