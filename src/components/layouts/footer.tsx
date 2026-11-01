"use client";

import Link from "next/link";
import { BookOpen, Heart, Github, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200/60 dark:border-zinc-800/80 bg-zinc-50 dark:bg-[#070A11] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Col 1: Brand */}
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 font-bold text-xl text-zinc-900 dark:text-white">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-500 flex items-center justify-center text-white shadow-md">
                <BookOpen className="w-5 h-5" />
              </div>
              <span className="text-lg font-extrabold tracking-tight">Social Shelf</span>
            </Link>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              A decentralized community book exchange & library network empowering readers to share, discover, and rent books with zero friction.
            </p>
            <div className="flex items-center gap-3 pt-2 text-zinc-500 dark:text-zinc-400">
              <a
                href="https://github.com/pradyumnasangamkar/Social-Shelf"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="mailto:support@socialshelf.org"
                className="p-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Explore */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-200">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li>
                <Link href="/rent-books" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                  Browse Catalog
                </Link>
              </li>
              <li>
                <Link href="/donation" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                  Donate Books
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                  Literary Events
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                  Community Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Community */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-200">
              Community
            </h4>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li>
                <Link href="/about" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                  About Our Mission
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                  Contact & Support
                </Link>
              </li>
              <li>
                <Link href="/register" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                  Become a Volunteer
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                  Reading Clubs
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Library Hours */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-200">
              Exchange Hub
            </h4>
            <div className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1.5">
              <p className="font-medium text-zinc-800 dark:text-zinc-300">Central University Campus</p>
              <p>Library Hall Room 304</p>
              <p>Mon - Sat: 9:00 AM – 7:00 PM</p>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Open for Book Returns
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© {new Date().getFullYear()} Social Shelf. Open source community initiative.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" /> for readers & students everywhere
          </p>
        </div>
      </div>
    </footer>
  );
}
