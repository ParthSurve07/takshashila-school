import Career from "@/components/Career.jsx";
import Footer from "@/components/Footer.jsx";

export const metadata = {
  title: "Career - Takshashila International School",
  description:
    "Join our team of dedicated educators at Takshashila International School",
};

export default function CareerPage() {
  return (
    <>
      <div className="pt-16">
        <Career />
      </div>
      <Footer />
    </>
  );
}
