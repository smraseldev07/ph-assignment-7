
import { notFound } from "next/navigation";
import React from "react";

const Page = async ({ params, searchParams }) => {
  const { categoryslug } = await params;
  const { sort = "default" } = (await searchParams) || {};

  const res = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products?category=${categoryslug}`
  );

  const product = await res.json();
  if (
  !Array.isArray(product) ||
  product.length === 0 ||
  !product.some((item) => item.categoryNameBn)
) {
  notFound();
}
  const products = Array.isArray(product) ? product : [];

  const categoryName = products[0]?.categoryNameBn || "পণ্য";
  const categoryIcon = products[0]?.categoryIcon || "🛒";

  const sortedProducts = [...products].sort((a, b) => {
    if (sort === "low-high") {
      return Number(a.today) - Number(b.today);
    }

    if (sort === "high-low") {
      return Number(b.today) - Number(a.today);
    }

    return 0;
  });

  return (
    <main className="min-h-screen bg-[#f0f5f0] px-4 py-5 sm:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Category Header */}
        <header className="flex items-center gap-3 rounded-xl border border-[#e0e8e0] bg-[#fafcf9] p-4">
          <div className="flex h-10 w-10 items-center justify-center text-3xl">
            {categoryIcon}
          </div>

          <div>
            <h1 className="text-lg font-bold text-[#202a22]">
              {categoryName}
            </h1>
            <p className="text-xs text-[#788078]">
              আজকের পণ্যের বাজারদর ও পরিবর্তন
            </p>
          </div>
        </header>

        {/* Product Count + Sort UI */}
        <div className="my-3 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#e0e8e0] bg-[#fafcf9] px-4 py-3">
          <p className="text-xs text-[#737c73]">
            মোট {products.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে
          </p>

          <form method="get" className="flex items-center gap-2">
            <label htmlFor="sort" className="text-xs text-[#626b62]">
              সাজান
            </label>
            <select
              id="sort"
              name="sort"
              defaultValue={sort}
              className="rounded-lg border border-[#d8dfd8] bg-[#fafcf9] px-3 py-1.5 text-xs text-[#273128] outline-none transition focus:border-[#9bad9b]"
            >
              <option value="default">ডিফল্ট</option>
              <option value="low-high">দাম: কম থেকে বেশি</option>
              <option value="high-low">দাম: বেশি থেকে কম</option>
            </select>
            <button
              type="submit"
              className="rounded-lg border border-[#d8dfd8] px-3 py-1.5 text-xs text-[#273128]"
            >
              সাজান
            </button>
          </form>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {sortedProducts.map((item) => {
            const isUp = item.change?.dir === "up";
            const isDown = item.change?.dir === "down";
            const pct = Number(item.change?.pct ?? 0);

            return (
              <article
                key={item.id}
                className="rounded-xl border border-[#e0e8e0] bg-[#fafcf9] p-3 transition duration-200 hover:border-[#c6d5c6] hover:shadow-sm"
              >
                {/* Product Info */}
                <div className="flex items-center gap-2.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f0f4ef] text-xl">
                    {item.image || item.categoryIcon || "🛒"}
                  </div>

                  <div>
                    <h2 className="text-sm font-bold text-[#273128]">
                      {item.nameBn}
                    </h2>
                    <p className="text-[11px] text-[#747c74]">
                      প্রতি {item.unit === "kg" ? "কেজি" : item.unit}
                    </p>
                  </div>
                </div>

                {/* Price & Change */}
                <div className="mt-2 flex items-end justify-between">
                  <div>
                    <p className="text-[11px] text-[#737b73]">
                      আজকের দাম
                    </p>
                    <p className="text-sm font-bold text-[#202a22]">
                      {Number(item.today).toLocaleString("bn-BD")} টাকা
                    </p>
                  </div>

                  <span
                    className={`rounded-full px-2 py-1 text-[10px] font-semibold ${
                      isUp
                        ? "bg-red-50 text-red-500"
                        : isDown
                          ? "bg-green-50 text-green-600"
                          : "bg-[#f0f3ef] text-[#596259]"
                    }`}
                  >
                    {isUp ? "▲" : isDown ? "▼" : "—"}{" "}
                    {pct.toLocaleString("bn-BD", {
                      maximumFractionDigits: 1,
                    })}
                    %
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Page;

