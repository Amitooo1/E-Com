// import { ShoppingCart } from 'lucide-react'
// import { NavLink } from 'react-router'

// const Card = () => {
//   return (
//     <div className="w-full">
//       <NavLink to={"/singlepage"} className="!no-underline">
//         <div className="mt-4 transition hover:scale-101 text-black cursor-pointer w-full">

//           {/* Image */}
//           <div className="w-full">
//             <img
//               className="w-full h-48 object-cover rounded-xl"
//               src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&auto=format&fit=crop&q=60"
//               alt="shoe"
//             />
//           </div>

//           {/* Content */}
//           <div className="w-full">
//             <div className="border border-black rounded-xl font-bold px-3 inline-block my-2">
//               New
//             </div>

//             <div className="text-xl font-bold">
//               Men's Running Shoes
//             </div>

//             <div className="font-semibold">
//               MRP ₹ 1200.00
//             </div>

//             <button className="flex justify-center items-center gap-3 w-full border mt-2 py-2 rounded transition hover:bg-gray-600 hover:text-white">
//               <ShoppingCart className="h-5 w-5 stroke-2" />
//               <span className="font-semibold">Add to cart</span>
//             </button>

//           </div>

//         </div>
//       </NavLink>
//     </div>
//   )
// }

// export default Card

import { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { NavLink } from "react-router";

const Card = () => {
  /* ================= IMAGES FROM LOCAL ================= */
  const images = [
    "./src/assets/pic1.jpg",
    "./src/assets/pic2.jpg",
    "./src/assets/pic3.jpg",
  ];

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
      <NavLink to={"/singlepage"} className="!no-underline">
        <div className="mt-4 transition hover:scale-101 text-black cursor-pointer w-full">

          {/* ================= Image Slider ================= */}
          <div className="w-full overflow-hidden rounded-xl">
            <img
              key={index}   // helps smooth re-render
              src={images[index]}
              alt="shoe"
              className="w-full h-48 object-cover transition-opacity duration-500"
            />
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
