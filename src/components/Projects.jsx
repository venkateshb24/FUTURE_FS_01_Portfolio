export default function Projects() {
  return (
    <section id="projects" className="bg-white py-16 px-8 text-center">
      <h2 className="text-4xl font-bold mb-6 text-gray-800">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Project Card 1 */}
        <div className="bg-gray-100 rounded-lg shadow-lg p-4 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
          <p className="text-gray-600 text-sm mb-4">
            A clean and responsive portfolio built with React and Tailwind CSS.
          </p>
          <a href="#" className="text-blue-500 hover:underline">View Project</a>
        </div>
        {/* Project Card 2 */}
        <div className="bg-gray-100 rounded-lg shadow-lg p-4 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2">E-Commerce App</h3>
          <p className="text-gray-600 text-sm mb-4">
            A mini e-commerce platform with React, Context API, and mock checkout.
          </p>
          <a href="#" className="text-blue-500 hover:underline">View Project</a>
        </div>
        {/* Project Card 3 */}
        <div className="bg-gray-100 rounded-lg shadow-lg p-4 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2">AI Chatbot</h3>
          <p className="text-gray-600 text-sm mb-4">
            AI-powered chatbot that logs diary entries and detects emotions.
          </p>
          <a href="#" className="text-blue-500 hover:underline">View Project</a>
        </div>
      </div>
    </section>
  );
}
