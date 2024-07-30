'use client';

import React, { useRef, useEffect, useState, useCallback, lazy } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import useStickySection from '@/hooks/useStickySection.jsx';
import { useForm } from '@formspree/react';
const CopyToClipboardLink = lazy(() => import('@/components/ui/CopyToClipboard.tsx'));
const ToastDemo = lazy(() => import('@/components/ui/Toast.jsx'));

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useStickySection();

  // Use refs for GSAP animations
  const eRef = useRef(null);
  const tRef = useRef(null);
  const aRef = useRef(null);
  const iRef = useRef(null);

  const [state, handleSubmit] = useForm('xvgpzrwd');
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    about: '',
    selectedValues: [], // Change from string to array
  });

  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState({
    open: false,
    message: '',
    type: '',
  });

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (value.trim() !== '') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: false,
      }));
    }
  }, []);

  // Update button click handler to toggle selection
  const handleButtonClick = useCallback((value) => {
    setFormData((prevData) => {
      const newSelectedValues = prevData.selectedValues.includes(value) ? prevData.selectedValues.filter((val) => val !== value) : [...prevData.selectedValues, value];
      return {
        ...prevData,
        selectedValues: newSelectedValues,
      };
    });

    setErrors((prevErrors) => ({
      ...prevErrors,
      selectedValues: false,
    }));
  }, []);

  const validateForm = () => {
    const newErrors = {
      name: formData.name.trim() === '',
      lastname: formData.lastname.trim() === '',
      email: !/\S+@\S+\.\S+/.test(formData.email),
      about: formData.about.trim() === '',
      selectedValues: formData.selectedValues.length === 0,
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        await handleSubmit({
          ...formData,
          _subject: 'New submission from your site',
        });

        setShowToast({
          open: true,
          message: 'Form submitted successfully!',
          type: 'success',
        });
        setFormData({
          name: '',
          lastname: '',
          email: '',
          about: '',
          selectedValues: [],
        });
      } catch (error) {
        setShowToast({
          open: true,
          message: 'Something went wrong. Please try again.',
          type: 'error',
        });
      }
    }
  };

  // Initial animation setup
  const triggerInitialAnimation = useCallback(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
    tl.fromTo(eRef.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo(tRef.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1 }, '0.1')
      .to(iRef.current, { x: 0, duration: 0.25 }, '-=0.05')
      .fromTo(aRef.current, { x: '2vw' }, { x: 0 }, 0.7)
      .fromTo(
        '#vid-contact',
        { width: '0vw' },
        {
          width: '17vw',
          marginLeft: '3vw',
          marginRight: '3vw',
          ease: 'power4.out',
          transformOrigin: 'center center',
        },
        '<0.01'
      )
      .to('#connect-text .inner', { y: 0, opacity: 1, stagger: 0.1 }, 0.2);
  }, []);

  const triggerCollaborateAnimation = useCallback(() => {
    gsap.timeline({
      scrollTrigger: {
        once: true,
        trigger: '.collaborate__section',
        end: 'top 60%',
        ease: 'none',
        onLeave: () => {
          gsap.to('.animation-text-one', { y: 0, opacity: 1 });
          gsap.to('.animation-text-two', { y: 0, opacity: 1, delay: 0.2 });
        },
      },
    });
  }, []);

  const FooterController = useCallback(() => {
    gsap
      .timeline({
        scrollTrigger: {
          ease: 'none',
          trigger: '.collaborate__section',
          start: 'top',
          pin: false,
          scrub: 0,
          once: false,
        },
      })
      .to('#footer-desktop', { y: '0%' }, 0);
  }, []);

  useEffect(() => {
    if (window.screen.width > 1024) {
      FooterController();
      triggerCollaborateAnimation();
      setTimeout(() => {
        triggerInitialAnimation();
      }, 700);
      gsap.timeline({
        scrollTrigger: {
          ease: 'power4.out',
          trigger: '.contact__options',
          pin: false,
          scrub: 0,
          once: true,
          end: 'top 50%',
          onEnter: () => {
            setTimeout(() => {
              gsap.to('.contact__options .inner', {
                ease: 'power4.out',
                y: '0%',
                opacity: 1,
                stagger: 0.2,
              });
            }, 500);
          },
        },
      });
    }
  }, [FooterController, triggerCollaborateAnimation, triggerInitialAnimation]);

  return (
    <>
      <section className="pr-[32px] pl-[32px]">
        <div className="header__section max-[1024px]:hidden block desktop__heading h-screen flex flex-col justify-between px-[2rem]">
          <div className="flex-1 flex items-center">
            <h1 className="max-[1024px]:text-[7rem] max-[1750px]:text-[6rem] text-[6rem] leading-[120%] font-normal opacity-0 flex flex-col mb-10" ref={eRef}>
              <span>We Transform Your</span>
              <span>Ideas into Tangible</span>
              <span ref={tRef}>Results.</span>
            </h1>
          </div>
          <div className="w-[100%] flex">
            <div className="w-[50%]">
              <h2 id="connect-text" className="leading-[120%] max-[1200px]:text-[1.5rem] max-[1750px]:text-[2rem] text-[2vw] font-[400] flex flex-col pb-10 justify-end">
                <span className="overflow-hidden">
                  <span className="flex opacity-0 translate-y-[100%] inner">Collaborate with our team</span>
                </span>
                <span className="overflow-hidden">
                  <span className="flex opacity-0 translate-y-[100%] inner">to animate your ideas.</span>
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="max-[1024px]:flex header__section hidden flex-wrap mobile__heading">
          <div className="w-[100%] pt-[7rem]">
            <h1 className="max-[375px]:text-[2rem] max-[600px]:text-[3rem] text-[3rem] leading-[120%] font-[500]">
              We Transform Your Ideas <br />
              into Tangible <br />
            </h1>
            <div className="max-[375px]:text-[2rem] max-[600px]:text-[3rem] text-[3rem] leading-[120%] font-[500]">
              <h1>Vision to Result</h1>
            </div>
          </div>
          <div className="w-[100%]">
            <h2 className="max-[600px]:my-[2.5rem] max-[600px]:text-[1.5rem] max-[768px]:my-[4rem] max-[768px]:text-[3rem] my-[5rem] text-[3.3vw] leading-[120%] font-[400]">
              Collaborate with our team <br className="hidden lg:inline-block" /> to animate your ideas.
            </h2>
          </div>
        </div>
        <div className="contact__options mb-[65px] lg:mb-52 px-0 md:px-[2rem] mt-10 md:mt-20">
          <div className="flex flex-wrap lg:pt-[35px] lg:pb-[70px] contact__email ">
            <div className="max-[1024px]:w-[100%] max-[1750px]:w-[35%] w-[55%]">
              <h3 className="max-[768px]:text-[1rem] pt-[30px] lg:pt-[45px] pb-[20px] lg:pb-[0] font-[400] max-[600px]:text-[1rem] max-[1750px]:text-[1.063rem] text-[1vw] uppercase leading-[120%] overflow-hidden">
                <span
                  className="flex max-[1024px]:translate-y-[0] max-[1024px]:opacity-100 translate-y-[50px] opacity-0 inner"
                  style={{
                    translate: 'none',
                    rotate: 'none',
                    scale: 'none',
                    opacity: 1,
                    transform: 'translate(0px, 0%)',
                  }}
                >
                  Let&apos;s Collab
                </span>
              </h3>
            </div>
            <div className="max-[1024px]:justify-start max-[1024px]:text-left max-[1024px]:w-[100%] max-[1750px]:w-[65%] w-[45%] pb-[30px] lg:pb-[0] flex ">
              <form className="form_form_wrapper" onSubmit={handleFormSubmit}>
                <div className="flex w-full">
                  <div className="max-[600px]:w-full w-[50%] flex flex-col justify-start relative">
                    <input className="form_name" type="text" id="name" placeholder="Name*" name="name" value={formData.name} onChange={handleInputChange} required />
                    {errors.name && <p className="max-[1750px]:text-[0.675rem] text-[0.675vw] text-[#db4e43] absolute bottom-[-1.5rem]">Please add a valid name</p>}
                  </div>
                  <div className="max-[600px]:w-full w-[50%] flex flex-col justify-end items-end relative">
                    <input className="form_lastname" type="text" id="lastname" placeholder="Last Name*" name="lastname" value={formData.lastname} onChange={handleInputChange} required />
                    {errors.lastname && <p className="max-[1750px]:text-[0.675rem] text-[0.675vw] text-[#db4e43] absolute bottom-[-1.5rem]">Please add a valid last name</p>}
                  </div>
                </div>
                <div className="flex flex-col w-full py-[2.5rem] relative">
                  <input className="form_email" type="email" id="email" placeholder="Email*" name="email" value={formData.email} onChange={handleInputChange} required />
                  {errors.email && <p className="max-[1750px]:text-[0.675rem] text-[0.675vw] text-[#db4e43] absolute bottom-[01rem]">Please add a valid email</p>}
                </div>
                <div className="flex flex-col w-full relative">
                  <textarea className="form_about" type="text" name="about" id="about" placeholder="Let us know about your project*" value={formData.about} onChange={handleInputChange} required />
                  {errors.about && <p className="max-[1750px]:text-[0.675rem] text-[0.675vw] text-[#db4e43] absolute bottom-[-1.5rem]">Please let us know a bit more about your project</p>}
                </div>
                <div className="flex w-full relative">
                  <div className="flex w-full flex-wrap form_buttons_wrapper">
                    {['Branding', 'UXUI', 'Social Media', 'Design', 'Copywriting', 'Strategy', 'Packaging', 'Retouching', 'Product Design', 'Web Design'].map((value) => (
                      <button key={value} type="button" className={`form_button_pill cursor-pointer ${formData.selectedValues.includes(value) ? 'form_active' : ''}`} data-value={value} onClick={() => handleButtonClick(value)}>
                        {value}
                      </button>
                    ))}
                  </div>
                  {errors.selectedValue && <p className="max-[1750px]:text-[0.675rem] text-[0.675vw] text-[#db4e43] absolute bottom-[-1.5rem]">Select an area related to your project</p>}
                </div>

                <button
                  type="submit"
                  className="max-[600px]:text-[2rem] max-[768px]:text-[2.25rem] footer_email_footer footer_contact leading-[1] font-[400] max-[1200px]:text-[2.5rem] max-[1750px]:text-[3rem] text-[3vw] cursor-pointer no-underline mt-[3rem]"
                  onClick={handleFormSubmit}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleFormSubmit(e);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                >
                  <span
                    className="flex max-[1024px]:translate-y-[0] max-[1024px]:opacity-100 translate-y-[50px] opacity-0 inner"
                    style={{
                      translate: 'none',
                      rotate: 'none',
                      scale: 'none',
                      opacity: 1,
                      transform: 'translate(0px, 0%)',
                    }}
                  >
                    <span className="undefined">Contact us</span>
                    <span className="footer_email_footer_line" />
                    <span className="footer_email_footer_line footer_two" />
                    <span className="footer_email_footer_tooltip text-[1.2rem] email-tooltip">Click to submit</span>
                  </span>
                  <span
                    className="flex max-[1024px]:translate-y-[0] max-[1024px]:opacity-100 translate-y-[50px] opacity-0 inner"
                    style={{
                      translate: 'none',
                      rotate: 'none',
                      scale: 'none',
                      opacity: 1,
                      transform: 'translate(0px, 0%)',
                    }}
                  >
                    <svg className="w-[48px] h-[48px] max-[600px]:w-[24px] max-[600px]:h-[24px] pl-1 md:pl-0" viewBox="0 0 48 48" fill="none">
                      <title>Submit Icon</title>
                      <path d="M13.9978 40L32.9978 21" stroke="#080808" strokeWidth={4} strokeLinecap="square" strokeLinejoin="round" />
                      <path d="M13.9978 20.001H33.9978V40.001" stroke="#080808" strokeWidth={4} strokeLinecap="square" />
                    </svg>
                  </span>
                </button>
              </form>
              <ToastDemo open={showToast.open} message={showToast.message} type={showToast.type} onClose={() => setShowToast({ ...showToast, open: false })} />
            </div>
          </div>

          <div className="contact__options__second lg:pt-[35px] lg:pb-[70px] contact__email flex flex-wrap border-t border-solid border-1 border-black">
            <div className="max-[1024px]:w-[100%] max-[1750px]:w-[35%] w-[55%]">
              <h3 className="pt-[30px] lg:pt-[45px] pb-[20px] lg:pb-[0] font-[400] max-[600px]:text-[1rem] max-[1750px]:text-[1.063rem] text-[1vw] uppercase leading-[120%] overflow-hidden">
                <span
                  className="flex max-[1024px]:translate-y-[0] max-[1024px]:opacity-100 translate-y-[50px] opacity-0 inner"
                  style={{
                    translate: 'none',
                    rotate: 'none',
                    scale: 'none',
                    opacity: 1,
                    transform: 'translate(0px, 0%)',
                  }}
                >
                  Join Our Team
                </span>
              </h3>
            </div>
            <div className="max-[1024px]:justify-start max-[1024px]:text-left max-[1024px]:w-[100%] max-[1750px]:w-[65%] w-[45%] pb-[30px] lg:pb-[0] flex ">
              <div className="max-[600px]:text-[3rem] max-[768px]:text-[3.25rem] footer_email_footer footer_contact leading-[1] font-[400] max-[1200px]:text-[3rem] max-[1750px]:text-[4rem] text-[3.3vw] cursor-react no-underline">
                <CopyToClipboardLink
                  className="flex max-[1024px]:translate-y-[0] max-[1024px]:opacity-100 translate-y-[50px] opacity-0 inner"
                  href="mailto:apply@flaeup.co"
                  style={{
                    translate: 'none',
                    rotate: 'none',
                    scale: 'none',
                    opacity: 1,
                    transform: 'translate(0px, 0%)',
                  }}
                >
                  apply@flaeup.co
                </CopyToClipboardLink>
                <span className="footer_email_footer_line email-to-copy" />
                <span className="footer_email_footer_line footer_two" />
              </div>
            </div>
          </div>
          <div className="contact__options__second lg:pt-[35px] lg:pb-[70px] contact__email flex flex-wrap border-t border-solid border-1 border-black" style={{ borderBottom: 'none!important' }}>
            <div className="max-[1024px]:w-[100%] max-[1750px]:w-[35%] w-[55%]">
              <h3 className="pt-[30px] lg:pt-[45px] pb-[20px] lg:pb-[0] font-[400] max-[600px]:text-[1rem] max-[1750px]:text-[1.063rem] text-[1vw] uppercase leading-[120%] overflow-hidden">
                <span
                  className="flex max-[1024px]:translate-y-[0] max-[1024px]:opacity-100 translate-y-[50px] opacity-0 inner"
                  style={{
                    translate: 'none',
                    rotate: 'none',
                    scale: 'none',
                    opacity: 1,
                    transform: 'translate(0px, 0%)',
                  }}
                >
                  Info+
                </span>
              </h3>
            </div>
            <div className="max-[1024px]:justify-start max-[1024px]:text-left max-[1024px]:w-[100%] max-[1750px]:w-[65%] w-[45%] pb-[30px] lg:pb-[0] flex flex-col ">
              <h3 className="pt-[30px] lg:pt-[45px] pb-[20px] lg:pb-[0] font-[400] max-[600px]:text-[1rem] max-[1750px]:text-[1.063rem] text-[1vw] uppercase leading-[120%] overflow-hidden">
                <span
                  className="flex max-[1024px]:translate-y-[0] max-[1024px]:opacity-100 translate-y-[50px] opacity-0 inner"
                  style={{
                    translate: 'none',
                    rotate: 'none',
                    scale: 'none',
                    opacity: 1,
                    transform: 'translate(0px, 0%)',
                  }}
                >
                  Address
                </span>
              </h3>
              <p className="max-[600px]:text-[1.8rem] max-[768px]:mt-[0rem] max-[768px]:text-[2.25rem] footer_email_footer footer_contact leading-[1.5] font-[400] max-[1750px]:text-[2rem] text-[3vw] cursor-react no-underline mt-[1rem]">
                <Link href="#" target="_BLANK">
                  <span
                    className="flex max-[1024px]:translate-y-[0] max-[1024px]:opacity-100 translate-y-[50px] opacity-0 inner"
                    style={{
                      translate: 'none',
                      rotate: 'none',
                      scale: 'none',
                      opacity: 1,
                      transform: 'translate(0px, 0%)',
                    }}
                  >
                    <span className="">
                      Komp Depart Agama, Cengkareng <br /> West Java, DKI Jakarta, 11710.
                    </span>
                  </span>
                </Link>
              </p>
              <h3 className="pt-[30px] lg:pt-[45px] pb-[20px] lg:pb-[0] font-[400] max-[600px]:text-[1rem] max-[1750px]:text-[1.063rem] text-[1vw] uppercase leading-[120%] overflow-hidden ">
                <span
                  className="flex max-[1024px]:translate-y-[0] max-[1024px]:opacity-100 translate-y-[50px] opacity-0 inner"
                  style={{
                    translate: 'none',
                    rotate: 'none',
                    scale: 'none',
                    opacity: 1,
                    transform: 'translate(0px, 0%)',
                  }}
                >
                  Phone Number
                </span>
              </h3>
              <div className="max-[600px]:text-[1.8rem] max-[768px]:mt-[0rem] max-[768px]:text-[2.25rem] leading-[1] font-[400] max-[1750px]:text-[2rem] text-[2vw] cursor-react underline mt-[1rem]">
                <CopyToClipboardLink
                  className="flex max-[1024px]:translate-y-[0] max-[1024px]:opacity-100 translate-y-[50px] opacity-0 inner underline"
                  href="tel:+62-896-0250-5228"
                  style={{
                    translate: 'none',
                    rotate: 'none',
                    scale: 'none',
                    opacity: 1,
                    transform: 'translate(0px, 0%)',
                  }}
                >
                  +62-896-0250-5228
                </CopyToClipboardLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#82CAAA] w-full text-white panel">
        <main
          className="collaborate__section max-[1024px]:py-[5rem] max-[1024px]:h-[auto] justify-center items-center flex"
          style={{
            translate: 'none',
            rotate: 'none',
            scale: 'none',
            inset: '0px auto auto 0px',
            margin: 0,
            maxWidth: 1430,
            width: 'auto',
            maxHeight: 750,
            height: 750,
            padding: 0,
            transform: 'translate(0px, 0px)',
          }}
        >
          {/* Dekstop */}
          <section className="px-0 lg:px-[32px]">
            <div className="header__section max-[1024px]:hidden block desktop__heading">
              <div>
                <h1
                  className="work_design_title__IseCw max-[1024px]:text-[10rem] text-[10vw] leading-[80%] font-medium opacity-0 flex flex-col items-center translate-y-[60px]"
                  style={{
                    translate: 'none',
                    rotate: 'none',
                    scale: 'none',
                    opacity: 1,
                    transform: 'translate(0px, 0px)',
                  }}
                >
                  <div className="flex items-center">
                    <span className="text-center">Let&apos;s</span>
                    <span
                      className="px-[0vw] mx-[1.5vw]"
                      role="img"
                      aria-label="Animation"
                      style={{
                        display: 'inline-block',
                        translate: 'none',
                        rotate: 'none',
                        scale: 'none',
                        transform: 'translate(0px, 0px)',
                      }}
                    >
                      <video
                        id="vid-colaborate"
                        className="w-[20vw] h-[10vw] pl-10 object-cover pointer-events-none"
                        src="/images/video/Homepage Videos.mp4"
                        autoPlay
                        playsInline
                        loop
                        muted
                        style={{
                          translate: 'none',
                          rotate: 'none',
                          scale: 'none',
                          transformOrigin: '50% 50%',
                          transform: 'translate(0px, 0px)',
                          width: '20vw',
                        }}
                      />
                    </span>
                  </div>
                  <span className="mt-[1rem]">Team Up!</span>
                </h1>
              </div>
            </div>
            <div className="max-[1024px]:flex items-center justify-center header__section hidden flex-wrap mobile__heading">
              <div className="w-[100%]">
                <div className="max-[375px]:text-[4rem] max-[600px]:text-[5rem] max-[1024px]:text-[6rem] text-[5rem] leading-[1] font-[500]">
                  <h1 className="flex">
                    Let&apos;s
                    <span className="flex flex-wrap">
                      <span className="max-[768px]:mt-[30px] inline-block mt-[20px]" role="img" aria-label="Animation">
                        <video
                          className="max-[1024px]:top-[-0.8rem] max-[1024px]:mr-[1rem] max-[1024px]:h-[70px] max-[1024px]:w-[100px] max-[1024px]:mx-[1rem] mr-[2rem] h-[140px] w-[350px] object-cover relative"
                          src="/images/video/Homepage Videos.mp4"
                          autoPlay
                          playsInline
                          loop
                          muted
                        />
                      </span>
                      <br />
                    </span>
                  </h1>
                </div>
                <h1 className="max-[375px]:text-[4rem] max-[600px]:text-[5.6rem] max-[768px]:text-[6.5rem] max-[1024px]:text-[6rem] text-[5rem] leading-[1] font-[500]">Team Up!</h1>
              </div>
            </div>
          </section>
        </main>
      </section>
    </>
  );
};

export default Contact;
