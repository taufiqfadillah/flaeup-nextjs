import React from "react";
import Navbar from "@/components/navbar.jsx";
import Hamburger from "@/components/hamburger.jsx";
import Packaging from "@/components/packaging/packaging.jsx";
import Footer from "@/components/footer.jsx";
import FooterMobile from "@/components/footer-mobile.jsx";

export default function PackagingPage() {
  return (
    <>
      <Navbar />
      <Hamburger />

      <Packaging />

      <Footer />
      <FooterMobile />
    </>
  );
}
