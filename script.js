
    $('#down #text h3').textillate({
        autoStart:false,
        in:{
            effect: 'fadeIn',
            delay: 10
        } ,
        callback: function() {
            gsap.fromTo('#down #text img', {
                opacity:0,
                y: -70,
                duration: 3,
                ease: 'Expo.easeInOut'
            },{
                opacity:1,
                y: 0,

            }
            )
        }
       
    })


$('#hero h1').textillate({
    in:{
        effect: 'fadeIn'
    } ,
    loop: true , 
    out: {
        effect: 'fadeOutRight'
    }
})

gsap.to('.fader' , {
    scrollTrigger: {
    trigger:'#down',

    start: 'top 5%',
    toggleActions: 'play pause resume reverse',
    },
    opacity:0 , 
    y: -100,
    stagger: .3, 
    duration: 2 , 
    onComplete: function() {
        $('#down #text h3').textillate ('start')
    }
})

