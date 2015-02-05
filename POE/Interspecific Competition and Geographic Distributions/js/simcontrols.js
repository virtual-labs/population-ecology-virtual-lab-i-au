// JavaScript Document
/*
Developed under a Research grant from NMEICT, MHRD
by
Amrita CREATE (Center for Research in Advanced Technologies for Education),
VALUE (Virtual Amrita Laboratories Universalizing Education)
Amrita University, India 2009 - 2013
http://www.amrita.edu/create
*/


var start=1;
var End;
var frc;
var abh;
var ahb;
var kb;
var kh;
var s=0;
var k=0;
var n=0;
var q=0;
var v=0;
var t=0;
var kb_a=200;
var kb_b=2000;
var kh_a=100;
var kh_b=1000;
var Xmax=0;
var Ymax=0;
var Xarray=new Array();
var YArray1=new Array();
var YArray2=new Array();
var YArray3=new Array();
var tmpArray=new Array();
var tmpArray1=new Array();
var tmpArray2=new Array();
var SimName="Interspecific Competition and Geographic Distributions";
 
$(document).ready(function() {
//fn for label text display in the graph
$('#PCC').click(function() {
	document.getElementById("top").innerHTML="Carrying Capacity of Each species";
	document.getElementById("left").innerHTML="Carrying Capacity";
	

});
//fn for label text display in the graph
$('#PD').click(function() {
	document.getElementById("top").innerHTML=" Population Growth of species";
	document.getElementById("left").innerHTML="Density of each species";
	

});
//fn for label text display in the graph
$('#PEB').click(function() {
	document.getElementById("top").style.left=4+"px";
	document.getElementById("top").style.top=8+"px";
	document.getElementById("top").innerHTML="Ploting Environmental gradient Vs ratio of K-species 1/K-species2 for eastern border";
	document.getElementById("left").innerHTML="Ratio of K-species 1/K-species2 ";
	

});
//fn for label text display in the graph
$('#PWB').click(function() {
	document.getElementById("top").innerHTML="Ploting Environmental gradient Vs ratio of K-species 1/K-species2 for western border";
	document.getElementById("left").innerHTML="Ratio of K-species 1/K-species2 ";
	

});
});
//Showing slider values..
function showPGSvalue(newValue)
{
	
	if(newValue==0){
		
	document.getElementById("PGSrange").innerHTML=1;
	document.getElementById("PGS").value=45;
	
	}else{
	document.getElementById("PGSrange").innerHTML=newValue;
	}
	//alert(document.getElementById("PGS").value);
}
function showFrcvalue(newValue)
{
	document.getElementById("Frcrange").innerHTML=newValue;
}
function showEndvalue(newValue)
{
	document.getElementById("Endrange").innerHTML=newValue;
}
function showabhsvalue(newValue)
{
	var str=newValue;
	var abhsvalue=str.slice(0,3);
	document.getElementById("abhsrange").innerHTML=abhsvalue;
}

function showahbsvalue(newValue)
{
	var str=newValue;
	var ahbsvalue=str.slice(0,3);
	document.getElementById("ahbsrange").innerHTML=ahbsvalue;
}
//Initially loading..
function Load()
{
	$.plot($("#GraphArea"), [ [] ],{
		 xaxis: 
		{ 
			min:0
			
		},
		yaxis:{
			min:0
		}
	});	
	
		
		
		

}
// fn for getting the input values
function getValues()
{
	start=document.getElementById("PGS").value;
	frc=document.getElementById("Frc").value;
	End=document.getElementById("End").value;
	abh=document.getElementById("abh").value;
	ahb=document.getElementById("ahb").value;
}
// fn for calculating capacity 
function capacityCalculation()
{
	//X values
	var j=Number(start);
	 while(j<Number(End))
	 {
		j=Number(j)+Number(frc);
		Xarray.push(j);
	 }

	 //Y values
	 for (var i=0; i<Xarray.length; i++) {
		kb=(kb_a *(1-(Number(Xarray[i])/Number(kb_b)))).toFixed(2);
		YArray1.push(kb);
		kh=(kh_a *(1+(Number(Xarray[i])/Number(kh_b)))).toFixed(2);
		YArray2.push(kh);
	}
	
}

