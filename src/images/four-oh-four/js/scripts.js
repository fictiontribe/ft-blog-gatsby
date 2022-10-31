console.log('ploop')

// $(document).ready(function($) {

// var baseUrl = window.location.protocol + "//" + window.location.host + "/";

// console.log(baseUrl);

// function customMouse() {
//   // var cursor = $(".cursor"),
//     follower = $(".follow");

//   var posX = 0,
//     posY = 0;

//   var mouseX = 0,
//     mouseY = 0;

//   TweenMax.to({}, 0.016, {
//     repeat: -1,
//     onRepeat: function() {
//       posX += (mouseX - posX) / 9;
//       posY += (mouseY - posY) / 9;

//       TweenMax.set(follower, {
//         css: {    
//           left: posX - 12,
//           top: posY - 12
//         }
//       });
//     }
//   });




//   $(document).on("mousemove", function(e) {
//     mouseX = e.pageX;
//     mouseY = e.pageY;
//   });

//   $("a, svg, .fallback-img").on("mouseenter", function() {
//     // cursor.addClass("active");
//     follower.addClass("active");
//   });
//   $("a, svg, .fallback-img").on("mouseleave", function() {
//     // cursor.removeClass("active");
//     follower.removeClass("active");
//   });
// }
// customMouse();


//        function checkBrowser() { 
          
//             // Get the user-agent string 
//             var userAgentString =  
//                 navigator.userAgent; 
          
//             // Detect Chrome 
//             var chromeAgent =  
//                 userAgentString.indexOf("Chrome") > -1; 
          
//             // Detect Internet Explorer 
//             var IExplorerAgent =  
//                 userAgentString.indexOf("MSIE") > -1 ||  
//                 userAgentString.indexOf("rv:") > -1; 
          
//             // Detect Firefox 
//             var firefoxAgent =  
//                 userAgentString.indexOf("Firefox") > -1; 
          
//             // Detect Safari 
//             var safariAgent =  
//                 userAgentString.indexOf("Safari") > -1; 
                  
//             // Discard Safari since it also matches Chrome 
//             if ((chromeAgent) && (safariAgent))  
//                 safariAgent = false; 
          
//             // Detect Opera 
//             var operaAgent =  
//                 userAgentString.indexOf("OP") > -1; 
                  
//             // Discard Chrome since it also matches Opera      
//             if ((chromeAgent) && (operaAgent))  
//                 chromeAgent = false; 
          


// // Browser Check Here
// if( chromeAgent == true || firefoxAgent == true ){
//     console.log('this is chrome or firefox');

//     // Fade in our logo and video
//     $('#animatedButton, #svgVideo').fadeIn();


//      let timeline = new TimelineMax({
//         repeat: -1,
//         yoyo: true
//       }),
//       feTurb = document.querySelector('#feturbulence');

//     timeline.add(
//       TweenMax.to(feTurb, 1, {
//         onUpdate: function() {
          
//           let bfX = this.progress() * .115 + 0.015, //base frequency x
//             bfY = this.progress() * 0.05 + 0.2; //base frequency y
//           feTurb.setAttribute('baseFrequency', `${bfX} ${bfY}`);
//         }
//       }), 0
//     );



//     // Create and our animated Glitch effect 
//     function initChrome() {
//       var chrome = document.querySelectorAll('#animatedButton')[0];
//       var turbVal = { val: 0.000001 };
//       var turb = document.querySelectorAll('#glitch feTurbulence')[0];
//       var chromeTl = new TimelineLite({ paused: true, onUpdate: function() {
//         turb.setAttribute('baseFrequency', '0.00001 ' + turbVal.val); // Firefox bug is value is 0
//       },
//       onStart: function() {
//         chrome.style.filter = 'url(#glitch)';
//       },
//       onComplete: function() {
//         chrome.style.filter = 'none';
//       }});

//       chromeTl.to(turbVal, 0.5, { val: 0.16 });
//       chromeTl.to(turbVal, 0.5, { val: 0.000001 });

//       chrome.addEventListener('click', function() {
//         chromeTl.restart();
//       });
//     }
//     initChrome();


//     // Create a random number generator
//     function randomNumber(min, max){
//         const r = Math.random()*(max-min) + min
//         return Math.floor(r)
//     }
//     // Create our Background color array
//      bodyColor = [
//             "orange",
//             "salmon",
//             "teal",
//             "aqua",
//             "coral",
//             "darkkhaki",
//             "lightcoral",
//             "lightseagreen",
//             "orangered",
//             "tomato",
//             "yellowgreen",
//             "thistle",
//             "honeydew"
//           ],

//      // Create our background Image array     
//      bgImage = [
//             "1.jpg",
//             "2.jpg",
//             "3.gif",
//             "5.jpg",
//             "6.jpg",
//             "7.jpg",
//             "8.gif",
//             "9.gif",
//             "10.jpg",
//             "11.jpg",
//             "12.jpg",
//             "13.jpg",
//             "14.jpg",
//             "15.jpg",
//             "16.gif"
//           ],



//     // Use GSAP to convert our our shapes to paths
//     MorphSVGPlugin.convertToPath("#f, #t");

//     // Create our hover animation 
//     tl = gsap.timeline({onComplete: function(){ 
//       $('#hover-f, #hover-t').removeClass('disabled');
//     }});

