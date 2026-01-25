import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-8 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions? We are here to help. Reach out to us for admissions,
            campus tours, or general enquiries.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column: Contact Info Only (Map Removed) */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 md:p-10 text-white shadow-xl h-full">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>

              <div className="space-y-8">
                {/* Address - Source [27, 28] */}
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg opacity-90 mb-1">
                      Our Location
                    </h4>
                    <p className="opacity-80 leading-relaxed text-sm md:text-base">
                      Takshashila International School,
                      <br />
                      Kumbhar Mala, Nilji,
                      <br />
                      Behind Vijaynagar Court,
                      <br />
                      Sangli – 416416
                    </p>
                  </div>
                </div>

                {/* Phone - Source [2] */}
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg opacity-90 mb-1">
                      Phone Number
                    </h4>
                    <a
                      href="tel:+917391015951"
                      className="opacity-80 hover:opacity-100 transition-opacity"
                    >
                      +91 7391015951
                    </a>
                  </div>
                </div>

                {/* Email - Source [2] */}
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg opacity-90 mb-1">
                      Email Address
                    </h4>
                    <a
                      href="mailto:sangli.tis@gmail.com"
                      className="opacity-80 hover:opacity-100 transition-opacity"
                    >
                      sangli.tis@gmail.com
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg opacity-90 mb-1">
                      Office Hours
                    </h4>
                    <p className="opacity-80">Mon - Sat: 9:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send us a Message
            </h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="first-name"
                    className="text-sm font-medium text-gray-700"
                  >
                    First name
                  </label>
                  <Input
                    id="first-name"
                    placeholder="Enter first name"
                    className="h-12 bg-gray-50 border-gray-200"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="last-name"
                    className="text-sm font-medium text-gray-700"
                  >
                    Last name
                  </label>
                  <Input
                    id="last-name"
                    placeholder="Enter last name"
                    className="h-12 bg-gray-50 border-gray-200"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="h-12 bg-gray-50 border-gray-200"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-gray-700"
                >
                  Phone number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter phone number"
                  className="h-12 bg-gray-50 border-gray-200"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="How can we help you?"
                  className="min-h-[150px] bg-gray-50 border-gray-200 resize-none p-4"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full h-12 text-base bg-primary hover:bg-primary/90"
              >
                Send Message
                <Send className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
