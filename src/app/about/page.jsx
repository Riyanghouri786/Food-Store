export default function About() {
  return (
    <section className="min-h-screen p-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-5xl font-extrabold text-center text-white transition duration-500 ease-in-out transform hover:scale-105">
          About Us
        </h2>

        {/* Grid Layout for Content */}
        <div className="grid grid-cols-1 gap-12 mt-12 md:grid-cols-2">
          {/* About Image Section */}
          <div className="flex items-center justify-center">
            <img
              className="w-3/4 transition-transform duration-500 ease-in-out transform rounded-full shadow-xl hover:scale-110 hover:rotate-6"
              src="https://static.vecteezy.com/system/resources/previews/017/737/861/non_2x/restaurant-logo-on-letter-f-concept-with-chef-hat-spoon-and-fork-for-restaurant-logo-free-vector.jpg" // Replace with actual image
              alt="About us"
            />
          </div>

          {/* About Content Section */}
          <div className="flex flex-col justify-center space-y-6 text-white">
            <p className="text-lg">
              We are a dynamic company committed to innovation and excellence.
              Our passion drives us to create products that push boundaries and
              deliver exceptional value to our customers.
            </p>

            <p className="text-lg">
              With a focus on creativity and technology, we blend the latest
              trends with unique solutions to meet the evolving needs of the
              market. Your success is our mission.
            </p>

            <a
              href="/services"
              className="self-start px-6 py-3 font-semibold text-white transition-all duration-300 transform bg-purple-700 rounded-lg shadow-lg hover:bg-purple-900 hover:-translate-y-1"
            >
              Explore Our Services
            </a>
          </div>
        </div>

        {/* Scroll Animation Section */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-white">Our Vision</h3>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-white">
            To be the pioneers in delivering transformative experiences through
            innovation and cutting-edge technology.
          </p>

          <div className="flex justify-center mt-8">
            <button className="px-6 py-3 font-bold text-purple-700 transition-all duration-300 transform bg-white rounded-full shadow-xl hover:bg-gray-100 hover:-translate-y-1">
              Join Our Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
