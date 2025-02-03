import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import QRCode from "react-qr-code"; // ✅ Import from react-qr-code
import { Button } from "@/components/ui/button";

export function CheckoutPage({ cart, setCart }) {
  const navigate = useNavigate();
  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);
  const [deliveryDate] = useState(new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toDateString());
  const [showQR, setShowQR] = useState(false);

  // Mock UPI Payment Link (Replace with actual UPI link if needed)
  const paymentLink = `upi://pay?pa=merchant@upi&pn=FarmMarketplace&mc=1234&tid=TXN${Date.now()}&tr=ORDER${Date.now()}&tn=Payment%20for%20Products&am=${totalAmount}&cu=INR`;

  // Confirm Payment
  const confirmPayment = () => {
    alert(`Payment Successful! Your order will be delivered on ${deliveryDate}.`);
    setCart([]); // Clear the cart
    navigate("/"); // Redirect to Home Page
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <div className="bg-white p-6 shadow-md rounded-md w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Checkout</h1>
        <h2 className="text-xl font-bold">Total Amount: ₹{totalAmount.toFixed(2)}</h2>
        <p className="text-gray-600">Estimated Delivery: {deliveryDate}</p>

        {!showQR ? (
          <Button className="w-full mt-4 bg-green-700" onClick={() => setShowQR(true)}>
            Pay Now
          </Button>
        ) : (
          <div className="mt-6 flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-2">Scan to Pay</h3>
            <QRCode value={paymentLink} size={200} /> {/* ✅ Updated QR Code */}
            <p className="text-gray-500 mt-2">Scan this QR code using any UPI app.</p>
            <Button className="mt-4 w-full bg-blue-700" onClick={confirmPayment}>
              I Have Paid
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
