import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Profile";
import OnBoard from "./pages/OnBoard";
import Deposit from "./pages/Deposit";
import ChangePassword from "./pages/ChangePassword";
import TransferFund from "./pages/TransferFund";
import Topup from "./pages/Topup";
import Kyc from "./pages/Kyc";
import Portfolio from "./pages/Portfolio";
import BankDetails from "./pages/BankDetails";
import EditPtofile from "./pages/EditPtofile";
import DepositHistory from "./component/deposit/DepositHistory";
import TopupHistory from "./pages/TopupHistory";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<OnBoard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpass" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route path="/transferFund" element={<TransferFund />} />
          <Route path="/topUp" element={<Topup />} />
          <Route path="/kyc" element={<Kyc />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/bankdetails" element={<BankDetails />} />
          <Route path="/editprofile" element={<EditPtofile />} />
          <Route path="/deposithistory" element={<DepositHistory />} />
          <Route path="/topuphistory" element={<TopupHistory />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
