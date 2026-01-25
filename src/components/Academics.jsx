import {
  BookOpen,
  Microscope,
  Globe,
  Calculator,
  Palette,
  Music,
  Laptop,
  Activity,
} from "lucide-react";

export default function Academics() {
  const subjects = [
    { name: "Science", icon: Microscope, color: "bg-blue-500" },
    { name: "Mathematics", icon: Calculator, color: "bg-purple-500" },
    { name: "IT & Tech", icon: Laptop, color: "bg-cyan-600" },
    { name: "Foreign Lang (Japanese)", icon: Globe, color: "bg-green-500" },
    { name: "Arts & Music", icon: Palette, color: "bg-pink-500" },
    { name: "Physical Education", icon: Activity, color: "bg-orange-500" },
  ];

  return (
    <section id="academics" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-primary">Academic Programs</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive curriculum blending NCERT standards with global
            perspectives.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {subjects.map((subject, index) => (
            <div
              key={index}
              className="group text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-2"
            >
              <div
                className={`w-16 h-16 ${subject.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}
              >
                <subject.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm">
                {subject.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Additional Info - Updated with correct source data */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-primary/5 to-secondary/10 p-8 rounded-2xl border border-primary/10">
            <h4 className="text-2xl font-bold text-gray-900 mb-3">
              Curriculum
            </h4>
            <p className="text-gray-700">CBSE-Aligned NCERT Framework</p>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-secondary/10 p-8 rounded-2xl border border-primary/10">
            <h4 className="text-2xl font-bold text-gray-900 mb-3">Attention</h4>
            <p className="text-gray-700">Personalized Academic Support</p>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-secondary/10 p-8 rounded-2xl border border-primary/10">
            <h4 className="text-2xl font-bold text-gray-900 mb-3">
              Methodology
            </h4>
            <p className="text-gray-700">EDAC Experiential Learning</p>
          </div>
        </div>
      </div>
    </section>
  );
}
