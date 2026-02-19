import React from "react";
import Footer from "../components/Footer";

const BulkPurchases = () => {
  return (
    <div className="bg-white min-h-screen pt-15">
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* ===== Header ===== */}
        <h1 className="text-4xl font-extrabold mb-4">Bulk Purchases</h1>
        <p className="text-gray-600 max-w-3xl">
          Need larger quantities for your business, event, or organization?
          Reybon offers competitive pricing, dedicated support, and smooth
          logistics for bulk sneaker orders.
        </p>

        {/* ===== Who is this for ===== */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center pb-6">
            Who Buys in Bulk?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg mb-2">🏢 Retailers</h3>
              <p className="text-gray-600">
                Stock your shelves with trending sneakers and keep your
                customers coming back for more.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg mb-2">🎉 Events & Teams</h3>
              <p className="text-gray-600">
                Outfit your crew, school, or corporate event with stylish,
                comfortable footwear.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg mb-2">🛒 Resellers</h3>
              <p className="text-gray-600">
                Partner with Reybon to access volume pricing and reliable
                supply.
              </p>
            </div>
          </div>
        </div>

        {/* ===== Benefits ===== */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Why Choose Reybon?</h2>

          <div className="space-y-4 text-gray-700">
            <p>✔ Attractive discounts on high-volume orders.</p>
            <p>✔ Access to popular and fast-moving styles.</p>
            <p>✔ Dedicated relationship manager for assistance.</p>
            <p>✔ Quality-checked products and secure packaging.</p>
            <p>✔ Flexible shipping solutions across India.</p>
          </div>
        </div>

        {/* ===== How it works ===== */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">How Bulk Ordering Works</h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="border p-5 rounded-xl text-center">
              <h3 className="font-semibold mb-2">1. Send Enquiry</h3>
              <p className="text-sm text-gray-600">
                Tell us the styles, sizes, and quantity you need.
              </p>
            </div>

            <div className="border p-5 rounded-xl text-center">
              <h3 className="font-semibold mb-2">2. Get Quote</h3>
              <p className="text-sm text-gray-600">
                Our team shares pricing and availability quickly.
              </p>
            </div>

            <div className="border p-5 rounded-xl text-center">
              <h3 className="font-semibold mb-2">3. Confirm Order</h3>
              <p className="text-sm text-gray-600">
                Approve the quote and complete the payment.
              </p>
            </div>

            <div className="border p-5 rounded-xl text-center">
              <h3 className="font-semibold mb-2">4. Fast Delivery</h3>
              <p className="text-sm text-gray-600">
                We pack and dispatch to your location.
              </p>
            </div>
          </div>
        </div>

        {/* ===== CTA ===== */}
        <div className="mt-16 bg-black text-white p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-2">
            Ready to place a bulk order?
          </h2>
          <p className="mb-4">
            Reach out to our team and receive a customized quote today.
          </p>
          <button className="bg-red-400 px-6 py-3 rounded-lg">
            Contact Sales
          </button>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default BulkPurchases;
