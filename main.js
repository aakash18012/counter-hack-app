
document.getElementById('inc').addEventListener("click", function(){
var counter=document.getElementById("counter").value;
   document.getElementById("counter").value = ++counter;
});


document.getElementById('dec').addEventListener("click", function(){
    var counter=document.getElementById("counter").value;
    document.getElementById("counter").value = --counter;
});
