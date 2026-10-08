import Image from 'next/image';
import React from 'react';
import banner from '../assets/bazar-hero.png'

const Banner = () => {
      const date = new Date().toLocaleDateString("bn-Bd" , {

        dateStyle : 'full'

    })
    return (
        <div>
            <section className=" px-6 py-3">
      <div className="mx-auto flex max-w-5xl items-center justify-between rounded-3xl border border-gray-200 bg-white px-8 py-5">

        {/* Left Content */}
        <div className="max-w-2xl">
          {/* Date Badge */}
          <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
        {date}
          </span>

          {/* Heading */}
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#202b24]">
            আজকের বাজারের দাম এক নজরে
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-xl text-sm leading-6 text-gray-500">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম —
            বাজারভিত্তিক বিস্তৃত তথ্য, ট্রেন্ড, সর্বনিম্ন-সর্বোচ্চ এবং
            দামের পরিবর্তন এক জায়গায়।
          </p>

          {/* Button */}
          <button className="mt-5 rounded-md bg-green-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-green-700">
            সব পণ্য দেখুন
          </button>
        </div>

        {/* Right Illustration */}
        <div className="hidden w-56 items-center justify-center md:flex">
        <Image

        src={banner}

        alt='bnner'
        
        
        />
        </div>

      </div>
    </section>
        </div>
    );
};

export default Banner;