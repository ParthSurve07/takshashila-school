import { Quote, Target, Eye, Star } from "lucide-react";

export default function About() {
  const values = [
    "Integrity & Ethics",
    "Respect & Responsibility",
    "Curiosity & Creativity",
    "Discipline & Dedication",
    "Inclusivity & Empathy",
    "Excellence in Learning",
  ];

  return (
    <section
      id="about"
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            About <span className="text-primary">Takshashila</span>
          </h2>
          <div className="w-20 sm:w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Left Column: Leadership Messages */}
          <div className="space-y-6 sm:space-y-8">
            {/* Principal's Message */}
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg sm:rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden">
              <Quote className="absolute top-4 sm:top-6 right-4 sm:right-6 w-12 sm:w-16 h-12 sm:h-16 text-primary/10" />
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Principal's Message
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                  "At Takshashila International School, we believe education is
                  not just about academics but about shaping character,
                  confidence, and competence. Our dedicated team works
                  tirelessly to create a joyful learning environment where every
                  child is encouraged to explore, question, and grow into a
                  responsible global citizen."
                </p>
                <div className="flex items-center gap-3 sm:gap-4 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
                  <div className="w-12 sm:w-14 h-12 sm:h-14 bg-primary rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                    <span className="font-bold text-white text-lg sm:text-2xl">
                      P
                    </span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-gray-900 text-base sm:text-lg">
                      Principal
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 truncate">
                      Takshashila International School
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Chairman's Message - Added  */}
            <div className="bg-primary p-6 sm:p-8 md:p-10 rounded-lg sm:rounded-2xl shadow-lg border border-primary relative overflow-hidden text-white">
              <Quote className="absolute top-4 sm:top-6 right-4 sm:right-6 w-12 sm:w-16 h-12 sm:h-16 text-white/20" />
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                  Chairman's Message
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed mb-4 sm:mb-6 italic">
                  "Education is the foundation of a strong society. At
                  Takshashila International School, our vision is to provide
                  value-based education that nurtures young minds academically,
                  emotionally, and socially. We strive to prepare students not
                  just for exams, but for life."
                </p>
                <div className="flex items-center gap-3 sm:gap-4 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/20">
                  <div className="w-12 sm:w-14 h-12 sm:h-14 bg-white/20 rounded-full flex items-center justify-center shadow-md flex-shrink-0 backdrop-blur-sm">
                    <span className="font-bold text-white text-lg sm:text-2xl">
                      C
                    </span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-white text-base sm:text-lg">
                      Chairman
                    </p>
                    <p className="text-xs sm:text-sm text-white/80 truncate">
                      Takshashila International School
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Vision & Mission */}
          <div className="space-y-4 sm:space-y-6">
            {/* Vision */}
            <div className="flex gap-3 sm:gap-5 p-4 sm:p-6 bg-white rounded-lg sm:rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 sm:w-14 h-12 sm:h-14 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0">
                <Eye className="w-6 sm:w-7 h-6 sm:h-7 text-primary" />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                  Our Vision
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  To be a leading institution that empowers students to become
                  lifelong learners, responsible citizens, and global
                  contributors.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="flex gap-3 sm:gap-5 p-4 sm:p-6 bg-white rounded-lg sm:rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 sm:w-14 h-12 sm:h-14 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0">
                <Target className="w-6 sm:w-7 h-6 sm:h-7 text-primary" />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                  Our Mission
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  To deliver holistic education blending academics, values,
                  skills, and creativity through innovative teaching practices.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="p-4 sm:p-6 bg-gradient-to-br from-primary/5 to-secondary/20 rounded-lg sm:rounded-xl border border-primary/20">
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary mb-3 sm:mb-4 flex items-center gap-2">
                <Star className="w-3.5 sm:w-4 h-3.5 sm:h-4 flex-shrink-0" />
                Core Values
              </h4>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {values.map((val, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-2 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold bg-white border border-primary/30 text-gray-800 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm"
                  >
                    <Star className="w-3 sm:w-3.5 h-3 sm:h-3.5 mr-1 sm:mr-2 fill-primary flex-shrink-0" />
                    {val}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
