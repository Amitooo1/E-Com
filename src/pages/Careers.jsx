import React from "react";
import Footer from "../components/Footer";

const Careers = () => {
  return (
    <div className="bg-white min-h-screen pt-15">
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* ===== Header ===== */}
        <h1 className="text-4xl font-extrabold mb-4">Careers at Reybon</h1>
        <p className="text-gray-600 max-w-3xl">
          We are building a modern destination for sneaker lovers.
          If you are passionate about style, speed, and creating great
          customer experiences, you might fit right in.
        </p>

        {/* ===== Why Join ===== */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center pb-6">
            Why Work With Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg mb-2">🚀 Fast Growth</h3>
              <p className="text-gray-600">
                Work in a young, ambitious environment where ideas move
                quickly and your impact is visible.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg mb-2">🤝 Team Culture</h3>
              <p className="text-gray-600">
                We win together. Collaboration, respect, and learning are
                part of everyday life here.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg mb-2">📈 Career Path</h3>
              <p className="text-gray-600">
                Grow your skills, take ownership, and unlock new
                opportunities as Reybon expands.
              </p>
            </div>
          </div>
        </div>
        {/* ===== Open Roles ===== */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 pb-2">Open Positions</h2>

          <div className="space-y-4">

            <div className="border rounded-xl p-5 flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Customer Support Executive</h3>
                <p className="text-sm text-gray-500">
                  Full Time • On Site
                </p>
              </div>
              <button className="bg-red-400 text-white px-4 py-2 rounded-lg">
                Apply
              </button>
            </div>

            <div className="border rounded-xl p-5 flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Warehouse & Operations Associate</h3>
                <p className="text-sm text-gray-500">
                  Full Time • On Site
                </p>
              </div>
              <button className="bg-red-400 text-white px-4 py-2 rounded-lg">
                Apply
              </button>
            </div>

            <div className="border rounded-xl p-5 flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Digital Marketing Specialist</h3>
                <p className="text-sm text-gray-500">
                  Full Time • Hybrid
                </p>
              </div>
              <button className="bg-red-400 text-white px-4 py-2 rounded-lg">
                Apply
              </button>
            </div>

          </div>
        </div>

        {/* ===== CTA ===== */}
        <div className="mt-16 bg-black text-white p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-2">
            Don’t see the perfect role?
          </h2>
          <p className="mb-4">
            Send us your resume and tell us how you can help Reybon grow.
          </p>
          <button className="bg-red-400 px-6 py-3 rounded-lg">
            Share Resume
          </button>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default Careers;
