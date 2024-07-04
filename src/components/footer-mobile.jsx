"use client";

import Image from "next/image";
import React from "react";

const FooterMobile = () => {
  return (
    <>
      <section id="FooterMobile">
        <div className="footer-mobile py-5 px-8">
          <div className="footer-mobile__content">
            <div className="footer-mobile__menu">
              <ul>
                <li>
                  <span className="footer-mobile__letstalk">Let's Talk</span>
                </li>
                <li>
                  <span className="footer-mobile__hello underline">
                    Hello@flaeup.co
                  </span>
                </li>
                <li>
                  <span className="flex footer-mobile__phone">
                    Phone Contact
                  </span>
                  <a
                    href="wa.me/6285255323308"
                    className="footer-mobile__number"
                  >
                    +62-852-5532-3308
                  </a>
                </li>
                <li>
                  <span className="footer-mobile__subscribe">
                    Join us and Subscribe to our Newsletter
                  </span>
                  <input
                    className="footer-mobile__input"
                    type="email"
                    placeholder="Email Address"
                  />
                  <button
                    className="inline-block footer-mobile__button w-auto py-4 leading-none"
                    type="submit"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="29"
                      height="22"
                      viewBox="0 0 29 22"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_20_174)">
                        <path
                          d="M17.79 0L16.38 1.41L24.96 10H0V12H24.96L16.38 20.58L17.79 22L28.79 11L17.79 0Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_20_174">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </li>
                <li>
                  <a
                    className="footer-mobile__socmed"
                    href="https://www.instagram.com/flaeup"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a href="" className="footer-mobile__term">
                    Term of use
                  </a>
                </li>
                <li>
                  <a href="" className="footer-mobile__privacy">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-mobile__copyright">
            <p>
              Copyright © 2023 Flaeup. <br />
              All rights reserved.
            </p>
          </div>
          <div className="footer-mobile__logo">
            <Image
              src="/images/logos/Logo(White).png"
              alt="Logo Footer"
              width={1024}
              height={1024}
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default FooterMobile;
