import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Apples from Turkey — your trusted partner for premium Turkish apple exports to India, Iraq, UAE, Saudi Arabia and global markets.",
  alternates: {
    canonical: "https://applesfromturkey.com/about",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://applesfromturkey.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About Us",
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navbar />
      <main className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "About Us" }]} />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About Us
          </h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-gray-600 leading-relaxed">
              Content coming soon...
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
