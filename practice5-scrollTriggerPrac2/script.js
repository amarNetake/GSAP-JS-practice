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
     scale: 0,          // The circle starts with scale 0 (invisible)
     rotate: 360,       // Circle rotates 360 degrees as it animates
     duration: 2,       // Duration of the animation is 2 seconds
     scrollTrigger: {   // ScrollTrigger block starts to tie the animation to scrolling
         trigger: "#page2 .circle",  // The element that will trigger the animation (in this case, #page2 .circle)
         scroller: "body",           // The element that is being scrolled. 'body' is used here to track the main page scroll.
         markers: true,              // Shows markers (start and end points) on the page for debugging purposes
         start: "top 55%",           // Animation starts when the top of the trigger element reaches 55% of the viewport height
         scrub: true                 // This value can either be boolean(true/false) or value between 1(less smooth) to 5(extremely smooth).  Ties animation progress to scroll, so it animates based on scrolling position (smoothly)
     }
 });

//This helps to animate based on scroll event instead of time.
gsap.from("#page3 .circle", {
     scale: 0,          // The circle starts with scale 0 (invisible)
     rotate: 360,       // Circle rotates 360 degrees as it animates
     duration: 2,       // Duration of the animation is 2 seconds
     scrollTrigger: {   // ScrollTrigger block starts to tie the animation to scrolling
         trigger: "#page3 .circle",  // The element that will trigger the animation (in this case, #page2 .circle)
         scroller: "body",           // The element that is being scrolled. '<body>' is used here to track the main page scroll.
         markers: true,              // Shows markers (start and end points) on the page for debugging purposes.
         start: "top 55%",           // Animation starts when the top of the trigger element reaches 55% of the viewport height
         scrub: true                 // This value can either be boolean(true/false) or value between 1(less smooth) to 5(extremely smooth).  Ties animation progress to scroll, so it animates based on scrolling position (smoothly)
     }
 });

 //'markers' property is only for debugging and adjustment purpose, once setup is done remove or comment the 'markers' property in scrollTrigger