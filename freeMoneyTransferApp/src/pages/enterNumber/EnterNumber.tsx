import Button from "../../components/ui/Button/Button";
import img from "../../assets/images/registration.png";
import MobileView from "../../components/mobile/mobileView/MobileView";
import illustration from "../../assets/images/checkTik.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import {
  setSelectedCountry,
  setPhoneNumber,
} from "../../Slices/selectCountry/selectCountrySlice";
import React, { useState } from "react";

const EnterNumber = () => {
  //Use navigation for navigate to another page
  const navigate = useNavigate();

  //Country codes ..
  const countries = [
    {
      code: "+91",
      flag: "🇮🇳",
    },
    {
      code: "+62",
      flag: "🇮🇩",
    },
    {
      code: "+1",
      flag: "🇺🇸",
    },
    {
      code: "+44",
      flag: "🇬🇧",
    },
  ];

  //States...
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [selectedCountry, setSelectedCountry] = useState(countries[1]);
  const [showTick, setShowTick] = useState(false);

  const { selectedCountry, phoneNumber } = useSelector(
    (state: RootState) => state.country,
  );

  const dispatch = useDispatch();

  const selectPhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length <= 10) {
      dispatch(setPhoneNumber(value));
    }
    console.log(phoneNumber);

    if (phoneNumber.length === 10) {
      setShowTick(true);
    } else {
      setShowTick(false);
    }
  };

  const selectCountryCode = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const country = countries.find((c) => c.code === e.target.value);
    if (country) {
      dispatch(setSelectedCountry(country));
    }
  };

  return (
    <MobileView>
      <div className="w-[333px]  h-[771px] bg-[#000 ]  rounded-[40p]  bg-[#EFF5FE] rounded-[30px] ">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-[20px] font-bold text-[#0B2A6B] mt-[70px]">
            Registration
          </h1>

          <p className="text-[#9CA3AF] text-[11px] mt-2 leading-4">
            Enter your mobile phone number, we will send
            <br />
            you OTP to verify later.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center mt-5">
          <img src={img} alt="registration" className="w-[118px]  h-[126px] " />
        </div>

        {/* Phone Number */}
        <div className="mt-20 flex justify-center items-center">
          <div className="relative border border-[#D6D9E1] rounded-[24px] h-[58px] w-[260px] flex items-center px-6">
            <span className="absolute -top-3 left-5 bg-[#EEF1F7] px-2 text-[#6B7280] text-[15px]">
              Number Phone
            </span>

            <div className="flex items-center gap-3 w-full">
              <span className="text-[20px] ml-[15px]">
                {selectedCountry.flag}
              </span>
              <div className="flex items-center gap-2">
                <select
                  value={selectedCountry.code}
                  onChange={selectCountryCode}
                  className="appearance-none bg-transparent outline-none cursor-pointer"
                >
                  {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.code}
                    </option>
                  ))}
                </select>
              </div>
              <input
                type="tel"
                value={phoneNumber}
                onChange={selectPhoneNumber}
                className="bg-transparent outline-none text-[#222] flex-1 text-[15px]"
              />

              {/* Conditional rendering */}
              {showTick && (
                <img
                  src={illustration}
                  alt="checkTick"
                  className="absolute  right-3.5"
                />
              )}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-14 flex flex-col gap-4 flex justify-center items-center">
          <Button
            text="SEND VIA SMS"
            className="bg-[#F3817A] text-white h-[54px] w-[275px] rounded-[5px] text-[14px]"
            onClick={() => {
              navigate("/enterCode");
            }}
          />

          <Button
            text="SEND VIA WHATSAPP"
            className="bg-[#001F66] text-white h-[54px] w-[275px] rounded-[5px] text-[14px]"
            onClick={() => {
              navigate("/enterCode");
            }}
          />
        </div>

        {/* Footer */}
        <div className="mt-20 text-center">
          <p className="text-[11px] leading-6 text-[#222]">
            By creating and/or using an account, you
            <br />
            agree to our{" "}
            <span className="text-[#F3817A]">Terms & Conditions.</span>
          </p>
        </div>
      </div>
    </MobileView>
  );
};

export default EnterNumber;
