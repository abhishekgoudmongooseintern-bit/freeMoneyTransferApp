import { X, Check } from "lucide-react";
import MobileView from "../../components/mobile/mobileView/MobileView";

export default function TransactionSuccess() {
  const details = [
    { label: "Name", value: "Rene wells" },
    { label: "Transaction ID", value: "" },
    { label: "Amount", value: "$456.00" },
    { label: "Transfer cost", value: "$00.00" },
    { label: "Time & Date", value: "01/03/22, 11:00 AM" },
  ];

  return (
    <MobileView>
      <div className="min-h-screen bg-[#ECECEC] flex items-center justify-center">
        <div className="w-[390px] rounded-[40px] bg-[#F7F7F7] px-7 py-8">
          {/* Close */}
          <button>
            <X size={30} className="text-black" />
          </button>

          {/* Card */}
          <div className="relative mt-14 rounded-[22px] bg-[#07245C] px-7 pb-10 pt-8">
            {/* Success Icon */}
            <div className="flex justify-center">
              <div className="flex h-32 w-32 items-center justify-center rounded-full bg-[#FF7D79]">
                <Check size={62} strokeWidth={5} className="text-white" />
              </div>
            </div>

            {/* Title */}
            <h2 className="mt-8 text-center text-[36px] font-semibold text-white">
              Transffered Successfully
            </h2>

            {/* Divider */}
            <div className="my-8 h-px bg-white/30"></div>

            {/* Details */}
            <div className="space-y-8">
              {details.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between"
                >
                  <span className="text-lg text-[#7381A9]">{item.label}</span>

                  <span className="text-lg font-medium text-white"> 
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Button */}

          <div className="mt-12 flex justify-center">
            <button className="w-[210px] rounded-lg bg-[#FF7D79] py-4 text-xl font-semibold tracking-wide text-white transition hover:opacity-90">
              DONE
            </button>
          </div>
        </div>
      </div>
    </MobileView>
  );
}
