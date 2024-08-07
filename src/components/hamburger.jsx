'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';

const Hamburger = () => {
  useEffect(() => {
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    const toggleMenu = () => {
      for (const menuItem of menu) {
        menuItem.classList.toggle('hidden');
      }
    };

    for (const burgerItem of burger) {
      burgerItem.addEventListener('click', toggleMenu);
    }

    for (const closeItem of close) {
      closeItem.addEventListener('click', toggleMenu);
    }

    for (const backdropItem of backdrop) {
      backdropItem.addEventListener('click', toggleMenu);
    }

    // Clean up event listeners on component unmount
    return () => {
      for (const burgerItem of burger) {
        burgerItem.removeEventListener('click', toggleMenu);
      }

      for (const closeItem of close) {
        closeItem.removeEventListener('click', toggleMenu);
      }

      for (const backdropItem of backdrop) {
        backdropItem.removeEventListener('click', toggleMenu);
      }
    };
  }, []);

  return (
    <section>
      <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-md z-50">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-50" />
        <nav className="relative flex flex-col py-6 px-4 w-full h-full bg-white overflow-y-auto">
          <div className="flex mb-auto items-center">
            <a className="inline-block mr-auto" href="/">
              <Image className="relative h-4" src="/images/logos/Logo(Blue).png" alt="Logo" height={42} width={72} style={{ width: '100%', height: 'auto' }} />
            </a>
            <a className="navbar-close" href="/">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <title>close icon</title>
                <path d="M6 18L18 6M6 6L18 18" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
          <div className="py-12 mb-auto">
            <ul className="flex-col">
              <li className="mb-6">
                <a className="inline-block text-black text-5xl font-medium leading-[50px]" href="/">
                  Home
                </a>
              </li>
              <li className="mb-6">
                <a className="inline-block text-black text-5xl font-medium leading-[50px]" href="/about">
                  About
                </a>
              </li>
              <li className="mb-6">
                <a className="inline-block text-black text-5xl font-medium leading-[50px]" href="/work">
                  Work
                </a>
              </li>
              <li>
                <a className="link-container flex inline-block text-black text-5xl font-medium leading-[50px]" href="/contact">
                  Contact
                  <svg width="16px" height="16px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="ml-2 relative bottom-1 svg-move" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <title>Arrow Icon</title>
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-6 gap-4">
            <div className="col-start-1 col-end-3">
              <p className="block px-1 py-1 font-extralight text-xs text-black text-left">Desain That Speaks</p>
            </div>
            <div className="col-end-7 col-span-2">
              <p className="block px-1 py-1 font-extralight text-xs text-black text-right">
                © Flaeup 2024
                <br />
                ALL RIGHTS RESERVED
              </p>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Hamburger;
