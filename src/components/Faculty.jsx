export default function Faculty() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Our Faculty
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Meet our dedicated team of educators
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Client will add faculty members here */}
          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="text-gray-400 text-center">
              Faculty profiles coming soon
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
