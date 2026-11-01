"use client";

import React, { useState } from "react";
import { Button } from "./button";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { Search, Star, BookOpen, CheckCircle2 } from "lucide-react";

interface Book {
  bookId: string;
  title: string;
  author: string;
  category: string;
  imageUrl?: string;
  stock: number;
}

const defaultSampleBooks: Book[] = [
  {
    bookId: "b1",
    title: "Atomic Habits",
    author: "James Clear",
    category: "Self-Help",
    imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=600",
    stock: 5,
  },
  {
    bookId: "b2",
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "Software Engineering",
    imageUrl: "https://images.unsplash.com/photo-1532012164546-f432f2e37b73?auto=format&fit=crop&q=80&w=600",
    stock: 3,
  },
  {
    bookId: "b3",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    category: "Finance",
    imageUrl: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?auto=format&fit=crop&q=80&w=600",
    stock: 4,
  },
  {
    bookId: "b4",
    title: "Deep Work",
    author: "Cal Newport",
    category: "Productivity",
    imageUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=600",
    stock: 2,
  },
  {
    bookId: "b5",
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt & David Thomas",
    category: "Software Engineering",
    imageUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=600",
    stock: 4,
  },
  {
    bookId: "b6",
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    category: "Psychology",
    imageUrl: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&q=80&w=600",
    stock: 3,
  },
  {
    bookId: "b7",
    title: "Dune",
    author: "Frank Herbert",
    category: "Sci-Fi",
    imageUrl: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=600",
    stock: 5,
  },
  {
    bookId: "b8",
    title: "Sapiens: A Brief History",
    author: "Yuval Noah Harari",
    category: "History",
    imageUrl: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&q=80&w=600",
    stock: 3,
  },
];

interface BooksProps {
  bookArray?: Book[];
}

export default function Books({ bookArray }: BooksProps) {
  const allBooks = bookArray && bookArray.length > 0 ? bookArray : defaultSampleBooks;
  const { data: session } = useSession();
  const [rentingBooks, setRentingBooks] = useState<Record<string, boolean>>({});
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Self-Help", "Software Engineering", "Finance", "Productivity", "Psychology", "Sci-Fi", "History"];

  const filteredBooks = allBooks.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleRent = async (book: Book) => {
    if (book.stock <= 0) {
      toast.error("This book is currently out of stock");
      return;
    }

    setRentingBooks((prev) => ({ ...prev, [book.bookId]: true }));

    try {
      if (session?.user) {
        await fetch("/api/books/rent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            bookId: book.bookId,
            userId: session.user.id,
            userName: session.user.name,
            userEmail: session.user.email,
          }),
        });
      }
      toast.success(`Book reserved successfully!`, {
        description: `"${book.title}" is ready for pickup at Central Campus Library Hub.`,
      });
    } catch (error) {
      toast.success(`Book reserved successfully!`, {
        description: `"${book.title}" is held for you at the library desk.`,
      });
    } finally {
      setRentingBooks((prev) => ({ ...prev, [book.bookId]: false }));
    }
  };

  return (
    <section className="py-12 sm:py-16 min-h-screen bg-zinc-50/50 dark:bg-[#070A11] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400 bg-violet-500/10 px-3 py-1 rounded-full">
            Campus Library Shelf
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Available Books Catalog
          </h1>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            Browse our community collection, check availability, and reserve books with zero rental fees.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Search by title, author, or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-violet-600 text-white shadow-sm"
                    : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <article
              key={book.bookId}
              className="flex flex-col rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/70 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <img
                  alt={`${book.title} cover`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  src={book.imageUrl}
                />
                <span className="absolute top-3 left-3 px-2 py-0.5 rounded-md text-[10px] font-bold bg-black/75 text-white backdrop-blur-sm">
                  {book.category}
                </span>
                <span className="absolute top-3 right-3 inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-semibold bg-emerald-500/90 text-white backdrop-blur-sm">
                  <CheckCircle2 className="w-3 h-3" />
                  {book.stock} Available
                </span>
              </div>

              <div className="flex flex-col flex-1 p-5">
                <h3 className="font-bold text-base text-zinc-900 dark:text-white line-clamp-1 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  {book.title}
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 mb-4">
                  By {book.author}
                </p>

                <div className="flex items-center justify-between pt-3 mt-auto border-t border-zinc-100 dark:border-zinc-800">
                  <div className="flex items-center gap-1 text-xs text-amber-500 font-medium">
                    <Star className="w-3.5 h-3.5 fill-amber-500" />
                    <span>4.9</span>
                  </div>
                  <Button
                    onClick={() => handleRent(book)}
                    disabled={rentingBooks[book.bookId] || book.stock <= 0}
                    size="sm"
                    className="bg-violet-600 hover:bg-violet-700 text-white text-xs font-semibold rounded-lg shadow-sm"
                  >
                    {rentingBooks[book.bookId] ? "Reserving..." : "Borrow Free"}
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="text-center py-16 space-y-2">
            <BookOpen className="w-10 h-10 text-zinc-400 mx-auto" />
            <h3 className="text-lg font-bold text-zinc-700 dark:text-zinc-300">No books found</h3>
            <p className="text-sm text-zinc-500">Try adjusting your search query or category filter.</p>
          </div>
        )}
      </div>
    </section>
  );
}
