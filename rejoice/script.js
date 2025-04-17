function locoScroll(){
    // Initialize Locomotive Scroll
const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  
  // Update ScrollTrigger on scroll
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // Sync ScrollTrigger with Locomotive Scroll
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed",
  });
  
  // Refresh ScrollTrigger and update Locomotive Scroll
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
  
  
  
}
locoScroll()

function cursorEffect(){
    
var page1Content = document.querySelector("#page1-content");
var cursor=document.querySelector("#cursor");

page1Content.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y
    })  
})

page1Content.addEventListener("mouseenter",function(){
  gsap.to(cursor,{
    scale:1,
    opacity:1
  })

})
page1Content.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
  
})
}
cursorEffect()

gsap.registerPlugin(ScrollTrigger);

function page2Animation(){
    gsap.from(".elem h1,.elem h2,#page2 p",{
        y:120,
        duration:1,
        stagger:0.2,
        scrollTrigger:{
            trigger:"#page2",
            scroller:"#main",
            start:"top 47%",
            end:"top 46%",
            scrub:2,
            markers:false

        }
    });
}
page2Animation()

function page4Animation(){
  gsap.from(".elem4 h1, .elem4 h2, #page4 p",{
    y:120,
    stagger:0.2,
    duration:1,
    scrollTrigger:{
      trigger:"#page4",
      scroller:"#main",
      start:"top 47%",
      end:"top 46%",
      scrub:2,
      markers:false
    }
  })
}
page4Animation()

function cursorrEffect(){

  var cursorr=document.querySelector("#cursorr");
  var page5=document.querySelector("#page5");

  page5.addEventListener("mousemove",function(dets){
    gsap.to(cursorr,{
      x:dets.x,
      y:dets.y
    })
  })
  page5.addEventListener("mouseenter",function(){
    gsap.to(cursorr,{
     scale:1,
     opacity:1
    })
  })
  page5.addEventListener("mouseleave",function(){
    gsap.to(cursorr,{
     scale:0,
     opacity:0
    })
  })
 
}
cursorrEffect()

function sliderAnimation(){
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction:true,
    },
  });
}
sliderAnimation()


function page7Animation(){
  gsap.from("#page7-top h3 ,#page7 p, #page7 p span",{
    y:120,
    duration:1,
    stagger:0.5,
    scrollTrigger:{
      trigger:"#page7",
      scroller:"#main",
      start:"top 70%",
      end:"top 46%",
      scrub:2,
      markers:false
    }
  })
}
page7Animation()



var tl=gsap.timeline()
tl.from("#loader h3",{
  x:100,
  stagger:0.1,
  duration:1,
  opacity:0
})

tl.to("#loader h3",{
  opacity:0,
  duration:1,
  x:-30,
  stagger:0.3
})

tl.to("#loader",{
  display:"none",
  duration:-0.5
})
tl.from("#page1-content h1 span",{
  y:100,
  opacity:0,              //make page1-content h1 span inline-block in css
  duration:1,
  stagger:0.1,
})


gsap.from("#page8 h2",{
  y:120,
  duration:1,
  scrollTrigger:{
    trigger:"#page8",
    scroller:"#main",
    start:"top 70%",
    end:"top 40%",
    scrub:2
  }
})

gsap.from("#page9-bot h3 span",{
  y:120,
  stagger:0.5,
  duration:1,
  scrollTrigger:{
    trigger:"#page9",
    scroller:"#main",
    start:"top 80%",
    end:"top 50%",
    scrub:2,
    markers:false
  }
})