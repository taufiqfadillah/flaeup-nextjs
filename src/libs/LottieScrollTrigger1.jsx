import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import lottie from "lottie-web";

export default function LottieScrollTrigger(vars) {
	const playhead = { frame: 0 };
	const target = gsap.utils.toArray(vars.target)[0];

	const targetOffset = gsap.getProperty(target, "top");

	const st = {
		trigger: target,
		start: `top+=${targetOffset} top`,
		end: "bottom center",
		scrub: 1,
		// markers: true,
	};
	const ctx = gsap.context?.();
	const animation = lottie.loadAnimation({
		container: target,
		renderer: vars.renderer || "svg",
		loop: false,
		autoplay: false,
		path: vars.path,
		rendererSettings: vars.rendererSettings || {
			preserveAspectRatio: "xMidYMid slice",
		},
	});

	for (const p in vars) {
		st[p] = vars[p];
	}

	animation.addEventListener("DOMLoaded", () => {
		const createTween = () => {
			animation.frameTween = gsap.to(playhead, {
				frame: animation.totalFrames - 1,
				ease: "none",
				onUpdate: () => animation.goToAndStop(playhead.frame, true),
				scrollTrigger: st,
			});
			return () => animation.destroy?.(); // Add optional chaining here
		};

		ctx?.add(createTween) ?? createTween();
		ScrollTrigger.sort();
		ScrollTrigger.refresh();
	});

	return animation;
}
