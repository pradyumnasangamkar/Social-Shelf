"use client";

import React from "react";
import {
  BookOpen,
  HeartHandshake,
  CalendarCheck,
  ShieldCheck,
  Search,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function FeaturesSection() {
  const steps = [
    {
      step: "01",
      title: "Discover & Reserve",
      desc: "Browse our decentralized campus shelf. Filter by genre, author, or availability, and reserve in one click.",
      icon: Search,
      color: "from-blue-500 to-indigo-600",
    },
    {
      step: "02",
      title: "Pick Up & Enjoy",
      desc: "Collect your book from our campus library hub or designated reader lockers with zero rental fees.",
      icon: BookOpen,
      color: "from-violet-500 to-purple-600",
    },
    {
      step: "03",
      title: "Return or Donate",
      desc: "Return the book within 14 days or donate your finished books to give someone else the joy of reading.",
      icon: HeartHandshake,
      color: "from-emerald-500 to-teal-600",
    },
  ];

  const features = [
    {
      title: "Smart Inventory Tracking",
      desc: "Automated due date alerts, renewal options, and live stock transparency across all campus library shelves.",
      icon: ShieldCheck,
    },
    {
      title: "Literary Workshops & Events",
      desc: "Bi-weekly book reading circles, guest author discussions, and interactive creative writing seminars.",
      icon: CalendarCheck,
    },
    {
      title: "Community Book Donations",
      desc: "Effortlessly list and donate books you've read. Earn community karma and help fellow students succeed.",
      icon: HeartHandshake,
    },
    {
      title: "Curated Recommendations",
      desc: "Discover your next favorite read with community ratings, member reviews, and verified shelf lists.",
      icon: Sparkles,
    },
  ];

  return (
    <section className="py-20 bg-zinc-50/50 dark:bg-[#070A11] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Step-by-Step Flow */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400 bg-violet-500/10 px-3 py-1 rounded-full">
            Simple 3-Step Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white mt-3">
            How Social Shelf Works
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mt-2 text-sm sm:text-base">
            Borrowing and sharing books has never been this effortless and community-driven.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative flex flex-col p-8 rounded-2xl bg-white dark:bg-zinc-900/70 border border-zinc-200/80 dark:border-zinc-800 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${item.color} flex items-center justify-center text-white shadow-md`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-black text-zinc-200 dark:text-zinc-800">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Feature Grid */}
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-violet-900/10 via-zinc-900/5 to-indigo-900/10 dark:from-violet-950/30 dark:via-zinc-900/40 dark:to-indigo-950/30 border border-zinc-200/70 dark:border-zinc-800/80">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white">
              Why Readers Choose Social Shelf
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-2">
              Designed to replace expensive textbooks and isolated reading with an open, accessible library.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.title}
                  className="p-6 rounded-2xl bg-white/80 dark:bg-zinc-900/80 border border-zinc-200/60 dark:border-zinc-800 backdrop-blur-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-base text-zinc-900 dark:text-white mb-2">
                    {feat.title}
                  </h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link href="/rent-books">
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-semibold text-sm shadow-md transition-all">
                <span>Start Borrowing Books Today</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
