import React from "react";
import Navbar from "@/components/navbar.jsx";
import Hamburger from "@/components/hamburger.jsx";
import Contact from "@/components/contact.jsx";
import Brand from "@/components/brand.jsx";
import Footer from "@/components/footer.jsx";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <Hamburger />

      <Contact />

      <div className="pt-1000"></div>
      <Brand />
      <Footer />
    </>
  );
}
