'use client';

import Image from 'next/image';
import React from 'react';

const FooterMobile = () => {
  return (
    <section className="m-footer max-[1024px]:flex block md:hidden">
      <footer
        id="footer-mobile"
        className="footer_footer_wrapper__JrgAI footer-wrapper max-[600px]:px-[1.5rem] max-[1024px]:translate-y-[0%] max-[1024px]:relative max-[1024px]:min-h-[auto] bg-[#2a357a] px-[2rem] pt-[3rem] pb-[2rem] mt-[0rem] flex flex-wrap w-full min-h-screen z-[50] translate-y-[100%]"
      >
        <div className="max-[600px]:w-[100%] max-[768px]:w-[60%] max-[1024px]:w-[70%] max-[1750px]:w-[70%] w-[70%] flex flex-wrap flex-col justify-between">
          <div className="footer-left-top">
            <div className="footer_lets_talk">
              <p className="max-[600px]:text-[1.25rem] text-white text-normal max-[1750px]:text-[1.063rem] text-[1.25rem] leading-normal font-medium ">Let&apos;s Talk</p>
              <p className="footer_email_footer max-[600px]:mt-[0.5rem] max-[600px]:text-[2.5rem] text-white text-normal text-[3rem] leading-normal font-normal mt-[1rem] no-underline">
                <span className="email-to-copy">hello@flaeup.co</span>
                <span className="footer_email_footer_line" />
                <span className="footer_email_footer_line footer_two" />
                <span className="footer_email_footer_tooltip text-[1.2rem] email-tooltip">Click to copy</span>
              </p>
            </div>
            <div className="max-[600px]:mt-[0px] max-[768px]:flex-col flex flex-row mt-[48px]">
              <div className="max-[600px]:mt-[40px] footer_job_applications mb-6">
                <p className="max-[600px]:text-[1.25rem] text-white max-[1750px]:text-[1.063rem] text-[1.25rem] leading-normal font-medium ">Job Applications </p>
                <p className="max-[600px]:text-[1.25rem] text-[#F7F7F7] max-[1750px]:text-[1.063rem] text-[1.25rem] leading-[100%] font-light mt-[12px]">
                  <a href="mailto:apply@flaeup.co">apply@flaeup.co</a>
                </p>
              </div>
              <div className="max-[600px]:mt-[0px] footer_job_applications max-[768px]:pt-[1rem] max-[768px]:pl-[0rem] max-[1024px]:pl-[2rem] pl-[4rem] mb-6">
                <p className="max-[600px]:text-[1.25rem] text-white max-[1750px]:text-[1.063rem] text-[1.25rem] leading-normal font-medium ">Address </p>
                <p className="max-[600px]:text-[1.25rem] text-[#F7F7F7] max-[1750px]:text-[1.063rem] text-[1.25rem] leading-[100%] font-light mt-[12px]">
                  Komp Depart Agama, Cengkareng, <br /> West Jakarta, DKI Jakarta 11710.
                </p>
              </div>
              <div className="max-[600px]:mt-[0px] footer_job_applications max-[768px]:pt-[1rem] max-[768px]:pl-[0rem] max-[1024px]:pl-[2rem] pl-[4rem]">
                <p className="max-[600px]:text-[1.25rem] text-white max-[1750px]:text-[1.063rem] text-[1.25rem] leading-normal font-medium ">Phone Number</p>
                <p className="max-[600px]:text-[1.25rem] text-[#F7F7F7] max-[1750px]:text-[1.063rem] text-[1.25rem] leading-[100%] font-light mt-[12px] underline">
                  <a href="tel:+6289602505228">+62-896-0250-5228</a>
                </p>
              </div>
            </div>
            <div className="footer_join_us mt-[48px]">
              <p className="max-[600px]:text-[1.25rem] text-white max-[1750px]:text-[1.063rem] text-[1.25rem] leading-normal font-medium ">Join us and Suscribe to our Newsletter!</p>
            </div>
            <div className="max-[600px]:mt-[20px] footer_join_input footer_footer_join_input mt-[12px]">
              <form className="max-[600px]:w-full">
                <input type="email" id="footer-mobile-mce-EMAIL" required="" placeholder="Email Address" className="rounded-[0px]" name="email" defaultValue="" />
                <p />
                <button type="submit" aria-label="Submit Form Button">
                  <svg className="arrow-form" width={24} height={25} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <title>Submit Icon</title>
                    <path d="M1.00032 12.8478L21.613 12.8478" stroke="#F7F7F7" strokeWidth="1.53425" strokeLinecap="square" strokeLinejoin="round" />
                    <path d="M11.8486 2L22.6974 12.8488L11.8486 23.6975" stroke="#F7F7F7" strokeWidth="1.53425" strokeLinecap="square" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="max-[600px]:justify-start max-[600px]:flex max-[600px]:text-center max-[600px]:mt-[3rem]  max-[600px]:w-[100%] max-[768px]:w-[20%] max-[1024px]:w-[15%] max-[1750px]:w-[15%] w-[15%] footer_footer_info_socials items-end">
          <ul>
            <li>
              <a href="https://www.instagram.com/flaeup" target="_BLANK" rel="noopener">
                <p>INSTAGRAM</p>
              </a>
            </li>
            <li>
              <a href="https://x.com/@flaeupstudio" target="_BLANK" rel="noopener">
                <p>X</p>
              </a>
            </li>
            <li>
              <a href="https://dribbble.com/flaeup" target="_BLANK" rel="noopener">
                <p>Dribbble</p>
              </a>
            </li>
          </ul>
        </div>
        <div className="max-[600px]:justify-start max-[600px]:flex max-[600px]:mt-[3rem] max-[600px]:w-[100%] max-[768px]:w-[20%] max-[1024px]:w-[15%] max-[1750px]:w-[15%] flex flex-col justify-between items-end text-white">
          <div className="max-[600px]:uppercase max-[600px]:mb-[1rem] max-[600px]:w-full max-[600px]:items-start max-[600px]:flex-col max-[600px]:flex undefined footer_inner_info">
            <a href="/terms-and-conditions">
              <p className="max-[600px]:mt-[1rem] footer_info_wrapper mt flex mt-[12px]">Terms &amp; Conditions</p>
            </a>
          </div>
          <div className="max-[600px]:w-full max-[600px]:items-start text-right flex justify-end flex-col items-end">
            <p className=" max-[600px]:w-full max-[600px]:items-start flex mt mt-[1.5rem]">© FLAEUP 2024</p>
            <p className=" max-[600px]:w-full max-[600px]:items-start flex mt-[0.5rem]">ALL RIGHTS RESERVED</p>
          </div>
          <div className="max-[600px]:w-full max-[600px]:h-auto max-[600px]:flex footer-left-bottom">
            <div className="w-full mt-[48px]">
              <Image src="/images/logos/Logo(White).png" alt="Logo Footer" width={400} height={600} priority />
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default FooterMobile;
