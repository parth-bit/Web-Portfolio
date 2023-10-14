Shery.imageEffect("#back", {style: 5, gooey:true, config:
     {a:{value:2.73,range:[0,30]},
     b:{value:-0.95,range:[-1,1]},
     aspect:{value:2.0532724505327247},gooey:{value:true},
     infiniteGooey:{value:true},
     durationOut:{value:1,range:[0.1,5]},
     durationIn:{value:1,range:[0.1,5]},displaceAmount:{value:0.5},
     masker:{value:true},maskVal:{value:1.3,range:[1,5]},scrollType:{value:0},
     geoVertex:{range:[1,64],value:1},
     noEffectGooey:{value:false},
     onMouse:{value:1},noise_speed:{value:0.75,
     range:[0,10]},metaball:{value:0.24,range:[0,2]},
     discard_threshold:{value:0.5,range:[0,1]},
     antialias_threshold:{value:0,range:[0,0.1]},
     noise_height:{value:0.41,range:[0,2]},
     noise_scales:{value:11.21,range:[0,100]}
    }
});

var elems = document.querySelectorAll(".elem");

elems.forEach(function(elem){
    var h1s = elem.querySelectorAll("h1");
var index=0;
var animating=false;

document.querySelector("#main")
.addEventListener("click", function(){
 if(!animating){
    animating= true;
    gsap.to(h1s[index],{
        top: '-=100%',
        ease: Expo.easeInOut,
        duration:1,
        onComplete: function(){
            gsap.set(this._targets[0],{top:"100%"})
            animating=false;
        },  
    });
    index === h1s.length-1 ? (index=0) : index++;
    gsap.to(h1s[index],{
        top: '-=100%',
        ease: Expo.easeInOut,
        duration:1
    });
}});

});
