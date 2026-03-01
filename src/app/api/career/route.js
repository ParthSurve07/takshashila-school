import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const formData = await request.formData();

    // Extract all form fields
    const data = {
      fullName: formData.get("fullName"),
      dateOfBirth: formData.get("dateOfBirth"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      education: formData.get("education"),
      workingExperience: formData.get("workingExperience"),
      currentlyWorkingWith: formData.get("currentlyWorkingWith"),
      subjects: formData.get("subjects"),
      lastSalary: formData.get("lastSalary"),
      salaryExpectation: formData.get("salaryExpectation"),
      classCanTeach: formData.get("classCanTeach"),
      subjectSpecifically: formData.get("subjectSpecifically"),
      boardComfortable: formData.get("boardComfortable"),
      readyForPrePrimary: formData.get("readyForPrePrimary"),
      submittedAt: formData.get("submittedAt"),
    };

    const resume = formData.get("resume");

    // Add your database/storage logic here
    // Examples:
    // 1. Save to MongoDB
    // 2. Upload resume to S3/Cloudinary
    // 3. Send email notification
    // 4. Save to Google Sheets

    console.log("Career application:", data);
    console.log("Resume file:", resume?.name);

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully",
    });
  } catch (error) {
    console.error("Career application error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to submit application" },
      { status: 500 }
    );
  }
}