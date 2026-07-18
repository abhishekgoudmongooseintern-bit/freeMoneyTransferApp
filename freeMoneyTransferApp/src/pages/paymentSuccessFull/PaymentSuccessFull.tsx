import { Check, X } from "lucide-react";

export default function PaymentSuccessFull() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#ececec]">
      {/* Phone */}
      <div className="relative h-[820px] w-[390px] overflow-hidden rounded-[42px] bg-[#F6F7FB] shadow-xl">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Close */}
        <button className="absolute left-6 top-8 z-20">
          <X size={30} className="text-black" />
        </button>

        {/* Background Payment Card */}
        <div className="absolute left-7 right-7 top-24 h-[240px] rounded-[26px] bg-white/10">
          <h2 className="pt-10 text-center text-[20px] font-semibold text-black">
            Payment Details
          </h2>
        </div>

        {/* Success Popup */}
        <div className="absolute left-7 right-7 top-[195px] rounded-[28px] bg-white px-8 py-10 shadow-xl">

          {/* Illustration */}
          <div className="relative flex justify-center">

            {/* Background Circle */}
            <div className="flex h-32 w-32 items-center justify-center rounded-full bg-[#F3EFFA]">

              {/* Envelope */}
              <div className="relative">

                {/* Envelope Body */}
                <div className="relative h-12 w-16 bg-[#5B7BEF]">
                  <div
                    className="absolute left-0 top-0 h-0 w-0 border-l-[32px] border-r-[32px] border-t-[20px] border-l-transparent border-r-transparent border-t-[#76C7A3]"
                  />
                </div>

                {/* Money */}
                <div className="absolute -top-8 left-5 h-12 w-8 rounded bg-[#FF9B42]">
                  <div className="absolute left-2 top-2 h-2 w-2 rounded-full bg-white/80" />
                </div>

              </div>
            </div>

            {/* Check Badge */}
            <div className="absolute right-[72px] top-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#63D1B2]">
              <Check size={18} strokeWidth={3} className="text-white" />
            </div>
          </div>

          {/* Title */}
          <h2 className="mt-10 text-center text-[19px] font-semibold text-[#111]">
            Transaction Successful
          </h2>

          {/* Description */}
          <p className="mt-5 text-center text-[15px] leading-8 text-[#9C9C9C]">
            Lorem ipsum dolor sit amet, consectetur
            <br />
            adipiscing elit. Eu dolor, bibendum
            <br />
            purus eu mi, purus lorem.
          </p>

          {/* Done Button */}
          <div className="mt-10 flex justify-center">
            <button className="h-14 w-[138px] rounded-lg bg-[#FF7E78] text-[18px] font-semibold tracking-wide text-white transition hover:opacity-90">
              DONE
            </button>
          </div>
        </div>

        {/* Bottom Button */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <button className="h-[54px] w-[210px] rounded-lg bg-[#071E56] text-[18px] font-semibold tracking-wide text-white">
            SEND MONEY
          </button>
        </div>
      </div>
    </div>
  );
}