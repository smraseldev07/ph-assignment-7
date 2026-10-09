import Link from "next/link";

const Navlink = async ({ currentSlug }) => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/categories"
  );

  const data = await res.json();

  return (
    <div className="relative mt-4 flex flex-wrap gap-3 md:mt-6 lg:absolute lg:left-96 lg:mt-6 lg:flex-nowrap">
      {data.map((item) => {
        const isActive = currentSlug === item.slug;

        return (
          <Link
            key={item.slug}
            href={`/category/${item.slug}`}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 transition-colors duration-200 ${
              isActive
                ? "bg-green-600 text-white"
                : "bg-transparent text-gray-700 hover:bg-green-100"
            }`}
          >
            <span>{item.icon}</span>
            <span>{item.nameBn}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Navlink;