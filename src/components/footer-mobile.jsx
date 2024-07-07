"use client";

import Image from "next/image";
import React from "react";

const FooterMobile = () => {
  return (
    <>
      <section id="FooterMobile" className="block md:hidden">
        <div className="bg-[#2a357a] text-[#fff] h-screen py-10 px-4">
          <div className="flex flex-col items-center">
            <div className="footer-mobile__menu">
              <ul className="[list-style:none] p-0 m-0">
                <li className="mb-[35px]">
                  <span className="text-[20px]">Let&apos;s Talk</span>
                </li>
                <li className="mb-[35px]">
                  <span className="text-[36px] font-medium leading-[123%] underline">
                    Hello@flaeup.co
                  </span>
                </li>
                <li className="mb-[35px]">
                  <span className="flex text-[20px]">Phone Contact</span>
                  <a
                    href="wa.me/6285255323308"
                    className="underline text-[20px]"
                  >
                    +62-852-5532-3308
                  </a>
                </li>
                <li className="mb-[35px]">
                  <span className="text-[20px]">
                    Join us and Subscribe to our Newsletter
                  </span>
                  <input
                    className="w-full border-b-2 border-white mt-[10px] bg-transparent"
                    type="email"
                    placeholder="Email Address"
                  />
                  <button
                    className="inline-block -ml-[30px] w-auto py-4 leading-none"
                    type="submit"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
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
                <li className="mb-[35px]">
                  <a
                    className="inline-flex px-[20px] py-[10px] text-[18px] border-[1px] border-[solid] border-[#fff] rounded-[30px] no-underline text-[#fff] [transition:background-color_0.3s] hover:bg-[#fff] hover:text-[#2a357a]"
                    href="https://www.instagram.com/flaeup"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Instagram</span>
                  </a>
                </li>
                <li className="mb-[35px]">
                  <a href="" className="text-[18px] text-[#fff] no-underline">
                    Term of use
                  </a>
                </li>
                <li className="mb-[35px]">
                  <a href="" className="text-[18px] text-[#fff] no-underline">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-[20px] text-[20px] text-[#fff]">
            <p>
              Copyright © 2023 Flaeup. <br />
              All rights reserved.
            </p>
          </div>
          <div className="max-w-full max-h-full mt-[40px]">
            <Image
              src="/images/logos/Logo(White).png"
              alt="Logo Footer"
              width={600}
              height={600}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default FooterMobile;
