var angle = 0;
var weight = 5;
var rollerWt = 10;
var downward = 0;
var rotateSca=0;
var controlArr;
var gt;
var trip;
var help_Rotate;
var environment,envmntIndex=0,envmntGravity=9.8; 
$(document).ready(function(){
	gt = new Gettext({ 'domain' : 'messages' });
	$('#olabmenuBar li:first-child a').html(gt.gettext("SAVE"));
	$('#olabmenuBar li:nth-child(2) a').html(gt.gettext("FULL SCREEN"));
	$('#olabmenuBar li:last-child a').html(gt.gettext("EXIT"));
	$(".labName").html(gt.gettext("Developed by CDAC Mumbai & Amrita University <br> Under research grant from department of IT"));
	document.getElementById("expName").innerHTML=gt.gettext("Inclined plane");
	controlArr = [gt.gettext('Angle:'),'0&deg;',gt.gettext('Hanging Weight:'),gt.gettext('Show Scale'),gt.gettext('Reset'),gt.gettext('Mass of roller, m = 10 g'),gt.gettext('Show Scale'),gt.gettext('Hide Scale')];
	environment=[gt.gettext('Earth'),gt.gettext('Moon'),gt.gettext('Uranus'),gt.gettext('Saturn'),gt.gettext('Jupiter')]
	help_Rotate=gt.gettext('Click on the rotate icon to rotate the scale.');
	envmntGravity=[9.8,1.6,8.69,11.171,25.95];
	//Function for Combobox..
	dropdown_function($("#envmnt"),environment);
	$("#AngleLbl").html(controlArr[0]);
	$("#AngleVal").html(controlArr[1]);
	$("#rightminval").html('0');
	$("#rightmaxval").html('60');
	$("#hangingWhtLbl").html(controlArr[2]);
	$("#LeftVal").html('5'+'g');
	$("#leftminval").html('5'); 
	$("#leftmaxval").html('100'); 
	$("#scaleBtn").attr('value',controlArr[3]);
	$("#ResetBtn").attr('value',controlArr[4]);
	$("#helpLabel").html(controlArr[5]);
	$('#ScaleDiv').draggable({
		drag:function(event,ui){}
	});
	//Dropdown for add environments into the drop down.
	function dropdown_function(getid,array_set){
		$.each(array_set, function(val, text) {
		getid.append($('<option></option>').val(val).html(text));});			
	}
	//Function to change environment combobox 
	$("#envmnt").change(function(){	
		envmntIndex=$('#envmnt option:selected').val();
		stopRotation();
		$("#threadVert").css({height:"80px"})
		$("#weight").css({top:"80px"})
		$("#threadHoriz").css({width:"102px"});
		$("#roller").css({left:"119px"});
		angle = 0;
		weight = 5;
		rollerWt = 10;
		downward = 0;
		rotateSca=0;
		$("#angleslider").val(0);
		$("#HangMass").val(0);
		$("#AngleVal").html(angle);
		$("#LeftVal").html(weight+'g');	
		$("#hangWeight").css({height:'2px',top:'42px'});	
		setRotation();		
	});
});
//function for changing angle slider
function changeAngle(val){
	setRotation();
	check();
}
function setRotation(){
	angle = $("#angleslider").val()
	$("#AngleVal").html(angle +'&deg;');
	var rotateCSS1 = 'rotate(' +angle + 'deg)';			           //  movement of inclined stick
	$('#inclineStick').css({ '-moz-transform-origin':'100% 65%',
				'-webkit-transform-origin': '100% 65%',
				'-moz-transform': rotateCSS1,
				'-webkit-transform': rotateCSS1});
	var rotateThread = 'rotate(' + -angle + 'deg)';			
	$('#vertContainer').css({ '-moz-transform-origin':'0% 0%',    //movement of hanging weight
				'-webkit-transform-origin': '0% 0%',
				'-moz-transform': rotateThread,
				'-webkit-transform': rotateThread});		
	var sinValue = Math.sin(angle*(Math.PI/180)); 
	downward = rollerWt * envmntGravity[envmntIndex] *sinValue;
}
//function for changing hanging weight slider
function changeHangWeight(val){
	weight = $("#HangMass").val();	
	$("#LeftVal").html(weight+'g');	
	$("#hangWeight").css({height:parseInt((val*.33)+.35)+'px',top:parseInt((-val*.33)+43.65)+'px'});
	check();
}
function stopRotation(){
	$("#threadVert").stop();
	$("#weight").stop();
	$("#threadHoriz").stop();
	$("#roller").stop();	
}
//function for movement of roller
function check(){
	stopRotation();	
	var wt = downward.toFixed(1);   //round integer with one decimal
	var wtSplit =  wt.split(".")  //get the fractional part
	var wt1 = downward.toFixed(2); 
	var wtSplit1 = wt1.split(".")
	//conditions for upward and downward movement of roller
	if(((wtSplit[1]==8)||(wtSplit[1]==9))){    
		if(weight>=Math.floor(downward)+2){ 
			upward();		
		}	
		if(weight<=Math.floor(downward)){
			downward1();		
		}	
	}
	else if(((wtSplit1[1]>=90)&&(wtSplit1[1]<=99))&&(wtSplit[1]==0))
	{
		if(weight>=Math.floor(downward)+2){ 
			upward();		
		}	
		if(weight<=Math.floor(downward)){
			downward1();		
		}	
	}
	else if(((wtSplit[1]>=0)&&(wtSplit[1]<=2))){  
		if(weight>=Math.floor(downward)+1){ 
			upward();		
		}	
		if(weight<=Math.floor(downward)-1){  
			downward1();		
		}	
	}
	else{   
		if(weight>=Math.floor(downward)+1){ 
			upward();		
		}	
		if(weight<=Math.floor(downward)){ 
			downward1();	
		}	
	}
}
//function for downward movement of roller
function downward1(){
	$("#threadVert").animate({height:"9px"},2000)
	$("#weight").animate({top:"8px"},2000)
	$("#threadHoriz").animate({width:"198px"},2000);
	$("#roller").animate({left:"188px"},2000);	
}
//function for upward movement of roller
function upward(){
	$("#threadVert").animate({height:"188px"},2000)
	$("#weight").animate({top:"187px"},2000)
	$("#threadHoriz").animate({width:"15px"},2000);
	$("#roller").animate({left:"30px"},2000);
}
//for closewise turn of scale
function rotateScale(){
	rotateSca=rotateSca+2;
	rotateScalefn();
}
//for anticlosewise turn of scale
function rotateScaleAnticlock(){
	rotateSca=rotateSca-2;
	rotateScalefn();
}
// function for rotating the scale
function rotateScalefn(){	
	var rotateScaleVar = 'rotate('+rotateSca+'deg)';
		$("#scaleInside").css({
			 '-webkit-backface-visibility':' hidden',
			  '-webkit-transform':' translateZ(0)'+rotateScaleVar,
			 '-moz-transform-origin':'50% 50%',
			'-webkit-transform-origin': '50% 50%',
			'-webkit-transform': 'perspective(1px) '+rotateScaleVar,
			'-moz-transform': 'perspective(1px)' +rotateScaleVar,
			'-ms-transform': rotateScaleVar,
			'-o-transform': rotateScaleVar,
			'transform': 'perspective(1px) '+rotateScaleVar,
			'outline': '1px solid transparent'
		});
}
//function for showing/hiding the scale
function ShowScale(){
	trip = new Trip([
	{
		sel : $('#scalearrowImg'),
		position : 'w',
		content : help_Rotate,
		expose : false,
		delay : 4000
	}
	])	
	if(document.getElementById('scaleBtn').value==controlArr[6]){//show scale
		$('#scaleBtn').attr('value',controlArr[7]);		
		$('#ScaleDiv').css({display:'block'});
		trip.start(); 
		window.trip = trip;	
	}
	else{//hide scale
		$('#scaleBtn').attr('value',controlArr[6]);		
		$('#ScaleDiv').css({display:'none'});
		$('.trip-block').hide();
		trip.stop();
	}
}