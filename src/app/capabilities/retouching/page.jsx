import React from "react";
import Navbar from "@/components/navbar.jsx";
import Hamburger from "@/components/hamburger.jsx";
import Retouching from "@/components/retouching/retouching.jsx";
import Footer from "@/components/footer.jsx";
import FooterMobile from "@/components/footer-mobile.jsx";

export default function RetouchingPage() {
  return (
    <>
      <Navbar />
      <Hamburger />

      <Retouching />

      <Footer />
      <FooterMobile />
    </>
  );
}
