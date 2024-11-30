import React from 'react';

const ServicesList = () => {
  return (
    <>
      <div className="bg-[#82CAAA] container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-4" />
          <div className="md:col-span-8 pb-28">
            <div className="text-xl text-black md:text-[32px] md:text-left leading-[150%] tracking-[0.32px] md:pb-10">
              Explore our dynamic design hub, where you can delve into our extensive range of services, highlighting our versatility and innovative adaptability.
            </div>
            <div className="relative w-full bottom-0 capabilities-wrapper-all max-[1024px]:relative max-[1024px]:translate-y-[0%] pt-2 md:pt-10" id="main-list-cap">
              {['Branding', 'Retouching', 'UI/UX Design', 'Packaging'].map((capability) => (
                <div key={capability} className="py-[3rem] flex flex-wrap items-center justify-between overflow-hidden group" style={{ borderBottom: '3px solid black' }}>
                  <a className="w-[90%]" href={`/capabilities/${capability.replace(/\s+/g, '').replace('/', '').toLowerCase()}`}>
                    <p className="text-[#080808] text-normal font-normal leading-[100%] transition duration-150 max-[600px]:text-[2.2rem] max-[1024px]:text-[2.2rem] text-[2.6vw] opacity-100 translate-x-0">{capability}</p>
                  </a>
                  <div className="w-[10%] flex justify-end">
                    <a aria-label={`Check our ${capability} capabilities`} className="transform transition duration-100 mr-2 group-hover:rotate-45" href={`/capabilities/${capability.replace(/\s+/g, '').replace('/', '').toLowerCase()}`}>
                      <svg width="24" height="24" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <title>Arrow Icon</title>
                        <path d="M30 3L3 30" stroke="black" strokeWidth="4.3875" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M30 27.758V3H5.24196" stroke="black" strokeWidth="4.3875" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesList;
