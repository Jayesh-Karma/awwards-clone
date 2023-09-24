// Scrolling function of locomotive
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// Mouse follower function 

function mouseFollowerFunction(x,y){
    document.addEventListener('mousemove',(dets)=>{
        document.querySelector("#miniCircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${x},${y})`
    })
}

// mouseFollowerFunction()

// firstpage animations
function firstPageAnim(){
    let timel = gsap.timeline();
    timel.from("#nav",{
        y:'-10',
        duration:1.5,
        ease:Expo.easeInOut,
        opacity:0
    })
    .to(".boundingElem",{
        y:0,
        duration:1,
        delay:-1,
        stagger:0.5
    })
    .from("#bottomElem",{
        y:'-10',
        duration:2,
        opacity:0,
        delay:-1,
        ease: Expo.easeInOut
    })
}
firstPageAnim()

// ----MOuse circle effect-------
let timeout;
function CursorEffect(){
    let Xprev=0;
    let Yprev = 0;

    let Xscale = 1;
    let Yscale = 1;

    window.addEventListener("mousemove",(dets)=>{
        clearTimeout(timeout)
        Xscale = gsap.utils.clamp(0.8,1.2,dets.clientX-Xprev)
        Yscale = gsap.utils.clamp(0.8,1.2,dets.clientY-Yprev)
        
        Xprev = dets.clientX;
        Yprev = dets.clientY;

        mouseFollowerFunction(Xscale,Yscale);
        timeout = setTimeout(()=>{
            document.querySelector("#miniCircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(1,1)`
        },100)

    })
}
CursorEffect()


// -----middle page hover effect---------
let diffrot=0;
let rotate = 0;
document.querySelectorAll(".elems").forEach((elem)=>{

    elem.addEventListener("mousemove",(dtls)=>{
        let diff = dtls.clientY - elem.getBoundingClientRect().top;
        diffrot = dtls.clientX - rotate;
        rotate = dtls.clientX;
        let rot = gsap.utils.clamp(-20,20,diffrot)

        gsap.to(elem.querySelector("img"),{
            opacity:1,
            ease:Power1,
            top:diff,
            left:dtls.clientX,
            rotate: rot
        })
    })
    elem.addEventListener("mouseleave",(dtls)=>{
        gsap.to(elem.querySelector("img"),{
            opacity:0,
            ease:Power3
    })
    })
})



// time---- bottom

setInterval(() => {
    
    let time = new Date();
    let currentTime = time.getHours();
    let currentMins = time.getMinutes();
    
    document.querySelector("#time").textContent = `${currentTime}:${currentMins} EST`
}, 1000);