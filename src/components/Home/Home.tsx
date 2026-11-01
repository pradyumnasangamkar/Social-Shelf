"use client";

import React from "react";
import Hero from "./Hero";
import Stats from "../ui/stats";
import FeaturedBooks from "./FeaturedBooks";
import FeaturesSection from "../ui/feature";
import Testimonials from "./Testimonials";
import Newsletter from "./Newsletter";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Stats />
      <FeaturedBooks />
      <FeaturesSection />
      <Testimonials />
      <Newsletter />
    </div>
  );
}
