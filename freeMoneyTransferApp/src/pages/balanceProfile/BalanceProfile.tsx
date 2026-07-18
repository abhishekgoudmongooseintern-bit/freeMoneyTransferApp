import MobileView from "../../components/mobile/mobileView/MobileView";
import imageOfProfile from "../../assets/images/outerProfile.png";
import imageBg from "../../assets/images/backgroundProfile.png";
import notifyIcon from "../../assets/images/notifyIcon.png";
import logo from "../../assets/images/Logo.png";
import arrow from "../../assets/images/Vector.png";
import transfer from "../../assets/images/transfer.png";
import paypalLogo from "../../assets/images/paypalLogo.png";

const BalanceProfile = () => {
  return (
    <MobileView>
      <div className="main-container flex flex-col relative">
        <div className="upper-div relative">
          <div className="img-bg-div relative">
            <img src={imageBg} alt="" />
          </div>

          <div className="notify-icon-div absolute top-8 right-10 flex justify-start items-centeri ">
            <img src={notifyIcon} alt="" />
          </div>
          <div className="logo-div bg-[#fff] rounded-full h-[26px] w-[56px] absolute top-25 right-6 flex justify-start items-center">
            <img src={logo} alt="" className="ml-[5px]" />
            <img src={arrow} alt="" className="ml-[2px]" />
          </div>

          <div className="upper-img-div absolute top-0">
            <img src={imageOfProfile} alt="" />
          </div>
        </div>

        <div className="mid-main-div relative -mt-8  flex flex-col h-[499px] bg-[#EFF2F4] rounded-t-[32px]">
          <h1 className="mt-8 ml-9">Operations</h1>
          <div className="inner-div-fo-mid mt-4 flex justify-center">
            <div className="operation-icon-div flex gap-8">
              <div className="main-icon-div flx flx-col">
                <div className="icon-div h-[45px] w-[45px] bg-[#fff] flex flex-col justify-center items-center rounded-[5px]">
                  <img src={transfer} alt="" />
                </div>
                <h1 className="text-[10px] mt-2 ml-1">Transfer</h1>
              </div>
              <div className="main-icon-div flx flx-col">
                <div className="icon-div h-[45px] w-[45px] bg-[#fff] flex flex-col justify-center items-center rounded-[5px]">
                  <img src={transfer} alt="" />
                </div>
                <h1 className="text-[10px] mt-2 ml-1">Transfer</h1>
              </div>
              <div className="main-icon-div flx flx-col">
                <div className="icon-div h-[45px] w-[45px] bg-[#fff] flex flex-col justify-center items-center rounded-[5px]">
                  <img src={transfer} alt="" />
                </div>
                <h1 className="text-[10px] mt-2 ml-1">Transfer</h1>
              </div>
              <div className="main-icon-div flx flx-col">
                <div className="icon-div h-[45px] w-[45px] bg-[#fff] flex flex-col justify-center items-center rounded-[5px]">
                  <img src={transfer} alt="" />
                </div>
                <h1 className="text-[10px] mt-2 ml-1">Transfer</h1>
              </div>
            </div>
          </div>
          <h1 className="text-[17px] front-[700] mt-10 ml-8">
            Recent Transaction
          </h1>
          <div className="transaction-div mt-6">
            <div className="transaction flex ml-7 mb-5">
              <div className="transaction-logo-div mr-3">
                <img src={paypalLogo} alt="" />
              </div>
              <div className="text-div flex items-center gap-25">
                <div className="transaction-name">
                  <h1 className="text-[13px]">PayPall</h1>
                  <p className="text-[12px] opacity-20">+0.54915 BTC</p>
                </div>
                <div className="date-div">
                  <h1 className="text-[13px]">24 Mar 20022</h1>
                </div>
              </div>
            </div>
            <div className="transaction flex ml-7 mb-5">
              <div className="transaction-logo-div mr-3">
                <img src={paypalLogo} alt="" />
              </div>
              <div className="text-div flex items-center gap-25">
                <div className="transaction-name">
                  <h1 className="text-[13px]">PayPall</h1>
                  <p className="text-[12px] opacity-20">+0.54915 BTC</p>
                </div>
                <div className="date-div">
                  <h1 className="text-[13px]">24 Mar 20022</h1>
                </div>
              </div>
            </div>
            <div className="transaction flex ml-7 mb-5">
              <div className="transaction-logo-div mr-3">
                <img src={paypalLogo} alt="" />
              </div>
              <div className="text-div flex items-center gap-25">
                <div className="transaction-name">
                  <h1 className="text-[13px]">PayPall</h1>
                  <p className="text-[12px] opacity-20">+0.54915 BTC</p>
                </div>
                <div className="date-div">
                  <h1 className="text-[13px]">24 Mar 20022</h1>
                </div>
              </div>
            </div>
            <div className="transaction flex ml-7 mb-5">
              <div className="transaction-logo-div mr-3">
                <img src={paypalLogo} alt="" />
              </div>
              <div className="text-div flex gap-25">
                <div className="transaction-name">
                  <h1 className="text-[13px]">PayPall</h1>
                  <p className="text-[12px] opacity-20">+0.54915 BTC</p>
                </div>
                <div className="date-div">
                  <h1 className="text-[13px] ">24 Mar 20022</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-div h-[64px]"></div>
      </div>
    </MobileView>
  );
};

export default BalanceProfile;
