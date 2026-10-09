import React from 'react';
import PriceCard from './PriceCard';

const Highprice = async() => {
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products',{
        cache : 'no-store'
    })
    const data = await res.json()
    const filterhigh = data.filter((item) => item.change.dir === "up").sort((a, b) => b.change.pct - a.change.pct) .slice(0, 6);


    
    
    return (
        <div className='max-w-5xl mx-auto mt-6'>
         <h1 className='font-bold'><span className='text-red-600'>▲</span>আজ দাম বেড়েছে</h1>

         <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {
                filterhigh.map((product, i) => <PriceCard key={i} product = {product}></PriceCard>)
            }
         </div>
        </div>
    );
};

export default Highprice;