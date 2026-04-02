import AppleCard from "./AppleCard";

const appleVarieties = [
  {
    name: "Red Apples",
    description:
      "Classic red apples with a sweet, crisp flavor. Ideal for fresh markets and retail distribution.",
    images: ["/red.webp"],
    color: "from-red-50 to-red-100/50",
  },
  {
    name: "Gala",
    description:
      "Mildly sweet with a floral aroma. One of the world's most popular varieties for everyday consumption.",
    images: ["/gala.webp"],
    color: "from-orange-50 to-amber-100/50",
  },
  {
    name: "Fuji",
    description:
      "Ultra-sweet and dense, Fuji apples offer exceptional shelf life and are perfect for export markets.",
    images: ["/fuji.webp"],
    color: "from-rose-50 to-pink-100/50",
  },
  {
    name: "Golden",
    description:
      "Sweet and mellow with a golden skin. Versatile for fresh eating, baking, and processing.",
    images: ["/golden.webp"],
    color: "from-yellow-50 to-amber-100/50",
  },
  {
    name: "Granny Smith",
    description:
      "Tart, crisp, and refreshing. Prized for their bright green color and firm texture.",
    images: ["/granny-smith.webp"],
    color: "from-green-50 to-emerald-100/50",
  },
];

export default function ApplesSection() {
  return (
    <section id="apples" className="relative py-24 sm:py-32 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-lime/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Premium Apple Types
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-lg">
            We grow and export the finest apple varieties from Turkey&apos;s
            fertile orchards, meeting global quality standards.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {appleVarieties.map((apple) => (
            <AppleCard
              key={apple.name}
              name={apple.name}
              description={apple.description}
              images={apple.images}
              color={apple.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
