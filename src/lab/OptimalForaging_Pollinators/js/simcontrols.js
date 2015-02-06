/*
Developed under a Research grant from NMEICT, MHRD
by
Amrita CREATE (Center for Research in Advanced Technologies for Education),
VALUE (Virtual Amrita Laboratories Universalizing Education)
Amrita University, India 2009 - 2013
http://www.amrita.edu/create
*/


// JavaScript Document
var pos;
var noc,yi,pof,nd,eb,tb,ew,tw,ef,tf,ee,te;
var XArray=new Array();
var XArray1=new Array();
var YArray=new Array();
var tmpArray=new Array();
var XArr=new Array();
var XArray1=new Array();
var YArr=new Array();
var tmpArray=new Array();
//var p=nd;
var inti=0;
var plot;
var SimName="Optimal foraging -Polinators";
var Yname="Number of Calories in the Flower";
//fn for label text display in the graph
$(document).ready(function() {
	document.getElementById("top").innerHTML="Linear relationship between floral Position and Calorie content of the flower";
	document.getElementById("left").innerHTML="Number of Calories in the flower";
	document.getElementById("bottom").innerHTML="Sequence of flowers on a plant stalk";
 

//fn for label text display in the graph
$('#PNC').click(function() {
	document.getElementById("top").innerHTML="Linear relationship between floral Position and Calorie content of the flower";
	document.getElementById("left").innerHTML="Number of Calories in the flower";
	document.getElementById("bottom").innerHTML="Sequence of flowers on a plant stalk";

});
//fn for label text display in the graph
$('#PTE').click(function() {
	document.getElementById("top").innerHTML="Last Flower visited before the fly leaves Vs Rate of net energy intakes in cal/sec";
	document.getElementById("left").innerHTML="Rate of net energy intakes in cal/sec";
	document.getElementById("bottom").innerHTML="Last Flower visited before the fly leaves a plant";

});
});
//Showing slider values
function showPOFvalue(newValue)
{
	document.getElementById("POFrange").innerHTML=newValue;
	
}

function showNDvalue(newValue)
{
	var str=newValue;
	var Ndvalue=str.slice(0,3);
	document.getElementById("NDrange").innerHTML=Ndvalue;
}

function showEBvalue(newValue)
{
var str=newValue;
var EBvalue=str.slice(0,3);
document.getElementById("EBrange").innerHTML=EBvalue;
}

function showTBvalue(newValue)
{
document.getElementById("TBrange").innerHTML=newValue;
}

function showEWvalue(newValue)
{
var str=newValue;
var EWvalue=str.slice(0,4);

	document.getElementById("EWrange").innerHTML=EWvalue;
}

function showTWvalue(newValue)
{
	var str=newValue;
		var TWvalue=str.slice(0,4);
	document.getElementById("TWrange").innerHTML=TWvalue;
}

function showEFvalue(newValue)
{
	 	var str=newValue;
		var EFvalue=str.slice(0,4);
	document.getElementById("EFrange").innerHTML=EFvalue;
}

function showTFvalue(newValue)
{
	document.getElementById("TFrange").innerHTML=newValue;
}
function showEEvalue(newValue)
{
	 	var str=newValue;
		var EEvalue=str.slice(0,4);
	document.getElementById("EErange").innerHTML=EEvalue;
}

function showTEvalue(newValue)
{
	document.getElementById("TErange").innerHTML=newValue;
}

