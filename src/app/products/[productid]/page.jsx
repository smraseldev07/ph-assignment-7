import React from "react";

const ProductDetail = async ({ params }) => {
  const { productid } = await params;

  const res = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/products/${productid}`,
    {
      cache: "no-store",
    }
  );

  const product = await res.json();

  const formatNumber = (number) =>
    new Intl.NumberFormat("bn-BD").format(number);

  const minPrice = Math.min(
    ...product.markets.map((item) => item.min)
  );

  const maxPrice = Math.max(
    ...product.markets.map((item) => item.max)
  );

  const averagePrice = Math.round(
    (minPrice + maxPrice) / 2
  );

  const changeColor =
    product.change.dir === "up"
      ? "text-red-500"
      : "text-green-600";

  const changeIcon =
    product.change.dir === "up" ? "▲" : "▼";

  return (
    <div className="min-h-screen bg-[#f1f6f2] p-4 sm:p-6">
      <div className="mx-auto max-w-7xl">

        {/* ================= PRODUCT HEADER ================= */}
        <div className="rounded-2xl border border-[#dfe7e1] bg-[#f9fbf9] p-3 sm:p-4">

          <div className="flex flex-col gap-4 rounded-xl bg-[#f0f5f1] p-4 sm:flex-row sm:items-center sm:justify-between">

            {/* Product Info */}
            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#e8efe9] text-3xl">
                {product.image}
              </div>

              <div>
                <h1 className="text-lg font-bold text-[#202722]">
                  {product.nameBn}
                </h1>

                <p className="text-xs text-gray-500">
                  প্রতি {product.unit === "kg" ? "কেজি" : product.unit}
                  {" · "}
                  {product.categoryNameBn}
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  সকালের তুলনায় আজকের দাম বেড়েছে ·{" "}
                  {formatNumber(product.change.pct)}%
                </p>
              </div>

            </div>

            {/* Today's Price */}
            <div className="w-fit rounded-xl bg-[#e6eee7] px-5 py-3 sm:text-right">

              <p className="text-[11px] text-gray-500">
                আজকের দাম
              </p>

              <p className="text-2xl font-bold text-[#242a26]">
                {formatNumber(product.today)}
              </p>

              <p className="text-xs text-gray-500">
                টাকা / কেজি
              </p>

              <p className={`mt-1 text-xs font-semibold ${changeColor}`}>
                {changeIcon} {formatNumber(product.change.pct)}%
              </p>

            </div>

          </div>


          {/* ================= SUMMARY ================= */}
          <div className="mt-6">

            <h2 className="mb-3 text-sm font-bold text-[#303730]">
              দামের সারসংক্ষেপ
            </h2>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">

              {/* Minimum */}
              <div className="rounded-xl border border-[#dfe7e1] bg-[#fbfdfb] p-4">

                <p className="text-xs text-gray-500">
                  সর্বনিম্ন দাম
                </p>

                <p className="mt-1 text-xl font-bold text-green-600">
                  {formatNumber(minPrice)} টাকা
                </p>

                <p className="mt-1 text-[11px] text-gray-500">
                  বাজারভেদে দাম পরিবর্তন হয়
                </p>

              </div>


              {/* Maximum */}
              <div className="rounded-xl border border-[#dfe7e1] bg-[#fbfdfb] p-4">

                <p className="text-xs text-gray-500">
                  সর্বোচ্চ দাম
                </p>

                <p className="mt-1 text-xl font-bold text-red-500">
                  {formatNumber(maxPrice)} টাকা
                </p>

                <p className="mt-1 text-[11px] text-gray-500">
                  বাজারভেদে দাম পরিবর্তন হয়
                </p>

              </div>


              {/* Average */}
              <div className="rounded-xl border border-[#dfe7e1] bg-[#fbfdfb] p-4">

                <p className="text-xs text-gray-500">
                  গড় দাম
                </p>

                <p className="mt-1 text-xl font-bold text-green-600">
                  {formatNumber(averagePrice)} টাকা
                </p>

                <p className="mt-1 text-[11px] text-gray-500">
                  প্রতি কেজিতে গড় দাম
                </p>

              </div>

            </div>
          </div>


          {/* ================= MARKET TABLE ================= */}
          <div className="mt-6">

            <h2 className="mb-3 text-sm font-bold text-[#303730]">
              বাজারভিত্তিক আজকের দাম
            </h2>

            <div className="overflow-hidden rounded-xl border border-[#dfe7e1]">

              <div className="overflow-x-auto">

                <table className="w-full min-w-[650px] border-collapse">

                  {/* Header */}
                  <thead>
                    <tr className="bg-[#f7faf7] text-xs text-gray-500">

                      <th className="px-3 py-3 text-left font-medium">
                        বাজার
                      </th>

                      <th className="px-3 py-3 text-left font-medium">
                        বিভাগ
                      </th>

                      <th className="px-3 py-3 text-right font-medium">
                        সর্বনিম্ন
                      </th>

                      <th className="px-3 py-3 text-right font-medium">
                        সর্বোচ্চ
                      </th>

                      <th className="px-3 py-3 text-right font-medium">
                        গড়
                      </th>

                    </tr>
                  </thead>


                  {/* Body */}
                  <tbody>

                    {product.markets.map((market, index) => {

                      const marketAverage = Math.round(
                        (market.min + market.max) / 2
                      );

                      return (
                        <tr
                          key={index}
                          className="border-t border-[#dfe5df] transition hover:bg-[#f1f6f1]"
                        >

                          <td className="px-3 py-3 text-left text-xs font-medium text-[#303630]">
                            {market.market}
                          </td>

                          <td className="px-3 py-3 text-left text-xs text-gray-600">
                            {market.division}
                          </td>

                          <td className="px-3 py-3 text-right text-xs text-gray-700">
                            {formatNumber(market.min)} টাকা
                          </td>

                          <td className="px-3 py-3 text-right text-xs text-gray-700">
                            {formatNumber(market.max)} টাকা
                          </td>

                          <td className="px-3 py-3 text-right text-xs font-semibold text-[#303630]">
                            {formatNumber(marketAverage)} টাকা
                          </td>

                        </tr>
                      );
                    })}

                  </tbody>

                </table>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ProductDetail;