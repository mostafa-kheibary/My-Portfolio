gsap.from("menu li", { opacity: 0, y: -50, duration: 2, ease: "power4.out", stagger: 0.2 })
gsap.from(".introduse", { opacity: 0, x: -200, duration: 2, ease: "power4.out" });
// gsap.from(".type", { opacity: 0, x: 300, duration: 3, ease: "power4.out" });
const skilBox = gsap.from(".skils .skil", {
    y: -50, opacity: 0, duration: 1, stagger: {
        each: 0.2,
        from: 'end'
    }
});
skilBox.paused(true);

const profileBox = gsap.from(".profile *",{x:-100,opacity:0,duration:2,ease:'power4.out',stagger:0.2});
profileBox.paused(true);

const cvText = gsap.from(".info h4",{y:20,opacity:0,duration:1,ease:"power4.out"});
cvText.paused(true);

const cvButton = gsap.from(".download-cv",{opacity:0,y:50,duration:1,ease:"power4.out"});
cvButton.paused(true);

window.addEventListener('scroll', () => {
    console.log(window.scrollY)
    if (window.scrollY > 200) {
        skilBox.play();
    }
    if(window.scrollY > 450){
        profileBox.play()
    }
    if(window.scrollY > 860){
        cvText.play();
        cvButton.play();
    }
})