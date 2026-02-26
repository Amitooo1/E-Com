import { Trash } from "lucide-react";
import pic1 from "../../assets/pic1.jpg";
import pic2 from "../../assets/pic2.jpg";

const Cart = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-20 px-6 pb-4">
      
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
