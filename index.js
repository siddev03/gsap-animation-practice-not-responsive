var tl = gsap.timeline()




tl.from("#nav-img,#nav h3, #nav h4, #nav button", {

    opacity: 0,
    duration: 1,
    delay: 1,


})


tl.from("#main h1", {

    opacity: 0,
    y: 100,
    stagger: 0.3


})


tl.from("#left-img, #right-img, #bottom-left, #bottom-right", {

    scale: 0,
    opacity: 0,
    stagger:0.3,
    

    


})



