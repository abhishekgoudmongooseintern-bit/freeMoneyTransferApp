import React, { useRef, useState, useEffect } from "react";

const OTPInput = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [seconds, setSeconds] = useState(43);

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleResend = () => {
    // Call your resend OTP API

    setSeconds(43);
  };

  useEffect(() => {
    if (seconds === 0) return;

    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <>
      <div className="flex justify-center gap-3 mt-25">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="w-12 h-12 border  border-[#D9DFEA] rounded-lg text-center text-xl font-semibold outline-none focus:border-gray-200"
          />
        ))}
      </div>
      {/* Timer */}
      <p className="text-center mt-2 text-[13px] text-[#8B92A1]">
        {seconds > 0 ? (
          <>
            Resend code in{" "}
            <span className="text-[#FF7F7A] font-medium">{seconds}</span>
            second
          </>
        ) : (
          <button
            onClick={handleResend}
            className="font-medium no-underline cursor-pointer text-[#FF7F7A]"
          >
            Resend Code
          </button>
        )}
      </p>
    </>
  );
};

export default OTPInput;
