import React from 'react';
import PriceCard from './PriceCard';
import { notFound } from 'next/navigation';

const AllProducts = async() => {
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products', {
        cache : 'no-store'
    })
    const data = await res.json()

    if(!data){
        notFound()
    }
  


    
    
    return (
        <div className='max-w-5xl mx-auto mt-20'>
         <h1 className='font-bold'>সব পণ্য</h1>
         <p>মোট ৩৩টি পণ্য দেখানো হচ্ছে</p>

         <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {
            data.map((product, i) => <PriceCard key={i} product = {product}></PriceCard>)
            }
         </div>
        </div>
    );
};

export default AllProducts;