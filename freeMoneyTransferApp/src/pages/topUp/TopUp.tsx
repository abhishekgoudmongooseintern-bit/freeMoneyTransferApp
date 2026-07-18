import { ArrowLeft } from "lucide-react";
import MobileView from "../../components/mobile/mobileView/MobileView";

const amounts = [5, 10, 15, 20, 50, 100, 500, "1k"];

const wallets = [
  {
    id: 1,
    name: "Paypal",
    number: "**** **** 2878",
    color: "#5B38C8",
    logo: "P",
    active: true,
  },
  {
    id: 2,
    name: "Mcdonalds",
    number: "**** **** 3720",
    color: "#FFA142",
    logo: "M",
    active: false,
  },
  {
    id: 3,
    name: "Amazon",
    number: "**** **** 3980",
    color: "#07255B",
    logo: "a",
    active: false,
  },
];

export default function TopUp() {
  return (
    <MobileView>
      <div className="min-h-screen bg-[#ECECEC] flex items-center justify-center">
        <div className="w-[390px] rounded-[42px] bg-[#F7F8FD] px-6 py-8 shadow-xl">
          {/* Header */}

          <div className="flex items-center">
            <ArrowLeft className="text-black" size={28} />

            <h1 className="flex-1 text-center text-[20px] font-semibold text-[#07255B] mr-6">
              Transaction Details
            </h1>
          </div>

          {/* Amount */}

          <div className="mt-14 text-center">
            <h3 className="text-[18px] font-medium text-black">Amount</h3>

            <h2 className="mt-5 text-[44px] font-bold">$78.00</h2>

            <p className="mt-2 text-[13px] text-gray-400">
              Your Balance $9840.50
            </p>
          </div>

          {/* Slider */}

          <div className="mt-12 px-5">
            <div className="relative h-2 rounded-full bg-white">
              <div className="absolute left-0 top-0 h-2 w-[22%] rounded-full bg-[#FF8078]" />

              <div className="absolute left-[20%] -top-[7px] h-6 w-6 rounded-full bg-[#FF8078]" />
            </div>
          </div>

          {/* Amount Grid */}

          <div className="mt-12 grid grid-cols-4 gap-4">
            {amounts.map((item) => (
              <button
                key={item.toString()}
                className={`h-[60px] rounded-2xl border text-[28px] font-semibold transition
              ${
                item === 20
                  ? "bg-[#FF8078] text-white border-[#FF8078]"
                  : "bg-white border-gray-200 text-black"
              }`}
              >
                ${item}
              </button>
            ))}
          </div>

          {/* Wallet */}

          <div className="mt-10 flex items-center justify-between">
            <h2 className="text-[18px] font-semibold">Wallet Type</h2>

            <button className="text-[#07255B] font-medium">Add</button>
          </div>

          <div className="mt-8 space-y-8">
            {wallets.map((wallet) => (
              <div
                key={wallet.id}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-full text-3xl font-bold text-white"
                    style={{ background: wallet.color }}
                  >
                    {wallet.logo}
                  </div>

                  <div>
                    <h3 className="text-[18px] font-medium">{wallet.name}</h3>

                    <p className="text-sm tracking-[2px] text-gray-400">
                      {wallet.number}
                    </p>
                  </div>
                </div>

                {wallet.active ? (
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FF8078]">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                ) : (
                  <div className="h-6 w-6 rounded-full bg-gray-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </MobileView>
  );
}
