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
import MonthlyIncome from "./pages/ledgers/MonthlyIncome";
import LevelIncome from "./pages/ledgers/LevelIncome";
import ClubIncome from "./pages/ledgers/ClubIncome";
import PayoutReport from "./pages/ledgers/PayoutReport";
import CompoundingReport from "./pages/ledgers/CompoundingReport";
import DirectSummary from "./pages/ledgers/DirectSummary";
import DownlineTeam from "./pages/ledgers/DownlineTeam";
import Help from "./pages/Help";
import Help1 from "./component/help/ArticleBusinessPre";

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
          <Route path="/monthlyincome" element={<MonthlyIncome />} />
          <Route path="/levelincome" element={<LevelIncome />} />
          <Route path="/clubincome" element={<ClubIncome />} />
          <Route path="/payoutReport" element={<PayoutReport />} />
          <Route path="/compoundingReport" element={<CompoundingReport />} />
          <Route path="/directSummary" element={<DirectSummary />} />
          <Route path="/downlineTeam" element={<DownlineTeam />} />
          <Route path="/help" element={<Help />} />
          <Route path="/help/articleBusinessPre" element={<Help1 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
