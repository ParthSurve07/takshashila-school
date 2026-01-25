import { Bus, Wifi, ShieldCheck, Palette, Monitor, Trees } from "lucide-react";

export default function Facilities() {
  const facilities = [
    {
      title: "Smart Classrooms",
      desc: "Digital tools and smart boards for interactive learning.",
      icon: Monitor,
    },
    {
      title: "Safe Transport",
      desc: "GPS-enabled buses with CCTV cameras for student safety.",
      icon: Bus,
    },
    {
      title: "Secure Campus",
      desc: "24/7 CCTV surveillance to ensure a safe environment.",
      icon: ShieldCheck,
    },
    {
      title: "Resourceful Balvatika",
      desc: "Specialized early years section for foundational growth.",
      icon: Trees,
    },
    {
      title: "Skill Labs",
      desc: "Dedicated spaces for graphics, animation, and IT skills.",
      icon: Wifi,
    },
    {
      title: "Creative Spaces",
      desc: "Facilities for art, music, dance, and cultural activities.",
      icon: Palette,
    },
  ];

  return (
    <section id="facilities" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            World-Class <span className="text-primary">Facilities</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Creating a safe, modern, and stimulating environment for holistic
            growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
