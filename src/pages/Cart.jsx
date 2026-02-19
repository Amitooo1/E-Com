// import React from 'react'
// import Carousal from '../components/Carousal'
// import { DeleteIcon, Trash } from 'lucide-react'

// const Cart = () => {
//   return (
//     <div className='mx-10'>
//       <div className='my-8'>
//         <h4 className=''>My Cart (2)</h4>
//       </div>
//       <div className='flex justify-between'>
//         <div className='w-3/5'>
//           <div className='flex justify-between items-center bg-gray-50 p-4'>
//             <div className='flex items-center'>
//               <img src='./src/assets/pic1.jpg' className='h-10 mx-2'></img>
//               <div className='px-4'>
//                 <h6 className='mb-0'>Running shoes</h6>
//                 <h8>₹ 999</h8>
//               </div>
//             </div>
//             <div>
//               <button className='rounded bg-red-400 px-2 py-1 text-2xl text-white font-bold'>- 2 +</button>
//             </div>
//             <div>
//               <Trash className='h-6 w-6 text-red-500 hover:scale-110'/>
//             </div>
            
//           </div>
//           <div className='flex justify-between items-center bg-gray-50 p-4 mt-2'>
//             <div className='flex items-center'>
//               <img src='./src/assets/pic3.jpg' className='h-10 mx-2'></img>
//               <div className='px-4'>
//                 <h6 className='mb-0'>Boy's Sneakers </h6>
//                 <h8>₹ 1,999</h8>
//               </div>
//             </div>
//             <div>
//               <button className='rounded bg-red-400 px-2 py-1 text-2xl text-white font-bold'>- 1 +</button>
//             </div>
//             <div>
//               <Trash className='h-6 w-6 text-red-500 hover:scale-110'/>
//             </div>
            
//           </div>
//           <div className='flex justify-end mt-2 '>
//             <button className='border border-black-300 px-3 py-2 rounded hover:bg-red-400 hover:text-white'>Continue Shopping</button>
//           </div>
//         </div>
//         <div className='w-2/5 bg-gray-50 mx-2'>
//           <div className='px-3'>
//             <h4 className=''>Order Summary</h4>
//             <hr className='border-black-50'></hr>
//             <h4 className='font-light text-gray-500'>Price Details</h4>
            
//           </div>
//           <div>
//             <div className='flex justify-between px-4'>
//               <p>Total MRP</p>
//               <p>Rs. 3997.00</p>
//             </div>
//             <div className='flex justify-between px-4'>
//               <p>Total Discount on MRP</p>
//               <p>Rs. 97.00</p>
//             </div>
//             <div className='flex justify-between px-4'>
//               <p>Shipping Charges</p>
//               <p>Rs. 50.00</p>
//             </div>
//             <div className='flex justify-between px-4'>
//               <p>Order Total</p>
//               <p>Rs. 3950.00</p>
//             </div>
//           </div>
//           <div className='flex justify-center py-2'>
//             <button className='border rounded py-2 text-bold mt-4 w-3/4 bg-red-400 text-white hover:shadow-xl'>Checkout</button>
//           </div>
//         </div>
          
//       </div>
//     </div>
    
//   )
// }

// export default Cart
import { Trash } from "lucide-react";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";

const Cart = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-18 px-6">
      
      {/* LEFT SIDE - CART ITEMS */}
      <div className="md:col-span-2 flex flex-col gap-4">

        {/* Item */}
        <div className="flex justify-between items-center border p-4 rounded-xl">
          <div className="flex gap-4 items-center">
            <img src={pic1} alt="shoe" className="h-20 w-20 object-cover rounded" />
            <div>
              <h3 className="font-bold">Running Shoes</h3>
              <p className="text-sm">Size: 9 | Color: Black</p>
              <p className="font-semibold">₹ 999</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="border px-2 rounded">-</button>
            <span className="font-semibold">1</span>
            <button className="border px-2 rounded">+</button>
          </div>

          <Trash className="text-red-500 cursor-pointer" />
        </div>

        {/* Item */}
        <div className="flex justify-between items-center border p-4 rounded-xl">
          <div className="flex gap-4 items-center">
            <img src={pic2} alt="shoe" className="h-20 w-20 object-cover rounded" />
            <div>
              <h3 className="font-bold">Sneakers</h3>
              <p className="text-sm">Size: 8 | Color: White</p>
              <p className="font-semibold">₹ 1,499</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="border px-2 rounded">-</button>
            <span className="font-semibold">1</span>
            <button className="border px-2 rounded">+</button>
          </div>

          <Trash className="text-red-500 cursor-pointer" />
        </div>

      </div>

      {/* RIGHT SIDE - PRICE DETAILS */}
      <div className="border p-4 rounded-xl h-fit">
        <h2 className="font-bold text-lg mb-4">Price Details</h2>

        <div className="flex justify-between mb-2">
          <span>Price (2 items)</span>
          <span>₹ 2,498</span>
        </div>

        <div className="flex justify-between mb-2">
          <span>Delivery Charges</span>
          <span className="text-green-600">Free</span>
        </div>

        <div className="flex justify-between font-bold border-t pt-3 mt-3">
          <span>Total Amount</span>
          <span>₹ 2,498</span>
        </div>

        {/* Delivery */}
        <div className="mt-4 text-sm">
          <p className="font-semibold">Delivery by:</p>
          <p>3 - 5 business days</p>
        </div>

        {/* Bank Offers */}
        <div className="mt-4 text-sm">
          <p className="font-semibold">Bank Offers:</p>
          <ul className="list-disc ml-4">
            <li>10% off on HDFC cards</li>
            <li>5% cashback on UPI</li>
          </ul>
        </div>

        <button className="mt-6 w-full bg-red-500 text-white py-3 rounded-xl font-bold hover:bg-red-600">
          Proceed to Checkout
        </button>
      </div>

    </div>
  );
};

export default Cart;
