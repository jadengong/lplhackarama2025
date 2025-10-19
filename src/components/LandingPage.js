import React from "react";
 

function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 pt-24">
      <div className="container">
        {/* Hero Section */}
        <section className="text-center py-10">
          <h1 className="text-white text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-sm">
            Welcome to Smart Shopper
          </h1>
          <p className="text-gray-300 mt-3 max-w-2xl mx-auto">
            Your one-stop shop for smart shopping solutions.
          </p>
          <div className="mt-6">
            <a href="/" className="inline-block rounded-lg bg-gradient-to-r from-gray-600 to-gray-700 px-5 py-2 text-white hover:from-gray-700 hover:to-gray-800 transition">
              Start Searching
            </a>
          </div>
        </section>

        {/* Description Section */}
        <section className="bg-gray-800/90 rounded-2xl shadow-xl p-6 md:p-8 mb-6 backdrop-blur-sm ring-1 ring-gray-600/20">
          <h2 className="text-2xl font-semibold text-white">What Do We Do?</h2>
          <p className="text-gray-300 mt-3">
            Smart Shopper helps you make more informed and budget-conscious shopping decisions.
            With AI-powered tools, you get real-time price comparisons, product recommendations, and
            insights to help you buy with confidence.
          </p>
        </section>

        

        {/* Features Section */}
        <section className="bg-gray-800/90 rounded-2xl shadow-xl p-6 md:p-8 mb-6 backdrop-blur-sm ring-1 ring-gray-600/20">
          <h2 className="text-2xl font-semibold text-white mb-4">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-lg border border-gray-600 p-4">
              <h3 className="font-semibold text-white">Smart Summaries</h3>
              <p className="text-gray-300 mt-2">Product summaries with clear cost analysis and value indicators.</p>
            </div>
            <div className="rounded-lg border border-gray-600 p-4">
              <h3 className="font-semibold text-white">Price Tracking</h3>
              <p className="text-gray-300 mt-2">Track historical prices and get notified on favorable dips.</p>
            </div>
            <div className="rounded-lg border border-gray-600 p-4">
              <h3 className="font-semibold text-white">Buy Signals</h3>
              <p className="text-gray-300 mt-2">Identify optimal buying opportunities across vendors.</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-800/90 rounded-2xl shadow-xl p-6 md:p-8 mb-10 backdrop-blur-sm ring-1 ring-gray-600/20">
          <h2 className="text-2xl font-semibold text-white">Contact Us</h2>
          <p className="text-gray-300 mt-3">If you have any questions, feel free to reach out!</p>
          <button className="mt-4 px-5 py-2 rounded-lg bg-gray-700 text-white hover:bg-gray-600 transition">
            Contact
          </button>
        </section>

        {/* CTA Banner */}
        <section className="rounded-xl bg-gradient-to-r from-gray-600/30 via-gray-700/30 to-gray-800/30 border border-gray-500/20 text-white p-6 md:p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-4 backdrop-blur">
          <div>
            <h3 className="text-2xl font-semibold">Ready to find your next best deal?</h3>
            <p className="text-gray-300">Search products and compare prices instantly.</p>
          </div>
          <a href="/" className="inline-block rounded-lg bg-white text-gray-800 px-5 py-2 font-medium hover:bg-gray-100 transition">Search Now</a>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-300 pb-10">
          © {new Date().getFullYear()} Smart Shopper. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default LandingPage;
