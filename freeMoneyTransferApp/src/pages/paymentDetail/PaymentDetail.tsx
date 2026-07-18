import { ShieldCheck, X } from "lucide-react";
import MobileView from "../../components/mobile/mobileView/MobileView";

export default function PaymentDetail() {
  const details = [
    {
      label: "Amount",
      value: "$20.00",
    },
    {
      label: "Top up Type",
      value: "Paypal",
    },
    {
      label: "Transaction ID",
      value: "234795-7456-0008",
    },
    {
      label: "Time & Date",
      value: "01/03/22, 11:00 AM",
    },
  ];

  return (
    <MobileView>
      <div className="w-[390px] bg-[#F6F7FB] rounded-[42px] px-6 py-7 shadow-xl">
        {/* Close */}
        <button>
          <X size={30} className="text-black" />
        </button>

        {/* White Card */}

        <div className="mt-14 rounded-[28px] bg-white px-7 py-10 shadow-sm">
          {/* Title */}

          <h1 className="text-center text-[20px] font-semibold text-[#08245B]">
            Payment Details
          </h1>

          {/* Details */}

          <div className="mt-12 space-y-8">
            {details.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between"
              >
                <span className="text-[16px] text-[#A0A0A0]">{item.label}</span>

                <span className="text-[16px] font-medium text-[#222]">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* Button */}

          <button className="mt-12 h-[58px] w-full rounded-2xl bg-[#EAF1FF] text-[18px] font-medium text-[#08245B] transition hover:bg-[#dde9ff]">
            Choose payment methode
          </button>

          {/* Terms */}

          <div className="mt-10 flex items-start gap-3">
            <ShieldCheck size={28} className="text-[#C7CFD8] flex-shrink-0" />

            <p className="text-[14px] leading-6 text-[#B1B1B1]">
              All your transactions are safe and fast,
              <br />
              By continuing this transaction, you
              <br />
              agree to our{" "}
              <span className="text-[#FF8A84]">Terms & Conditions.</span>
            </p>
          </div>
        </div>

        {/* Bottom Button */}

        <div className="mt-10 flex justify-center">
          <button className="h-[58px] w-[210px] rounded-lg bg-[#FF7F7A] text-[18px] font-semibold tracking-wider text-white transition hover:opacity-90">
            SEND MONEY
          </button>
        </div>
      </div>
    </MobileView>
  );
}
