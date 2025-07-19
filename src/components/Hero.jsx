export default function Hero() {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center bg-gray-800 text-white text-center">
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Venkatesh</h1>
      <p className="text-xl mb-6">Full Stack Developer & ML Enthusiast</p>
      <a href="#projects" className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">
        View My Work
      </a>
    </section>
  );
}