// fn for densityCalculation
function densityCalculation() 
{
	//X values
	var r=Number(start);
	while (r<Number(End))
	{
		r=Number(r)+Number(frc);
		Xarray.push(r);
	}
	//Y values
	for (var w=0; w<Xarray.length; w++){
	kb=(Number(kb_a) *(1-(Number(Xarray[w])/Number(kb_b)))).toFixed(2);
	kh=(Number(kh_a) *(1+(Number(Xarray[w])/Number(kh_b)))).toFixed(2);
	var nb=((Number(kb)-(Number(abh)*Number(kh)))/(1-(Number(abh)*Number(ahb)))).toFixed(2);
	YArray1.push(nb);
	
	var nh=((Number(kh)-(Number(ahb)*Number(kb)))/(1-(Number(abh)*Number(ahb)))).toFixed(2);
	YArray2.push(nh);
	}
	}
	
// fn for easternCalculation
function easternCalculation() {
	//X values
	var u=Number(start);
	while (u<Number(End)) {
		u=Number(u)+Number(frc);
		
		Xarray.push(u);
	}
	//Y values
		for (var r=0; r<Xarray.length; r++) {
		kb=(Number(kb_a) *(1-(Number(Xarray[r])/Number(kb_b)))).toFixed(2);
		kh=(Number(kh_a) *(1+(Number(Xarray[r])/Number(kh_b)))).toFixed(2);
		var eb=(Number(kb)/Number(kh)).toFixed(2);
		YArray1.push(eb);
		YArray2.push(abh);
		var ebr=Number(Number(abh)-(Number(kb)/Number(kh))).toFixed(2);
		YArray3.push(ebr);
		}
}
//fn for westernCalculation
function westernCalculation() {
	//X values
	var l=Number(start);
	while (l<Number(End)) {
		l=l+Number(frc);
		Xarray.push(l);
	}
	//Y values
	for (var ee=0; ee<Xarray.length; ee++) {
		kb=(kb_a *(1-(Number(Xarray[ee])/Number(kb_b)))).toFixed(2);
		kh=(kh_a *(1+(Number(Xarray[ee])/Number(kh_b)))).toFixed(2);
		var wb=(Number(kh)/Number(kb)).toFixed(2);
		YArray1.push(wb);
		YArray2.push(ahb);
		var wbr=(Number(ahb)-(Number(kh)/Number(kb))).toFixed(2);
		YArray3.push(wbr);
	}
	
}
//fn for ploting western graph
function PlotWestern(){
	$("#tooltip").remove();
	getValues();
	westernCalculation();
	for(var k=0; k < Xarray.length; k++)
	{
		var tmpArr=[Xarray[k],YArray1[k]];
		tmpArray.push(tmpArr);
		var tmpArr1=[Xarray[k],YArray2[k]];
		tmpArray1.push(tmpArr1);
		var tmpArr2=[Xarray[k],YArray3[k]];
		tmpArray2.push(tmpArr2);
	}
	$.plot($("#GraphArea"), [
	{label :"Carrying Capacity",data:tmpArray},
	{label :"Competition coefficient alpha",data:tmpArray1},
	{label :"Geographical western border",data:tmpArray2}
	],
	{
		grid: 
		{
			hoverable: true, clickable: true
		},
		xaxis:
		{
			min:0
		},
		yaxis:
		{
			min:0
		},		
		points: 
		{ 
		show: false 
		},
		lines: 
		{
			 show: true 
		 }
		
	});
tmpArray.splice(0,tmpArray.length);
tmpArray1.splice(0,tmpArray1.length);	
tmpArray2.splice(0,tmpArray2.length);	
Xarray.splice(0,Xarray.length);
YArray1.splice(0,YArray1.length);
YArray2.splice(0,YArray2.length);
YArray3.splice(0,YArray3.length);

}
//fn for ploting eastern graph
function PlotEastern(){
	$("#tooltip").remove();
	getValues();
	easternCalculation();
		for(var k=0; k < Xarray.length; k++)
	{
		var tmpArr=[Xarray[k],YArray1[k]];
		tmpArray.push(tmpArr);
		var tmpArr1=[Xarray[k],YArray2[k]];
		tmpArray1.push(tmpArr1);
		var tmpArr2=[Xarray[k],YArray3[k]];
		tmpArray2.push(tmpArr2);
	}
	$.plot($("#GraphArea"), [
	{label :"Carrying Capacity",data:tmpArray},
	{label :"Competition coefficient alpha",data:tmpArray1},
	{label :"Geographical eastern border",data:tmpArray2}
	],
	{
		grid: 
		{
			hoverable: true, clickable: true
		},
		xaxis:
		{
			min:0
		},
		yaxis:
		{
			min:0
		},		
		points: 
		{ 
		show: false 
		},
		lines: 
		{
			 show: true 
		 }
		
	});
tmpArray.splice(0,tmpArray.length);
tmpArray1.splice(0,tmpArray1.length);	
tmpArray2.splice(0,tmpArray2.length);	
Xarray.splice(0,Xarray.length);
YArray1.splice(0,YArray1.length);
YArray2.splice(0,YArray2.length);
YArray3.splice(0,YArray3.length);
}
//fn for ploting density graph
function plotDensity(){
	$("#tooltip").remove();
	getValues();
	densityCalculation();
	for(var k=0; k < Xarray.length; k++)
	{
		var tmpArr=[Xarray[k],YArray1[k]];
		tmpArray.push(tmpArr);
		var tmpArr1=[Xarray[k],YArray2[k]];
		tmpArray1.push(tmpArr1);
	}
$.plot($("#GraphArea"), [
{label :"Population Growth of Species1",data:tmpArray},
{label :"Population Growth of Species1",data:tmpArray1}
],
{
		grid: 
		{
			hoverable: true, clickable: true
		},
		xaxis:
		{
			min:0
		},
		yaxis:
		{
			min:0
		},		
		points: 
		{ 
		show: false 
		},
		lines: 
		{
			 show: true 
		 }
		
	});
tmpArray.splice(0,tmpArray.length);
tmpArray1.splice(0,tmpArray1.length);	
Xarray.splice(0,Xarray.length);
YArray1.splice(0,YArray1.length);
YArray2.splice(0,YArray2.length);

}
// fn for ploting capacity graph	
function plotCapacity()
{
	$("#tooltip").remove();
	getValues();
	capacityCalculation();
	for(var k=0; k < Xarray.length; k++)
	{
		var tmpArr=[Xarray[k],YArray1[k]];
		tmpArray.push(tmpArr);
		var tmpArr1=[Xarray[k],YArray2[k]];
		tmpArray1.push(tmpArr1);
	}
	$.plot($("#GraphArea"), [
	{label :"Carrying Capacity of Species1",data:tmpArray}
	,
	{label :"Carrying Capacity of Species2",data:tmpArray1}
	],
	{
		
		grid: 
		{
			hoverable: true, clickable: true
		},
		yaxis:
		{
			min:0

		},
		xaxis:
		{
			min:0
		},	
		lines: 
		{
			 show: true 
		}
		
	});
tmpArray.splice(0,tmpArray.length);
tmpArray1.splice(0,tmpArray1.length);	
Xarray.splice(0,Xarray.length);
YArray1.splice(0,YArray1.length);
YArray2.splice(0,YArray2.length);
}
//Funcn for resetting..
function Reset()
{
	$.plot($("#GraphArea"), [ [] ]);	
	document.getElementById("PGS").value=1;
	document.getElementById("Frc").value=10;
	document.getElementById("End").value=1000;
	document.getElementById("abh").value=0.8;
	document.getElementById("ahb").value=0.6;
	
	document.getElementById("PGSrange").innerHTML=1;
	document.getElementById("Frcrange").innerHTML=10;
	document.getElementById("Endrange").innerHTML=1000;
	document.getElementById("abhsrange").innerHTML=0.8;
	document.getElementById("ahbsrange").innerHTML=0.6;
	}
//fn for tooltip
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