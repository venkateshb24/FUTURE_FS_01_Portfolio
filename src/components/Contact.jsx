export default function Contact() {
  return (
    <section id="contact" className="bg-gray-100 py-16 px-8 text-center">
      <h2 className="text-4xl font-bold mb-6 text-gray-800">Contact Me</h2>
      <p className="text-gray-600 mb-8">
        Feel free to reach out if you'd like to collaborate or have any questions.
      </p>
      <form className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          placeholder="Your Message"
          className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows="4"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
