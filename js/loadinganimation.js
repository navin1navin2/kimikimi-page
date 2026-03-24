gsap.registerPlugin(TextPlugin) 

const tl = gsap.timeline();

tl.to(".loading", {
  duration: 1,
  text: "Now Loading",
  ease: "none",
});

tl.to(".dots", {
  duration: 1.5,
  text: "...", 
  repeat: -1,    
  repeatDelay: 0.5,
  ease: "none",
});