function showPOSvalue(newValue)
{
	document.getElementById("POSrange").innerHTML=newValue;
}
//Initially loading the graph
function Load()
{
 $.plot($("#GraphArea"), [ [] ]);	
}
/*Fn for getting the values*/
function getValues()
{
	
	noc=document.getElementById("NOC").value;
	yi=document.getElementById("YI").value;
	pof=document.getElementById("POF").value;
	nd=document.getElementById("ND").value;
	eb=document.getElementById("EB").value;
	tb=document.getElementById("TB").value;
	ew=document.getElementById("EW").value;
	tw=document.getElementById("TW").value;
	ef=document.getElementById("EF").value;
	tf=document.getElementById("TF").value;
	ee=document.getElementById("EE").value;
	te=document.getElementById("TE").value;
	pos=document.getElementById("POS").value;
}
//Fun for the calculation
function Graph_Calculation()
{    
     /*X Values*/
	for(var i=0; i<=pof; i++)
	{
		XArray.push(i);
	}
	/*Y Values*/
	for(var j=0; j<XArray.length;j++)
	{
		var C1=(noc-(yi*j)).toFixed(2);
		YArray.push(C1);
	}
	
}
function energyCalculations()
{
	/*X Values*/
	for( var x=1;x<=pos;x++){
		XArr.push(x);
	}
	//alert("Xarray:"+XArr);
	/*Y Values*/
	var sum=0;
	
	for(var b=1; b<=XArr.length; b++)
	{
sum= Number(sum)+Number((-yi*b+Number(noc)));

var net1=(Number(nd)*Number(sum)-Number(eb)-Number(nd)*Number(ew)*(Number(b)-1)-Number(nd)*Number(b)*Number(ef)-Number(ee)*(1-Number(nd))).toFixed(2);
var net2=(Number(tb)+Number(nd)*Number(tw)*(Number(b)-1)+Number(nd)*Number(b)*Number(tf)+Number(te)*(1-Number(nd))).toFixed(2);
var net3=(net1/net2).toFixed(2);
		YArr.push(net3);
	}

}
//Fun for Energy graph
function draw_energygraph()
{
	  $("#tooltip").remove();
	getValues();
	energyCalculations();
	
	for(var k=0; k < XArr.length; k++)
	{
		var tmpArr=[XArr[k],YArr[k]];
		tmpArray.push(tmpArr);
	}

		draw_graph(tmpArray);
tmpArray.splice(0,tmpArray.length);
XArr.splice(0,XArr.length);
YArr.splice(0,YArr.length);
}
//Fun for calorie    
function draw_caloriegraph()
{

	  $("#tooltip").remove();
	getValues();
	Graph_Calculation();

	for(var k=0; k < XArray.length; k++)
	{
		var tmpArr=[XArray[k],YArray[k]];
		tmpArray.push(tmpArr);
	}

	draw_graph(tmpArray);
tmpArray.splice(0,tmpArray.length);
XArray.splice(0,XArray.length);
YArray.splice(0,YArray.length);

}
function draw_graph(tmArray)
{
	//alert(tmArray);
	$.plot($("#GraphArea"), [tmArray],
	{
		grid: 
		{
			hoverable: true, clickable: true
		},
		xaxis:
		{

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
					//alert("dfg")
                $("#tooltip").remove();
                previousPoint = null;            
            }
        
    });

    $("#GraphArea").bind("plotclick", function (event, pos, item) {
        
    });
	    });

//Fn for reseting the values
function Reset()
{
	$.plot($("#GraphArea"), [ [] ]);	
	document.getElementById("NOC").value=20;
	document.getElementById("YI").value=1.7;
	document.getElementById("POFrange").innerHTML=10;
	document.getElementById("NDrange").innerHTML=0.4;
	document.getElementById("EBrange").innerHTML=0.1;
	document.getElementById("TBrange").innerHTML=5;
	document.getElementById("EWrange").innerHTML=0.03;
	document.getElementById("TWrange").innerHTML=0.05;
	document.getElementById("EFrange").innerHTML=0.02;
	document.getElementById("TFrange").innerHTML=15;
	document.getElementById("EErange").innerHTML=0.01;
	document.getElementById("TErange").innerHTML=9;
	document.getElementById("POSrange").innerHTML=10;
	
	document.getElementById("POF").value=10;
	document.getElementById("ND").value=0.4;
	document.getElementById("EB").value=0.1;
	document.getElementById("TB").value=5;
	document.getElementById("EW").value=0.03;
	document.getElementById("TW").value=0.05;
	document.getElementById("EF").value=0.02;
	document.getElementById("TF").value=15;
	document.getElementById("EE").value=0.01;
	document.getElementById("TE").value=9;
	document.getElementById("POS").value=10;
}
//showing the popup movieclip
function popup(){
	document.getElementById("morevar").style.visibility="visible";
}
//Hiding the popup movieclip
function Close(){
	document.getElementById("morevar").style.visibility="hidden";
}


