"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";

const Brand = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const items = slider.querySelectorAll(".main-brand-slider");
    const visibleItems = 7;

    for (let i = 0; i < visibleItems; i++) {
      const clone = items[i].cloneNode(true);
      slider.appendChild(clone);
    }

    const handleMouseOut = () => {
      slider.style.animation = "slide-left 10s linear infinite";
    };

    slider.addEventListener("mouseout", handleMouseOut);

    // Clean-up
    return () => {
      if (slider) {
        slider.removeEventListener("mouseout", handleMouseOut);
      }
      // Remove cloned items
      items.forEach((item, index) => {
        if (index >= items.length - visibleItems) {
          slider.removeChild(item);
        }
      });
    };
  }, []);

  return (
    <>
      {/* <!-- Logo Brand --> */}
      <section className="py-12 md:py-20" id="logo-brand-slider">
        <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
          <div className="brand-style overflow-hidden relative w-full">
            <div className="container-brand-slider flex" ref={sliderRef}>
              <div className="flex justify-center items-center main-brand-slider">
                <Image
                  src="/images/client/Client Logo-01.svg"
                  alt="Logo 1"
                  className="brand-image"
                  height={250}
                  width={250}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="flex justify-center items-center main-brand-slider">
                <Image
                  src="/images/client/Client Logo-02.svg"
                  alt="Logo 2"
                  className="brand-image"
                  height={250}
                  width={250}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="flex justify-center items-center main-brand-slider">
                <Image
                  src="/images/client/Client Logo-03.svg"
                  alt="Logo 3"
                  className="brand-image"
                  height={250}
                  width={250}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="flex justify-center items-center main-brand-slider">
                <Image
                  src="/images/client/Client Logo-04.svg"
                  alt="Logo 4"
                  className="brand-image"
                  height={250}
                  width={250}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="flex justify-center items-center main-brand-slider">
                <Image
                  src="/images/client/Client Logo-05.svg"
                  alt="Logo 5"
                  className="brand-image"
                  height={250}
                  width={250}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="flex justify-center items-center main-brand-slider">
                <Image
                  src="/images/client/Client Logo-06.svg"
                  alt="Logo 6"
                  className="brand-image"
                  height={250}
                  width={250}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="flex justify-center items-center main-brand-slider">
                <Image
                  src="/images/client/Client Logo-07.svg"
                  alt="Logo 7"
                  className="brand-image"
                  height={250}
                  width={250}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Brand;
