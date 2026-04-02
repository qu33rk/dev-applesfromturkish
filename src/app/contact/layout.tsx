import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Get a Quote for Turkish Apples",
  description:
    "Request a quote for premium Turkish apple exports. Contact Apples from Turkey for wholesale pricing, volumes, and delivery schedules.",
  alternates: {
    canonical: "https://applesfromturkey.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
