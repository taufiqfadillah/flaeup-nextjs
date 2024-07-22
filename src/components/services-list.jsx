import React from "react";
import AnimatedTextParagraph from "@/libs/AnimatedTextParagraph.jsx";

const ServicesList = () => {
  return (
    <>
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-4">{/* Kolom Kiri */}</div>
          <div className="md:col-span-8 pb-28">
            <div className="text-xl text-black md:text-[32px] md:text-left leading-[150%] tracking-[0.32px]">
              <AnimatedTextParagraph
                text="Explore our dynamic design hub, where you can delve into our
                extensive range of services, highlighting our versatility and
                innovative adaptability."
              />
            </div>
            <a
              className="relative group block md:flex pb-4 mb-16 mt-16 items-center border-b border-black"
              href="/capabilities/branding"
            >
              <div className="md:mb-8 xl:mb-0">
                <h3 className="text-3xl text-black md:text-5xl inline-block md:pb-2 hover:underline transition duration-150">
                  Branding
                </h3>
              </div>
              <div className="hidden md:block max-w-md md:mb-8 text-right xl:mb-0 ml-auto xl:mr-20"></div>
              <div className="text-right md:ml-auto">
                <span className="inline-block group-hover:rotate-45 transform transition duration-100">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 33 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30 3L3 30"
                      stroke="black"
                      strokeWidth="4.3875"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M30 27.758V3H5.24196"
                      stroke="black"
                      strokeWidth="4.3875"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
              </div>
            </a>

            <a
              className="relative group block md:flex pb-4 mb-16 mt-16 items-center border-b border-black"
              href="/capabilities/retouching"
            >
              <div className="md:mb-8 xl:mb-0">
                <h3 className="text-3xl text-black md:text-5xl inline-block md:pb-2 hover:underline transition duration-150">
                  Retouching
                </h3>
              </div>
              <div className="hidden md:block max-w-md md:mb-8 text-right xl:mb-0 ml-auto xl:mr-20"></div>
              <div className="text-right md:ml-auto">
                <span className="inline-block group-hover:rotate-45 transform transition duration-100">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 33 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30 3L3 30"
                      stroke="black"
                      strokeWidth="4.3875"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M30 27.758V3H5.24196"
                      stroke="black"
                      strokeWidth="4.3875"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
              </div>
            </a>
            <a
              className="relative group block md:flex pb-4 mb-16 mt-16 items-center border-b border-black"
              href="/capabilities/uiuxdesign"
            >
              <div className="md:mb-8 xl:mb-0">
                <h3 className="text-3xl text-black md:text-5xl inline-block md:pb-2 hover:underline transition duration-150">
                  UI/UX Design
                </h3>
              </div>
              <div className="hidden md:block max-w-md md:mb-8 text-right xl:mb-0 ml-auto xl:mr-20"></div>
              <div className="text-right md:ml-auto">
                <span className="inline-block group-hover:rotate-45 transform transition duration-100">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 33 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30 3L3 30"
                      stroke="black"
                      strokeWidth="4.3875"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M30 27.758V3H5.24196"
                      stroke="black"
                      strokeWidth="4.3875"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
              </div>
            </a>
            <a
              className="relative group block md:flex pb-4 mb-16 mt-16 items-center border-b border-black"
              href="/capabilities/packaging"
            >
              <div className="md:mb-8 xl:mb-0">
                <h3 className="text-3xl text-black md:text-5xl inline-block md:pb-2 hover:underline transition duration-150">
                  Packaging
                </h3>
              </div>
              <div className="hidden md:block max-w-md md:mb-8 text-right xl:mb-0 ml-auto xl:mr-20"></div>
              <div className="text-right md:ml-auto">
                <span className="inline-block group-hover:rotate-45 transform transition duration-100">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 33 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30 3L3 30"
                      stroke="black"
                      strokeWidth="4.3875"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M30 27.758V3H5.24196"
                      stroke="black"
                      strokeWidth="4.3875"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesList;
