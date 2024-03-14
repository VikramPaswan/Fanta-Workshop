var tl = gsap.timeline({
    scrollTrigger:{
        trigger: ".two",
        start: "0% 95%",
        end: "70% 60%",
        scrub:true,
    }
})
tl.to("#fanta", {
    top: "110%",
    right: "65%",
    left: "-4.9%"
}, 'orange'
)
tl.to("#slice",{
    top:"140%",
    right:"54%",
    left:"18%"
}, 'orange'
)
tl.to("#orange",{
    width:"15%",
    height:"30%",
    top:"115%",
    left:"40%",
}, 'orange'
)
tl.to("#leaf",{
    height: "30%",
    rotate: "190deg",
    top:"100%",
    left:"80%"
}, 'orange'
)
tl.to("#leaftwo",{
    height:"30%",
    rotate: "190deg",
    top: "115%",
    left:"0%"
}, 'orange'
)
var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: ".three",
        start: "0% 95%",
        end: "70% 60%",
        scrub:true,
    }
})
tl2.to("#slice",{
    left:"44%",
    top: "195%",
}, 'orange'
)
tl2.to("#fanta",{
    left:"30%",
    top:"200%"
}, 'orange'
)