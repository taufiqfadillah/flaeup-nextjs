import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <>
      {/* <!-- Navbar --> */}
      <section className="header">
        <nav className="w-full fixed top-0 backdrop-filter backdrop-blur-lg bg-white bg-opacity-80 z-50">
          <div className="container mx-auto py-4">
            <div className="flex h-16 items-center justify-between">
              <a className="inline-block" href="/">
                <Image
                  className="h-8 md:h-12 ml-4"
                  src="/images/logos/logo.png"
                  alt="Logo"
                  width={52}
                  height={52}
                  priority={true}
                  style={{ width: "auto", height: "auto" }}
                />
              </a>
              <button
                className="lg:hidden navbar-burger"
                style={{ paddingRight: "15px" }}
              >
                <svg
                  width="32"
                  height="16"
                  viewBox="0 0 44 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="24" height="2" rx="1" fill="black"></rect>
                  <rect
                    y="14"
                    width="12"
                    height="1.5"
                    rx="1"
                    fill="black"
                  ></rect>
                </svg>
              </button>
              <div className="hidden lg:flex items-center space-x-60 font-medium">
                <span className="leading-snug">
                  Design
                  <br />
                  <span className="leading-none">That Speaks</span>
                </span>
                <a
                  className=" inline-block hover:underline flex items-center leading-none"
                  href="/about"
                >
                  About
                  <svg
                    id="SvgjsSvg1011"
                    width="8"
                    height="8"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlnssvgjs="http://svgjs.com/svgjs"
                    className="ml-2 relative top-1"
                  >
                    <defs id="SvgjsDefs1012"></defs>
                    <g id="SvgjsG1013">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="8"
                        height="8"
                      >
                        <rect
                          width="16.15"
                          height="16.15"
                          x="3.92"
                          y="3.92"
                          data-name="49. Box, design, geometry, square, stop"
                          rx=".9"
                          fill="#82caaa"
                          className="color000 svgShape"
                        ></rect>
                      </svg>
                    </g>
                  </svg>
                </a>
                <a
                  className="inline-block hover:underline flex items-center leading-none"
                  href="/work"
                >
                  Work
                  <svg
                    id="SvgjsSvg1011"
                    width="8"
                    height="8"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlnssvgjs="http://svgjs.com/svgjs"
                    className="ml-2 relative top-1"
                  >
                    <defs id="SvgjsDefs1012"></defs>
                    <g id="SvgjsG1013">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="8"
                        height="8"
                      >
                        <rect
                          width="16.15"
                          height="16.15"
                          x="3.92"
                          y="3.92"
                          data-name="49. Box, design, geometry, square, stop"
                          rx=".9"
                          fill="#82caaa"
                          className="color000 svgShape"
                        ></rect>
                      </svg>
                    </g>
                  </svg>
                </a>
                <a
                  className="link-container inline-block hover:underline flex items-center leading-none"
                  href="/contact"
                >
                  Contact
                  <svg
                    width="16px"
                    height="16px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 relative bottom-1 svg-move"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
