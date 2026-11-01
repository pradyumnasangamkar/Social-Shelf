"use client";

import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { navigationLinks } from "./constants";
import { BookOpen } from "lucide-react";

export default function MobileNav() {
  const pathName = usePathname();
  const [navShow, setNavShow] = useState(false);

  useEffect(() => {
    if (navShow) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [navShow]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label="Toggle Menu"
        onClick={() => setNavShow(!navShow)}
        className="p-1.5 rounded-lg text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
      >
        <HiOutlineMenu size={24} />
      </button>

      <AnimatePresence>
        {navShow && (
          <motion.div
            key="MobileNav"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex flex-col bg-white dark:bg-[#090D16] px-6 py-6"
          >
            <div className="flex items-center justify-between pb-6 border-b border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center text-white">
                  <BookOpen className="w-4 h-4" />
                </div>
                <span className="font-bold text-lg dark:text-white">Social Shelf</span>
              </div>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setNavShow(false)}
                className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              >
                <HiOutlineX size={22} />
              </button>
            </div>

            <nav className="flex flex-col gap-2 py-6 flex-1">
              {navigationLinks.map(({ title, href }) => {
                const active = pathName === href || (href !== "/" && pathName?.startsWith(href));
                return (
                  <Link
                    key={title}
                    href={href}
                    onClick={() => setNavShow(false)}
                    className={classNames(
                      "px-4 py-3 rounded-xl text-base font-medium transition-colors",
                      active
                        ? "bg-violet-500/10 text-violet-600 dark:text-violet-400 font-semibold"
                        : "text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/60"
                    )}
                  >
                    {title}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800 flex flex-col gap-3">
              <Link href="/login" onClick={() => setNavShow(false)}>
                <button className="w-full py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 font-medium text-sm text-zinc-800 dark:text-zinc-200">
                  Log In
                </button>
              </Link>
              <Link href="/register" onClick={() => setNavShow(false)}>
                <button className="w-full py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-medium text-sm shadow-md">
                  Join Free
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
