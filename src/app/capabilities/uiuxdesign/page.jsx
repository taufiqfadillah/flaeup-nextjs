import React from "react";
import Navbar from "@/components/navbar.jsx";
import Hamburger from "@/components/hamburger.jsx";
import UiUxDesign from "@/components/uiuxdesign/uiuxdesign.jsx";
import Footer from "@/components/footer.jsx";
import FooterMobile from "@/components/footer-mobile.jsx";

export default function UiUxDesignPage() {
  return (
    <>
      <Navbar />
      <Hamburger />

      <UiUxDesign />

      <Footer />
      <FooterMobile />
    </>
  );
}
