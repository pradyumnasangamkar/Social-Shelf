"use client";

import React from "react";
import { BookOpen, Users, Award, Calendar, RefreshCcw } from "lucide-react";

export default function Stats() {
  const statsList = [
    {
      label: "Books in Rotation",
      value: "1,200+",
      sub: "Across all genres & fields",
      icon: BookOpen,
      color: "from-blue-500 to-indigo-500",
    },
    {
      label: "Active Readers",
      value: "450+",
      sub: "Students & book lovers",
      icon: Users,
      color: "from-violet-500 to-purple-500",
    },
    {
      label: "Community Donations",
      value: "380+",
      sub: "Donated by members",
      icon: RefreshCcw,
      color: "from-emerald-500 to-teal-500",
    },
    {
      label: "Literary Events",
      value: "35+",
      sub: "Workshops & author meets",
      icon: Calendar,
      color: "from-amber-500 to-rose-500",
    },
  ];

  return (
    <section className="py-14 border-y border-zinc-200/60 dark:border-zinc-800/80 bg-zinc-50/60 dark:bg-zinc-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {statsList.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center p-4 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200/50 dark:border-zinc-800/80 shadow-sm"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${stat.color} flex items-center justify-center text-white mb-3 shadow-md`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                  {stat.sub}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
