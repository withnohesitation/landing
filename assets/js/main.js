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

//work slide
let mmWorkslide = gsap.matchMedia();

    mmWorkslide.add("(min-width: 1024px)", () => {

    gsap.to('.sc-work .project-container .project-list',{
        scrollTrigger:{
            trigger:'.sc-work .project-container', //기준 
            start:"0% 0%",
            end:"100% 100%", 
            //markers: true,
            scrub:0,
            invalidateOnRefresh:true,
        },
        x:function(){
            return window.innerWidth/2;
        },
        xPercent: -80
    })


    });

    mmWorkslide.add("(max-width: 1023px)", () => {

    });





//work cursor

let mmWorkcursor = gsap.matchMedia();

    mmWorkcursor.add("(min-width: 1024px)", () => {

        $('.sc-work .inner').mousemove(function(e){
            gsap.to($(this).find('.hover-cursor'), {
                opacity:1,
                x:e.clientX,
                y:e.clientY,
            })
        })
        
        $('.sc-work .inner').mouseleave(function(e){
            gsap.to($(this).find('.hover-cursor'), {
                opacity:0,
                x:e.clientX,
                y:e.clientY,
            })
        })
        
        $('.sc-work .inner .btn-shortcut').mouseover(function(){
            $('.hover-cursor').addClass('on');
        })
        $('.sc-work .inner .btn-shortcut').mouseout(function(){
            $('.hover-cursor').removeClass('on');
        })


    });

    mmWorkcursor.add("(max-width: 1023px)", () => {

    });


//work
let mmwork = gsap.matchMedia();

    mmwork.add("(min-width: 1024px)", () => {

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
            stagger:0.2,
        })
        a.from('.sc-work .text-container .col-right .state .text',{
            delay:5,
            yPercent:100,
            duration:1,
        
        })
        a.from('.sc-work .text-container .col-right .desc .text',{
            delay:1.5,
            yPercent:100,
            stagger:0.1,
            duration:1,
        
        })
    

    });

    mmwork.add("(max-width: 1023px)", () => {

    });



let mmcontact = gsap.matchMedia();

    mmcontact.add("(min-width: 1024px)", () => {

        
    contactCircleTl = gsap.timeline({
        scrollTrigger:{
            trigger:'.sc-contact', //기준 
            start:"0% 0%",
            end:"100% 100%", 
            //markers: true,
            scrub:0,
        },
        

    })
    contactCircleTl.to('.sc-contact .circles-item:nth-child(1)',{'clip-path': 'circle(100%)'},'a')
    contactCircleTl.to('.sc-contact .circles-item:nth-child(2)',{'clip-path': 'circle(100%)'},'a+=0.1')
    contactCircleTl.to('.sc-contact .circles-item:nth-child(3)',{'clip-path': 'circle(100%)'},'a+=0.2')
    contactCircleTl.to('.sc-contact .circles-item:nth-child(4)',{'clip-path': 'circle(100%)'},'a+=0.3')
    contactCircleTl.to('.sc-contact .contents',{'clip-path': 'circle(100%)'},'a+=0.4')

    });

    mmcontact.add("(max-width: 1023px)", () => {

    });

