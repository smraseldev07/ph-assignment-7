import Link from "next/link";

const Navlink = async ({ currentSlug }) => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/categories"
  );

  const data = await res.json();

  return (
    <div className="absolute left-96 mt-6 flex gap-3">
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