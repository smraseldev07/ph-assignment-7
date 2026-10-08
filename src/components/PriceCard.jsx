import React from 'react';

const PriceCard = ({product}) => {
    return (
        <div>
             <div className="w-full max-w-112.5 rounded-[20px] border border-[#dce3dd] bg-[#fbfdfb] p-5 shadow-sm">

      {/* Top section */}
      <div className="flex items-center gap-4">

        {/* Product Image */}
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#f1f6f1] text-4xl">
          {product.image}
        </div>

        {/* Product Info */}
        <div>
          <h2 className="text-[20px] font-bold leading-tight text-[#202522]">
            {product.nameBn}
          </h2>

          <p className="mt-1 text-[15px] text-[#606862]">
            প্রতি {product.unit === "kg" ? "কেজি" : product.unit}
          </p>
        </div>
      </div>

      {/* Bottom section */}
      <div className="mt-4 flex items-end justify-between">

        {/* Price */}
        <div>
          <p className="mb-1 text-[15px] text-[#4f5751]">
            আজকের দাম
          </p>

          <p className="text-[25px] font-bold leading-none text-[#252b27]">
            {product.today} টাকা
          </p>
        </div>

        {/* Price Change */}
        <div
          className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-semibold ${
            product.change.dir === "up"
              ? "bg-[#f1f7f2] text-[#e53935]"
              : "bg-[#f1f7f2] text-green-600"
          }`}
        >
          <span>
            {product.change.dir === "up" ? "▲" : "▼"}
          </span>

          <span>
            {product.change.pct.toFixed(1)}%
          </span>
        </div>
      </div>
    </div>
        </div>
    );
};

export default PriceCard;