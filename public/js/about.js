function AboutHero() {
  let triggerAboutAnimation = () => {
    let e = n.ZP.timeline({
        defaults: {
          ease: p.Z.create("custom", "0.770, 0.000, 0.175, 1.000"),
        },
      }),
      t = window.innerHeight;
    e.to(
      ".perspective_letters span",
      0.6,
      { y: "0%", opacity: 1, stagger: 0.08 },
      0
    ),
      e.to(
        "#animated-work-title",
        1.5,
        {
          fontSize: "".concat(window.screen.width > 2e3 ? "7vw" : "6.25rem"),
          y: "".concat(t > 650 ? "0%" : "40%"),
          x: "".concat(t > 650 ? "0%" : "-40%"),
        },
        1.4
      ),
      e.to(
        ".section-animated-top-image-one",
        { width: "56%", duration: 1 },
        2.2
      ),
      e.to(
        ".section-animated-top-image-two",
        { width: "43%", height: "18.5vw", duration: 1 },
        2.2
      ),
      e.eventCallback("onComplete", function () {
        setTimeout(() => {
          c().refresh();
          let e = window.screen.width / 2.1,
            t = n.ZP.timeline({
              scrollTrigger: {
                trigger: ".section-animated-top",
                pin: !0,
                scrub: 0,
                start: "top top",
                once: !1,
                ease: p.Z.create("custom", "0.770, 0.000, 0.175, 1.000"),
              },
            });
          t.fromTo("#animated-work-title", 1, { opacity: 1 }, { opacity: 0 }),
            t.fromTo(
              ".section-animated-top-image-two",
              {
                width: "43%",
                height: "auto",
                right: "0px",
                x: "0%",
                y: "0%",
              },
              {
                x: "-".concat(e, "px"),
                y: "0%",
                width: "100%",
                x: "-16vw",
                duration: 1,
              },
              "<="
            ),
            document.querySelector("html").classList.remove("stop-scrolling");
        }, 500);
      });
  };
  return (
    (0, i.useEffect)(() => {
      setTimeout(() => {
        window.screen.width > 1024 &&
          (document.querySelector("html").classList.add("stop-scrolling"),
          triggerAboutAnimation());
      }, 0);
    }, []),
    (0, r.jsxs)("section", {
      className:
        "max-[768px]:pt-[7rem] max-[1024px]:flex-wrap max-[1024px]:h-[auto] section-animated-top  w-full relative bg-white flex max-[600px]:px-[1.5rem] px-[2rem] max-[2000px]:pt-[6rem] pt-[14rem]",
      children: [
        (0, r.jsx)("div", {
          className: "".concat(
            l().work_title,
            "  max-[1024px]:h-[auto] max-[1024px]:w-[100%] max-[1750px]:w-[35%] h-screen w-[35%]"
          ),
          children: (0, r.jsx)("h1", {
            id: "animated-work-title",
            className:
              "max-[375px]:text-[4rem] max-[600px]:text-[5rem] max-[768px]:text-[7.2rem] max-[1024px]:translate-x-[0%] max-[1024px]:translate-y-[0%] max-[1024px]:relative max-[1024px]:text-[10rem] max-[1024px]:items-start max-[1024px]:flex-col w-full flex items-center translate-x-[20%] translate-y-[38vh] text-[20vw] absolute pointer-events-none font-medium",
            children: (0, r.jsxs)("span", {
              className: "perspective_letters max-[1024px]:w-[100%] flex",
              children: [
                (0, r.jsx)("span", { children: "A" }),
                (0, r.jsx)("span", { children: "b" }),
                (0, r.jsx)("span", { children: "o" }),
                (0, r.jsx)("span", { children: "u" }),
                (0, r.jsx)("span", { children: "t" }),
              ],
            }),
          }),
        }),
        (0, r.jsxs)("div", {
          className:
            "max-[600px]:items-start max-[600px]:mt-[0rem] max-[1024px]:justify-between max-[1024px]:w-[100%] max-[1024px]:flex-wrap max-[1024px]:flex max-[1750px]:w-[65%] w-[65%] relative",
          children: [
            (0, r.jsx)(d.default, {
              wrapperClass:
                "max-[1024px]:hidden flex justify-center items-center overflow-hidden absolute z-[20] font-medium leading-[120%] bottom-[7.5rem] right-[0rem]",
            }),
            (0, r.jsx)(x(), {
              quality: 100,
              src: "/images/about/About-01.jpg",
              width: "700",
              height: "700",
              alt: "Raxo Studio",
              title: "Raxo Studio",
              className:
                "max-[1024px]:h-[25vw] max-[1024px]:w-[38%] max-[1024px]:relative max-[1750px]:h-[28.2vw] absolute w-[0%] top-[2rem] left-0 object-cover h-[32vw] section-animated-top-image-one",
              priority: !0,
            }),
            (0, r.jsx)(x(), {
              src: "/images/about/About-01.jpg",
              width: "700",
              height: "700",
              alt: "Raxo Team",
              title: "Raxo Team",
              className:
                "max-[600px]:translate-y-[-9vw] max-[600px]:object-contain max-[600px]:h-[54.4vw] max-[768px]:translate-y-[-8.2vw] max-[1024px]:translate-y-[-7.8vw] max-[1024px]:object-contain max-[1024px]:h-[54.4vw] max-[1024px]:w-[60%] max-[1024px]:left-[0%] w-[0%] max-[1024px]:relative absolute w-[0%] top-[2rem] right-[0px] h-[18.5vw] object-cover  section-animated-top-image-two",
              priority: !0,
            }),
          ],
        }),
      ],
    })
  );
}
