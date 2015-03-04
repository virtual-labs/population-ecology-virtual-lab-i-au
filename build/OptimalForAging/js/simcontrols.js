/*
Developed under a Research grant from NMEICT, MHRD
by
Amrita CREATE (Center for Research in Advanced Technologies for Education),
VALUE (Virtual Amrita Laboratories Universalizing Education)
Amrita University, India 2009 - 2013
http://www.amrita.edu/create
*/


// JavaScript Document

var hw;
var aw;
var frc;
var end;
var ab;
var abVal;
var k=0;
var count=1;
var XArr=new Array();
var YArr1=new Array();
var YArr2=new Array();
var YArr3=new Array();
var YArr4=new Array();
var tmpArray=new Array();
var tmpArray3=new Array();
var tmpArray1=new Array();
var tmpArray2=new Array();
var time;
var SimName="Optimal foraging with minimal time";
window.clearInterval(time);
// show changes on HWrange slider values
function showHWvalue(newValue)
{
	document.getElementById("HWrange").innerHTML=newValue;
}
//fn for label text display in the graph
$(document).ready(function() {
document.getElementById("top").innerHTML="The average time per prey item for a shrew for aging for worms under different conditions of abundance";
document.getElementById("left").innerHTML=" Average time(in sec) for a shrew to find and capture a prey item";
document.getElementById("bottom").innerHTML="Abundance of worms(in worms per seconds)";
document.getElementById("runBtn").disabled = false;
});
// show changes on AWvalue slider values
function showAWvalue(newValue)
{
	document.getElementById("AWrange").innerHTML=newValue;
}
// show changes on Fraction slider values
function showFrcvalue(newValue)
{
	document.getElementById("Frcrange").innerHTML=newValue;
}
// show changes on Ending Values on slider 
function showEndvalue(newValue)
{
	
	var str=newValue;
	var endvalue=str.slice(0,4);
	document.getElementById("Endrange").innerHTML=endvalue;
	var abval=endvalue*0.05;
	document.getElementById("AB").value=(endvalue*0.05).toFixed(6);
	
}
// show changes on HBrange slider values
function showHBvalue(newValue)
{
	document.getElementById("HBrange").innerHTML=newValue;
}
// Initially loading the graph
function Load()
{

	$.plot($("#GraphArea"), [ [] ]);	

}
// Getting values for plotting graph
function GetValues()
{	
	hw=document.getElementById("HW").value;
	aw=document.getElementById("AW").value*0.001;
	frc=document.getElementById("FRC").value*0.001;
	end=document.getElementById("END").value;
	hb=document.getElementById("HB").value;
	abVal=document.getElementById("AB").value;
	ab=end*0.05;
	
	
}
// Calculation for plotting graph
function Graph_Calculations() {
	GetValues();	
	var no_X=(Number(end)/Number(frc));
	no_X=no_X.toFixed(0);
	
	//X value
    for (var i=0; i<=(no_X-1); i++) 
	{
		
		XArr.push((Number(aw)+(Number(frc)*i)).toFixed(3));

	}
	//Y1 value
	for (var j=0; j<XArr.length; j++) {
		
		//Y1 value
		var temp1=(1/XArr[j])+Number(hw);
		YArr1.push(temp1.toFixed(2));
			
		//Y2 value
		var temp2=(1+(Number(XArr[j])*Number(hw))+(Number(ab)*Number(hb)))/(Number(XArr[j])+Number(ab));
		YArr2.push(temp2.toFixed(2));
		
		//Y3 value
		var temp3=(1+(Number(XArr[j])*Number(hw))+(Number(XArr[j])*Number(hb)))/(2*Number(XArr[j]));
		YArr3.push(temp3.toFixed(2));
		
		//Y4 value
		var temp4=(1+(Number(XArr[j])*Number(hw))+(2*Number(XArr[j])*Number(hb)))/(3*Number(XArr[j]));
		YArr4.push(temp4.toFixed(2));
	}
	
	
}
function incr(){
   	//window.clearInterval(time);
	setTimeout("time");
	     count++;
		if(count<100)
		{
		runFN();
		}
		else{
			exit();
		}
		
	}
	// Function for clicking run button
