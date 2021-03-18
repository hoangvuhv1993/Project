
// Chờ tài liệu tải xong
$(document).ready(function(e){
	
  //RESIZABLE
  $('#Resizable_1').resizable({
  });
  $('#Resizable_2').resizable({
	  alsoResize:"#Resizable_1",
	  aspectRadio:4/3
  });
});