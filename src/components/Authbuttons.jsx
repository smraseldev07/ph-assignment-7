
"use client";

import { signOut, useSession } from "@/lib/auth-client";
import { Button } from "@heroui/react";

import Link from "next/link";
import React, { useState } from "react";

const Authbuttons = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {session?.user ? (
        <>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-black hover:bg-gray-100"
          >
            {session.user.name}
            <span className="text-xs">
              {isOpen ? "▲" : "▼"}
            </span>
          </button>

          {isOpen && (
            <div className="absolute right-0 top-full z-50 mt-2 w-44 rounded-lg border border-gray-200 bg-white py-2 text-black shadow-lg">
              <Link
                href="/profilepage"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                My Profile
              </Link>

              <button
                onClick={() => signOut()}
                className="w-full px-4 py-2 text-left text-red-600 hover:bg-gray-100"
              >
                Sign Out
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="flex items-center gap-2">
          <Link href="/sign-in">
            <Button className="bg-white text-black">
              সাইন ইন
            </Button>
          </Link>

          <Link href="/sign-up">
            <Button className="bg-green-600 text-white">
              সাইন আপ
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Authbuttons;