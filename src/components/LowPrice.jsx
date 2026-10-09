import React from 'react';
import PriceCard from './PriceCard';

const LowPrice = async() => {
    const res = await fetch('https://api.abcz.workers.dev/api/bazardor/products', {
        cache : 'no-store'
    })
    const data = await res.json()
    const filterhigh = data.filter((item) => item.change.dir === "down").sort((a, b) => a.change.pct - b.change.pct) .slice(0, 6);


    
    
    return (
        <div className='max-w-5xl mx-auto mt-11'>
         <h1 className='font-bold'><span className='text-green-600'>▼</span>আজ দাম কমেছে</h1>

         <div className='grid grid-cols-3 gap-3 mt-3'>
            {
                filterhigh.map((product, i) => <PriceCard key={i} product = {product}></PriceCard>)
            }
         </div>
        </div>
    );
};

export default LowPrice;