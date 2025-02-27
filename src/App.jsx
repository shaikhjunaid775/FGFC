// App.js with protected routing
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect, createContext } from "react";
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
import ArticleBusinessPre from "./component/help/ArticleBusinessPre";
import ArticleLoginReg from "./component/help/ArticleLoginReg";
import ArticleDepositUsdt from "./component/help/ArticleDepositUsdt";
import ArticleDepositUpi from "./component/help/ArticleDepositUpi";
import ArticleDepositBank from "./component/help/ArticleDepositBank";
import WelcomeLetter from "./pages/WelcomeLetter";
import Withdrawal from "./pages/Withdrawal";
import Investment from "./pages/Investment";
import StartAnimation from "./pages/StartAnimation";

// Create auth context
export const AuthContext = createContext(null);

// Protected Route component
const ProtectedRoute = ({ children }) => {
  // Check if user is authenticated
  const isAuthenticated = localStorage.getItem("authToken") !== null;
  
  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  // If authenticated, render the children components
  return children;
};

function App() {
  // Track authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  
  // Check for authentication on initial load
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsAuthenticated(true);
      // You could also get user info from localStorage if stored
      const userData = localStorage.getItem("userData");
      console.log(userData)
      if (userData) {
        setUser(JSON.parse(userData));
      }
    }
  }, []);

  // Auth context value
  const authValue = {
    isAuthenticated,
    user,
    username: user?.username || "", // Direct access to username
    login: (userData) => {
      // Store auth token and user data
      localStorage.setItem("authToken", "auth-token-" + Date.now()); // Generate a token
      localStorage.setItem("userData", JSON.stringify(userData));
      setIsAuthenticated(true);
      setUser(userData);
    },
    logout: () => {
      // Clear auth data
      localStorage.removeItem("authToken");
      localStorage.removeItem("userData");
      setIsAuthenticated(false);
      setUser(null);
    }
  };

  return (
    <>
      <AuthContext.Provider value={authValue}>
        <Router>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<OnBoard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgotpass" element={<ForgotPassword />} />
            
            {/* Protected Routes */}
            <Route 
              path="/startAnimation" 
              element={
                <ProtectedRoute>
                  <StartAnimation />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/investment" 
              element={
                <ProtectedRoute>
                  <Investment />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/WelcomeLetter" 
              element={
                <ProtectedRoute>
                  <WelcomeLetter />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/Withdraw" 
              element={
                <ProtectedRoute>
                  <Withdrawal />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/home" 
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/profile" 
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/deposit" 
              element={
                <ProtectedRoute>
                  <Deposit />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/changepassword" 
              element={
                <ProtectedRoute>
                  <ChangePassword />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/transferFund" 
              element={
                <ProtectedRoute>
                  <TransferFund />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/topUp" 
              element={
                <ProtectedRoute>
                  <Topup />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/kyc" 
              element={
                <ProtectedRoute>
                  <Kyc />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/portfolio" 
              element={
                <ProtectedRoute>
                  <Portfolio />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/bankdetails" 
              element={
                <ProtectedRoute>
                  <BankDetails />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/editprofile" 
              element={
                <ProtectedRoute>
                  <EditPtofile />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/deposithistory" 
              element={
                <ProtectedRoute>
                  <DepositHistory />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/topuphistory" 
              element={
                <ProtectedRoute>
                  <TopupHistory />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/monthlyincome" 
              element={
                <ProtectedRoute>
                  <MonthlyIncome />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/levelincome" 
              element={
                <ProtectedRoute>
                  <LevelIncome />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/clubincome" 
              element={
                <ProtectedRoute>
                  <ClubIncome />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/payoutReport" 
              element={
                <ProtectedRoute>
                  <PayoutReport />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/compoundingReport" 
              element={
                <ProtectedRoute>
                  <CompoundingReport />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/directSummary" 
              element={
                <ProtectedRoute>
                  <DirectSummary />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/downlineTeam" 
              element={
                <ProtectedRoute>
                  <DownlineTeam />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/help" 
              element={
                <ProtectedRoute>
                  <Help />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/help/articleBusinessPre" 
              element={
                <ProtectedRoute>
                  <ArticleBusinessPre />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/help/articleLoginReg" 
              element={
                <ProtectedRoute>
                  <ArticleLoginReg />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/help/articleDepositUsdt" 
              element={
                <ProtectedRoute>
                  <ArticleDepositUsdt />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/help/articleDepositUpi" 
              element={
                <ProtectedRoute>
                  <ArticleDepositUpi />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/help/articleDepositBank" 
              element={
                <ProtectedRoute>
                  <ArticleDepositBank />
                </ProtectedRoute>
              } 
            />
            
            {/* Redirect any unknown routes to login */}
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </Router>
      </AuthContext.Provider>
    </>
  );
}

export default App;