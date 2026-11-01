"use client";
import { AnimatedTestimonials } from "../ui/animated-testimonials";

const testimonials = [
  {
    quote:
      "Social Shelf completely changed how we exchange textbooks and novels on campus. Reserving a book takes 5 seconds, and everything is tracked seamlessly!",
    name: "Sarah Johnson",
    designation: "Literature Society Lead",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600",
  },
  {
    quote:
      "The book rental system is so convenient. I got access to Clean Code and Systems Design books for free instead of spending hundreds of dollars.",
    name: "Michael Chen",
    designation: "Computer Science Student",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
  },
  {
    quote:
      "Donating the books I had finished felt so rewarding. Knowing someone else is learning from them makes this community truly special.",
    name: "Emma Davis",
    designation: "Book Donor & Community Member",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-zinc-50/50 dark:bg-zinc-900/30 border-y border-zinc-200/50 dark:border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400 bg-violet-500/10 px-3 py-1 rounded-full">
            Community Voices
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white mt-3">
            Loved by Readers & Learners
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mt-2 text-base">
            See how Social Shelf connects passionate readers, students, and book clubs together.
          </p>
        </div>
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
    </section>
  );
}
