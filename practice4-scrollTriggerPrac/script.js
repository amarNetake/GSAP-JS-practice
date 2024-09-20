gsap.from("#page1 .circle", {
     scale: 0,
     rotate: 360,
     duration: 2,
     delay: 1
});

// We want the effect of rotating circles on #page2 and #page3 should play on the basis on scroll and not any time or delay because we never know when the user will scroll down and it is possible that animation already played out before your scrolled down and reached the the position to see the animation.

/*
We will use "scrollTrigger" for this. It is a plugin of GSAP available on the same page which you can copy from where you obtained gsap CDN.
 */

//Put scrollTrigger CDN just below the GSAP CDN and above your JS script tag.

//This helps to animate based on scroll event instead of time.
gsap.from("#page2 .circle", {
     scale: 0,
     rotate: 360,
     duration: 2,
     scrollTrigger: "#page2 .circle" //This animation will play when the user scrolls down to the position where .circle is present in #page2
});

//This helps to animate based on scroll event instead of time.
gsap.from("#page3 .circle", {
     scale: 0,
     rotate: 360,
     duration: 2,
     scrollTrigger: "#page3 .circle" //This animation will play when the user scrolls down to the position where .circle is present in #page3
});