var path = `M 110 250 Q 960 250 1700 250`;
var finalPath = `M 110 250 Q 960 250 1700 250`;

var string = document.querySelector('#string');
string.addEventListener('mousemove', (dets) => {
    path = `M 110 250 Q ${dets.clientX} ${dets.clientY} 1700 250`;

    gsap.to("svg > path", {
        attr: { d: path },
        duration: 0.2,
        ease: "power3.out"
    });
});
string.addEventListener('mouseleave', (dets) => {
    gsap.to("svg > path", {
        attr: { d: finalPath },
        duration: 1,
        ease: "elastic.out(1.2,0.2)"
    });
});

console.log(window.innerHeight);