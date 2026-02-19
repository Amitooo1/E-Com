import Footer from "../components/Footer";

const ReturnExchange = () => {
  return (
    <div className="bg-white pt-20">
      {/* ================= HEADER ================= */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-extrabold mb-6">
          Return & Exchange Policy
        </h1>

        <p className="text-gray-600 mb-4">
          We want every purchase to feel right the moment it reaches your
          doorstep. If something isn’t perfect, we offer a transparent and
          customer-friendly return and exchange system. Please read the policy
          below carefully to understand timelines, eligibility, and the process.
        </p>

        <p className="text-gray-600">
          By placing an order on our platform, you agree to the terms mentioned
          on this page.
        </p>
      </div>

      {/* ================= BODY ================= */}
      <div className="max-w-6xl mx-auto px-6 pb-16 space-y-10">

        {/* Eligibility */}
        <section>
          <h2 className="text-xl font-bold mb-3">1. Eligibility for Returns</h2>
          <p className="text-gray-600 mb-3">
            Products can be returned within <b>7 days</b> from the date of
            delivery. Items must be unused, unworn, and in the same condition
            that you received them.
          </p>
          <ul className="list-disc ml-6 text-gray-600 space-y-2">
            <li>Original packaging, tags, and invoice must be intact.</li>
            <li>Footwear must not show signs of outdoor usage.</li>
            <li>Freebies, if any, must also be returned.</li>
          </ul>
        </section>

        {/* Non returnable */}
        <section>
          <h2 className="text-xl font-bold mb-3">2. Non-Returnable Items</h2>
          <p className="text-gray-600 mb-3">
            Certain items cannot be returned due to hygiene, customization, or
            promotional restrictions.
          </p>
          <ul className="list-disc ml-6 text-gray-600 space-y-2">
            <li>Products purchased during final clearance sales.</li>
            <li>Customized or made-to-order footwear.</li>
            <li>Items damaged due to misuse.</li>
            <li>Gift cards and vouchers.</li>
          </ul>
        </section>

        {/* Exchange */}
        <section>
          <h2 className="text-xl font-bold mb-3">3. Exchange Policy</h2>
          <p className="text-gray-600 mb-3">
            Need another size or color? Exchanges are available subject to stock
            availability.
          </p>
          <ul className="list-disc ml-6 text-gray-600 space-y-2">
            <li>Exchange requests must be raised within 7 days.</li>
            <li>Reverse pickup will be arranged where serviceable.</li>
            <li>If the requested product is unavailable, refund will be issued.</li>
          </ul>
        </section>

        {/* Return process */}
        <section>
          <h2 className="text-xl font-bold mb-3">4. How to Initiate a Return</h2>
          <p className="text-gray-600 mb-3">
            Returning a product is simple and can be done from your account.
          </p>
          <ol className="list-decimal ml-6 text-gray-600 space-y-2">
            <li>Login and go to <b>My Orders</b>.</li>
            <li>Select the item and choose return or exchange.</li>
            <li>Pick a reason and confirm your request.</li>
            <li>Our courier partner will contact you for pickup.</li>
          </ol>
        </section>

        {/* Pickup */}
        <section>
          <h2 className="text-xl font-bold mb-3">5. Pickup & Quality Check</h2>
          <p className="text-gray-600">
            Once the item is collected, it undergoes inspection at our facility.
            Refund or exchange approval depends on the product passing this
            quality check.
          </p>
        </section>

        {/* Refund */}
        <section>
          <h2 className="text-xl font-bold mb-3">6. Refund Policy</h2>
          <p className="text-gray-600 mb-3">
            Approved refunds are processed within <b>5-7 business days</b>.
          </p>
          <ul className="list-disc ml-6 text-gray-600 space-y-2">
            <li>Prepaid orders → refunded to original payment method.</li>
            <li>COD orders → bank transfer or wallet credit.</li>
            <li>Shipping charges may be non-refundable.</li>
          </ul>
        </section>

        {/* Cancellation */}
        <section>
          <h2 className="text-xl font-bold mb-3">7. Order Cancellation</h2>
          <p className="text-gray-600">
            Orders can be cancelled before dispatch from the warehouse. After
            shipping, cancellation is not possible but you may request a return
            after delivery.
          </p>
        </section>

        {/* Damaged */}
        <section>
          <h2 className="text-xl font-bold mb-3">8. Damaged or Wrong Item</h2>
          <p className="text-gray-600">
            If you receive a defective, damaged, or incorrect product, contact
            us within 48 hours with images. We will arrange a priority
            replacement or full refund.
          </p>
        </section>

        {/* Fraud */}
        <section>
          <h2 className="text-xl font-bold mb-3">9. Fair Usage</h2>
          <p className="text-gray-600">
            To ensure fairness, we monitor return patterns. Excessive or
            suspicious activity may lead to refusal of future returns or account
            restrictions.
          </p>
        </section>

        {/* Liability */}
        <section>
          <h2 className="text-xl font-bold mb-3">10. Liability</h2>
          <p className="text-gray-600">
            Our responsibility is limited to the value of the purchased product.
            We are not liable for indirect losses or delays caused by logistics
            partners.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-xl font-bold mb-3">11. Need Help?</h2>
          <p className="text-gray-600">
            Our support team is happy to assist you with return or exchange
            queries.
          </p>
          <div className="mt-3 text-gray-700">
            <p>Email: support@reybon.com</p>
            <p>Phone: +91 7042033361</p>
            <p>Hours: Monday to Saturday, 10 AM – 6 PM</p>
          </div>
        </section>

        {/* Closing */}
        <section>
          <p className="text-gray-600 mt-6">
            Thank you for shopping with us. We are committed to delivering
            quality products and a smooth after-sales experience.
          </p>
        </section>

      </div>

      <Footer />
    </div>
  );
};

export default ReturnExchange;
