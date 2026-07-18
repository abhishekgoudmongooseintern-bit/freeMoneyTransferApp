import { useState } from "react";
import MobileView from "../../components/mobile/mobileView/MobileView";
import { Minus, Plus } from "lucide-react";
import arrowImg from "../../assets/images/Back.png";
import BackIcon from "../../assets/images/backIcone.png";
import CardImg from "../../assets/images/card.png";
// import { useNavigate } from "react-router-dom";

const Transfer = () => {
  const [amount, setAmount] = useState(150);
  const [selectedRecipient, setSelectedRecipient] = useState<number>(2);
  // const navigate = useNavigate();

  const [showSuccess, setShowSuccess] = useState(false);

  const [transaction, setTransaction] = useState({
    name: "",
    amount: 0,
    transactionId: "",
    transferCost: 0,
    date: "",
  });

  const recipients = [
    {
      id: 1,
      name: "John",
      image: "https://i.pravatar.cc/100?img=12",
    },
    {
      id: 2,
      name: "Lori Bryson",
      image: "https://i.pravatar.cc/100?img=32",
    },
    {
      id: 3,
      name: "Emma",
      image: "https://i.pravatar.cc/100?img=47",
    },
    {
      id: 4,
      name: "Alex",
      image: "https://i.pravatar.cc/100?img=15",
    },
    {
      id: 5,
      name: "David",
      image: "https://i.pravatar.cc/100?img=68",
    },
  ];

  const quickAmounts = [100, 150, 200, 250];

  const selectedUser = recipients.find((user) => user.id === selectedRecipient);

  const increaseAmount = () => setAmount((prev) => prev + 10);

  const decreaseAmount = () => setAmount((prev) => Math.max(prev - 10, 0));

  const handleBack = () => {
    console.log("Back");
  };

  const handleSendMoney = () => {
    if (!selectedUser) return;

    setTransaction({
      name: selectedUser.name,
      amount,
      transactionId: Math.random().toString().slice(2, 12),
      transferCost: 0,
      date: new Date().toLocaleString(),
    });

    setShowSuccess(true);
  };

  if (showSuccess) {
    return (
      <MobileView>
        <div className="h-[812px] w-[375px] rounded-[40px] bg-[#F7F7F7] px-7 py-8 shadow-xl flex flex-col items-center">
          {/* Close */}
          <button onClick={() => setShowSuccess(false)} className="text-3xl">
            ✕
          </button>

          <div className="mt-10 rounded-[25px] bg-[#07255B] p-8">
            <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-[#FF8C86]">
              <span className="text-6xl text-white">✓</span>
            </div>

            <h2 className="mt-8 text-center text-[22px] font-bold text-white">
              Transferred Successfully
            </h2>

            <div className="mt-10 space-y-6">
              <div className="flex justify-between">
                <span className="text-[#7381A9] text-[12px]">Name</span>
                <span className="text-white text-[12px]">{transaction.name}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#7381A9]  text-[12px]">
                  Transaction ID
                </span>
                <span className="text-white text-[12px]">{transaction.transactionId}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#7381A9]  text-[12px]">Amount</span>
                <span className="text-white text-[12px]">
                  ${transaction.amount.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#7381A9]  text-[12px]">
                  Transfer Cost
                </span>
                <span className="text-white text-[12px]">
                  ${transaction.transferCost.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#7381A9]  text-[12px]">Time & Date</span>
                <span className="text-right text-white text-[12px]">
                  {transaction.date}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setShowSuccess(false)}
            className="mt-15 h-13 w-60 rounded-[10px] bg-[#FF8C86] py-5 text-xl font-semibold text-white flex flex-col justify-center items-center"
          >
            DONE
          </button>
        </div>
      </MobileView>
    );
  }

  return (
    <MobileView>
      <div className="h-[812px] w-[375px] rounded-[40px] bg-[#F7F7F7] px-7 py-8 shadow-xl">
        {/* Header */}
        <img src={arrowImg} alt="" />

        <div className="mt-3 flex items-center">
          <img src={BackIcon} alt="" />
          <h2 className="ml-3 text-[18px] font-bold text-[#07255B]">
            Send Money
          </h2>
        </div>

        <p className="text-lg text-gray-500">Choose Account</p>

        <div className="mt-2">
          <img src={CardImg} alt="" />
        </div>

        {/* Amount */}
        <div className="mt-6 text-center">
          <p className="text-[15px] font-medium">
            How much you would like to send?
          </p>

          <div className="mt-8 flex items-center justify-between">
            <button
              onClick={decreaseAmount}
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ECECEC] transition hover:bg-gray-300"
            >
              <Minus size={16} />
            </button>

            <span className="text-4xl font-bold text-[#07255B]">
              ${amount.toFixed(2)}
            </span>

            <button
              onClick={increaseAmount}
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ECECEC] transition hover:bg-gray-300"
            >
              <Plus size={16} />
            </button>
          </div>

          <div className="mt-8 flex justify-center gap-3">
            {quickAmounts.map((item) => (
              <button
                key={item}
                onClick={() => setAmount(item)}
                className={`rounded-full border px-5 py-2 text-sm transition-all ${
                  amount === item
                    ? "border-[#F8C243] bg-[#F8C243]"
                    : "border-gray-300 bg-white hover:bg-gray-100"
                }`}
              >
                ${item}
              </button>
            ))}
          </div>
        </div>

        {/* Recipient */}
        <div className="mt-5">
          <h3 className="text-[15px] font-semibold">Choose Recipient</h3>

          <div className="mt-6 flex justify-between">
            {recipients.map((user) => (
              <button
                key={user.id}
                onClick={() => setSelectedRecipient(user.id)}
                className="flex flex-col items-center"
              >
                <div
                  className={`rounded-full p-[3px] transition-all duration-300 ${
                    selectedRecipient === user.id
                      ? "border-[3px] border-[#07255B]"
                      : "border-[3px] border-transparent"
                  }`}
                >
                  <img
                    src={user.image}
                    alt={user.name}
                    className="w-16 rounded-full object-cover"
                  />
                </div>

                <p
                  className={`mt-2 h-5 text-xs transition-all ${
                    selectedRecipient === user.id
                      ? "font-semibold text-[#07255B] opacity-100"
                      : "opacity-0"
                  }`}
                >
                  {user.name}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="mt-10 flex gap-4">
          <button
            onClick={handleBack}
            className="flex-1 rounded-xl bg-[#FF8C86] py-5 text-lg font-semibold text-white transition hover:scale-[0.98]"
          >
            TAKE ME BACK
          </button>

          <button
            onClick={handleSendMoney}
            disabled={!selectedUser}
            className="flex-1 rounded-xl bg-[#07255B] py-5 text-lg font-semibold text-white transition hover:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
          >
            SEND MONEY
          </button>
        </div>
      </div>
    </MobileView>
  );
};

export default Transfer;
