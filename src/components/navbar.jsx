'use client';

import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <section className="header">
      <nav className="w-screen fixed top-0 backdrop-filter backdrop-blur-lg bg-white bg-opacity-80 z-50">
        <div className="lg:mx-16 py-4 md:py-2">
          <div className="flex w-full h-12 md:h-16 items-center justify-between">
            <a className="inline-block" href="/">
              <Image className="h-10 md:h-12 mb-0 pl-[15px] md:pl-0" src="/images/logos/logo.png" alt="Logo" width={58} height={46} priority style={{ maxWidth: '58px', maxHeight: '46px' }} />
            </a>
            <button className="lg:hidden navbar-burger pr-[15px] md:pr-0" type="button">
              <svg width="32" height="16" viewBox="0 0 44 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <title>Navbar Icon</title>
                <rect width="24" height="2" rx="1" fill="black" />
                <rect y="14" width="12" height="1.5" rx="1" fill="black" />
              </svg>
            </button>
            <div className="hidden lg:flex w-[55%] items-center justify-between">
              <a className="leading-snug block items-center" href="/">
                Design
                <svg id="SvgjsSvg1011" width="8" height="8" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnssvgjs="http://svgjs.com/svgjs" className="ml-3 relative inline-block">
                  <defs id="SvgjsDefs1012" />
                  <g id="SvgjsG1013">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="8" height="8">
                      <title>Navbar Icon</title>
                      <rect width="16.15" height="16.15" x="3.92" y="3.92" data-name="49. Box, design, geometry, square, stop" rx=".9" fill="#82caaa" className="color000 svgShape" />
                    </svg>
                  </g>
                </svg>
                <span className="leading-none block">That Speaks</span>
              </a>
              <a className="inline-block menu_menu_link flex items-center leading-none" href="/about">
                About
                <svg id="SvgjsSvg1011" width="8" height="8" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnssvgjs="http://svgjs.com/svgjs" className="ml-2 relative top-1">
                  <title>Navbar Icon</title>
                  <defs id="SvgjsDefs1012" />
                  <g id="SvgjsG1013">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="8" height="8">
                      <title>Navbar Icon</title>
                      <rect width="16.15" height="16.15" x="3.92" y="3.92" data-name="49. Box, design, geometry, square, stop" rx=".9" fill="#82caaa" className="color000 svgShape" />
                    </svg>
                  </g>
                </svg>
              </a>
              <a className="inline-block menu_menu_link flex items-center leading-none" href="/work">
                Work
                <svg id="SvgjsSvg1011" width="8" height="8" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnssvgjs="http://svgjs.com/svgjs" className="ml-2 relative top-1">
                  <title>Navbar Icon</title>
                  <defs id="SvgjsDefs1012" />
                  <g id="SvgjsG1013">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="8" height="8">
                      <title>Navbar Icon</title>
                      <rect width="16.15" height="16.15" x="3.92" y="3.92" data-name="49. Box, design, geometry, square, stop" rx=".9" fill="#82caaa" className="color000 svgShape" />
                    </svg>
                  </g>
                </svg>
              </a>
            </div>
            <a className="hidden lg:flex inline-block menu_menu_link flex items-center leading-none group" href="/contact">
              Contact
              <svg
                width="16px"
                height="16px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 relative bottom-1 [transition:transform_0.3s_ease-out] group-hover:translate-x-[3px] group-hover:translate-y-[-3px]"
                fill="none"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Navbar Icon</title>
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
