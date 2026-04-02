interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={`pt-24 pb-4 ${className}`}>
      <ol className="flex items-center gap-2 text-sm text-gray-500">
        <li>
          <a
            href="/"
            className="hover:text-brand-green transition-colors duration-200"
          >
            Home
          </a>
        </li>
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <svg
              className="w-3.5 h-3.5 text-gray-300 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            {item.href ? (
              <a
                href={item.href}
                className="hover:text-brand-green transition-colors duration-200"
              >
                {item.label}
              </a>
            ) : (
              <span className="text-gray-900 font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
