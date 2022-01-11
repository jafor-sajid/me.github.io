// nav menu
// menu opn by icn
$(document).ready(function() {
    $('#icon').click(function(){
      $('ul').toggleClass('show');
    })
  
  });
  // (2no. nav) menu opn by icn
  $(document).ready(function() {
    $('#nav2icon').click(function(){
      $('ul').toggleClass('show');
    })
  
  });
  
  
  
  
  //nav scrllng
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 107) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-105px";
  }
  }