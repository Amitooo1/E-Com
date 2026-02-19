import React, { useState } from "react";
import Footer from "../components/Footer";

const TrackOrder = () => {
  /* ================= STATE ================= */
  const [orderId, setOrderId] = useState("");
  const [contact, setContact] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleTrack = () => {
    // later you will connect API here
    if (orderId && contact) {
      setShowResult(true);
    }
  };

  return (
    <div className="bg-white min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* ================= PAGE TITLE ================= */}
        <h1 className="text-3xl font-extrabold mb-2">Track Your Order</h1>
        <p className="text-gray-600 mb-8">
          Enter your Order ID and registered email or phone number to view
          delivery updates.
        </p>

        {/* ================= INPUT BOX ================= */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-md max-w-xl">
          <div className="flex flex-col gap-4">

            <input
              type="text"
              placeholder="Order ID"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              className="border p-3 rounded"
            />

            <input
              type="text"
              placeholder="Email or Phone Number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="border p-3 rounded"
            />

            <button
              onClick={handleTrack}
              className="bg-red-400 text-white font-semibold py-3 rounded hover:bg-red-500 transition"
            >
              Track Order
            </button>
          </div>
        </div>
        <hr></hr>
        {/* ================= RESULT ================= */}
        {showResult && (
          <div className="mt-10 space-y-8">

            {/* Status */}
            <div>
              <h2 className="text-xl font-bold mb-3">Order Status</h2>
              <div className="bg-green-100 text-green-700 px-4 py-2 rounded w-fit">
                Out for Delivery
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h2 className="text-xl font-bold mb-3">Tracking Timeline</h2>

              <div className="space-y-3 text-gray-700">
                <p>✔ Order Confirmed</p>
                <p>✔ Packed at Warehouse</p>
                <p>✔ Shipped</p>
                <p>🚚 Out for Delivery</p>
              </div>
            </div>

            {/* Product */}
            <div>
              <h2 className="text-xl font-bold mb-3">Items in this Order</h2>

              <div className="flex items-center gap-4 bg-gray-50 p-4 rounded">
                <img
                  src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa"
                  alt="shoe"
                  className="w-20 h-20 object-cover rounded"
                />

                <div>
                  <p className="font-semibold">Men's Running Shoes</p>
                  <p className="text-gray-600">Size: 9</p>
                  <p className="text-gray-600">Qty: 1</p>
                </div>
              </div>
            </div>

            {/* Address */}
            <div>
              <h2 className="text-xl font-bold mb-3">Delivery Address</h2>
              <p className="text-gray-700">
                Name <br />
                21, MG Road <br />
                delhi, 110094<br />
              </p>
            </div>

            {/* Help */}
            <div>
              <h2 className="text-xl font-bold mb-3">Need Help?</h2>
              <p className="text-gray-700">
                If you have any questions about your shipment, contact our
                support team.
              </p>
              <p className="mt-2">Mail: support@reybon.com</p>
            </div>

          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default TrackOrder;
