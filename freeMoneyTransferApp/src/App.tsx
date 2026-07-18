import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/registration/Registration";
import EnterNumber from "./pages/enterNumber/EnterNumber";
import EnterCode from "./pages/enterCode/EnterCode";
import Welcome from "./pages/welcome/Welcome";
import Congratulation from "./pages/congratulation/Congratulation";
import Login from "./pages/login/Login";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import ResetPassword from "./pages/resetPassword/ResetPassword";
import BalanceProfile from "./pages/balanceProfile/BalanceProfile";
import Transfer from "./pages/transfer/Transfer";
import TransactionSuccess from "./pages/transactionSuccess/TransactionSuccess";
import TopUp from "./pages/topUp/TopUp";
import PaymentDetail from "./pages/paymentDetail/PaymentDetail";
import ManualVerification from "./pages/manualVerification/ManualVerification";
import PaymentSuccessFull from "./pages/paymentSuccessFull/PaymentSuccessFull";


const App = () => {
  return (
    //Routes
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/enterNumber" element={<EnterNumber />} />
      <Route path="/enterCode" element={<EnterCode />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/congratulation" element={<Congratulation />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/resetPassword" element={<ResetPassword />} />
      <Route path="/resetPassword" element={<ResetPassword />} />
      <Route path="/balanceProfile" element={<BalanceProfile />} />
      <Route path="/transfer" element={<Transfer />} />
      <Route path="/transactionSuccess" element={<TransactionSuccess />} />
      <Route path="/topUp" element={<TopUp />} />
       <Route path="/paymentDetail" element={<PaymentDetail />} />
       <Route path="/manualVerification" element={<ManualVerification />} />
        <Route path="/paymentSuccessFull" element={<PaymentSuccessFull />} />

    </Routes>
  );
};

export default App;
