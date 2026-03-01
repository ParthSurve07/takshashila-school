export default function Gallery() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Gallery
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Explore moments from our school
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Client will add gallery content here */}
          <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
            <p className="text-gray-400">Gallery content coming soon</p>
          </div>
        </div>
      </div>
    </section>
  );
}
