import {
  FileText,
  Users,
  CreditCard,
  CheckCircle2,
  FileCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Admissions() {
  const steps = [
    {
      icon: FileText,
      title: "Online Enquiry",
      desc: "Fill out the online enquiry form with student details.",
    },
    {
      icon: Users,
      title: "Interaction",
      desc: "Counselling session and student assessment.",
    },
    {
      icon: CreditCard,
      title: "Docs & Fees",
      desc: "Submit required documents and pay admission fees.",
    },
    {
      icon: CheckCircle2,
      title: "Confirmation",
      desc: "Receive formal admission confirmation.",
    },
  ];

  const documents = [
    "Birth Certificate (Pre-Primary)",
    "School Leaving / Transfer Certificate",
    "Previous Year Report Card",
    "Aadhar Card (Student & Parents)",
    "Passport Size Photos (Student & Parents)",
  ];

  return (
    <section id="admissions" className="py-8 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Admission Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join the Takshashila family in 4 simple steps.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center mb-6 relative z-10">
                <step.icon className="w-8 h-8 text-primary" />
                <span className="absolute -top-3 -right-3 w-8 h-8 bg-secondary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm border-2 border-white">
                  {index + 1}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 px-4">{step.desc}</p>

              {/* Connector Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-[2px] bg-gray-200 -z-0"></div>
              )}
            </div>
          ))}
        </div>

        {/* Documents Checklist Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3">
              <div className="bg-secondary/30 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                <FileCheck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Required Documents
              </h3>
              <p className="text-gray-600">
                Please ensure you have these documents ready for submission.
              </p>
            </div>

            <div className="md:w-2/3 grid sm:grid-cols-2 gap-4">
              {documents.map((doc, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-gray-700">
                    {doc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-8 border-t flex justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Fill Online Enquiry Form
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
