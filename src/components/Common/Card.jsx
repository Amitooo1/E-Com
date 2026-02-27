import { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { NavLink } from "react-router";
import pic1 from "../../assets/pic1.jpg";
import pic2 from "../../assets/pic2.jpg";
import pic3 from "../../assets/pic3.jpg";

const Card = () => {
  /* ================= IMAGES FROM LOCAL ================= */
  const images = [pic1, pic2, pic3];

  const [index, setIndex] = useState(0);

  /* ================= AUTO CHANGE ================= */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // change every 1 sec

    return () => clearInterval(interval);
  },);

  return (
    <div className="w-full">
      <NavLink to={"/singlepage"} className="no-underline!">
        <div className="mt-4 transition hover:scale-101 text-black cursor-pointer w-full">

          {/* ================= Image Slider ================= */}
          <div className="w-full overflow-hidden rounded-xl">
            <div className="aspect-4/5">
              <img
                key={index}
                src={images[index]}
                alt="shoe"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* ================= Content ================= */}
          <div className="w-full">
            <div className="border border-black rounded-xl font-bold px-3 inline-block my-2">
              New
            </div>

            <div className="text-xl font-bold">
              Men's Running Shoes
            </div>

            <div className="font-semibold">
              MRP ₹ 1200.00
            </div>

            <button className="flex justify-center items-center gap-3 w-full border mt-2 py-2 rounded transition hover:bg-red-400 hover:text-white">
              <ShoppingCart className="h-5 w-5 stroke-2" />
              <span className="font-semibold">Add to cart</span>
            </button>
          </div>

        </div>
      </NavLink>
    </div>
  );
};

export default Card;
