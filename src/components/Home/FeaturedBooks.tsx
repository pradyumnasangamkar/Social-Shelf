"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BookOpen, Star, ArrowRight, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

interface BookItem {
  id: string;
  title: string;
  author: string;
  category: string;
  rating: number;
  reviews: number;
  available: number;
  cover: string;
  description: string;
}

const featuredCatalog: BookItem[] = [
  {
    id: "fb-1",
    title: "Atomic Habits",
    author: "James Clear",
    category: "Self-Help",
    rating: 4.9,
    reviews: 142,
    available: 5,
    cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=600",
    description: "An easy & proven way to build good habits and break bad ones.",
  },
  {
    id: "fb-2",
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "Software Engineering",
    rating: 4.8,
    reviews: 98,
    available: 3,
    cover: "https://images.unsplash.com/photo-1532012164546-f432f2e37b73?auto=format&fit=crop&q=80&w=600",
    description: "A handbook of agile software craftsmanship and clean system architecture.",
  },
  {
    id: "fb-3",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    category: "Finance",
    rating: 4.9,
    reviews: 210,
    available: 4,
    cover: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?auto=format&fit=crop&q=80&w=600",
    description: "Timeless lessons on wealth, greed, and happiness across markets.",
  },
  {
    id: "fb-4",
    title: "Deep Work",
    author: "Cal Newport",
    category: "Productivity",
    rating: 4.8,
    reviews: 86,
    available: 2,
    cover: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=600",
    description: "Rules for focused success in a distracted, hyper-connected world.",
  },
];

export default function FeaturedBooks() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Self-Help", "Software Engineering", "Finance", "Productivity"];

  const filteredBooks =
    selectedCategory === "All"
      ? featuredCatalog
      : featuredCatalog.filter((b) => b.category === selectedCategory);

  const handleQuickRent = (title: string) => {
    toast.success(`Reserved "${title}"!`, {
      description: "Redirecting to your rental shelf...",
    });
  };

  return (
    <section className="py-20 bg-white dark:bg-[#070A11] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400 bg-violet-500/10 px-3 py-1 rounded-full">
              Explore Available Books
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white mt-2.5">
              Featured Community Shelf
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-1">
              Top requested titles ready to borrow immediately from campus hubs.
            </p>
          </div>

          <Link href="/rent-books">
            <button className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300">
              <span>View Full Catalog (1,200+)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-violet-600 text-white shadow-sm"
                  : "bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Book Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <article
              key={book.id}
              className="flex flex-col rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Cover */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-black/75 text-white backdrop-blur-sm shadow-sm">
                    {book.category}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-semibold bg-emerald-500/90 text-white backdrop-blur-sm">
                    <CheckCircle2 className="w-3 h-3" />
                    {book.available} in stock
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-col flex-1 p-5">
                <div className="flex items-center gap-1 text-xs font-semibold text-amber-500 mb-1.5">
                  <Star className="w-3.5 h-3.5 fill-amber-500" />
                  <span>{book.rating}</span>
                  <span className="text-zinc-400 font-normal">({book.reviews} reviews)</span>
                </div>

                <h3 className="font-bold text-base text-zinc-900 dark:text-white line-clamp-1 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  {book.title}
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-2">
                  By {book.author}
                </p>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-2 leading-relaxed mb-4">
                  {book.description}
                </p>

                <div className="mt-auto pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between">
                  <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                    Free to Borrow
                  </span>
                  <Link href="/rent-books">
                    <button
                      onClick={() => handleQuickRent(book.title)}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-violet-600 dark:hover:bg-violet-400 dark:hover:text-white transition-colors shadow-sm"
                    >
                      Borrow Now
                    </button>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
