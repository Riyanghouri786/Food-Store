"use client";
import { useState } from "react";

export default function Home() {
  const [balance, setBalance] = useState(100); // Default balance is $100
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Pepperoni Pizza", price: 12.99 },
    { id: 2, name: "Margherita Pizza", price: 10.99 },
    { id: 3, name: "BBQ Chicken Pizza", price: 13.99 },
  ]); // Sample cart items

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

  return (
    <section className="flex flex-col items-center justify-center min-h-screen p-8 text-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      {/* Header */}
      <h2 className="mb-4 text-5xl font-extrabold tracking-wide">
        Welcome to 🍟Food Store
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
    </section>
  );
}
