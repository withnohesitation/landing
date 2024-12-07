
//로딩
let loadingCursor = gsap.matchMedia();

loadingCursor.add("(min-width: 1025px)", () => {

    $('.loading').mousemove(function(e){
        gsap.to('.loading-cursor',{
            x:e.clientX,
            y:e.clientY,
        })
    })

});

loadingCursor.add("(max-width: 1024px)", () => {
});

window.onload = function(){
    $('.loading').click(function(){
        $('.loading').stop().delay(300).slideUp();
    })
}

//커서 
$(function(){

    // CURSOR
    var cursor = $(".main-cursor"),
        follower = $(".cursor-follower");

    var posX = 0,
        posY = 0;
    var mouseX = 0,
        mouseY = 0;

    TweenMax.to({}, 0.008, { 
        repeat: -1,
        onRepeat: function() {
            posX += (mouseX - posX) / 9;
            posY += (mouseY - posY) / 9;

            TweenMax.set(follower, {
                css: {
                left: posX - 12,
                top: posY - 12
                }
            });

            TweenMax.set(cursor, {
                css: {
                left: mouseX,
                top: mouseY
                }
            });
        }
    });

    $(".wrap-area").on("mousemove", function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    }).on("mouseenter", function(e) {
        $(".main-cursor, .cursor-follower").css('opacity', 1);
    }).on("mouseleave", function(e) {
        $(".main-cursor, .cursor-follower,").css('opacity', 0);
    });;

    $("a").on("mouseenter", function() {
        cursor.addClass("active");
        follower.addClass("active");
    }).on("mouseleave", function() {
        cursor.removeClass("active");
        follower.removeClass("active");
    })
});


//시계

function clock(){
    let timetext = document.querySelector('.ko-time'); 
    let today = new Date(); 
    let H = ("0" + today.getHours()).slice(-2);
    let M = ("0" + today.getMinutes()).slice(-2);
    let S = ("0" + today.getSeconds()).slice(-2);

    timetext.innerHTML = H + ":" + M + ":" + S; 
}
clock();
setInterval(clock,1000);

//메뉴 오른쪽 바
//work 클릭시 바로 색깔 바꾸지 않는 오류 수정

(function (global, $) {

    var $menu     = $('.gnb ul li'),
        $contents = $('.scroll'),
        $doc      = $('html, body');
        
    $(function () {
        $menu.on('click','a', function(e){
            var $target = $(this).parent(), //ul
                idx     = $target.index(),
                section = $contents.eq(idx),
                offsetTop = section.offset().top;
            $doc.stop()
                    .animate({
                        scrollTop :offsetTop
                    }, 800);
            return false;
        });
    });

    $(window).scroll(function(){

        var scltop = $(window).scrollTop();

        $.each($contents, function(idx, item){
            var $target   = $contents.eq(idx),
                i         = $target.index(),
                targetTop = $target.offset().top;

            if (targetTop <= scltop) {
                $menu.removeClass('active');
                $menu.eq(idx).addClass('active');
            }
            if (!(200 <= scltop)) {
                $menu.removeClass('active');
            }
        })

    });

    var btnTop = $('.h-logo');
    btnTop.on('click', function(e){
        e.preventDefault();
        $doc.stop()
                .animate({
                    scrollTop : 0
                },800)
    });

}(window, window.jQuery));

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



//hero
//ani
marqueeEl = $('.sc-hero .hero-ticker').find('ul').clone();
$('.hero-ticker').append(marqueeEl)

gsap.to('.sc-hero .hero-ticker ul',10,{
    repeat:-1,
    xPercent:-100,
    ease:"none"
})

//bg
let mhero = gsap.matchMedia();

mhero.add("(max-width: 768px)", () => {

    gsap.to('.sc-hero .hero-media video',{
        scrollTrigger:{
            trigger:".sc-hero .hero-media", //기준
            start:"100% 100%", 
            end:"0% 0%", 
            //markers: true,
            scrub:0,
        },
        scale:1,
    })
    
});




//work 
//work title
let pchero = gsap.matchMedia();

pchero.add("(min-width: 768px)", () => {

    const scrollParagraph = new SplitType('.sc-work .text-container .desc', {types: 'words, char',});

    $('[data-scroll="paragraph"]').each(function(i, el){
        scr = gsap.timeline({
            scrollTrigger: {
                trigger: $(this),
                start: "20% 100%",
                scurb: 0,
                //markers:true,
            },
        })
        scr.from ($(this).find('.title-wrap .wrapper'),{
            duration:1,
            yPercent:-110,
            stagger:0.5,
        })

        scr.from ($(this).find('.desc .char'),{
            duration:1,
            yPercent:110,
            stagger:0.005,
            delay:-.5
        })
    })
});

pchero.add("(max-width: 767px)", () => {
    const scrollParagraph = new SplitType('.sc-work .text-container .desc', {types: 'words, char',});

    $('[data-scroll="paragraph"]').each(function(i, el){
        scr = gsap.timeline({
            scrollTrigger: {
                trigger: $(this),
                start: "50% 100%",
                scurb: 0,
                //markers:true,
            },
        })

        scr.from ($(this).find('.desc .char'),{
            duration:1,
            yPercent:110,
            stagger:0.005,
        })
    })
    
});


//project container
let mm = gsap.matchMedia();

