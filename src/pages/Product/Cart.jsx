import { Trash } from "lucide-react";
import pic1 from "../../assets/pic1.jpg";
import pic2 from "../../assets/pic2.jpg";

const Cart = () => {
  const items = [
    {
      image: pic1,
      name: "Running Shoes",
      size: 9,
      color: "Black",
      price: 999,
    },
    {
      image: pic2,
      name: "Sneakers",
      size: 8,
      color: "White",
      price: 1499,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-20 pb-10 px-4 lg:px-8">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT CART ITEMS */}
        <div className="lg:col-span-2 space-y-4">

          {items.map((item, index) => (
            <div
              key={index}
              className="
                border rounded-2xl p-4 bg-white
                flex flex-col sm:flex-row
                sm:items-center justify-between
                gap-4 shadow-sm
              "
            >

              {/* Product Info */}
              <div className="flex items-center gap-4">

                <img
                  src={item.image}
                  alt="product"
                  className="h-20 w-20 object-cover rounded-xl"
                />

                <div>
                  <h3 className="font-bold text-lg">
                    {item.name}
                  </h3>

                  <p className="text-sm text-gray-600">
                    Size: {item.size} | Color: {item.color}
                  </p>

                  <p className="font-semibold text-lg mt-1">
                    ₹ {item.price}
                  </p>
                </div>

              </div>

              {/* Quantity + Delete */}
              <div className="flex items-center gap-4 self-start sm:self-center">

                <div className="flex items-center gap-3 border rounded-full px-4 py-1">
                  <button className="text-lg font-semibold px-2">
                    -
                  </button>

                  <span className="font-semibold">1</span>

                  <button className="text-lg font-semibold px-2">
                    +
                  </button>
                </div>

                <Trash className="text-red-500 cursor-pointer w-5 h-5" />

              </div>

            </div>
          ))}

        </div>

        {/* RIGHT PRICE SUMMARY */}
        <div className="bg-white border rounded-2xl p-5 shadow-sm h-fit sticky top-24">

          <h2 className="font-bold text-lg mb-4">
            Price Details
          </h2>

          <div className="flex justify-between text-sm mb-2">
            <span>Price (2 items)</span>
            <span>₹ 2,498</span>
          </div>

          <div className="flex justify-between text-sm mb-2">
            <span>Delivery Charges</span>
            <span className="text-green-600">Free</span>
          </div>

          <div className="border-t pt-3 mt-3 flex justify-between font-bold">
            <span>Total Amount</span>
            <span>₹ 2,498</span>
          </div>

          <div className="mt-5 text-sm space-y-1">
            <p className="font-semibold">Delivery by:</p>
            <p>3 - 5 business days</p>
          </div>

          <div className="mt-4 text-sm space-y-1">
            <p className="font-semibold">Bank Offers:</p>
            <ul className="list-disc ml-4 space-y-1">
              <li>10% off on HDFC cards</li>
              <li>5% cashback on UPI</li>
            </ul>
          </div>

          <button className="mt-6 w-full bg-red-500 text-white py-3 rounded-xl font-bold hover:bg-red-600 transition">
            Proceed to Checkout
          </button>

        </div>

      </div>
    </div>
  );
};

export default Cart;