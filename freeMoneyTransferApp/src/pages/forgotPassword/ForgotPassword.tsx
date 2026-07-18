import { useState } from "react";
import InputField from "../../components/ui/inputField/InputField";
import MobileView from "../../components/mobile/mobileView/MobileView";
import Button from "../../components/ui/Button/Button";
import { useNavigate } from "react-router-dom";
import illustration from "../../assets/images/Back.png";

export default function ForgotPassword() {
  const [email, setEmail] = useState();

  const navigate = useNavigate();

  return (
    <MobileView>
      <div className="w-[333px] h-[771px] rounded-[28px] flex  items-center flex-col relative">
        {/* Back Button */}

        <button className="mt-8 absolute top-0 left-0" onClick={() => {navigate("/login")}}>
          <img src={illustration} alt="sdfsdg" />
        </button>

        {/* Illustration */}
        <div className="flex justify-center mt-20 mb-[30px]">
          <svg
            width="108"
            height="108"
            viewBox="0 0 108 108"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="54" cy="54" r="54" fill="#E0EBFE" />
          </svg>
        </div>

        {/* Heading */}
        <div className="text-center mt-5">
          <h2 className="text-[24px] font-bold text-[#26324B]">
            Forgot Password
          </h2>

          <p className="text-[13px] text-[#98A2B3] mt-2 leading-5">
            Set a name for your profile, here's
            <br />
            the password
          </p>
        </div>

        {/* Email */}
        <div className="mt-20 mb-15">
          <InputField
            value={email}
            className="h-[60px] w-[270px] border border-[#D9DFEA] rounded-lg font-semibold outline-none focus:border-gray-200"
            spanText=" Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        {/* Button */}
        <Button
          text="NEXT"
          className="w-[275px] h-[50px] flex justify-center items-center bg-[#F9837D] text-[#fff] rounded-[5px]"
          onClick={() => {
            navigate("/resetPassword");
          }}
        />
      </div>
    </MobileView>
  );
}
