"use client";
import { Highlight } from "./ui/hero-highlight";
import { motion } from "framer-motion";
import { FlipWords } from "./ui/flip-words";
import { ChevronDown } from "lucide-react";
import { name, artIs } from "@/lib/galleryInfo";

export default function IntroductionSection() {
  const scrollToSearch = () => {
    const searchSection = document.getElementById("search");
    if (searchSection) {
      searchSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col w-screen items-center justify-center h-screen bg-neutral-950 relative">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [20, -5, 0] }}
        transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
        className="text-2xl px-4 md:text-3xl lg:text-4xl font-bold text-neutral-300 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
      >
        Hello my name is{" "}
        <Highlight className="text-black dark:text-white">{name}</Highlight>
      </motion.h1>
      <h2 className="flex flex-col h-32 text-center my-12 text-5xl lg:text-7xl font-bold text-white">
        <span className="text-3xl lg:text-5xl">I believe ART is</span>
        <FlipWords className="text-center text-green-400" words={artIs} />
      </h2>
      <motion.button
        onClick={scrollToSearch}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute bottom-6 flex items-center justify-center w-12 h-12 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <ChevronDown className="text-white w-6 h-6" />
      </motion.button>
    </div>
  );
}
