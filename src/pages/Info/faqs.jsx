import React, { useState } from "react";

const faqsData = [
  {
    question: "Are the sneakers sold on Reybon authentic?",
    answer:
      "Yes. Every pair listed on Reybon goes through a quality and authenticity check. We work with trusted suppliers and verify products before dispatch.",
  },
  {
    question: "Do you offer Cash on Delivery (COD)?",
    answer:
      "Yes, COD is available on most orders. Availability may depend on your delivery location and order value.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Orders are usually processed within 24-48 hours. Delivery typically takes 3-7 business days depending on your city.",
  },
  {
    question: "Can I return or exchange my sneakers?",
    answer:
      "Absolutely. If the product is unused and in original packaging, you can request a return or exchange within the specified return window.",
  },
  {
    question: "How do I track my order?",
    answer:
      "Once your order is shipped, you will receive a tracking link via SMS or email. You can also use the Track Order page on our website.",
  },
  {
    question: "What if I receive a damaged or wrong product?",
    answer:
      "Please contact our support team within 48 hours of delivery with photos or videos. We will arrange a replacement or refund.",
  },
  {
    question: "Are there discounts on bulk purchases?",
    answer:
      "Yes. We offer special pricing for high-volume orders. Visit the Bulk Purchases page or contact our sales team.",
  },
  {
    question: "Which payment methods are accepted?",
    answer:
      "We accept UPI, debit cards, credit cards, net banking, wallets, and COD where applicable.",
  },
  {
    question: "Can I cancel my order?",
    answer:
      "Orders can be cancelled before they are shipped. Once dispatched, cancellation may not be possible but you can request a return.",
  },
  {
    question: "How do I choose the correct size?",
    answer:
      "You can refer to the size chart available on each product page. If unsure, our support team will gladly assist you.",
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white min-h-screen pt-10">
      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* ===== Header ===== */}
        <h1 className="text-4xl font-extrabold mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600">
          Quick answers to common questions about orders, shipping, returns,
          and more.
        </p>

        {/* ===== FAQ List ===== */}
        <div className="mt-10 space-y-4">
          {faqsData.map((faq, index) => (
            <div key={index} className="border rounded-xl p-5">
              <button
                className="flex justify-between items-center w-full text-left border-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold">{faq.question}</span>
                <span className="text-xl">
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <p className="mt-3 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
