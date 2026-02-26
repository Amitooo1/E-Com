import React, { useState } from "react";
import Card from "../../components/Common/Card";
import { Star } from "lucide-react";
import Footer from "../../components/Layout/Footer";

const SingleProductPage = () => {
  const images = [
    "/src/assets/pic1.jpg",
    "/src/assets/pic2.jpg",
    "/src/assets/pic3.jpg",
  ];

  const [mainImage, setMainImage] = useState(images[0]);
  const [size, setSize] = useState(null);
  const [color, setColor] = useState(null);

  const sizes = [6, 7, 8, 9, 10];
  const colors = ["white", "black", "blue"];

  return (
    <div className="mt-15">
      {/* TOP */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
        {/* IMAGES */}
        <div>
          <div className="border rounded-xl p-4">
            <img src={mainImage} alt="shoe" className="w-full h-80 object-cover" />
          </div>

          <div className="flex gap-3 mt-3">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setMainImage(img)}
                className="h-20 w-20 object-cover rounded cursor-pointer border"
                alt="thumb"
              />
            ))}
          </div>
        </div>

        {/* DETAILS */}
        <div className="px-6">
          <h2 className="text-2xl font-bold">Men's Running Shoes</h2>

          <div className="flex items-center gap-2 mt-2">
            <div className="flex text-yellow-500">
              {[...Array(4)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>
            <span className="text-gray-600">(124 reviews)</span>
          </div>

          <p className="text-xl font-semibold mt-3">₹ 1,999</p>

          {/* SIZE */}
          <div className="mt-5">
            <h4 className="font-semibold mb-2">Select Size</h4>
            <div className="flex gap-2">
              {sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`h-10 w-10 border !rounded-full ${
                    size === s ? "bg-black text-white" : ""
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* COLOR */}
          <div className="mt-5">
            <h4 className="font-semibold mb-2">Select Color</h4>
            <div className="flex gap-3">
              {colors.map((c) => (
                <div
                  key={c}
                  onClick={() => setColor(c)}
                  className={`h-8 w-8 rounded-full cursor-pointer border-2 ${
                    color === c ? "border-black" : "border-gray-300"
                  }`}
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-6">
            <button className="flex-1 border rounded-full py-2 font-semibold hover:bg-gray-100">
              Add to Cart
            </button>
            <button className="flex-1 bg-red-500 text-white rounded-full py-2 font-semibold hover:bg-red-600">
              Buy Now
            </button>
          </div>

          {/* DELIVERY */}
          <div className="mt-6">
            <h4 className="font-semibold">Delivery Options</h4>
            <p className="text-sm text-gray-600 mt-1">
              Free delivery by Tomorrow. Cash on Delivery available.
            </p>
          </div>
          <hr/>
          {/* BANK OFFERS */}
          <div className="mt-3 ">
            <h4 className="font-semibold">Bank Offers</h4>
            <ul className="text-sm text-gray-600 list-disc ml-4 mt-1">
              <li>10% instant discount on HDFC cards</li>
              <li>5% cashback on Axis Bank</li>
            </ul>
            <hr/>
          </div>
        </div>
      </div>

      {/* PRODUCT DETAILS */}
      <div className="px-6">
        <h3 className="text-xl font-bold">Product Details</h3>

        <div className="mt-3 space-y-2 text-gray-700">
          <p><span className="font-bold">Design:</span> <br/>Modern sporty silhouette built for daily wear.</p>
          <p><span className="font-bold">Material:</span><br/> Breathable mesh upper with durable rubber sole.</p>
          <p><span className="font-bold">Care:</span><br/> Wipe with dry cloth. Do not machine wash.</p>
        </div>
      </div>

      {/* REVIEWS */}
      <div className="mt-10 p-6">
        <h3 className="text-xl font-bold mb-4">Customer Reviews</h3>

        <div className="border p-3 rounded mb-3">
          <p className="font-semibold">Rahul</p>
          <div className="flex text-yellow-500 my-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </div>
          <p className="text-sm text-gray-600">
            Very comfortable. Value for money.
          </p>
        </div>

        <div className="border p-3 rounded">
          <p className="font-semibold">Aman</p>
          <div className="flex text-yellow-500 my-1">
            {[...Array(4)].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </div>
          <p className="text-sm text-gray-600">
            Looks great and perfect fit.
          </p>
        </div>

        <p className="mt-3 text-blue-600 cursor-pointer font-semibold">
          View all reviews
        </p>
      </div>

      {/* SIMILAR */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-4">Similar Shoes</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {/* 2 rows = 10 cards */}
          {[...Array(10)].map((_, i) => (
            <Card key={i} />
          ))}
        </div>
      </div>

      {/* ALSO LIKED */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-4">Customers Also Liked</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[...Array(10)].map((_, i) => (
            <Card key={i} />
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default SingleProductPage;
