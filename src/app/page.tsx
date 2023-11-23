"use client";

import GhostCity from "@/svgs/GhostCity";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import TweetsSection from "../components/TweetsSection";
import FaqBody from "../components/FaqBody";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <GhostCity />
      <TweetsSection />
      <FaqBody />
      <Footer />
    </>
  );
}
