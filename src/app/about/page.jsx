import React from "react";
import Navbar from "@/components/navbar.jsx";
import Hamburger from "@/components/hamburger.jsx";
import About from "@/components/about.jsx";
import Footer from "@/components/footer.jsx";
import FooterMobile from "@/components/footer-mobile.jsx";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <Hamburger />

      <About />

      <Footer />
      <FooterMobile />
    </>
  );
}
