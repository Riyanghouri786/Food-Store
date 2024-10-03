"use client";
import { useState } from "react";

export default function Home() {
  const [balance, setBalance] = useState(100); // Default balance is $100
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Pepperoni Pizza", price: 12.99 },
    { id: 2, name: "Margherita Pizza", price: 10.99 },
    { id: 3, name: "BBQ Chicken Pizza", price: 13.99 },
  ]); // Sample cart items

  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [isDepositModalOpen, setDepositModalOpen] = useState(false);
  const [isWithdrawModalOpen, setWithdrawModalOpen] = useState(false);
  const [selectedDepositMethod, setSelectedDepositMethod] = useState("Binance");
  const [selectedWithdrawMethod, setSelectedWithdrawMethod] =
    useState("Binance");

  const handleCheckout = () => {
    const totalCheckoutAmount = cartItems.reduce(
      (total, item) => total + item.price,
      0
    ); // Calculate total price
    if (balance >= totalCheckoutAmount) {
      setBalance(balance - totalCheckoutAmount); // Decrease balance by the checkout amount
      setCartItems([]); // Clear the cart after checkout
      alert(
        `Checkout successful! New balance: $${(
          balance - totalCheckoutAmount
        ).toFixed(2)}`
      );
    } else {
      alert("Insufficient balance for checkout.");
    }
  };

  const handleDeposit = () => {
    if (depositAmount <= 0 || depositAmount > 1000) {
      alert("Please enter a valid deposit amount (maximum $1000).");
      return;
    }
    setBalance(balance + parseFloat(depositAmount));
    alert(
      `Deposit successful! New balance: $${(
        balance + parseFloat(depositAmount)
      ).toFixed(2)}`
    );
    setDepositAmount(0); // Reset deposit input
    setDepositModalOpen(false); // Close modal
  };

  const handleWithdraw = () => {
    if (
      withdrawAmount <= 0 ||
      withdrawAmount > balance ||
      withdrawAmount > 1000
    ) {
      alert("Please enter a valid withdrawal amount (maximum $1000).");
      return;
    }
    setBalance(balance - parseFloat(withdrawAmount));
    alert(
      `Withdrawal successful! New balance: $${(
        balance - parseFloat(withdrawAmount)
      ).toFixed(2)}`
    );
    setWithdrawAmount(0); // Reset withdraw input
    setWithdrawModalOpen(false); // Close modal
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen p-8 text-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      {/* Header */}
      <h2 className="mb-4 text-5xl font-extrabold tracking-wide">
        Welcome to🍟Food Store
      </h2>
      <p className="max-w-2xl mb-10 text-xl leading-relaxed text-center">
        Indulge in a delicious variety of pizzas. Order now and enjoy the best
        flavors in town!
      </p>

      {/* Balance Display */}
      <div className="w-full max-w-sm p-4 mb-10 text-center bg-white rounded-lg shadow-lg bg-opacity-20">
        <h3 className="mb-2 text-2xl font-bold text-white">Current Balance</h3>
        <div className="text-4xl font-extrabold">${balance.toFixed(2)}</div>
      </div>

      {/* Deposit and Withdraw Buttons */}
      <div className="flex mb-10 space-x-4">
        <button
          onClick={() => setDepositModalOpen(true)}
          className="px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700"
        >
          Deposit
        </button>
        <button
          onClick={() => setWithdrawModalOpen(true)}
          className="px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700"
        >
          Withdraw
        </button>
      </div>

      {/* Cart Display */}
      <div className="w-full max-w-lg p-6 text-center bg-white rounded-lg shadow-lg bg-opacity-20">
        <h3 className="mb-6 text-3xl font-bold">My Cart</h3>
        {cartItems.length === 0 ? (
          <p className="text-lg">
            Your cart is empty. Add some delicious pizzas!
          </p>
        ) : (
          <>
            <ul className="grid grid-cols-1 gap-4 mb-6">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between px-4 py-2 text-gray-800 transition-transform transform bg-white rounded-lg shadow-md bg-opacity-80 hover:scale-105"
                >
                  <span>{item.name}</span>
                  <span className="font-semibold">
                    ${item.price.toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
            {/* Total Price */}
            <div className="mb-6 text-2xl font-bold">
              Total: $
              {cartItems
                .reduce((total, item) => total + item.price, 0)
                .toFixed(2)}
            </div>
          </>
        )}
        {/* Checkout Button */}
        <button
          onClick={handleCheckout}
          className="w-full px-6 py-3 text-lg font-semibold text-white transition-transform transform bg-pink-600 rounded-lg shadow-md hover:scale-105 hover:bg-pink-700 focus:ring focus:ring-pink-400"
        >
          Checkout Now
        </button>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-sm text-center text-white opacity-70">
        © 2024 Food Store. All rights reserved.
      </footer>

      {/* Deposit Modal */}
      {isDepositModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="mb-4 text-xl font-bold">Deposit Funds</h3>
            <input
              type="text"
              value={depositAmount}
              onChange={(e) => setDepositAmount(e.target.value)}
              placeholder="Deposit Amount (max $1000)"
              className="px-4 py-2 mb-4 text-black border rounded-lg"
            />
            <select
              value={selectedDepositMethod}
              onChange={(e) => setSelectedDepositMethod(e.target.value)}
              className="px-4 py-2 mb-4 text-black border rounded-lg"
            >
              <option className="text-black" value="Binance">
                Binance
              </option>
              <option className="text-black" value="MetaMask">
                MetaMask
              </option>
              <option className="text-black" value="HBL Bank">
                HBL Bank
              </option>
              <option className="text-black" value="Naya pay">
                Naya pay
              </option>
            </select>
            <div className="flex justify-between">
              <button
                onClick={handleDeposit}
                className="px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700"
              >
                Confirm Deposit
              </button>
              <button
                onClick={() => setDepositModalOpen(false)}
                className="px-4 py-2 text-black bg-gray-300 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Withdraw Modal */}
      {isWithdrawModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="mb-4 text-xl font-bold">Withdraw Funds</h3>
            <input
              type="text"
              value={withdrawAmount}
              onChange={(e) => setWithdrawAmount(e.target.value)}
              placeholder="Withdraw Amount (max $1000)"
              className="px-4 py-2 mb-4 text-black border rounded-lg"
            />
            <select
              value={selectedWithdrawMethod}
              onChange={(e) => setSelectedWithdrawMethod(e.target.value)}
              className="px-4 py-2 mb-4 text-black border rounded-lg"
            >
              <option className="text-black" value="Binance">
                Binance
              </option>
              <option className="text-black" value="MetaMask">
                MetaMask
              </option>
              <option className="text-black" value="HBL Bank">
                HBL Bank
              </option>
            </select>
            <div className="flex justify-between">
              <button
                onClick={handleWithdraw}
                className="px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700"
              >
                Confirm Withdrawal
              </button>
              <button
                onClick={() => setWithdrawModalOpen(false)}
                className="px-4 py-2 text-black bg-gray-300 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
