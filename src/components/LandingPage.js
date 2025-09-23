import React from "react";
 

function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-indigo-500 to-blue-500 pt-24">
      <div className="container">
        {/* Hero Section */}
        <section className="text-center py-10">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-sm">
            Welcome to Smart Shopper!
          </h1>
          <p className="text-indigo-100 mt-3 max-w-2xl mx-auto">
            Your one-stop shop for smart shopping solutions.
          </p>
          <div className="mt-6">
            <a href="/" className="inline-block rounded-lg bg-white/10 px-5 py-2 text-white backdrop-blur hover:bg-white/20 transition">
              Start Searching
            </a>
          </div>
        </section>

        {/* Description Section */}
        <section className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">What Do We Do?</h2>
          <p className="text-gray-600 mt-3">
            Smart Shopper helps you make more informed and budget-conscious shopping decisions.
            With AI-powered tools, you get real-time price comparisons, product recommendations, and
            insights to help you buy with confidence.
          </p>
        </section>

        {/* Features Section */}
        <section className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">Features</h2>
          <ul className="mt-4 grid gap-3 text-gray-700 list-disc list-inside">
            <li>Product summaries with cost analysis</li>
            <li>Purchase recommendations and resale strategies</li>
            <li>Identification of optimal buying opportunities</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-10">
          <h2 className="text-2xl font-semibold text-gray-900">Contact Us</h2>
          <p className="text-gray-600 mt-3">If you have any questions, feel free to reach out!</p>
          <button className="mt-4 px-5 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition">
            Contact
          </button>
        </section>
      </div>
    </div>
  );
}

export default LandingPage;
