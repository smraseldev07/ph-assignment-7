import React from 'react';
import PriceCard from './PriceCard';

const AllProducts = async() => {
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products')
    const data = await res.json()
    console.log(data);
    


    
    
    return (
        <div className='max-w-5xl mx-auto mt-20'>
         <h1 className='font-bold'>সব পণ্য</h1>
         <p>মোট ৩৩টি পণ্য দেখানো হচ্ছে</p>

         <div className='grid grid-cols-3 gap-3 mt-3'>
            {
            data.map((product, i) => <PriceCard key={i} product = {product}></PriceCard>)
            }
         </div>
        </div>
    );
};

export default AllProducts;