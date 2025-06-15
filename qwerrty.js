const employee = document.querySelectorAll('.qw');
qw.addEventListener('mouseover',function(){
    this.style.transform = 'scale(1.05)'
  qw.addEventListener('mouseout',function(){
        this.style.transform = 'scale(1.00)'
  })
})

document.getElementById("qw").addEventListener("click", function(perelist) {
    event.preventDefault(); 
    document.getElementById("qw1").scrollIntoView({ behavior: "smooth" });
  });
  document.getElementById("er").addEventListener("click", function(perelist) {
    event.preventDefault(); 
    document.getElementById("er1").scrollIntoView({ behavior: "smooth" });
  });
  document.getElementById("ty").addEventListener("click", function(perelist) {
    event.preventDefault(); 
    document.getElementById("ty1").scrollIntoView({ behavior: "smooth" });
  });