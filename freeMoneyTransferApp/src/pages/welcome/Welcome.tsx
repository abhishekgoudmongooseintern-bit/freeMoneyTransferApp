import MobileView from "../../components/mobile/mobileView/MobileView";
import InputField from "../../components/ui/inputField/InputField";
import Illustration from "../../assets/images/welcome.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button/Button";

const Welcome = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function showCongratulation() {
    if (email != "" && name != "" && password != "") {
      navigate("/congratulation");
    } else {
      alert("fill the all required Details");
    }
  }

  return (
    <MobileView>
      <div className="w-[333px] h-[771px] bg-[#F3F6FD] rounded-[40px] px-8 pt-16 flex flex-col justify-center items-center ">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-[20px] font-bold text-[#102C72]">Welcome</h1>

          <p className="mt-4 text-[13px] text-[#9CA3AF] leading-5">
            Set a name for your profile, here's
            <br />
            the password
          </p>
        </div>

        {/* Illustration */}
        <div className="flex justify-center mt-8">
          <img src={Illustration} alt="welcome" />
        </div>

        {/* Form */}
        <div className="mt-16 space-y-8">
          {/* Email */}
          <InputField
            type="text"
            value={name}
            className="h-[60px] w-[270px] border border-[#D9DFEA] rounded-lg font-semibold outline-none focus:border-gray-200"
            spanText=" Email"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          {/* Name */}
          <InputField
            type="text"
            value={email}
            className="h-[60px]  w-[270px] border border-[#D9DFEA] rounded-lg font-semibold outline-none focus:border-gray-200"
            spanText="Name"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {/* Password */}
          <InputField
            type="password"
            value={password}
            spanText="Password"
            className="h-15 w-67.5 border border-[#D9DFEA] rounded-lg outline-none focus:border-gray-200 font-400 text-[14px]"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Button */}
        <div className="mt-16 flex justify-center">
          <Button
            text="CONTINUE"
            className="w-[246px] h-[48px] bg-[#F9837D] rounded-lg text-white text-sm font-semibold tracking-[2px]"
            onClick={showCongratulation}
          />
        </div>
      </div>
    </MobileView>
  );
};

export default Welcome;
