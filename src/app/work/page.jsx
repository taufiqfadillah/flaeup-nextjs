import React from "react";
import Navbar from "@/components/navbar.jsx";
import Hamburger from "@/components/hamburger.jsx";
import Work from "@/components/work.jsx";
import Brand from "@/components/brand.jsx";
import Footer from "@/components/footer.jsx";
import Loader from "@/components/loader.jsx";

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <Hamburger />

      <Work />

      <div className="pt-1000"></div>
      <Brand />
      <Footer />
      <Loader />
    </>
  );
}
