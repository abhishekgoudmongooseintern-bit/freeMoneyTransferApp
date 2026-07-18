import MobileView from "../../components/mobile/mobileView/MobileView";
import illustration from "../../assets/images/enterCode.png";
import { useNavigate } from "react-router-dom";
import OTPInput from "../../components/comman/otpBox/OTPInput";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

const EnterCode = () => {
  const navigate = useNavigate();

  const { phoneNumber } = useSelector((state: RootState) => state.country);
  console.log("Num", { phoneNumber });

  return (
    <MobileView>
      <div className="w-[333px] h-[771px] bg-[#F3F6FD] rounded-[40px] px-8 pt-20 relative">
        {/* Heading */}
        <div className="text-center mt-[76px]">
          <h1 className="text-[20px] font-bold text-[#0E2B6D]">Enter Code</h1>

          <p className="text-[#A0A6B5] text-[13px] mt-4 leading-5">
            Enter the 4-digit verification sent to
            <p>+{phoneNumber}</p>
            <br />
          </p>
        </div>

        {/* Illustration */}
        <div className="flex justify-center mt-8">
          <img src={illustration} alt="img" />
        </div>

        {/* OTP Boxes */}
        <OTPInput />

        {/* Button */}
        <button
          className="absolute left-1/2 -translate-x-1/2 bottom-44 w-[248px] h-[48px] bg-[#F9837D] rounded-lg text-white font-semibold tracking-widest text-sm"
          onClick={() => {
            navigate("/welcome");
          }}
        >
          CONTINUE
        </button>
      </div>
    </MobileView>
  );
};

export default EnterCode;
