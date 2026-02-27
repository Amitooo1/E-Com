import { useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import Card from "../../components/Common/Card";

const Kids = () => {
  const MIN_PRICE = 0;
  const MAX_PRICE = 12000;

  const [products] = useState(Array.from({ length: 12 }));
  const [selectedGender, setSelectedGender] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [priceRange, setPriceRange] = useState(MAX_PRICE);
  const [selectedColors, setSelectedColors] = useState([]);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const toggleGender = (value) => {
    setSelectedGender((prev) =>
      prev.includes(value)
        ? prev.filter((g) => g !== value)
        : [...prev, value]
    );
  };

  const toggleColor = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color)
        ? prev.filter((c) => c !== color)
        : [...prev, color]
    );
  };

  return (
    <main className="pt-10 bg-gradient-to-b from-gray-50 via-white to-gray-100 min-h-screen">

      {/* ===== Header ===== */}
      <section className="text-center mt-12 mb-8 px-4">
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
          KIDS COLLECTION
        </h1>
        <p className="text-gray-500 mt-2 text-sm uppercase tracking-widest">
          Small sizes. Big style.
        </p>
      </section>

      {/* Mobile Filter Button */}
      <div className="lg:hidden px-4 mb-6">
        <button
          onClick={() => setMobileFilterOpen(true)}
          className="flex items-center gap-2 bg-black text-white px-5 py-2 rounded-full text-sm"
        >
          <SlidersHorizontal size={16} />
          Filters
        </button>
      </div>

      <div className="flex gap-10 px-4 sm:px-8 lg:px-16 pb-12">

        {/* ================= FILTER SIDEBAR ================= */}
        <aside
          className={`
            fixed lg:static top-0 left-0
            h-screen lg:h-fit
            w-80 lg:w-1/4
            bg-white
            z-50
            shadow-2xl lg:shadow-xl
            p-6
            border-r lg:border
            rounded-none lg:rounded-2xl
            overflow-y-auto
            transform transition-transform duration-300
            ${mobileFilterOpen ? "translate-x-0" : "-translate-x-full"}
            lg:translate-x-0
          `}
        >
          {/* Close Mobile */}
          <div className="flex justify-between items-center lg:hidden mb-6 mt-12">
            <h2 className="font-semibold text-lg">Filters</h2>
            <button onClick={() => setMobileFilterOpen(false)}>
              <X size={20} />
            </button>
          </div>

          <h2 className="hidden lg:block font-semibold text-lg mb-6">
            Refine Choices
          </h2>

          {/* Gender */}
          <div className="mb-6">
            <h3 className="text-xs font-semibold uppercase text-gray-500 mb-3">
              Gender
            </h3>
            {["BOY", "GIRL"].map((gender) => (
              <div className="flex">
                <label
                  key={gender}
                  className="flex items-center gap-3 mb-2 text-sm cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedGender.includes(gender)}
                    onChange={() => toggleGender(gender)}
                    className="accent-black mr-2"
                  />
                  {gender}
                </label>
              </div>
            ))}
          </div>

          {/* Size */}
          <div className="mb-6">
            <h3 className="text-xs font-semibold uppercase text-gray-500 mb-3">
              Size
            </h3>
            <div className="grid grid-cols-4 gap-2">
              {[6,7,8,9,10,11,12,13].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`text-sm py-2 rounded-full! border transition
                    ${
                      selectedSize === size
                        ? "bg-black text-white scale-105"
                        : "hover:bg-gray-100"
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Brand */}
          <div className="mb-6">
            <h3 className="text-xs font-semibold uppercase text-gray-500 mb-3">
              Brand
            </h3>
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="w-full border rounded-lg p-2 text-sm focus:ring-2 focus:ring-black"
            >
              <option value="">Select Brand</option>
              {[
                "PUMA","NIKE","ADIDAS","REDTAPE","BUCCA BUCCI",
                "METRO","RED CHIEF","ASICS","CAMPUS","SPARKS","ASIAN",
              ].map((brand) => (
                <option key={brand}>{brand}</option>
              ))}
            </select>
          </div>

          {/* Price */}
          <div className="mb-6">
            <h3 className="text-xs font-semibold uppercase text-gray-500 mb-3">
              Price
            </h3>
            <p className="text-sm mb-2 font-medium">
              ₹{MIN_PRICE} – ₹{priceRange}
            </p>
            <input
              type="range"
              min={MIN_PRICE}
              max={MAX_PRICE}
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="w-full accent-red-400"
            />
          </div>

          {/* Colors */}
          <div>
            <h3 className="text-xs font-semibold uppercase text-gray-500 mb-3">
              Colours
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "Green", className: "bg-green-500" },
                { name: "Black", className: "bg-black" },
                { name: "White", className: "bg-white border" },
                { name: "Tan", className: "bg-yellow-700" },
                { name: "Maroon", className: "bg-red-800" },
                { name: "Brown", className: "bg-amber-900" },
              ].map((color) => (
                <button
                  key={color.name}
                  onClick={() => toggleColor(color.name)}
                  className={`w-6 h-6 rounded-full! border transition hover:scale-110
                    ${color.className}
                    ${
                      selectedColors.includes(color.name)
                        ? "ring-2 ring-black"
                        : ""
                    }`}
                />
              ))}
            </div>
          </div>
        </aside>

        {/* ================= PRODUCT GRID ================= */}
        <section className="flex-1">
          <div className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            xl:grid-cols-4
            gap-6 sm:gap-8
          ">
            {products.map((_, index) => (
              <div
                key={index}
                className="transition duration-300 hover:-translate-y-2"
              >
                <Card />
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Overlay */}
      {mobileFilterOpen && (
        <div
          onClick={() => setMobileFilterOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}
    </main>
  );
};

export default Kids;