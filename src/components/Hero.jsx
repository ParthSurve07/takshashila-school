'use client'

import {
  ArrowRight,
  BookOpen,
  Users,
  Award,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="hero"
      // FIX 1: 'h-auto' allows mobile scrolling. 'lg:min-h-screen' keeps desktop full height.
      // FIX 2: 'pt-32' (128px) and 'md:pt-48' (192px) explicitly clear large navbars.
      // FIX 3: 'pb-12' adds breathing room at the bottom for mobile.
      className="relative h-auto lg:min-h-screen flex items-center bg-gradient-to-br from-primary/5 via-white to-secondary/20 overflow-hidden pt-32 pb-12 md:pt-48 md:pb-24"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

      {/* Decorative Blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="inline-block">
              <span className="bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold inline-flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Admissions Open 2026-27
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Nurturing Minds,
              <span className="text-primary block mt-1 sm:mt-2">
                Shaping Futures
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
              At Takshashila International School, we blend academic excellence
              with holistic development, creating confident, compassionate
              leaders of tomorrow.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-6 text-sm sm:text-base rounded-xl shadow-lg hover:shadow-xl transition-all w-full sm:w-auto cursor-pointer"
              >
                Enquire Now
                <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-6 sm:px-8 py-6 text-sm sm:text-base rounded-xl border-2 border-primary/20 text-primary hover:bg-primary/5 hover:border-primary transition-all w-full sm:w-auto"
              >
                View Facilities
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 sm:pt-8 border-t border-gray-200/60">
              <div>
                <div className="flex items-center gap-1 sm:gap-2 mb-0.5 sm:mb-1">
                  <Users className="w-4 sm:w-5 h-4 sm:h-5 text-primary flex-shrink-0" />
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                    282+
                  </p>
                </div>
                <p className="text-xs sm:text-sm text-gray-600">Students</p>
              </div>
              <div>
                <div className="flex items-center gap-1 sm:gap-2 mb-0.5 sm:mb-1">
                  <GraduationCap className="w-4 sm:w-5 h-4 sm:h-5 text-primary flex-shrink-0" />
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                    21+
                  </p>
                </div>
                <p className="text-xs sm:text-sm text-gray-600">Faculty</p>
              </div>
              <div>
                <div className="flex items-center gap-1 sm:gap-2 mb-0.5 sm:mb-1">
                  <BookOpen className="w-4 sm:w-5 h-4 sm:h-5 text-primary flex-shrink-0" />
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                    CBSE
                  </p>
                </div>
                <p className="text-xs sm:text-sm text-gray-600">Curriculum</p>
              </div>
            </div>
          </div>

          {/* Right Content - Image (Hidden on mobile) */}
          <div className="relative hidden lg:block">
            <div className="relative z-10 transform hover:scale-[1.02] transition-transform duration-500">
              {/* Main Image Container */}
              <div className="bg-gradient-to-br from-primary to-primary/60 rounded-3xl p-3 shadow-2xl">
                <div className="bg-white rounded-2xl overflow-hidden aspect-[4/3] relative">
                  {/* Placeholder for actual school image */}
                  <div className="absolute inset-0 bg-secondary/20 flex items-center justify-center">
                    <p className="text-primary font-medium">
                      School Campus Image
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">EDAC</p>
                  <p className="text-xs text-gray-600">Learning Model</p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-secondary rounded-full opacity-50 blur-2xl"></div>
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
