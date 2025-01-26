import React from "react";
import "./LandingPage.css"; 

function LandingPage() {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Smart Shopper!</h1>
        <p>Your one-stop shop for smart shopping solutions.</p>
      </section>

      {/* Description Section */}
      <section className="description">
        <h2>What Do We Do?</h2>
        <p>
          Smart Shopper is designed to help you make more informed and budget-conscious shopping decisions.
          By using AI algorithms, we offer real-time price comparison, product recommendations, and
          other smart shopping tools so that you can make the best purchase for your perfect product.
        </p>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Features</h2>
        <ul>
          <li>Provide a product summary and analyze costs</li>
          <li>Purchase recommendations based on resale strategies</li>
          <li>Identifies optimal buying opportunities</li>
          
        </ul>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Contact Us</h2>
        <p>If you have any questions, feel free to reach out!</p>
        <button>Contact</button>
      </section>
    </div>
  );
}

export default LandingPage;
