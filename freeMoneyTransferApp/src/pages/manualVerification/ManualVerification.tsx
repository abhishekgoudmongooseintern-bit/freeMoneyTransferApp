import { X } from "lucide-react";
import MobileView from "../../components/mobile/mobileView/MobileView";

const cards = [
  {
    id: 1,
    name: "Transfer Visa",
    number: "••••••3298",
    color: "from-[#FF9A3C] to-[#FF7A2F]",
    logo: "VISA",
    amount: "$3500.00",
  },
  {
    id: 2,
    name: "Transfer Sona Bank",
    number: "••••••3298",
    color: "from-[#C95EFF] to-[#B63CFF]",
    logo: "●●",
    amount: "$3000.00",
  },
  {
    id: 3,
    name: "Transfer Getek Bank",
    number: "••••••3298",
    color: "from-[#65D9AE] to-[#45C59A]",
    logo: "payoneer",
    amount: "$2500.00",
  },
  {
    id: 4,
    name: "Transfer Ateul Bank",
    number: "••••••3298",
    color: "from-[#4D90FF] to-[#3479F6]",
    logo: "◻◻",
    amount: "$1000.00",
  },
];

export default function ManualVerification() {
  return (
    <MobileView>
      <div className="flex min-h-screen items-center justify-center bg-[#ececec]">
        {/* Phone */}
        <div className="relative h-[820px] w-[390px] overflow-hidden rounded-[42px] bg-[#F6F7FB] shadow-xl">
          {/* Background */}
          <div className="absolute inset-0 bg-black/55" />

          {/* Fake Previous Screen */}
          <div className="absolute left-6 right-6 top-20 h-[230px] rounded-[24px] bg-[#f4f4f4]" />

          {/* Bottom Sheet */}
          <div className="absolute bottom-0 left-0 right-0 rounded-t-[34px] bg-white px-6 pt-7 pb-8">
            {/* Header */}

            <div className="flex items-center justify-between">
              <h2 className="text-[18px] font-semibold text-[#111]">
                Choose payment methode
              </h2>

              <button>
                <X size={24} />
              </button>
            </div>

            {/* Title */}

            <h3 className="mt-12 text-[17px] font-semibold text-[#111]">
              Manual Verification
            </h3>

            {/* Cards */}

            <div className="mt-7 space-y-6">
              {cards.map((item) => (
                <button
                  key={item.id}
                  className="flex h-[82px] w-full items-center rounded-[18px] border border-[#E7E7E7] bg-white px-4 transition hover:shadow-md"
                >
                  {/* Mini Card */}

                  <div
                    className={`h-[66px] w-[72px] rounded-xl bg-gradient-to-br ${item.color} p-2 text-white`}
                  >
                    <div className="flex justify-between text-[6px]">
                      <span>My Account</span>
                      <span>{item.logo}</span>
                    </div>

                    <div className="mt-1 text-[9px] font-semibold">
                      {item.amount}
                    </div>

                    <div className="mt-3 text-[6px] tracking-[2px]">
                      ****1299
                    </div>

                    <div className="mt-2 flex justify-end text-[5px]">
                      Digital
                    </div>
                  </div>

                  {/* Text */}

                  <div className="ml-4 flex flex-1 flex-col items-start">
                    <h4 className="text-[16px] font-semibold text-[#111]">
                      {item.name}
                    </h4>

                    <p className="mt-1 tracking-[4px] text-[11px] text-[#A5A5A5]">
                      {item.number}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MobileView> 
  );
}
