import React from "react";
import Navbar from "../components/navbar.jsx";
import Hamburger from "../components/hamburger.jsx";
import Brand from "../components/brand.jsx";
import Footer from "../components/footer.jsx";
import Loader from "../components/loader.jsx";

const Contact = () => {
  document.title = "Contact | Creativity is centar to our design.";

  return (
    <>
      <Navbar />
      <Hamburger />

      <div className="pt-1000"></div>
      <Brand />
      <Footer />
      <Loader />
    </>
  );
};

export default Contact;
