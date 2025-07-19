export default function About() {
  return (
    <section id="about" className="bg-gray-100 py-16 px-8 text-center">
      <h2 className="text-4xl font-bold mb-6 text-gray-800">About Me</h2>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
        Hi, I’m <span className="font-semibold">Venkatesh</span>, a passionate
        Full Stack Developer and ML enthusiast. I love building web apps and
        exploring AI-powered solutions. My goal is to create impactful projects
        that solve real-world problems.
      </p>
      <div className="flex justify-center space-x-4">
        <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg">React</span>
        <span className="bg-green-100 text-green-600 px-4 py-2 rounded-lg">Node.js</span>
        <span className="bg-yellow-100 text-yellow-600 px-4 py-2 rounded-lg">Machine Learning</span>
      </div>
    </section>
  );
}
