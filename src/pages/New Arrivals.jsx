import React, { useState } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";

const New = () => {
  const MIN = 0;
  const MAX = 10000;

  const [price, setPrice] = useState(MAX);
  const [brand, setBrand] = useState("");
  const [gender, setGender] = useState([]);
  const [size, setSize] = useState(null);

  const toggleGender = (value) => {
    setGender((prev) =>
      prev.includes(value)
        ? prev.filter((g) => g !== value)
        : [...prev, value]
    );
  };

  return (
    <div className="pt-14">
      <div className="flex justify-center gap-10 py-8 px-12">
        {/* ================= FILTERS ================= */}
        <div className="w-1/4">
          <h1>FILTERS</h1>

          {/* Gender */}
          <div>
            <h5 className="pt-3 mb-3">Gender</h5>
            <div className="space-y-2">
              {["MEN", "WOMEN"].map((g) => (
                <div key={g} className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={gender.includes(g)}
                    onChange={() => toggleGender(g)}
                  />
                  <span>{g}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Size */}
          <div>
            <h5 className="mt-3">Size</h5>
            <div className="grid grid-cols-3 gap-3">
              {[6, 7, 8, 9, 10, 11, 12, 13].map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`border py-2 px-4 !rounded-xl transition duration-200
                    ${size === s ? "bg-red-500 text-white" : "hover:bg-red-400"}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Brand */}
          <div>
            <h5 className="pt-3">Brand</h5>
            <select
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="w-full border rounded"
            >
              <option value="" disabled>
                Choose Brand
              </option>
              {[
                "PUMA",
                "NIKE",
                "ADIDAS",
                "REDTAPE",
                "BUCCA BUCCI",
                "METRO",
                "RED CHIEF",
                "ASICS",
                "CAMPUS",
                "SPARKS",
                "ASIAN",
              ].map((b) => (
                <option key={b}>{b}</option>
              ))}
            </select>
          </div>

          {/* Price */}
          <div>
            <h5 className="pt-3">Price Range</h5>
            <div className="flex flex-col gap-2">
              <label>
                ₹{MIN} - ₹{price}
              </label>

              <input
                type="range"
                min={MIN}
                max={MAX}
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </div>
          </div>

          {/* Colours */}
          <div>
            <h5 className="pt-3 mb-3">Colours</h5>
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {[
                { name: "Green", color: "bg-green-500" },
                { name: "Black", color: "bg-black" },
                { name: "White", color: "bg-white" },
                { name: "Tan", color: "bg-yellow-700" },
                { name: "Maroon", color: "bg-red-800" },
                { name: "Brown", color: "bg-amber-900" },
              ].map((item) => (
                <div key={item.name} className="flex items-center gap-3">
                  <input type="checkbox" />
                  <span className={`w-5 h-5 rounded-full border ${item.color}`} />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= PRODUCTS ================= */}
        <div className="flex flex-col w-3/4">
          <h1 className="font-extrabold">NEW ARRIVALS</h1>

          <div className="grid grid-cols-3 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <Card key={i} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default New;
 