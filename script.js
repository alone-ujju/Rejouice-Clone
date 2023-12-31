function loco() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}

loco();

function CursorEffect() {
    var cursor = document.querySelector(".cursor");
    var Page1con = document.querySelector(".page1_con")
    Page1con.addEventListener("mousemove", function (dets) {
        gsap.to(cursor, {
            x: dets.x,
            y: dets.y
        })
    })

    Page1con.addEventListener("mouseenter", function () {
        gsap.to(cursor, {
            scale: 1,
            opacity: 1
        })
    })

    Page1con.addEventListener("mouseleave", function () {
        gsap.to(cursor, {
            scale: 0,
            opacity: 0
        })
    })
}

CursorEffect();

gsap.from(".elem2 h1 span , .elem1 h2 , .elem1 h1" , {
    scrollTrigger: {
        trigger: ".page2" , 
        scroller: ".main" , 
        start: "top 47%",
        end: "top 50%",
        scrub: 2,
    } ,
    y: 120 ,
    stagger: 0.3,
    duration: 1.2 ,
    opacity: 0
})

gsap.from(".page4 .elem h2 , .page4 .elem h1" , {
    scrollTrigger: {
        trigger: ".page4" , 
        scroller: ".main" , 
        start: "top 47%",
        end: "top 50%",
        scrub: 2,
    } ,
    y: 120 ,
    stagger: 0.2,
    duration: 1 ,
    opacity: 0
})

gsap.from(".page1_con h1 span" , {
    y: 100,
    stagger: 0.2 ,
    opacity: 0 ,
    pin: true
})

function CursorEffectPage4() {
    var cursor_page4 = document.querySelector(".page4 .animation .cursor");
    var Page4anima = document.querySelector(".page4 .animation")
    Page4anima.addEventListener("mousemove", function (dets) {
        gsap.to(cursor_page4, {
            x: dets.x,  
            y: dets.y
        });
    })

    Page4anima.addEventListener("mouseenter", function () {
        gsap.to(cursor, {
            scale: 1,
            opacity: 1
        })
    })

    Page4anima.addEventListener("mouseleave", function () {
        gsap.to(cursor, {
            scale: 0,
            opacity: 0
        })
    })
}

// CursorEffectPage4();

var animation2_page4 = document.querySelector(".elemm2");
gsap.from(".elemm2 h1 , .elemm2 h2" , {
    scrollTrigger: {
        trigger: ".elemm2" , 
        scroller: ".main" , 
        start: "top 47%",
        end: "top 50%",
        scrub: 2
    } ,
    y: 120 ,
    stagger: 0.2,
    duration: 1 ,
    opacity: 0
});


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

