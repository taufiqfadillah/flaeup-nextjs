import React from "react";
import Navbar from "@/components/navbar.jsx";
import Hamburger from "@/components/hamburger.jsx";
import Branding from "@/components/branding/branding.jsx";
import Footer from "@/components/footer.jsx";
import FooterMobile from "@/components/footer-mobile.jsx";

export default function BrandingPage() {
  return (
    <>
      <Navbar />
      <Hamburger />

      <Branding />

      <Footer />
      <FooterMobile />
    </>
  );
}
