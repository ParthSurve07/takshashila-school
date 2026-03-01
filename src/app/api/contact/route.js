import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.json();

    // Add your database logic here
    // Examples:
    // 1. MongoDB: await collection.insertOne(data)
    // 2. Firebase: await addDoc(collection(db, "contacts"), data)
    // 3. Supabase: await supabase.from("contacts").insert(data)
    // 4. Send email using nodemailer, resend, etc.

    console.log("Contact form submission:", data);

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully"
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to submit form" },
      { status: 500 }
    );
  }
}