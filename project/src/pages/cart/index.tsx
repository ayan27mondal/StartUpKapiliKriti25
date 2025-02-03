import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function CartPage({ cart, setCart }) {
  const navigate = useNavigate();
  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cart.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md mb-4">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">₹{item.price}/{item.unit}</p>
              </div>
            ))}
            <h2 className="text-xl font-bold mt-6">Total: ₹{totalAmount.toFixed(2)}</h2>
            <Button className="w-full mt-4" onClick={() => navigate("/checkout")}>Proceed to Checkout</Button>
          </div>
        )}
      </div>
    </div>
  );
}
