import { useState } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";

const Women = () => {

  /* ================= STATE ================= */

  // demo product array
  const [products] = useState(Array.from({ length: 12 }));

  const [selectedSize, setSelectedSize] = useState(null);
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState(12000);
  const [colors, setColors] = useState([]);

  /* ================= HANDLERS ================= */

  const toggleColor = (color) => {
    setColors(prev =>
      prev.includes(color)
        ? prev.filter(c => c !== color)
        : [...prev, color]
    );
  };

  return (
    <div className="pt-14">
      <div className="flex justify-center gap-10 py-8 px-12">

        {/* ================= FILTER SECTION ================= */}
        <div className="w-1/4">
          <h1 className="font-bold text-lg">FILTERS</h1>

          {/* Size */}
          <div>
            <h5 className="mt-3 font-semibold">Size</h5>

            <div className="grid grid-cols-3 gap-3 mt-2">
              {[6,7,8,9,10,11,12,13].map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`border py-2 px-4 !rounded-xl transition
                    ${selectedSize === size ? "bg-red-400 text-white" : ""}
                  `}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Brand */}
          <div>
            <h5 className="pt-3 font-semibold">Brand</h5>
            <select
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="w-full border rounded mt-2 p-2"
            >
              <option value="">Choose Brand</option>
              <option>PUMA</option>
              <option>NIKE</option>
              <option>ADIDAS</option>
              <option>REDTAPE</option>
            </select>
          </div>

          {/* Price */}
          <div>
            <h5 className="pt-3 font-semibold">Price Range</h5>
            <div className="flex flex-col gap-2 mt-2">
              <label>₹0 - ₹{price}</label>
              <input
                type="range"
                min="0"
                max="12000"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>

          {/* Colors */}
          <div>
            <h5 className="pt-3 mb-3 font-semibold">Colours</h5>

            {[
              { name: "Green", color: "bg-green-500" },
              { name: "Black", color: "bg-black" },
              { name: "White", color: "bg-white" },
            ].map((item) => (
              <div key={item.name} className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={colors.includes(item.name)}
                  onChange={() => toggleColor(item.name)}
                />
                <span className={`w-5 h-5 rounded-full border ${item.color}`}></span>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ================= PRODUCT SECTION ================= */}
        <div className="flex flex-col w-3/4">
          <h1 className="font-extrabold text-2xl mb-4">WOMEN</h1>

          <div className="grid grid-cols-3 gap-4">
            {products.map((_, index) => (
              <Card key={index} />
            ))}
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default Women;
