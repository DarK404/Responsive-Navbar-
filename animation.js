  var x = 0;
  var width=window.innerWidth;
  var t=0;
  var m=0;
$(document).ready(function(){
window.addEventListener("resize",function1)
function function1(){
  var width=window.innerWidth;
  console.log(width); 
  var lls= document.getElementById("check");
  if(width>795){
   $("#slide").show();
   console.log('Kbira');
  }
   else if(lls.checked==true) {
    $("#slide").hide();
   
    $("#slide").animate({
           opacity:'1'}, "slow"
        );
   } 
}
  $('input[name=checkbox]').change(function(){
      if($(this).is(':checked')) {
        console.log("ykhdem1");
        console.log("9bal loula");
    $("#slide").hide();
      console.log("Loula"); 
        $("#slide").animate({
          right :'hide',
           opacity:'0.5'}, "fast"
        );     
    } else {
      console.log("ykhdmch");
      $("#slide").show();
    console.log('Sghira');
    $("#slide").animate({  
      left :'show',
           opacity:'1'}, "slow"
        );
      m=0; 
    }
});
  });  
