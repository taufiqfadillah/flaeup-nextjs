import React from "react";
import Navbar from "@/components/navbar.jsx";
import Hamburger from "@/components/hamburger.jsx";
import Contact from "@/components/contact/contact.jsx";
import Footer from "@/components/footer.jsx";
import FooterMobile from "@/components/footer-mobile.jsx";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <Hamburger />

      <Contact />

      <Footer />
      <FooterMobile />
    </>
  );
}
