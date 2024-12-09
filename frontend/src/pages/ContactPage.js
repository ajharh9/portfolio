import { useState } from "react";
import emailjs from "emailjs-com";

const ContactPage = () => {
  const [ContactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setContactData({
      name: "",
      email: "",
      message: "",
    })
    console.log("Form submitted:", ContactData);
    // alert("Form submitted successfully!");
  };

  return (
    <div className="mt-8 min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex items-center justify-center ">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white px-8 py-4 rounded-xl shadow-lg border border-gray-200"
      >
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
          Get in Touch
        </h2>
        <p className="text-gray-600 text-sm text-center mb-6">
          We'd love to hear from you! Please fill out the form below.
        </p>

        {/* Input for Name */}
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-gray-700 font-semibold mb-2"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={ContactData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Soaib Akhtar"
          />
        </div>

        {/* Input for Email */}
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-gray-700 font-semibold mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={ContactData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="soaib@example.com"
          />
        </div>

        {/* Textarea for Message */}
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-gray-700 font-semibold mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={ContactData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            rows="5"
            placeholder="Write your message here..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-blue-600 hover:shadow-lg focus:ring-4 focus:ring-blue-400 focus:outline-none transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
