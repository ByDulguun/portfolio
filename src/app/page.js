"use client";

import {
  About,
  Experience,
  Footer,
  Get,
  Header,
  Section,
  Skills,
  Work,
} from "@/components";

import { useState } from "react";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  const handleClick = () => {
    setIsDark(!isDark);
  };

  console.log("hi");
  return (
    <div className={isDark ? "dark" : ""}>
      <Header toggleDarkMode={handleClick} isDark={isDark} />
      <Section toggleDarkMode={handleClick} isDark={isDark} />
      <About toggleDarkMode={handleClick} />
      <Skills toggleDarkMode={handleClick} isDark={isDark} />
      <Experience toggleDarkMode={handleClick} />
      <Work toggleDarkMode={handleClick} isDark={isDark} />
      <Get toggleDarkMode={handleClick} isDark={isDark} />
      <Footer toggleDarkMode={handleClick} isDark={isDark} />
    </div>
  );
}
