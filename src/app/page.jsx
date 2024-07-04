import React from "react";
import Navbar from "@/components/navbar.jsx";
import Hamburger from "@/components/hamburger.jsx";
import Hero from "@/components/hero.jsx";
import Capabilities from "@/components/capabilities.jsx";
import Brand from "@/components/brand.jsx";
import Footer from "@/components/footer.jsx";
import FooterMobile from "@/components/footer-mobile.jsx";
import Loader from "@/components/loader.jsx";

export default function Home () {
  return (
    <>
      <Navbar />
      <Hamburger />
      <Hero />
      <Capabilities />
      <div className="pt-1000"></div>
      <Brand />
      <Footer />
      <FooterMobile />
      <Loader />
    </>
  );
}
