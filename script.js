function loading() {
    var t1 = gsap.timeline()

    t1.to("#yellow1", {
        top: "-100%",
        delay: 0.5,
        duration: 0.7,
        ease: "expo.out"
    })

    t1.from("#yellow2", {
        top: "100%",
        delay: 0.6,
        duration: 0.7,
        ease: "expo.out"
    }, "anim")

    t1.to("#loader h1", {
        color: "black",
        delay: 0.5,
        duration: 0.7,
    }, "anim")

    t1.to("#loader", {
        opacity: 0,
        display: "none"
    })
}
loading()

function scrollloco() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });

    var totop = document.querySelectorAll(".footer i, .footer h2")

    totop.forEach(elem => {
        elem.addEventListener("click", () => {
            scroll.scrollTo(0)
        });
    });

    var elems = document.querySelectorAll(".elem")
    var page2 = document.querySelector(".page2")
    elems.forEach(function (ele) {
        ele.addEventListener("mouseenter", function () {
            var bgimg = ele.getAttribute("data-img")
            page2.style.backgroundImage = `url(${bgimg})`

        })
    })

}
scrollloco()