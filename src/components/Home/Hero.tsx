"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Heart, Sparkles, CheckCircle2, Star, ShieldCheck } from "lucide-react";

export default function Hero() {
  const previewBooks = [
    {
      title: "Atomic Habits",
      author: "James Clear",
      category: "Self-Help",
      rating: "4.9",
      readers: "420+ borrows",
      cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Clean Code",
      author: "Robert C. Martin",
      category: "Engineering",
      rating: "4.8",
      readers: "310+ borrows",
      cover: "https://images.unsplash.com/photo-1532012164546-f432f2e37b73?auto=format&fit=crop&q=80&w=600",
      featured: true,
    },
    {
      title: "Psychology of Money",
      author: "Morgan Housel",
      category: "Finance",
      rating: "4.9",
      readers: "580+ borrows",
      cover: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?auto=format&fit=crop&q=80&w=600",
    },
  ];

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
      {/* Background Subtle Gradient & Mesh Glow */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-b from-violet-500/15 via-indigo-500/10 to-transparent blur-3xl opacity-70 dark:opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Top Pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-violet-500/10 dark:bg-violet-500/15 text-violet-700 dark:text-violet-300 border border-violet-500/20 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-violet-500" />
            <span>Next-Gen Community Book Exchange & Library</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.15]"
          >
            Borrow Stories. Share Knowledge.{" "}
            <span className="bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Zero Fees.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto leading-relaxed"
          >
            Explore an expansive library of community-shared textbooks, fiction, and career guides.
            Borrow in one click, exchange pre-loved books, and pass knowledge forward.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3.5 pt-2"
          >
            <Link href="/rent-books">
              <button className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-violet-500/25 transition-all duration-200 hover:-translate-y-0.5">
                <BookOpen className="w-4 h-4" />
                <span>Explore Catalog</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </Link>

            <Link href="/donation">
              <button className="flex items-center gap-2 px-6 py-3.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/70 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white font-semibold text-sm sm:text-base transition-all duration-200 hover:-translate-y-0.5">
                <Heart className="w-4 h-4 text-rose-500" />
                <span>Donate Books</span>
              </button>
            </Link>

            <Link href="/events">
              <button className="flex items-center gap-2 px-5 py-3.5 rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white font-medium text-sm transition-colors">
                <span>View Events →</span>
              </button>
            </Link>
          </motion.div>

          {/* Trust Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400"
          >
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Free 14-day borrowing
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-indigo-500" /> Verified book conditions
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-500" /> Campus pickup & drop hubs
            </span>
          </motion.div>
        </div>

        {/* Hero Showcase Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-14 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {previewBooks.map((book, idx) => (
            <div
              key={book.title}
              className={`relative rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1.5 border ${
                book.featured
                  ? "bg-gradient-to-b from-violet-500/10 to-transparent border-violet-500/40 shadow-xl shadow-violet-500/10 dark:bg-zinc-900/90"
                  : "bg-white/80 dark:bg-zinc-900/60 border-zinc-200/80 dark:border-zinc-800 shadow-md"
              } backdrop-blur-sm flex flex-col justify-between`}
            >
              {book.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-sm">
                  ★ Community Favorite
                </div>
              )}

              <div>
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 mb-3 shadow-inner">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <span className="absolute top-2 right-2 px-2 py-0.5 rounded-md text-[10px] font-bold bg-black/70 text-white backdrop-blur-sm">
                    {book.category}
                  </span>
                </div>
                <h3 className="font-bold text-base text-zinc-900 dark:text-white line-clamp-1">
                  {book.title}
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                  By {book.author}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-200/60 dark:border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-1 text-xs font-semibold text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-amber-500" />
                  <span>{book.rating}</span>
                  <span className="text-zinc-400 font-normal">({book.readers})</span>
                </div>
                <Link href="/rent-books">
                  <button className="text-xs font-semibold text-violet-600 dark:text-violet-400 hover:underline">
                    Borrow →
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
