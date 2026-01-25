import { Trophy, Dna, Music, Medal } from "lucide-react";

export default function Activities() {
  return (
    <section id="activities" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Beyond <span className="text-primary">Academics</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We nurture talent through a wide range of sports, clubs, and
            competitive exams.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-orange-50 rounded-3xl p-8 border border-orange-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Sports</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                ✓ Taekwondo & Athletics
              </li>
              <li className="flex items-center gap-2">✓ Yoga & Meditation</li>
              <li className="flex items-center gap-2">
                ✓ Volleyball & Throwball
              </li>
              <li className="flex items-center gap-2">
                ✓ Chess & Indoor Games
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                <Dna className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Clubs</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">✓ Science & Eco Club</li>
              <li className="flex items-center gap-2">
                ✓ IT Club (Graphics & Animation)
              </li>
              <li className="flex items-center gap-2">
                ✓ Health & Wellness Club
              </li>
              <li className="flex items-center gap-2">✓ Yuva Tourism Club</li>
            </ul>
          </div>

          <div className="bg-purple-50 rounded-3xl p-8 border border-purple-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600">
                <Medal className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Competitive Exams
              </h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">✓ Olympiads & ITO</li>
              <li className="flex items-center gap-2">
                ✓ Dr. Homi Bhabha Exam
              </li>
              <li className="flex items-center gap-2">
                ✓ State Scholarship Exams
              </li>
              <li className="flex items-center gap-2">
                ✓ Brain Development (BDS)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
