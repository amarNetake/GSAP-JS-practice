// gsap.to() is a method provided by GSAP (GreenSock Animation Platform) that animates the properties of an element from its current state to a desired state over a specified duration.
gsap.to("#box",{
     x: 1000, // By default the unit of x axis distance is in pixels. It will move in x axis(horizonally) towards right by 1000px.
     duration: 2, // duration is in seconds
     delay: 1,  //By default delay is in seconds
     rotate: 360, //By default rotation unit is degrees
     backgroundColor: "yellow",

});


/*
Use gsap.from() to come from final position to initial position. The syntax is exactly same as gsap.to() but what happens it those styles/properties are by default is initially applied to that element and it slowly omits/removes each property provided to come back to it’s initial position.
*/

// gsap.from("#box",{
//      x: 1000, // By default the unit of x axis distance is in pixels. It will move in x axis(horizonally) towards right by 1000px.
//      duration: 2, // duration is in seconds
//      delay: 3,  //By default delay is in seconds
//      rotate: 360, //By default rotation unit is degrees
//      backgroundColor: "yellow",

// });