mm.add("(min-width: 768px)", () => {

    
    
    ScrollTrigger.create({
        trigger:".sc-work .inner .col-right",
        start:"20% 100%",
        end:"100% 80%",
       // markers:true,
        onUpdate:function(self){ 
            cnt=$('.sc-work .inner .col-left .thumb-box').length; 
            idx=Math.round(self.progress * (cnt-1)); 

            $('.sc-work .inner .col-left .thumb-box').eq(idx).addClass('on').siblings().removeClass('on')
       
        }
        
    })
});

mm.add("(max-width: 767px)", () => {
});


//work text effect
let mmwork = gsap.matchMedia();

mmwork.add("(min-width: 768px)", () => {

    const scrollParagraph2 = new SplitType('.sc-work .inner .col-right .title-area .link-site', {types: 'words, char',});

    $('[data-scroll="paragraph2"]').each(function(i, el){
        scr2 = gsap.timeline({
            scrollTrigger: {
                trigger: $(this),
                start: "70% 100%",
                scurb: 0,
                //markers:true,
            },
        })
        scr2.from ($(this).find('.char'),{
            duration:1,
            yPercent:110,
            stagger:0.005,
        })
        scr2.from ($(this).find('.deco svg'),{
            duration:1,
            yPercent:200,
            stagger:0.005,
            delay: -.9,
        })
    })

    
    $('[data-scroll="paragraph3"]').each(function(i, el){
        scr3 = gsap.timeline({
            scrollTrigger: {
                trigger: $(this),
                start:"0% 100%",
                end:"0% 0%", 
                scurb: 0,
                //markers:true,
            },
        })
        scr3.from ($(this).find('li:nth-child(1)'),{duration:1.5,opacity:0,},'a')
        scr3.from ($(this).find('li:nth-child(2)'),{duration:1.5,opacity:0,},'a+=0.2')
        scr3.from ($(this).find('li:nth-child(3)'),{duration:1.5,opacity:0,},'a+=0.4')
        scr3.from ($(this).find('li:nth-child(4)'),{duration:1.5,opacity:0,},'a+=0.6')
        scr3.from ($(this).find('li:nth-child(5)'),{duration:1.5,opacity:0,},'a+=0.8')
    })

});
mmwork.add("(max-width: 767px)", () => {
});




//contact


const contactParagraph = new SplitType('.sc-contact .board-content .content-wrap strong', {types: 'words, char',});
const contactParagraph2 = new SplitType('.sc-contact .board-content .contact-box', {types: 'lines, words, char',});

let pccontact = gsap.matchMedia();

    pccontact.add("(min-width: 1025px)", () => {
        
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
    contactCircleTl.to('.sc-contact .circles-item:nth-child(5)',{'clip-path': 'circle(100%)'},'a+=0.4')
    contactCircleTl.to('.sc-contact .circles-item:nth-child(6)',{'clip-path': 'circle(100%)'},'a+=0.5')
    contactCircleTl.to('.sc-contact .circles-item:nth-child(7)',{'clip-path': 'circle(100%)'},'a+=0.6')
    contactCircleTl.to('.sc-contact .contents',{'clip-path': 'circle(100%)'},'a+=0.7')

    //  const contactMotion = gsap.timeline({
    //      paused:true,
    //  })

    //  contactMotion
    //  .from('.sc-contact .board-content strong .char', {yPercent:100, stagger:0.01})
    //  .from('.sc-contact .board-content svg', {yPercent:100, stagger:0.01, delay:-.2})
    //  .from('.sc-contact .board-content .contact-box .word', {yPercent:100, stagger:0.01, delay:-.2})
    //  .from('.sc-contact .board-content .mimoticon', {yPercent:120})

    //  contactCircleTl.eventCallback ( "onComplete" , function () { 
    //      contactMotion.play(); });


    $('[data-scroll="paragraph4"]').each(function(i, el){
        scr4 = gsap.timeline({
            scrollTrigger: {
                trigger: $(this).find('.contents'),
                start:"100% -30%",
                scurb: 0,
                //markers:true,
            },
        })
        scr4.from ($(this).find('.board-content strong .char'),{yPercent:100, stagger:0.01},'a')
        scr4.from ($(this).find('.board-content svg'),{yPercent:100, stagger:0.01, delay:-.2},'a+=0.2')
        scr4.from ($(this).find('.board-content .contact-box .word'),{yPercent:100, stagger:0.01, delay:-.2},'a+=0.4')
        scr4.from ($(this).find('.board-content .mimoticon'),{yPercent:120},'a+=0.6')
    })

    });

    pccontact.add("(max-width: 1024px)", () => {

        $('[data-scroll="paragraph4"]').each(function(i, el){
            scr4 = gsap.timeline({
                scrollTrigger: {
                    trigger: $(this).find('.contents'),
                    start:"0% 100%",
                    end:"100% 100%",
                    scurb: 0,
                    //markers:true,
                },
            })
            scr4.from ($(this).find('.board-content strong .char'),{yPercent:100, stagger:0.01},'a')
            scr4.from ($(this).find('.board-content svg'),{yPercent:100, stagger:0.01, delay:-.2},'a+=0.2')
            scr4.from ($(this).find('.board-content .contact-box .word'),{yPercent:100, stagger:0.01, delay:-.2},'a+=0.4')
            scr4.from ($(this).find('.board-content .mimoticon'),{yPercent:120},'a+=0.6')
        })
    
    });