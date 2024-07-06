import React from "react";
import Navbar from "@/components/navbar.jsx";
import Hamburger from "@/components/hamburger.jsx";
import Hero from "@/components/hero.jsx";
import Capabilities from "@/components/capabilities.jsx";
import Brand from "@/components/brand.jsx";
import Footer from "@/components/footer.jsx";
import FooterMobile from "@/components/footer-mobile.jsx";

export default function Home () {
  return (
    <>
      <Navbar />
      <Hamburger />
      <Hero />
      <Capabilities />
      <div className="pt-[60px] md:pt-[800px] lg:pt-[1000px]"></div>
      <Brand />
      <Footer />
      <FooterMobile />
    </>
  );
}
