import React from "react";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css"

const Marquee = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
  );
  const data = await res.json();
  console.log(data);

  return (
    <div className="border" >
     <MarqueeText direction="right">
         {data.map((item) => (
        <span  className="mx-4"key={item.id}>
          <span>{item.nameBn}</span>
          <span>{item.today}টাকা/কেজি</span>
         
          <span
            className={
              item.change.dir === "up" ? "text-red-500" : "text-green-500"
            }
          >
            {item.change.dir === "up" ? "↑" : "↓"}
          </span>
           <span>{item.change.pct}টাকা/কেজি</span>
        </span>
      ))}
     </MarqueeText>
    </div>
  );
};

export default Marquee;
