"use client";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false); // State to control form visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement your email sending logic.
    // For now, we'll assume it's successful and show the toast.

    setIsSubmitted(true); // Hide the form
    toast.success("Details submitted successfully!"); // Show success message
    // Optionally, reset the form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="min-h-screen p-8 bg-gray-100">
      <h2 className="text-5xl font-bold text-center text-purple-600">
        Contact Us
      </h2>
      {/* Contact Form */}
      {!isSubmitted ? ( // Show form only if not submitted
        <div className="mt-12">
          <h3 className="text-3xl font-bold text-center text-purple-600">
            Send Us a Message
          </h3>
          <form
            className="max-w-md mx-auto mt-8 space-y-4 border-[3px] p-4 rounded-xl border-purple-500 "
            onSubmit={handleSubmit}
          >
            <div>
              <label className="block text-gray-700" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-purple-200"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-purple-200"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-gray-700" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-purple-200"
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-semibold text-white bg-purple-500 rounded-lg shadow-lg hover:bg-purple-600"
            >
              Send Message
            </button>
          </form>
        </div>
      ) : (
        <div className="mt-12 text-center text-gray-600">
          <p className="text-lg">
            Thank you for your message! We'll get back to you shortly.
          </p>
        </div>
      )}
      <div className="container mx-auto">
        {/* Section Title */}

        <p className="mt-6 text-center text-gray-600">
          Have questions? Reach out to us via WhatsApp, email, or phone, and
          we’ll be happy to assist you.
        </p>

        {/* Contact Options */}
        {/* Additional Info or Location */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-purple-600">
            We're Here to Help!
          </h3>
          <p className="mt-4 text-lg text-gray-600">
            Feel free to reach out through any of the channels above, or visit
            us at our office.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-12 text-center md:grid-cols-3">
          {/* WhatsApp Contact */}

          <div className="flex flex-col items-center justify-center">
            <a
              href="https://wa.me/+923079171389?text=Hello: Riyan-Ghouri"
              className="px-6 py-3 font-semibold text-white transition duration-300 transform bg-green-500 rounded-full shadow-lg hover:bg-green-600 hover:-translate-y-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Message Us on WhatsApp
            </a>
            <p className="mt-4 text-gray-600">
              Get in touch via WhatsApp for quick support!
            </p>
          </div>

          {/* Email Contact */}

          <div className="flex flex-col items-center justify-center">
            <a
              href="mailto:riyanghouri7@gmail.com"
              className="px-6 py-3 font-semibold text-white transition duration-300 transform bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 hover:-translate-y-1"
            >
              Send Us an Email
            </a>
            <p className="mt-4 text-gray-600">
              We respond to emails within 24 hours.
            </p>
          </div>

          {/* Phone Contact */}

          <div className="flex flex-col items-center justify-center">
            <a
              href="tel:+923079171389"
              className="px-6 py-3 font-semibold text-white transition duration-300 transform bg-purple-500 rounded-full shadow-lg hover:bg-purple-600 hover:-translate-y-1"
            >
              Call Us
            </a>
            <p className="mt-4 text-gray-600">
              We’re available Monday to Friday, 9 AM - 12 PM.
            </p>
          </div>
        </div>

        {/* Toast Container */}
        <ToastContainer />
      </div>
    </section>
  );
}
