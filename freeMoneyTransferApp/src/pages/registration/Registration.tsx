import illustration from "../../assets/images/home.png";
import MobileView from "../../components/mobile/mobileView/MobileView";
import Button from "../../components/ui/Button/Button";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();

  return (
    <MobileView>
      <div className="flex items-center flex-col bg-[#EFF2F4] ">
        <div className="m-[102px] flex justify-center  items-center  flex-col text-3xl font-medium mb-5">
          <img src={illustration} alt="" className="" />
          <h1 className="text-[25px]">Flowa</h1>
        </div>

        <div className="mt-8 ">
          <h1 className="text-[#08266d] font-bold text-[45px] leading-[44px]">
            Experience the
            <br />
            <span className="text-[#ff8c86] underline decoration-2">
              easier way
            </span>{" "}
            for
            <br />
            transaction!
          </h1>

          <p className="mt-6 text-[#8c8c8c] text-[18px] leading-8">
            Connect your money to your
            <br />
            friends & brands.
          </p>
        </div>

        <div className="mt-24">
          <Button
            text="GET STARTED"
            className="
          w-[286px]
          h-[56px]  
          bg-[#ff8c86]
          rounded-[5px]
          text-white
          text-[17px]
          leading-[20px]
        "
            onClick={() => {
              navigate("./enterNumber");
            }}
          />
        </div>
      </div>
    </MobileView>
  );
};

export default Registration;
