import { useNavigate } from "react-router-dom";
import MobileView from "../../components/mobile/mobileView/MobileView";
import illustration from "../../assets/images/resetPassword.png";
import InputField from "../../components/ui/inputField/InputField";
import { useState } from "react";
import illustration2 from "../../assets/images/Back.png";

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState<string>();
  const [resetPassword, setResetPassword] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    setLoading(true);

    try {
      // logic of reset password


      // Success
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MobileView>
      <div className="w-[333px] h-[771px] rounded-[28px] flex  items-center flex-col relative">
        {/* Back Button */}
        <button
          className="mt-8 absolute top-0 left-0"
          onClick={() => {
            navigate("/forgotPassword");
          }}
        >
          <img src={illustration2} alt="sdfsdg" />
        </button>

        {/* Illustration */}

        <div className="flex justify-center mt-20 mb-[30px]">
          <img src={illustration} alt="" />
        </div>
        {/* Heading */}
        <div className="text-center ">
          <h2 className="text-[24px] font-bold text-[#26324B]">
            Reset Password
          </h2>

          <p className="text-[13px] text-[#98A2B3] mt-2 leading-5">
            Set a name for your profile, here's
            <br />
            the password
          </p>
        </div>
        {/* OldPassword */}
        <div className="mt-20 mb-15">
          <InputField
            value={newPassword}
            className="h-[60px] w-[270px] border border-[#D9DFEA] rounded-lg font-semibold outline-none focus:border-gray-200 mb-10"
            spanText="New Password"
            onChange={(e) => {
              setNewPassword(e.target.value);
            }}
          />

          <InputField
            value={resetPassword}
            className="h-[60px] w-[270px] border border-[#D9DFEA] rounded-lg font-semibold outline-none focus:border-gray-200"
            spanText="Reset Password"
            onChange={(e) => {
              setResetPassword(e.target.value);
            }}
          />
        </div>
        {/* Button */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-70 h-13 bg-[#F9837D] rounded-lg text-white flex items-center justify-center"
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "SUBMITTING"
          )}
        </button>
      </div>
    </MobileView>
  );
}
