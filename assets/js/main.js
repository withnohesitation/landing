//시계
function clock(){
    let timetext = document.querySelector('.h-time'); 
    let today = new Date(); 
    let H = today.getHours();
    let M = today.getMinutes();
    let S = today.getSeconds();

    timetext.innerHTML = H + ":" + M + ":" + S; 
}
clock();
setInterval(clock,1000);

//헤더

let lastScroll = 0; 

$(window).scroll(function(){
    curr = $(this).scrollTop();

    if (curr > lastScroll) {
        $('#header').addClass('hide');

    } else{
        $('#header').removeClass('hide');

    }

    lastScroll = curr;
})

//hero ani
marqueeEl = $('.sc-hero .hero-ticker').find('ul').clone();
$('.hero-ticker').append(marqueeEl)

gsap.to('.sc-hero .hero-ticker ul',10,{
    repeat:-1,
    xPercent:-100,
    ease:"none"
})

gsap.to('.sc-work .project-container .project-list',{
    scrollTrigger:{
        trigger:'.sc-work .project-container', //기준 
        start:"0% 0%",
        end:"100% 100%", 
        //markers: true,
        scrub:0,
    },
    xPercent: -110
})

//work
const workTitle = new SplitType('.sc-work .text-container .col-left .title', { types: 'words, chars', });

a = gsap.timeline({
    scrollTrigger: {
        trigger: '.sc-work .text-container',
        start: "0% 80%",
        end: "100% 80%",
        scrub:true,
        //markers:true,
    },
})

a.from('.sc-work .text-container .col-left .title .char',{
    duration:1,
    yPercent:100,
    stagger:0.1,
})
a.from('.sc-work .text-container .col-right .state',{
    delay:1.5,
    yPercent:100,
    stagger:0.1,
    duration:1,

})
a.from('.sc-work .text-container .col-right .desc',{
    delay:1.5,
    yPercent:100,
    stagger:0.1,
    duration:1,

})

