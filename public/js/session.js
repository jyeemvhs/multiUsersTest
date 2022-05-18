let identifier = 0;
let number = 0;
polling();
function polling() {
    if (identifier != 0) {
          $.ajax({
            url: "/read",
            type: "GET",
            data: {},
            success: function(data){
$("#name").html(data.name3);              
$("#display").html(data.grade);
              } ,     
            dataType: "json"
          });           
    }
console.log("here i am"); 
    let numMilliSeconds = 1000;   // 1000 milliseconds = 1 second
    setTimeout(polling, numMilliSeconds);
}


 		
function logoutClicked(){
console.log("session logoutClicked")
	$.get("/logout",function(data){
console.log("session logout function callback");		
		window.location = data.redirect;
	});
	return false;             
}

function globalUpdateClicked(){
          $.ajax({
            url: "/globalUpdate",
            type: "PUT",
            data: {},
            success: function(data){
$("#global").html(data.globalValue);
              } ,     
            dataType: "json"
          });   
  return false;             
}

function sessionUpdateClicked(){
          number++;
          $.ajax({
            url: "/sessionUpdate",
            type: "PUT",
            data: {grade:number},
            success: function(data){
$("#name").html(data.name2);
              } ,     
            dataType: "json"
          });   
	return false;             
}



$(document).ready(function(){ 
console.log("session doc ready")
	$.get("/userInfo",function(data){
console.log("session get userInfo function callback");		

		if (data.name)
			$("#session").html("Session " + data.name);
    identifier = 1;
	});

  $("#globalUpdate").click(globalUpdateClicked);
  $("#sessionUpdate").click(sessionUpdateClicked);
	$("#logout").click(logoutClicked);

});  		
    


