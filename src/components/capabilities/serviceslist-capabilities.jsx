import React from 'react';

const ServicesListCapabilites = () => {
  return (
    <>
      <div className="max-[1024px]:relative max-[1024px]:translate-y-[0%] capabilities-wrapper-all relative w-full bottom-0" id="main-list-cap">
        {[
          { name: 'Branding', id: 'branding' },
          { name: 'Retouching', id: 'retouching' },
          { name: 'UI/UX Design', id: 'uiuxdesign' },
          { name: 'Packaging', id: 'packaging' },
        ].map((capability) => (
          <div key={capability.id} className="py-[2rem] flex flex-wrap items-center justify-between overflow-hidden group" style={{ borderBottom: '3px solid black' }}>
            <a className="w-[90%]" href={`/capabilities/${capability.name.replace(/\s+/g, '').replace('/', '').toLowerCase()}`}>
              <p className="max-[1024px]:opacity-100 max-[1024px]:translate-x-[0%] max-[600px]:text-[2.2rem] text-[#080808] max-[1024px]:text-[2.2rem] max-[1750px]:text-[2.5rem] text-[2.6vw] text-normal font-normal leading-[100%]">
                {capability.name}
              </p>
            </a>
            <div className="w-[10%] flex justify-end">
              <a aria-label={`Check our ${capability.name} capabilities`} className="transform transition duration-100 mr-2 group-hover:rotate-45" href={`/capabilities/${capability.name.toLowerCase()}`}>
                <svg width="24" height="24" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby={`arrowIconTitle${capability.id}`}>
                  <title id="Icon Arrow">Arrow icon</title>
                  <path d="M30 3L3 30" stroke="black" strokeWidth="4.3875" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M30 27.758V3H5.24196" stroke="black" strokeWidth="4.3875" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServicesListCapabilites;
