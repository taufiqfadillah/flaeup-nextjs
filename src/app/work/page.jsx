import React from "react";
import Navbar from "@/components/navbar.jsx";
import Hamburger from "@/components/hamburger.jsx";
import Work from "@/components/work/work.jsx";
import Brand from "@/components/home/brand.jsx";
import Footer from "@/components/footer.jsx";

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <Hamburger />

      <Work />

      <div className="pt-1000"></div>
      <Brand />
      <Footer />
    </>
  );
}
