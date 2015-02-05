/*
Developed under a Research grant from NMEICT, MHRD
by
Amrita CREATE (Center for Research in Advanced Technologies for Education),
VALUE (Virtual Amrita Laboratories Universalizing Education)
Amrita University, India 2009 - 2013
http://www.amrita.edu/create
*/


// JavaScript Document
var abund_x;
var abund_y;
var vel_x;
var vel_y;
var start_x;
var start_y;
var end_x;
var end_y;
var fra_x;
var fra_y;
var abundance;
var velocity;
var energyContent;
var energyBurned;
var flySpeed;
var startValue;
var endValue;
var fraction;
var startValue1;
var endValue1;
var fraction1;
var slope;
var posflw;
var i=0;
var p=0.40;
var tp = new Array();
var et = new Array();
var ei = new Array();
var ti = new Array();
var ew = new Array();
var ep=0;
var e=0;
var tab2;

var YArray = new Array();
var y1=new Array();
var y2=new Array();
var y3=new Array();
var y1_sum=0
var y2_sum=0
var y3_sum=0
var result1=0;
var result2=0;
var result3=0;
var n1=new Array();
var XArr=new Array();
var tp1 = new Array();
var tp2 = new Array();
var tw=new Array();
var h=0;
var n=0;
var a=0;
var b=0;
var r=0;
var r1=0;
var r2=0;
var v=0;
var v1=0;
var v2=0;
var pi=3.141;
var x1=0;
var start_fn=0;
var end_fn=0;
var start_fn1=0;
var end_fn1=0;
var start_fn2=0;
var end_fn2=0;
var no_X;
var slice1;
var count;
var rc=new Array();
var rc1=new Array();
var rc2=new Array();
var XArray=new Array();
var XArray1=new Array();
var tmpArray=new Array();
var YArr=new Array();
var inpt1=0.01,inpt2=1,inpt3=0.1,inpt4=20,inpt5=0.01,inpt6=1,inpt7=1,inpt8=0.1,inpt9=20,inpt10=0.01,inpt11=1,inpt12=250,inpt13=0.1,inpt14=1,inpt15=1,inpt16=0.1,inpt17=20;
//fn for label text display in the graph
$(document).ready(function() {
	document.getElementById("top").innerHTML="Reciprocal proportion of waiting time of predator and total abundance of a prey  population";
	document.getElementById("left").innerHTML="Waiting time of predator(in seconds)";
	document.getElementById("bottom").innerHTML="Radius of foraging area (in meters)";
	

});

//Loading Graph
function Load()
{

 $.plot($("#GraphArea"), [ [] ]);	
 	
}
var tabSelected="tabHeader_1";
//Clicking tabs 
function tabClicked(e)
{

	$.plot($("#GraphArea"), [ [] ]);
	tmArray=new Array();
	document.getElementById("plot").disabled=false;
	tabSelected=e.id;
	Resetvalues();
	if(tabSelected=="tabHeader_2"){
		//document.getElementById("contrl").style.paddingTop=10+"px";
		document.getElementById("top").innerHTML="Average pursuit time";
	document.getElementById("left").innerHTML="Average pursuit time of predator( in seconds)";
	document.getElementById("bottom").innerHTML="Radius of foraging area (in meters)";
	
	}else if(tabSelected=="tabHeader_3"){
		//document.getElementById("contrl").style.paddingTop=0+"px";
		document.getElementById("top").innerHTML="Relation between average rate of energy gain per second and size of the foraging area";
	document.getElementById("left").innerHTML="Net energy gain(in kilocalories per second)";
	document.getElementById("bottom").innerHTML="Size of the foraging area(radius in meters)";
	
	}else{
		//document.getElementById("contrl").style.paddingTop=10+"px";
		document.getElementById("top").innerHTML="Reciprocal proportion of waiting time of predator and total abundance of a prey  population";
	document.getElementById("left").innerHTML="Waiting time of predator(in seconds)";
	document.getElementById("bottom").innerHTML="Radius of foraging area (in meters)";
	
	}
	
	
}
function showvalue1(newValue)
{	
	inpt1=roundNumber(newValue,2);
	document.getElementById("input1").innerHTML=inpt1;
}
function showvalue2(newValue)
{	
	inpt2=roundNumber(newValue,2);
	document.getElementById("input2").innerHTML=inpt2;
}
function showvalue3(newValue)
{	
	inpt3=roundNumber(newValue,2);
	document.getElementById("input3").innerHTML=roundNumber(newValue,2);
}
function showvalue4(newValue)
{	
	inpt4=roundNumber(newValue,2);
	document.getElementById("input4").innerHTML=inpt4;
}
function showvalue5(newValue)
{	
	inpt5=roundNumber(newValue,2);
	document.getElementById("input5").innerHTML=inpt5;
}
function showvalue6(newValue)
{	
	inpt6=roundNumber(newValue,2);
	document.getElementById("input6").innerHTML=inpt6;
}
function showvalue7(newValue)
{	
	inpt7=roundNumber(newValue,2);
	document.getElementById("input7").innerHTML=inpt7;
}
function showvalue8(newValue)
{	
	inpt8=roundNumber(newValue,2);
	document.getElementById("input8").innerHTML=inpt8;
}
function showvalue9(newValue)
{	
	inpt9=roundNumber(newValue,2);
	document.getElementById("input9").innerHTML=inpt9;
}
function showvalue10(newValue)
{	
	inpt10=roundNumber(newValue,2);
	document.getElementById("input10").innerHTML=inpt10;
}
function showvalue11(newValue)
{	
	inpt11=roundNumber(newValue,2);
	document.getElementById("input11").innerHTML=inpt11;
}
function showvalue12(newValue)
{	
	inpt12=roundNumber(newValue,2);
	document.getElementById("input12").innerHTML=inpt12;
}
function showvalue13(newValue)
{	
	inpt13=roundNumber(newValue,2);
	document.getElementById("input13").innerHTML=inpt13;
}
function showvalue14(newValue)
{	
	inpt14=roundNumber(newValue,2);
	document.getElementById("input14").innerHTML=inpt14;
}
function showvalue15(newValue)
{	
	inpt15=roundNumber(newValue,2);
	document.getElementById("input15").innerHTML=inpt15;
}
function showvalue16(newValue)
{	
	inpt16=roundNumber(newValue,2);
	document.getElementById("input16").innerHTML=inpt16;
}
function showvalue17(newValue)
{	
	inpt17=roundNumber(newValue,2);
	document.getElementById("input17").innerHTML=inpt17;
}

