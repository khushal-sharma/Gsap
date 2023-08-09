var t1 = gsap.timeline()
t1.from("#nav",{
    opacity:0,

    delay:0.3
})
t1.from("#nav .logo, #nav #element h3,#nav #sign h4",{
    y:-80,
    opacity:0,
    duration:0.5,
    stagger:0.3
})

t1.from("#left h1",{
    x:-50,
    opacity:0,
    duration:0.7,
    stagger:0.4
})
t1.from("#right img",{
    scale:0.5,
    opacity:0,
    duration:0.6

})

gsap.from("#page2 .box",{
    scale:0,
    opacity:0,
    buration:1,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#page2 .box",
        scroller:"body",
        start:"top 60%"

    }
})