function runFN()
{
	document.getElementById("runBtn").disabled = true;
	if ( $.browser.mozilla == true){
		
		$('.HW').slider({ 
			disabled: true,
		 });
		$('.AW').slider({ 
			disabled: true,
		 });
		$('.FRC').slider({ 
			disabled: true,
		 });
		$('.END').slider({ 
			disabled: true,
		 });
		$('.HB').slider({ 
			disabled: true,
		 });
	}else{
		document.getElementById("HW").disabled= true;
		document.getElementById("AW").disabled= true;
		document.getElementById("FRC").disabled= true;
		document.getElementById("END").disabled= true;
		document.getElementById("HB").disabled= true;
	}
	Graph_Calculations();
	
	for(k=0; k<=count; k++){
		var tmpArr=[XArr[k],YArr1[k]];
		tmpArray.push(tmpArr);
	
		var tmpArr1=[XArr[k],YArr2[k]];
		tmpArray1.push(tmpArr1);
	
		var tmpArr2=[XArr[k],YArr3[k]];
		tmpArray2.push(tmpArr2);
	
		var tmpArr3=[XArr[k],YArr4[k]];
		tmpArray3.push(tmpArr3);
		
		time =setTimeout("incr()",1000);
	}
	
	$.plot($("#GraphArea"), [
	{label :"aw is equal to the input from user",data:tmpArray},
	{label :"aw is half of abundance of beetle",data:tmpArray1},
	{label :"aw is equal to the abundance of beetle",data:tmpArray2},
	{label :"aw is equal to twice of the abundance of beetle",data:tmpArray3}
	],
	{
		grid: 
		{
			hoverable: true, clickable: true
		},
		xaxis:
		{
			min:0,
		    max:0.09
		},
		yaxis:
		{
			min:0,
			max:250
		},		
		points: 
		{ 
		show: true 
		},
		lines: 
		{
			 show: true 
		 }
		
	});
	tmpArray.splice(0,tmpArray.length);
	tmpArray1.splice(0,tmpArray1.length);	
	tmpArray2.splice(0,tmpArray2.length);	
	tmpArray3.splice(0,tmpArray3.length);	
	XArr.splice(0,XArr.length);
	YArr1.splice(0,YArr1.length);
	YArr2.splice(0,YArr2.length);
	YArr3.splice(0,YArr3.length);
	YArr4.splice(0,YArr4.length);
}

//fn for tool tip

$(function () {
function showTooltip(x, y, contents) {
$('<div id="tooltip">' + contents + '</div>').css( {
position: 'absolute',
display: 'none',
top: y + 5,
left: x + 5,
border: '1px solid #fdd',
padding: '2px',
'background-color': '#fee',
opacity: 0.80
}).appendTo("body").fadeIn(200);
}

var previousPoint = null;
$("#GraphArea").bind("plothover", function (event, pos, item) {
$("#x").text(pos.x.toFixed(3));
$("#y").text(pos.y.toFixed(3));


if (previousPoint != item.dataIndex) {
previousPoint = item.dataIndex;

$("#tooltip").remove();
var x = item.datapoint[0].toFixed(3),
y = item.datapoint[1].toFixed(3);

showTooltip(item.pageX, item.pageY," X:" + x + " and Y:" + y);
}

else {
$("#tooltip").remove();
previousPoint = null;            
}

});

$("#GraphArea").bind("plotclick", function (event, pos, item) {

});
});
//Function for reset
function resetFN(){
	document.getElementById("runBtn").disabled = false;
	document.getElementById("HW").value=1;
	document.getElementById("AW").value=5;
	document.getElementById("FRC").value=5;
	document.getElementById("END").value=0.05;
	document.getElementById("HB").value=60;
	document.getElementById("AB").value=0.0025;
	
	document.getElementById("HWrange").innerHTML=1;
	document.getElementById("AWrange").innerHTML=5;
	document.getElementById("Frcrange").innerHTML=5;
	document.getElementById("Endrange").innerHTML=0.05;
	document.getElementById("HBrange").innerHTML=60;
	if ( $.browser.mozilla == true){
		
		$('.HW').slider({ 
			disabled: false,
		 });
		$('.AW').slider({ 
			disabled: false,
		 });
		$('.FRC').slider({ 
			disabled: false,
		 });
		$('.END').slider({ 
			disabled: false,
		 });
		$('.HB').slider({ 
			disabled: false,
		 });
	}else{
		document.getElementById("HW").disabled=false;
		document.getElementById("AW").disabled=false;
		document.getElementById("FRC").disabled=false;
		document.getElementById("END").disabled=false;
		document.getElementById("HB").disabled=false;
	}
	
	count=1;	
	
	
}