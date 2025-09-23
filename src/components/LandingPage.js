import React from "react";
 

function LandingPage() {
  return (
    <div className="landing-page container pt-24">
      {/* Hero Section */}
      <section className="hero">
        <h1 className="text-3xl md:text-5xl font-bold text-indigo-600">Welcome to Smart Shopper!</h1>
        <p className="text-gray-600">Your one-stop shop for smart shopping solutions.</p>
      </section>

      {/* Description Section */}
      <section className="description">
        <h2 className="text-2xl font-semibold">What Do We Do?</h2>
        <p>
          Smart Shopper is designed to help you make more informed and budget-conscious shopping decisions.
          By using AI algorithms, we offer real-time price comparison, product recommendations, and
          other smart shopping tools so that you can make the best purchase for your perfect product.
        </p>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2 className="text-2xl font-semibold">Features</h2>
        <ul>
          <li>Provide a product summary and analyze costs</li>
          <li>Purchase recommendations based on resale strategies</li>
          <li>Identifies optimal buying opportunities</li>
          
        </ul>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2 className="text-2xl font-semibold">Contact Us</h2>
        <p className="text-gray-600">If you have any questions, feel free to reach out!</p>
        <button className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-md">Contact</button>
      </section>
    </div>
  );
}

export default LandingPage;
