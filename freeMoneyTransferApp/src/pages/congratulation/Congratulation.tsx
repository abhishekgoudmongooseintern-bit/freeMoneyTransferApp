import MobileView from "../../components/mobile/mobileView/MobileView";
import Button from "../../components/ui/Button/Button";
import Illustration from "../../assets/images/congratulation.png";
import { useNavigate } from "react-router-dom";

const Congratulation = () => {

  const navigate = useNavigate();
  return (
    <MobileView>
      <div className="w-[375px] h-[812px] bg-[#4D4D4D] rounded-[40px] p-5">
        {/* Dark Overlay */}
        <div className="w-full h-full bg-black/10 rounded-[32px] flex flex-col items-center justify-center relative">
          {/* Modal */}
          <div className="w-[333px] h-[523px] bg-[#F3F6FD] rounded-[32px] px-6 py-10 flex flex-col items-center">
            {/* Title */}
            <h1 className="text-[#26457D] text-[20px] font-bold text-center leading-9 mt-[45px]">
              Congratulation, Now you
              <br />
              are registered!
            </h1>

            {/* Subtitle */}
            <p className="text-[#A0A6B5] text-center text-[13px] mt-4 leading-5">
              Start using the app, Pay attention
              <br />
              to the rules in the application
            </p>

            {/* Illustration */}
            <div className="mt-8 relative w-[95px] h-[95px] rounded-full bg-[#E9EEF9] flex items-center justify-center">
              <img src={Illustration} alt="congratulation" />
            </div>

            {/* Button */}
            <Button
              className="w-[275px] h-[54px] text-[14px] bg-[#F9837D] rounded-md text-white font-semibold tracking-[2px] mt-14"
              text=" START"
              onClick={() => {
                navigate("/login");
              }}
            />
          </div>

          {/* Skip Text */}
          <button className="absolute bottom-20 text-[#102C72] font-medium text-[18px]">
            Fill later
          </button>
        </div>
      </div>
    </MobileView>
  );
};

export default Congratulation;
