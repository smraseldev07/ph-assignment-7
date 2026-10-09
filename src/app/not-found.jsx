
import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f0f5f0] px-4 py-10">
      <div className="w-full max-w-lg text-center">

        {/* Icon */}
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-3xl border border-[#e0e8e0] bg-[#fafcf9] shadow-sm">
          <span className="text-5xl">🛒</span>
        </div>

        {/* 404 */}
        <h1 className="text-8xl font-extrabold tracking-tight text-[#078b43] sm:text-9xl">
          404
        </h1>

        {/* Text */}
        <h2 className="mt-4 text-2xl font-bold text-[#202a22] sm:text-3xl">
          পেজটি খুঁজে পাওয়া যায়নি!
        </h2>

        <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-[#788078] sm:text-base">
          দুঃখিত! আপনি যে পেজটি খুঁজছেন সেটি সরানো হয়েছে,
          নাম পরিবর্তন করা হয়েছে অথবা বর্তমানে পাওয়া যাচ্ছে না।
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#078b43] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#067638] hover:shadow-md"
          >
            <span>⌂</span>
            হোম পেজে ফিরে যান
          </Link>

          <Link
            href="/category"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#d8e2d8] bg-[#fafcf9] px-6 py-3 text-sm font-semibold text-[#273128] transition hover:border-[#078b43] hover:bg-white"
          >
            পণ্য দেখুন
            <span>→</span>
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-12 border-t border-[#dfe7df] pt-5">
          <p className="text-xs text-[#899189]">
            BazarDor — আপনার নিত্যদিনের বাজারদর
          </p>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