// show tooltip on mouseover of the sliders..
function showLabel(evt){
	document.getElementById("tooltip2").style.visibility="visible";
	document.getElementById("tooltip2").style.display="block";
	if(evt.target.name=="POF"){
	document.getElementById("tooltip2").style.top=((document.getElementById("POF").offsetTop) - 22)+"px";
	document.getElementById("tooltip2").style.left=((document.getElementById("POF").offsetLeft))+"px";	
	document.getElementById("tooltip2").innerHTML="Number of position in flowers ";
	}else if(evt.target.name=="ND"){
	document.getElementById("tooltip2").style.top=((document.getElementById("ND").offsetTop) - 32)+"px";
	document.getElementById("tooltip2").style.left=((document.getElementById("ND").offsetLeft))+"px";	
	document.getElementById("tooltip2").innerHTML="P:Probability that the plant has not been drained ";	
	}else if(evt.target.name=="EB"){
	document.getElementById("tooltip2").style.top=((document.getElementById("EB").offsetTop) - 32)+"px";
	document.getElementById("tooltip2").style.left=((document.getElementById("EB").offsetLeft))+"px";	
	document.getElementById("tooltip2").innerHTML="eb:Energy spent flying from one plant to another ";	
	}else if(evt.target.name=="TB"){
	document.getElementById("tooltip2").style.top=((document.getElementById("TB").offsetTop) - 32)+"px";
	document.getElementById("tooltip2").style.left=((document.getElementById("TB").offsetLeft))+"px";
	document.getElementById("tooltip2").innerHTML="tb:Time spent in flying from one plant to another ";	
	}else if(evt.target.name=="EW"){
	document.getElementById("tooltip2").style.top=((document.getElementById("EW").offsetTop) +65)+"px";
	document.getElementById("tooltip2").style.left=((document.getElementById("EW").offsetLeft)+250)+"px";	
	document.getElementById("tooltip2").innerHTML="ew:Energy spent in flying on same stalk";	
	}else if(evt.target.name=="TW"){
	document.getElementById("tooltip2").style.top=((document.getElementById("TW").offsetTop)  +65)+"px";
	document.getElementById("tooltip2").style.left=((document.getElementById("TW").offsetLeft)+250)+"px";	
	document.getElementById("tooltip2").innerHTML="tw:Time spent in flying on same stalk";	
	}else if(evt.target.name=="EF"){
	document.getElementById("tooltip2").style.top=((document.getElementById("EF").offsetTop) +65)+"px";
	document.getElementById("tooltip2").style.left=((document.getElementById("EF").offsetLeft)+250)+"px";	
	document.getElementById("tooltip2").innerHTML="ef:Energy spent in emptying a full flower";	
	}else if(evt.target.name=="TF"){
	document.getElementById("tooltip2").style.top=((document.getElementById("TF").offsetTop) +65)+"px";
	document.getElementById("tooltip2").style.left=((document.getElementById("TF").offsetLeft)+250)+"px";	
	document.getElementById("tooltip2").innerHTML="tf:Time spent in emptying a full flower ";	
	}else if(evt.target.name=="EE"){
	document.getElementById("tooltip2").style.top=((document.getElementById("EE").offsetTop) +65)+"px";
	document.getElementById("tooltip2").style.left=((document.getElementById("EE").offsetLeft)+250)+"px";
	document.getElementById("tooltip2").innerHTML="ee:Energy spent in sampling an empty flower";	
	}else if(evt.target.name=="TE"){
	document.getElementById("tooltip2").style.top=((document.getElementById("TE").offsetTop) +65)+"px";
	document.getElementById("tooltip2").style.left=((document.getElementById("TE").offsetLeft)+250)+"px";
	document.getElementById("tooltip2").innerHTML="te:Time spent in sampling an empty flower";	
	}else if(evt.target.name=="POS"){
	document.getElementById("tooltip2").style.top=((document.getElementById("POS").offsetTop) +65)+"px";
	document.getElementById("tooltip2").style.left=((document.getElementById("POS").offsetLeft)+250)+"px";
	document.getElementById("tooltip2").innerHTML="n:Last flower position visited by a bee";	
	}
}

// hide tooltip on mouseout of the sliders..
function hideLabel(){
	document.getElementById("tooltip2").style.display="none";
}

//  Restrict input box values (only digits and negative sign)
function onlyNumbers(evt)
{ 	
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode(key);
  //alert(key);
  var regex = /[0-9]/;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;	
    if(theEvent.preventDefault) theEvent.preventDefault();
  }	 
	 
}
//  Restrict input box values (only digits and negative sign)
function onlyNumbers2(evt)
{ 	
 var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode(key);
  //alert(key);
  var regex = /[0-9]|\./;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;	
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
	 
}
function dotRestrict(e){
	var count=0;
	var str=e.value;
	var a1 = new Array();
	a1=str.split("");
	var len=a1.length;
	for(var i=0;i<len;i++){
		if(a1[i]=="."){
			count++;
		}
	}
	if(a1[len-1]=="."){
		e.value="";
		
	}
	if(count>1){
		e.value=1.7;
	}
}
