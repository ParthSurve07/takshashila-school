import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      <Gallery />
      <Footer />
    </div>
  );
}
