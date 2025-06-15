let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
   loginForm.classList.add('active');
}

document.querySelector('#close-login-form').onclick = () =>{
   loginForm.classList.remove('active');
}

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .nav');

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
}

window.onscroll = () =>{
   loginForm.classList.remove('active');
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');

   if(window.scrollY > 0){
      document.querySelector('.header').classList.add('active');
   }else{
      document.querySelector('.header').classList.remove('active');
   }
}





gsap.to('#moveStakan', {
   scrollTrigger: {
   scrub:1
   },
   x: -500,
   scale: 1.5
   })

   gsap.to('#moveMenu', {
      scrollTrigger: {
      scrub:1
      },
      x: 500,
      start: "top 90%",
      end: "top 20%"
      })
      gsap.to('#moveMenu2', {
         scrollTrigger: {
         scrub:1
         },
         x: -500,
         start: "top 90%",
         end: "top 20%"
         })

         gsap.to('#moveZagolovok', {
            scrollTrigger: {
            scrub:1
            },
            y: -70,
            x: 150,
            start: "top 90%",
            end: "top 20%"
            })
            gsap.to('#moveTown', {
               scrollTrigger: {
               scrub:4
               },
              start: "top 100%",
            end: "top 110%",
               x: 50,
             scale:1.1
               })
        
        
         document.getElementById("home1").addEventListener("click", function(perelist) {
            event.preventDefault(); 
            document.getElementById("home").scrollIntoView({ behavior: "smooth" });
          });
          

          document.getElementById("about1").addEventListener("click", function(perelist1) {
            event.preventDefault(); 
            document.getElementById("about").scrollIntoView({ behavior: "smooth" });
          });


          document.getElementById("menu1").addEventListener("click", function(perelist2) {
            event.preventDefault(); 
            document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
          });


          document.getElementById("gallery1").addEventListener("click", function(perelist3) {
            event.preventDefault(); 
            document.getElementById("gallery").scrollIntoView({ behavior: "smooth" });
          });

          document.getElementById("reviews1").addEventListener("click", function(perelist4) {
            event.preventDefault(); 
            document.getElementById("reviews").scrollIntoView({ behavior: "smooth" });
          });
          
          document.getElementById("contact1").addEventListener("click", function(perelist5) {
            event.preventDefault(); 
            document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
          });
          document.getElementById("blogs1").addEventListener("click", function(perelist6) {
            event.preventDefault(); 
            document.getElementById("blogs").scrollIntoView({ behavior: "smooth" });
          });
          
          
          
          
          
          
          
          

          






       

          
          
          
          
        
          
          
          