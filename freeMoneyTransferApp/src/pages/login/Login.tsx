import MobileView from "../../components/mobile/mobileView/MobileView";
import Illustration from "../../assets/images/login.png";
import Button from "../../components/ui/Button/Button";
import InputField from "../../components/ui/inputField/InputField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <MobileView>
      <div className="w-[333px] h-[771px] bg-[#F3F6FD] rounded-[40px] px-8 pt-16 flex justify-center items-center flex-col">
        {/* Illustration */}
        <div className="flex justify-center mb-[10px]">
          <img src={Illustration} alt="Illustration" />
        </div>

        {/* Title */}
        <div className="text-center mt-6">
          <h1 className="text-[20px] font-bold text-[#23437D]">Login</h1>

          <p className="text-[#9DA5B3] text-[13px] mt-3 leading-5">
            Set a name for your profile, here's
            <br />
            the password
          </p>
        </div>

        {/* Form */}
        <div className="mt-10 space-y-8">
          {/* Name */}
          <InputField
            value={name}
            className="h-[60px] w-[270px] border border-[#D9DFEA] rounded-lg font-semibold outline-none focus:border-gray-200"
            spanText=" Email"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          {/* Password */}
          <div className="relative">
            <InputField
              value={password}
              className="h-[60px] w-[270px] border border-[#D9DFEA] rounded-lg font-semibold outline-none focus:border-gray-200"
              spanText="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-7-10-7a18.293 18.293 0 014.292-4.949M9.88 9.88a3 3 0 104.24 4.24M6.1 6.1L3 3m18 18l-3.1-3.1"
                />
              </svg> */}

            <p className="text-right text-[12px] text-[#60656F] mt-2 mb-12">
              Forgot password?
            </p>
          </div>
        </div>

        {/* Login Button */}
        <Button
          text="Login"
          className="w-[275px] h-[50px] flex justify-center items-center bg-[#F9837D] text-[#fff] rounded-[5px]"
          onClick={() => {
            navigate("/forgotPassword");
          }}
        />

        {/* Signup */}
        <p className="text-center mt-6 text-[13px] text-[#333]">
          Don't have an account?{" "}
          <span className="text-[#F9837D] underline cursor-pointer">
            Signup
          </span>
        </p>
      </div>
    </MobileView>
  );
};

export default Login;
