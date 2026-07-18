import { ArrowLeft } from "lucide-react";
import MobileView from "../../components/mobile/mobileView/MobileView";

export default function TopUp() {
  const [selectedAmount, setSelectedAmount] = useState<number>(20);
  const [selectedWallet, setSelectedWallet] = useState<number>(1);
  const [balance] = useState<number>(9840.5);

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

  const handleAmountClick = (amount: number | string) => {
    const value = amount === "1k" ? 1000 : Number(amount);
    setSelectedAmount(value);
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAmount(Number(e.target.value));
  };

  const handleWalletClick = (walletId: number) => {
    setSelectedWallet(walletId);
  };

  const handleTopUp = () => {
    const wallet = wallets.find((item) => item.id === selectedWallet);

    if (!wallet) {
      alert("Please select a wallet.");
      return;
    }

    const transactionId = Math.random()
      .toString(36)
      .substring(2, 12)
      .toUpperCase();

    const date = new Date().toLocaleString();

    alert(`
Top Up Successful!

Amount: $${selectedAmount.toFixed(2)}

Wallet: ${wallet.name}

Transaction ID: ${transactionId}

Date: ${date}
  `);
  };

  

  return (
    <MobileView>
      <div className="min-h-screen flex items-center justify-center bg-[#ECECEC]">
        <div className="w-[390px] rounded-[42px] bg-[#F7F8FD] px-6 py-8 shadow-xl">
          {/* Header */}
          <div className="flex items-center">
            <ArrowLeft
              size={28}
              onClick={handleBack}
              className="cursor-pointer text-black"
            />

            <h1 className="mr-6 flex-1 text-center text-[20px] font-semibold text-[#07255B]">
              Transaction Details
            </h1>
          </div>

          {/* Amount */}
          <div className="mt-14 text-center">
            <h3 className="text-[18px] font-medium">Amount</h3>

            <h2 className="mt-5 text-[44px] font-bold">
              ${selectedAmount.toFixed(2)}
            </h2>

            <p className="mt-2 text-[13px] text-gray-400">
              Your Balance ${balance.toFixed(2)}
            </p>
          </div>

          {/* Slider */}
          <div className="mt-12 px-3">
            <input
              type="range"
              min={5}
              max={1000}
              value={selectedAmount}
              onChange={(e) => setSelectedAmount(Number(e.target.value))}
              className="w-full accent-[#FF8078]"
            />
          </div>

          {/* Amount Grid */}
          <div className="mt-10 grid grid-cols-4 gap-4">
            {amounts.map((item) => {
              const value = item === "1k" ? 1000 : Number(item);

              return (
                <button
                  key={item.toString()}
                  onClick={() => handleAmountClick(item)}
                  className={`h-[60px] rounded-2xl border text-[22px] font-semibold transition-all duration-300
                ${
                  selectedAmount === value
                    ? "border-[#FF8078] bg-[#FF8078] text-white"
                    : "border-gray-200 bg-white text-black hover:bg-gray-100"
                }`}
                >
                  {item === "1k" ? "1K" : `$${item}`}
                </button>
              );
            })}
          </div>

          {/* Wallet */}
          <div className="mt-10 flex items-center justify-between">
            <h2 className="text-[18px] font-semibold">Wallet Type</h2>

            <button
              onClick={handleAddWallet}
              className="font-medium text-[#07255B]"
            >
              Add
            </button>
          </div>

          <div className="mt-8 space-y-6">
            {wallets.map((wallet) => (
              <button
                key={wallet.id}
                onClick={() => handleWalletClick(wallet.id)}
                className={`flex w-full items-center justify-between rounded-2xl p-2 transition-all
              ${selectedWallet === wallet.id ? "bg-white shadow-md" : ""}`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-full text-3xl font-bold text-white"
                    style={{ backgroundColor: wallet.color }}
                  >
                    {wallet.logo}
                  </div>

                  <div className="text-left">
                    <h3 className="text-[18px] font-medium">{wallet.name}</h3>

                    <p className="text-sm tracking-[2px] text-gray-400">
                      {wallet.number}
                    </p>
                  </div>
                </div>

                {selectedWallet === wallet.id ? (
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
                  <div className="h-6 w-6 rounded-full border-2 border-gray-300" />
                )}
              </button>
            ))}
          </div>

          {/* Button */}
          <button
            onClick={handleTopUp}
            className="mt-12 w-full rounded-2xl bg-[#07255B] py-5 text-lg font-semibold text-white transition hover:opacity-90"
          >
            TOP UP NOW
          </button>
        </div>
      </div>
    </MobileView>
  );
}