//     // Create our hover animation triggers
//     $('#hover-t').on('mouseenter', function(event){
//       // console.log('hovered T');
//       $('#hover-f').addClass('disabled');
//       original = document.getElementById("f");
//         tl.to(original, {morphSVG:"#t"})
//     });

//     $('#hover-f').on('mouseenter', function(event){
//       // console.log('hovered f');
//        $('#hover-t').addClass('disabled');
//       original = document.getElementById("f");
//         tl.to(original, {morphSVG:"#f"})
//     });



//     // Run our animation and randomization on load
//     $('#animatedButton').on('click', function(){

//           // Add disabled to try and avoid bubbling
//           $(this).addClass('disabled');
//           // $('.clicker').addClass('hidden');

//           // Run our randomizer
//           randomLoadVideo();

//           // Run Our SVG Morph through the shapes 
//           var tl = gsap.timeline({onComplete: function(){ 
//             $('#animatedButton').removeClass('disabled');
//            }}),
//           original = document.getElementById("f");
//           tl.to(original, {morphSVG:"#f-n-t"}, "+=1")
//             .to(original, {morphSVG:"#t"}, "+=1")
//             .to(original, {morphSVG:original}, "+=1");
//       });


//           // Create and run our randomness on load
//           function randomLoadVideo() {
//             randomImage = Math.floor(Math.random() * bgImage.length);
//             console.log(bgImage[randomImage]);

//             var imageUrl = baseUrl + 'articles/themes/fictiontribe/assets/404/bg-images/' + bgImage[randomImage] + '';
//             // console.log(imageUrl);
//             var bgImg = document.querySelector('.bg-image');
//             bgImg.src = imageUrl


//             const randomColor = Math.floor(Math.random() * bodyColor.length);
//             // console.log(bodyColor[randomColor]);
//             document.querySelector('body').style.backgroundColor = bodyColor[randomColor];

//             const randomColor1 = Math.floor(Math.random() * bodyColor.length);
//             document.querySelector('.follow').style.backgroundColor = bodyColor[randomColor1];

//             document.querySelector("#svgVideo > source").src = baseUrl + "articles/themes/fictiontribe/assets/404/video/" + randomNumber(0, 21) + ".mp4"
//             videoElement = document.querySelector("#svgVideo");
//             videoElement.load()
//           } 
//           randomLoadVideo();




//     } else {
    
//     ///////////////////////////////////
//     // Not Chrome or Firefox
//     ///////////////////////////////////

//     console.log('this is not chrome or firefox');
//     // Fade in fallback image
//     $('.fallback').fadeIn();

//     // Create our glitch animation function for our fallback Image
//     function initNonChrome() {
//       var nc = document.querySelector('.fallback-img');
//       console.log(nc);
//       var turbVal1 = { val: 1.000001 };
//       var turb1 = document.querySelectorAll('#glitch feTurbulence')[0];
//       var ncTl = new TimelineLite({ paused: true, onUpdate: function() {
//         turb1.setAttribute('baseFrequency', '1.00001 ' + turbVal1.val); // Firefox bug is value is 0
//       },
//       onStart: function() {
//         nc.style.filter = 'url(#glitch)';
//       },
//       onComplete: function() {
//         nc.style.filter = 'none';
//       }});

//       ncTl.to(turbVal1, 0.5, { val: 0.16 });
//       ncTl.to(turbVal1, 0.5, { val: 0.000001 });

//       nc.addEventListener('click', function() {
//         ncTl.restart();
//         console.log(nc);
//       });
//     }
//     initNonChrome();
      


//       // Create our Logo Array
//         staticImg = [
//             "1.svg",
//             "2.png",
//             "3.svg",
//             "4.svg",
//             "5.svg",
//             "6.svg",
//             "7.svg",
//             "8.svg",
//             "9.svg",
//             "10.svg",
//             "11.svg",
//             "12.svg",
//             "13.svg",
//             "14.svg",
//             "15.svg",
//             "16.png",
//             "17.svg",
//             "18.png",
//             "19.svg",
//             "20.svg",
//             "21.svg",
//             "22.svg"
//           ],

//         // Create our background color array
//            bodyColor = [
//             "orange",
//             "salmon",
//             "teal",
//             "aqua",
//             "coral",
//             "darkkhaki",
//             "lightcoral",
//             "lightseagreen",
//             "orangered",
//             "tomato",
//             "yellowgreen",
//             "thistle",
//             "honeydew"
//           ],


//     // Run our randomizer one click 
//     $('.fallback').on('click', function(){
//         randomLoadFallback();
//          // $('.clicker').addClass('hidden');
//     });

//     // Create and run our randomizer for fallback
//     function randomLoadFallback() {
//         const randomImage = Math.floor(Math.random() * staticImg.length);
//         console.log(staticImg[randomImage]);
//         var imageUrl =  baseUrl + 'articles/themes/fictiontribe/assets/404/static-img/' + staticImg[randomImage] + '';
//         // console.log(imageUrl);
//         var bgImg = document.querySelector('.fallback-img');
//         bgImg.src = imageUrl
//         const randomColor = Math.floor(Math.random() * bodyColor.length);
//         console.log(bodyColor[randomColor]);
//         document.querySelector('body').style.backgroundColor = bodyColor[randomColor];
//     }
//     randomLoadFallback();

//     alert('For best experience use Chrome or Firefox on Desktop');
//     }


//   } 

//   // End our browser wrap check
// checkBrowser();

// });



