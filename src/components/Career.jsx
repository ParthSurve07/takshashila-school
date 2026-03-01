"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Briefcase,
  Upload,
  Send,
  Loader2,
  CheckCircle,
  GraduationCap,
  Users,
  Award,
} from "lucide-react";

const API_ENDPOINT = process.env.NEXT_PUBLIC_CAREER_API || "/api/career";

export default function Career() {
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    email: "",
    phone: "",
    education: "",
    workingExperience: "",
    currentlyWorkingWith: "",
    subjects: "",
    lastSalary: "",
    salaryExpectation: "",
    classCanTeach: "",
    subjectSpecifically: "",
    boardComfortable: "",
    readyForPrePrimary: "",
  });
  const [resume, setResume] = useState(null);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrorMessage("File size should be less than 5MB");
        return;
      }
      setResume(file);
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });
      if (resume) {
        formDataToSend.append("resume", resume);
      }
      formDataToSend.append("submittedAt", new Date().toISOString());

      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error("Failed to submit application");
      }

      setStatus("success");
      setFormData({
        fullName: "",
        dateOfBirth: "",
        email: "",
        phone: "",
        education: "",
        workingExperience: "",
        currentlyWorkingWith: "",
        subjects: "",
        lastSalary: "",
        salaryExpectation: "",
        classCanTeach: "",
        subjectSpecifically: "",
        boardComfortable: "",
        readyForPrePrimary: "",
      });
      setResume(null);

      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold inline-flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Join Our Team
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Career <span className="text-primary">Opportunities</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Be a part of Takshashila International School and help shape the
            future of young minds.
          </p>
        </div>

        {/* Why Join Us */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">
              Growth Opportunities
            </h3>
            <p className="text-sm text-gray-600">
              Continuous learning and professional development programs
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">
              Supportive Environment
            </h3>
            <p className="text-sm text-gray-600">
              Collaborative and friendly work culture
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">
              Competitive Benefits
            </h3>
            <p className="text-sm text-gray-600">
              Attractive salary packages and benefits
            </p>
          </div>
        </div>

        {/* Application Form */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Application Form
            </h2>
            <p className="text-gray-600 mb-8">
              Fill in your details to apply for a teaching position
            </p>

            {status === "success" && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <p className="text-green-700">
                  Application submitted successfully! We'll contact you soon.
                </p>
              </div>
            )}

            {status === "error" && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700">{errorMessage}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
                  Personal Information
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="fullName"
                      className="text-sm font-medium text-gray-700"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="fullName"
                      placeholder="Enter your full name"
                      className="h-12 bg-gray-50 border-gray-200"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="dateOfBirth"
                      className="text-sm font-medium text-gray-700"
                    >
                      Date of Birth <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      className="h-12 bg-gray-50 border-gray-200"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="h-12 bg-gray-50 border-gray-200"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium text-gray-700"
                    >
                      Contact Number <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter phone number"
                      className="h-12 bg-gray-50 border-gray-200"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="education"
                    className="text-sm font-medium text-gray-700"
                  >
                    Education Qualification{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="education"
                    placeholder="e.g., B.Ed, M.A., M.Sc., etc."
                    className="h-12 bg-gray-50 border-gray-200"
                    value={formData.education}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Professional Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
                  Professional Information
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="workingExperience"
                      className="text-sm font-medium text-gray-700"
                    >
                      Working Experience (Years){" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="workingExperience"
                      placeholder="e.g., 5 years"
                      className="h-12 bg-gray-50 border-gray-200"
                      value={formData.workingExperience}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="currentlyWorkingWith"
                      className="text-sm font-medium text-gray-700"
                    >
                      Currently Working With
                    </label>
                    <Input
                      id="currentlyWorkingWith"
                      placeholder="Current school/organization name"
                      className="h-12 bg-gray-50 border-gray-200"
                      value={formData.currentlyWorkingWith}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="subjects"
                    className="text-sm font-medium text-gray-700"
                  >
                    Subjects You Can Teach{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="subjects"
                    placeholder="e.g., Mathematics, Science, English"
                    className="h-12 bg-gray-50 border-gray-200"
                    value={formData.subjects}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="lastSalary"
                      className="text-sm font-medium text-gray-700"
                    >
                      Last Salary Withdrawn (as per slip)
                    </label>
                    <Input
                      id="lastSalary"
                      placeholder="e.g., ₹25,000"
                      className="h-12 bg-gray-50 border-gray-200"
                      value={formData.lastSalary}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="salaryExpectation"
                      className="text-sm font-medium text-gray-700"
                    >
                      Salary Expectation <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="salaryExpectation"
                      placeholder="e.g., ₹30,000 - ₹35,000"
                      className="h-12 bg-gray-50 border-gray-200"
                      value={formData.salaryExpectation}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Teaching Preferences */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
                  Teaching Preferences
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="classCanTeach"
                      className="text-sm font-medium text-gray-700"
                    >
                      Class You Can Specifically Teach{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="classCanTeach"
                      placeholder="e.g., Class 1-5, Class 6-10"
                      className="h-12 bg-gray-50 border-gray-200"
                      value={formData.classCanTeach}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subjectSpecifically"
                      className="text-sm font-medium text-gray-700"
                    >
                      Subject You Specifically Teach{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="subjectSpecifically"
                      placeholder="e.g., Mathematics"
                      className="h-12 bg-gray-50 border-gray-200"
                      value={formData.subjectSpecifically}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="boardComfortable"
                      className="text-sm font-medium text-gray-700"
                    >
                      Board You Are Comfortable With{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="boardComfortable"
                      className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                      value={formData.boardComfortable}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Board</option>
                      <option value="CBSE">CBSE</option>
                      <option value="State">State Board</option>
                      <option value="ICSE">ICSE</option>
                      <option value="IB">IB</option>
                      <option value="Any">Any Board</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="readyForPrePrimary"
                      className="text-sm font-medium text-gray-700"
                    >
                      Are You Ready to Teach Pre-Primary?{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="readyForPrePrimary"
                      className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                      value={formData.readyForPrePrimary}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Option</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Resume Upload */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
                  Upload Resume
                </h3>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Resume/CV <span className="text-red-500">*</span>
                  </label>
                  <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-primary/50 transition-colors">
                    <input
                      type="file"
                      id="resume"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                      required
                    />
                    <label htmlFor="resume" className="cursor-pointer">
                      <Upload className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                      <p className="text-sm text-gray-600 mb-1">
                        {resume ? resume.name : "Click to upload your resume"}
                      </p>
                      <p className="text-xs text-gray-400">
                        PDF, DOC, DOCX (Max 5MB)
                      </p>
                    </label>
                  </div>
                  {errorMessage && !status && (
                    <p className="text-sm text-red-500">{errorMessage}</p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full h-14 text-base bg-primary hover:bg-primary/90 rounded-xl"
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Submitting Application...
                  </>
                ) : (
                  <>
                    Submit Application
                    <Send className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
