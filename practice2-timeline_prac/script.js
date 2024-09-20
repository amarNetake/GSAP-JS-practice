// Task: I want the box1 to animate first then box2 and then box3. Only when previous box reaches it's final position the next box will animate

//Cumbersome way to animate the above task. Here we need to manually need to calculate the delay for each successive box animation.
/*
gsap.to("#box1", {
     x: 1200,
     rotate: 360,
     scale: 0.5,
     duration: 2,
     delay: 1
});

gsap.to("#box2", {
     x: 1200,
     rotate: 360,
     scale: 0.5,
     duration: 2,
     delay: 3 //I want to delay this so that only when box1 reaches to it's final position then only box2 animation starts
});

gsap.to("#box3", {
     x: 1200,
     rotate: 360,
     scale: 0.5,
     duration: 2,
     delay: 5 //I want to delay this so that only when box2 reaches to it's final position then only box2 animation starts
});
*/

let tl = gsap.timeline();

//Here we do not need to calculate the delay for the second and third boxes as we have defined the timeline and it will ensure one animation finishes then only start next animation. box1, box2, box3 are part of same timeline train is found out by JS by seeing we are using same 'tl' variable for each box.
tl.to("#box1", {
     x: 1200,
     rotate: 360,
     scale: 0.5,
     duration: 2,
     delay: 1
});

tl.to("#box2", {
     x: 1200,
     rotate: 360,
     scale: 0.5,
     duration: 2,
});

tl.to("#box3", {
     x: 1200,
     rotate: 360,
     scale: 0.5,
     duration: 2,
});