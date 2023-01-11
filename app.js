const para1 = document.querySelector(".erom");
const para2 = document.querySelector(".erod");
const btn = document.getElementById("notify");
const input = document.querySelector(".email");
const mailFor = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

btn.addEventListener("click", function(){

   if(input.value == ""){

     if(window.innerWidth > 600){
        para2.textContent = "Whoops! It looks like you forgot to add your email";
        para2.classList.add("error-D");
        setTimeout(function(){
           para2.classList.remove("error-D");
           para2.textContent = "";
           input.value = "";
        }, 800);
       }else{
        para1.textContent = "Whoops! It looks like you forgot to add your email";
        para1.classList.add("error-M");
        setTimeout(function(){
         para1.classList.remove("error-M");
         para1.textContent = "";
         input.value = "";
        }, 800);
       }


   }else if(input.value.match(mailFor)){
       alert("email registered succesfully");
       input.value = "";

    }else{
     if(window.innerWidth > 600){
        para2.textContent = "Please provide a valid email address";
        para2.classList.add("error-D");
        setTimeout(function(){
           para2.classList.remove("error-D");
           para2.textContent = "";
           input.value = "";
        }, 800);
      }else{

        para1.textContent = "Please provide a valid email address";
        para1.classList.add("error-M");
        setTimeout(function(){
         para1.classList.remove("error-M");
         para1.textContent = "";
         input.value = "";
        }, 800);
       }

    }

});