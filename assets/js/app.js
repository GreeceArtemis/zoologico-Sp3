var img=document.getElementsByClassName("animal");
var select=document.getElementById("select");
select.onchange=function(){
  if(select.value=="original"){
      for(var i=0;i<img.length;i++){
          img[i].classList.remove("blancoYnegro");
          img[i].classList.remove("invertir");
          img[i].classList.remove("sepia");
          img[i].classList.add("original");
      }
  }
  if(select.value=="blancoYnegro"){
      for(var i=0;i<img.length;i++){
          img[i].classList.remove("original");
          img[i].classList.remove("invertir");
          img[i].classList.remove("sepia");
          img[i].classList.add("blancoYnegro");
      }
  }
  if(select.value=="invertir"){
      for(var i=0;i<img.length;i++){
          img[i].classList.remove("blancoYnegro");
          img[i].classList.remove("original");
          img[i].classList.remove("sepia");
          img[i].classList.add("invertir");
      }
  }
  if(select.value=="sepia"){
      for(var i=0;i<img.length;i++){
          img[i].classList.remove("blancoYnegro");
          img[i].classList.remove("invertir");
          img[i].classList.remove("original");
          img[i].classList.add("sepia");
      }
  }
};
