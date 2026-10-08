import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="w-full bg-[#f8faf8] border-t border-gray-100 mt-5">
  <div className="max-w-230 mx-auto h-13 flex items-center justify-between px-4">
    
    {/* Left Text */}
    <p className=" text-gray-700">
      বাজার দর — প্রতিদিনের দামের সব খবর
    </p>

    {/* Right Text */}
    <p className=" text-gray-700">
      সকল পণ্য সামগ্রী; বাজার অবস্থান এবং মূল্য দর সঠিকভাবে জানা
    </p>

  </div>
</footer>
        </div>
    );
};

export default Footer;