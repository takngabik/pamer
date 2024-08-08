"use client"

import {useEffect} from "react";
import {useTheme} from "next-themes";
import {About} from "@/components/layout/About";
import {Banner} from "@/components/layout/Banner";
import {Portfolio} from "@/components/layout/Portfolio";
import {Contact} from "@/components/layout/Contact";
import {Footer} from "@/components/layout/Footer";

export default function LandingPage() {
  const {setTheme} = useTheme()
  useEffect(() => {
    setTheme("dark")
  }, []);
  return (
    <>
      <Banner/>
      <Portfolio/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  );
}