///  Function to show graph
function draw_graph(tmArray)
{
		document.getElementById("AP").disabled=true;
		document.getElementById("SV").disabled=true;
		document.getElementById("FR").disabled=true;
		document.getElementById("EV").disabled=true;
		document.getElementById("AP1").disabled=true;
		document.getElementById("VE").disabled=true;
		document.getElementById("SV1").disabled=true;
		document.getElementById("FR1").disabled=true;
		document.getElementById("EV1").disabled=true;
		document.getElementById("AP2").disabled=true;
		document.getElementById("VE1").disabled=true;
		document.getElementById("EC").disabled=true;
		document.getElementById("EB").disabled=true;
		document.getElementById("FS").disabled=true;
		document.getElementById("SV2").disabled=true;
		document.getElementById("FR2").disabled=true;
		document.getElementById("EV2").disabled=true;
		if ( $.browser.mozilla == true){
		
			$('.AP').slider({ 
				disabled: true,
			 });
			$('.SV').slider({ 
				disabled: true,
			 });
			$('.FR').slider({ 
				disabled: true,
			 });
			$('.EV').slider({ 
				disabled: true,
			 });
			$('.AP1').slider({ 
				disabled: true,
			 });
			$('.VE').slider({ 
				disabled: true,
			 });
			$('.SV1').slider({ 
				disabled: true,
			 });
			$('.FR1').slider({ 
				disabled: true,
			 });
			$('.EV1').slider({ 
				disabled: true,
			 });
			$('.AP2').slider({ 
				disabled: true,
			 });
			$('.VE1').slider({ 
				disabled: true,
			 });
			$('.EC').slider({ 
				disabled: true,
			 });
			$('.EB').slider({ 
				disabled: true,
			 });
			$('.FS').slider({ 
				disabled: true,
			 });
			$('.SV2').slider({ 
				disabled: true,
			 });
			$('.FR2').slider({ 
				disabled: true,
			 });
			$('.EV2').slider({ 
				disabled: true,
			 });
			
			
		}
	//alert(tmArray);
		$.plot($("#GraphArea"), [ { data: tmArray,color: '#1B9EB3'} ],
		{
			grid: 
			{
				hoverable: true, clickable: true
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
		
	}
	//fn to show tool tip in graph
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
			$("#x").text(pos.x.toFixed(2));
			$("#y").text(pos.y.toFixed(2));
					if (previousPoint != item.dataIndex) {
						previousPoint = item.dataIndex;
						$("#tooltip").remove();
						var x = item.datapoint[0].toFixed(2),
							y = item.datapoint[1].toFixed(2);
						
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
// restrict input boxes
function onlyNumbers(evt)
{ 
var e = event || evt; // for trans-browser compatibility

	var charCode = e.which || e.keyCode;
	
	if(((charCode == 190) ||(charCode == 110))||(charCode >= 96 && charCode <= 105))
	{
	
		return true;
	}
	

	 if ((charCode > 31) && (charCode < 48 || charCode > 57))
	{
		
		return false;
	
	}
	 
}

//To plot Graph.
function plotGraphFN(e) {
	
	document.getElementById("plot").disabled=true;
	
	getValues();
	Calculations();
	for(var k=1; k < XArr.length; k++)
	{
		var tmpArr=[XArr[k],YArray[k]];
		tmpArray.push(tmpArr);
	}
	draw_graph(tmpArray);
	tmpArray.splice(0,tmpArray.length);
	XArr.splice(0,XArr.length);
	YArray.splice(0,YArray.length);
	
}
//To get the values from sliders
function getValues() {
	if(tabSelected=="tabHeader_2"){
		
		abundance=inpt5;
		velocity=inpt6;
		startValue=inpt7;
		endValue=inpt9;
		fraction=inpt8;
		
	}else if(tabSelected=="tabHeader_3"){
	
		abundance=inpt10;
		velocity=inpt11;
		energyContent=inpt12;
		energyBurned=inpt13;
		flySpeed=inpt14;
		startValue=inpt15;
		endValue=inpt17;
		fraction=inpt16;
		
		
	}else{
		
		abundance=inpt1;
		startValue=inpt2;
		endValue=inpt4;
		fraction=inpt3;
	
	}
}
// calculations
function Calculations() {
	ep=2;
	no_X=(endValue/fraction);
	slice1=(endValue-startValue)/no_X;
	for (var i=0; i<no_X; i++) {
		//X values		
		XArr.push((3+(i*slice1)).toFixed(2));
		
	}
	
	count=1;
	// Y values
	for(var j=3; j<endValue; j+=slice1){
		
		tw[count]=trap(startValue,j,no_X);
		tp1[count]=trap1(startValue,j,no_X);
		tp2[count]=trap2(startValue,j,no_X);
		tp[count]=tp1[count]/tp2[count];
		ti[count]=tw[count]+tp[count];
		ei[count]=energyContent-energyBurned*tw[count]-ep*tp[count];
		et[count]= ei[count]/ti[count];
		count+=1;
		
	}
	for (var k=0; k<XArr.length; k++) {
		
		if(tabSelected=="tabHeader_1"){
			
			YArray.push(tw[k])
																
		} else if(tabSelected=="tabHeader_2") {
			
			YArray.push(roundNumber(tp[k],2))
									
		} else if(tabSelected=="tabHeader_3") {
			
			YArray.push(et[k])
		}
	}
	
	
	
}
//////// calculation for different  graph //////////////////
function trap(a,b,n) {
	h = (b-a) / n;
	for (var i=0; i<n; i++) {
		rc[i]=a+(i*h);	
		
	}
	for (var j=0; j<rc.length; j++) {
		y1[j]=fun1(rc[j]);
	}
	
	for (var k=1; k<(rc.length-1); k++) {
		y1_sum+=y1[k];
	}
	
	result1 = h*(y1[startValue] + (2*y1_sum) + y1[rc.length-1])/2;
	result1 = 1/result1; 
	return result1;

}
function fun1(r) {
	v= abundance*pi*r;
	return v;
}
function trap1(a,b,n) {
	h = (b-a) / n;
	for (var i=0; i<n; i++) {
		rc1[i]=a+(i*h);	
		
	}
	for (var j=0; j<rc1.length; j++) {
		y2[j]=fun2(rc1[j]);
	}
	
	for (var k=1; k<(rc1.length-1); k++) {
		y2_sum+=y2[k];
	}
	
	result2 = h*(y2[startValue] + (2*y2_sum) + y2[rc1.length-1])/2;
	return result2;

}
function fun2(r1) {
	v1= ((2*(r1/velocity)));
	return v1;
}
function trap2(a,b,n) {
	h = (b-a) / n;
	for (var i=0; i<n; i++) {
		rc2[i]=a+(i*h);	
		
	}
	for (var j=0; j<rc2.length; j++) {
		y3[j]=fun3(rc2[j]);
	}
	
	for (var k=1; k<(rc2.length-1); k++) {
		y3_sum+=y3[k];
	}
	
	result3 = h*(y3[startValue] + (2*y3_sum) + y3[rc2.length-1])/2;
	return result3;

}
function fun3(r2) {
	v2= abundance*pi*r2;
	return v2;
}

///////////////////////////////////////////////

//Function for round numbers
function roundNumber(num, dec) {
	var result = Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
	return result;
}

// Reset the functions
function resetBtn_FN() {	
		Resetvalues();
	
}
// To Reset sliders values 
function Resetvalues() {
	$.plot($("#GraphArea"), [ [] ]);
	tmArray=new Array();
	document.getElementById("AP").disabled=false;
	document.getElementById("SV").disabled=false;
	document.getElementById("FR").disabled=false;
	document.getElementById("EV").disabled=false;
	document.getElementById("AP1").disabled=false;
	document.getElementById("VE").disabled=false;
	document.getElementById("SV1").disabled=false;
	document.getElementById("FR1").disabled=false;
	document.getElementById("EV1").disabled=false;
	document.getElementById("AP2").disabled=false;
	document.getElementById("VE1").disabled=false;
	document.getElementById("EC").disabled=false;
	document.getElementById("EB").disabled=false;
	document.getElementById("FS").disabled=false;
	document.getElementById("SV2").disabled=false;
	document.getElementById("FR2").disabled=false;
	document.getElementById("EV2").disabled=false;
	if ( $.browser.mozilla == true){
		
			$('.AP').slider({ 
				disabled: false,
			 });
			$('.SV').slider({ 
				disabled: false,
			 });
			$('.FR').slider({ 
				disabled: false,
			 });
			$('.EV').slider({ 
				disabled: false,
			 });
			$('.AP1').slider({ 
				disabled: false,
			 });
			$('.VE').slider({ 
				disabled: false,
			 });
			$('.SV1').slider({ 
				disabled: false,
			 });
			$('.FR1').slider({ 
				disabled: false,
			 });
			$('.EV1').slider({ 
				disabled: false,
			 });
			$('.AP2').slider({ 
				disabled: false,
			 });
			$('.VE1').slider({ 
				disabled: false,
			 });
			$('.EC').slider({ 
				disabled: false,
			 });
			$('.EB').slider({ 
				disabled: false,
			 });
			$('.FS').slider({ 
				disabled: false,
			 });
			$('.SV2').slider({ 
				disabled: false,
			 });
			$('.FR2').slider({ 
				disabled: false,
			 });
			$('.EV2').slider({ 
				disabled: false,
			 });
			
			
		}
	$.plot($("#GraphArea"), [ [] ]);
	document.getElementById("plot").disabled=false;
	inpt1=0.01,inpt2=1,inpt3=0.1,inpt4=20,inpt5=0.01,inpt6=1,inpt7=1,inpt8=0.1,inpt9=20,inpt10=0.01,inpt11=1,inpt12=250,inpt13=0.1,inpt14=1,inpt15=1,inpt16=0.1,inpt17=20;
	document.getElementById("input1").value=0.01;
	document.getElementById("input2").value=1;
	document.getElementById("input3").value=0.1;
	document.getElementById("input4").value=20;
	document.getElementById("input5").value=0.01;
	document.getElementById("input6").value=1;
	document.getElementById("input7").value=1;
	document.getElementById("input8").value=0.1;
	document.getElementById("input9").value=20;
	document.getElementById("input10").value=0.01;
	document.getElementById("input11").value=1;
	document.getElementById("input12").value=250;
	document.getElementById("input13").value=0.1;
	document.getElementById("input14").value=1;
	document.getElementById("input15").value=1;
	document.getElementById("input16").value=0.1;
	document.getElementById("input17").value=20;

	XArr.splice(0,XArr.length);
	YArray.splice(0,YArray.length);
	
	tp = new Array();
	et = new Array();
	ei = new Array();
	ti = new Array();
	ew = new Array();
	ep=0;
	e=0;	
	YArray = new Array();
	y1=new Array();
	y2=new Array();
	y3=new Array();
	y1_sum=0
	y2_sum=0
	y3_sum=0
	result1=0;
	result2=0;
	result3=0;
	XArr=new Array();
	tp1 = new Array();
	tp2 = new Array();
	tw=new Array();
	h=0;
	n=0;
	a=0;
	b=0;
	r=0;
	r1=0;
	r2=0;
	v=0;
	v1=0;
	v2=0;
	pi=3.141;
	x1=0;
	no_X=0;
	slice1=0;
	count=0;
	rc=new Array();
	rc1=new Array();
	rc2=new Array();	
}
function sampFn(){
	alert("sg");
	}
///////////////////////////////////////////////////////////////////////////