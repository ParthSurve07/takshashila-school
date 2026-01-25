import {
  CheckCircle,
  Monitor,
  Heart,
  Shield,
  Brain,
  Users,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Academic Excellence",
      desc: "CBSE-Aligned NCERT Curriculum providing a strong academic foundation with national standards.",
      icon: CheckCircle,
    },
    {
      title: "EDAC Methodology",
      desc: "Experiential, Discovery-Based Active Learning through exploration and hands-on activities.",
      icon: Brain,
    },
    {
      title: "Holistic Development",
      desc: "Focus on academics, values, sports, and life skills for complete growth.",
      icon: Heart,
    },
    {
      title: "Smart Classrooms",
      desc: "Technology-integrated learning experience with modern digital tools.",
      icon: Monitor,
    },
    {
      title: "Safe Campus",
      desc: "Secure, student-friendly environment fostering creativity and learning.",
      icon: Shield,
    },
    {
      title: "Personalized Attention",
      desc: "Tailored guidance and academic support to help every child excel.",
      icon: Users,
    },
  ];

  return (
    <section
      id="why-us"
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Why Choose <span className="text-primary">Takshashila?</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            We are committed to nurturing confident, responsible, and
            compassionate learners through excellence in education.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 sm:p-8 bg-white border border-gray-200 rounded-lg sm:rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
            >
              {/* Icon Container */}
              <div className="w-12 sm:w-14 h-12 sm:h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                <feature.icon className="w-6 sm:w-7 h-6 sm:h-7 text-primary group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {feature.desc}
              </p>

              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full -z-10 group-hover:bg-primary/10 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
