import React from "react";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="bg-white min-h-screen pt-15">
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* ===== Title ===== */}
        <h1 className="text-4xl font-extrabold mb-4">About Reybon</h1>
        <p className="text-gray-600 max-w-3xl">
          Reybon was built for sneaker lovers who want premium style,
          reliable quality, and fast delivery without the drama.
          We source, verify, and deliver the pairs you actually want to wear.
        </p>

        {/* ===== Mission ===== */}
        <div className="mt-12 grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
            alt="sneakers"
            className="rounded-xl shadow-md"
          />

          <div>
            <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
            <p className="text-gray-700">
              We aim to make premium footwear accessible and trustworthy.
              Every product goes through careful selection so you receive
              exactly what you expect. No surprises, no compromises.
            </p>
          </div>
        </div>

        {/* ===== Why Us ===== */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Why Shop With Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg mb-2">
                ✔ Verified Quality
              </h3>
              <p className="text-gray-600">
                Each pair is checked to meet our quality standards before
                reaching your doorstep.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg mb-2">
                🚚 Fast Shipping
              </h3>
              <p className="text-gray-600">
                Quick processing and reliable delivery because waiting is
                the hardest part.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg mb-2">
                💬 Real Support
              </h3>
              <p className="text-gray-600">
                Questions or issues? Our team is ready to help you anytime.
              </p>
            </div>

          </div>
        </div>

        {/* ===== Story ===== */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-700 max-w-4xl">
            Reybon started with a simple idea: buying great shoes online
            should feel easy and exciting. From everyday wear to statement
            pieces, we continuously expand our collection to match modern
            trends and timeless classics.
          </p>
        </div>

        {/* ===== CTA ===== */}
        <div className="mt-16 bg-black text-white p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-2">
            Ready to find your next pair?
          </h2>
          <p>Step into style with Reybon today.</p>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default About;
