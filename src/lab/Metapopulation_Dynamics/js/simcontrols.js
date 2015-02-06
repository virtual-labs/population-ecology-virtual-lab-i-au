
/*
Developed under a Research grant from NMEICT, MHRD
by
Amrita CREATE (Center for Research in Advanced Technologies for Education),
VALUE (Virtual Amrita Laboratories Universalizing Education)
Amrita University, India 2009 - 2013
http://www.amrita.edu/create
*/


var totalNoOfPatches;
var patchProduceColonies;
var InitialNoOfPatches;
var patchGoesExtinct;
var numberOfYears;
var InitialSizeOfPopulation;
var Independent;
var Dispersal;
var rgood;
var rbad;
var runlen;
var img = new Image();
img.src = simPath+"images/rat.jpg"; 
var img1 = new Image();
img1.src = simPath+"images/snake.png";
var S=new Array();
var R=new Array();
var K=new Array();
var time=0;
var T=new Array();
var minNum=0;
var maxNum=1;
var n1=new Array();
var n2=new Array();
var P=new Array();
var k_1=0;
var k_2=0;
var k_3=0;
var k_4=0;
var h=1;
var shwGph=0;
var statShw=0;
var stepcnt=1;
var inter=0;
var count1=0;
var count2=0;
var sp1nos=0;
var sp2nos=0;
var array_X= new Array();
var array_Y= new Array();
var cnt=0;
var samp;
var selectIteration=0;
var tempArry1=new Array();
var tempArry2=new Array();
var tempArray1=new Array();
var tempArray2=new Array();
var tempArray=new Array();
var tempArray3=new Array();
var tempArray4=new Array();
var tempArray5=new Array();
var tempArray31=new Array();
var tempArray41=new Array();
var tempArray51=new Array();
var tempArray6=new Array();
var tempArray7=new Array();
var tempArray8=new Array();
var playflag=7;
var pauseFlag=0;
// initially Loading the experiment
function Load()
{
	document.getElementById("top").style.display="none";
	document.getElementById("left").style.display="none";
	document.getElementById("bottom").style.display="none";
	document.getElementById("tinyGraphArea").style.display="none";
	document.getElementById("speciesCanvas").width=540;
	document.getElementById("speciesCanvas").height=420;
	document.getElementById("DP").style.color="#cacaca";
	document.getElementById("ST").style.color="#cacaca";
	document.getElementById("ST").style.cursor= "default";
	document.getElementById("DP").style.cursor= "default";
	document.getElementById("statLabel").style.display="none";
	document.getElementById("ReSet").disabled=true;
	
}
// function for displaying result
function displayResult()
{
	
	var selctVal=document.getElementById("dropBox").value;
	comboChange();
  	if(selctVal=="Levins Model")
	{
		clearCanvas();
		document.getElementById("Pause").value="Pause";
		document.getElementById("LM").style.display="block";  
		document.getElementById("MS").style.display="none";
		document.getElementById("Pause").disabled=true;
		samp=0;
  	}
	
	if(selctVal=="Metapopulation Stability")
	{
		clearCanvas();
		document.getElementById("Pause").value="Pause";
		document.getElementById("Pause").disabled=true;
		document.getElementById("LM").style.display="none";
		document.getElementById("MS").style.display="block";  
		document.getElementById("SR").disabled=false;
		document.getElementById("RI").disabled=false;
		stepcnt=1;
		document.getElementById("WS").style.color="#cacaca";
		document.getElementById("DP").style.color="#cacaca";
		document.getElementById("ST").style.color="#cacaca";
		document.getElementById("ST").style.cursor= "default";
		document.getElementById("WS").style.cursor= "default";
		document.getElementById("DP").style.cursor= "default";
		document.getElementById("statLabel").style.display="none";
		samp=0;
	}
	
}
function comboChange(){
	playflag=7;
	document.getElementById("top").style.display="none";
	document.getElementById("left").style.display="none";
	document.getElementById("bottom").style.display="none";
	document.getElementById("tinyGraphArea").style.display="none";
	document.getElementById("speciesCanvas").style.display="block";
	document.getElementById("statLabel").style.display="none";
	document.getElementById("SR").disabled=false;
	document.getElementById("RI").disabled=false;
	document.getElementById("Pause").disabled=true;
	
	$.plot($("#tinyGraphArea"), [ [] ],{
								   
	});
	
}
//fn for get value
function getVal(){
	totalNoOfPatches=document.getElementById("h").value;
	patchProduceColonies=document.getElementById("c").value;
	InitialNoOfPatches=document.getElementById("ip").value;
	patchGoesExtinct=document.getElementById("e").value;
	numberOfYears=document.getElementById("t").value;
	InitialSizeOfPopulation=document.getElementById("n").value;
	Independent=document.getElementById("idp").value;
	Dispersal=document.getElementById("disp").value;
	rgood=document.getElementById("rgood").value;
	rbad=document.getElementById("rbad").value;
	runlen=document.getElementById("runlen").value;
	samp=0;
}


//fn for calculation
function calc()
{
	
	document.getElementById("DP").style.color="#6e6e6e";
	document.getElementById("ST").style.color="#6e6e6e";
	document.getElementById("ST").style.cursor="Pointer";
	document.getElementById("DP").style.cursor="Pointer";
	getVal();
	for (var j=0; j < numberOfYears; j++) {
		S[j]=0;
		R[j]=0;
	}

	P[0]=Number(InitialNoOfPatches);
	h=1;
	if(document.getElementById("dropBox").value=="Levins Model")
	{
		
		for (var i=0; i< numberOfYears; i++) 
		{
			
			k_1=f(P[i],patchProduceColonies,patchGoesExtinct,totalNoOfPatches);
	        var temp2 = Number(P[i]) + 0.5 * h * k_1;
			
			k_2=f(P[i] + 0.5 * h * k_1,patchProduceColonies,patchGoesExtinct,totalNoOfPatches);
			
			k_3=f(P[i]+ 0.5 * h * k_2,patchProduceColonies,patchGoesExtinct,totalNoOfPatches);
			
			k_4=f(P[i]+h*k_3,patchProduceColonies,patchGoesExtinct,totalNoOfPatches);
			
			P[i+1] = P[i] + (h/6)*(k_1 + 2*k_2 + 2*k_3 + k_4);
			R[i+1]=P[i];
			time=i+h;
			S[i+1]=time;
			
		}
		//var arrlen=R.length;
		
		
	}
	if(document.getElementById("dropBox").value=="Metapopulation Stability")
	{
		
		
		var r1;
		var r2;
		n1.push(Number(InitialSizeOfPopulation));
		n2.push(Number(InitialSizeOfPopulation));
		R[0]=n2[0];
		
		T[0]=0;
		S[0]=n1[0];
		for (var i=0; i <= runlen; i++) 
		{
			var rand=randomRange(minNum,maxNum);
			if (rand <(1/2)) {
				r1=rbad;
			} else {
				r1=rgood;
			}
			
			if (Independent==1) {
				if (rand <(1/2)) {
					r2=Number(rbad);
				} else {
					r2=Number(rgood);
				}
			} else {
				if (r1==rgood) {
					r2=Number(rbad);

				} else {
					r2=Number(rgood);
				}
			}
			var a = r1 * ((1-Number(Dispersal)) * Number(n1[i]) + (Number(Dispersal) * Number(n2[i])));
			n1[i]=n1.push(a);
			S[i+1]=a;
			var b = r2 *((1-Number(Dispersal)) * Number(n2[i]) + Number(Dispersal) * Number(n1[i]));
			n2[i]=n2.push(b);
			R[i+1]=b;
			
			time=time+1;
			T[i+1]=time;
		}
		
		
	
		
	}

}
 function f(p,c,e,h) {
	var v = c*(h-p)*(p-e);
	//alert("V"+v);
	return v;
}
function randomRange(minNum, maxNum) {
	return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
} 
//fn for allow only numbers in a Textbox
function isNumberKey(evt)
{
	var charCode = (evt.which) ? evt.which : event.keyCode
	if (charCode != 46 && charCode > 31 
	&& (charCode < 48 || charCode > 57))
	return false;
	return true;
}
function showGraphs(tempArry1,tempArry2){	
	

	$.plot($("#tinyGraphArea"), [
			{data:tempArry1,label: "Population2",color: '#FF0080'},
	{data:tempArry2,label: "Population1",color: '#1B9EB3'}],
	{
		grid: 
		{
			hoverable: true, clickable: true
		},
		xaxis:
		{
	
		},
		yaxis:
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
//fn for drawing Graph
function showGraph(arr)
{	

	$.plot($("#tinyGraphArea"), [{data:arr,label: "Patches present in the habitate",color: '#1B9EB3'}],
	{
		grid: 
		{
			hoverable: true, clickable: true
		},
		xaxis:
		{
		min:0,
		alignTicksWithAxis: 10
		},
		yaxis:
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

//fn for drawing Graph
function showGraph1(arr,arr1)
{
	
	$.plot($("#tinyGraphArea"), [{data:arr,
	data:arr1}],
	{
		grid: 
		{
			hoverable: true, clickable: true
		},
		xaxis:
		{
		min:1,
		},
		yaxis:
		{
		min:1,
		max:10
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
// fn for dispalying graph
function ShowGph()
{	
	if(document.getElementById("dropBox").value=="Metapopulation Stability")
	{
		document.getElementById("top").innerHTML="Metapopulation Stability";
		document.getElementById("left").innerHTML="Population";
		document.getElementById("bottom").innerHTML="Number of years";
		
	}else{
		
		document.getElementById("top").innerHTML="Levins Model";
		document.getElementById("left").innerHTML="P";
		document.getElementById("bottom").innerHTML="Number of years";
	}
	
	if(selectIteration==1){
		if(shwGph==0)
		{
			document.getElementById("top").style.display="block";
			document.getElementById("left").style.display="block";
			document.getElementById("bottom").style.display="block";
			document.getElementById("tinyGraphArea").style.display="block";
			document.getElementById("speciesCanvas").style.display="none";
			document.getElementById("statLabel").style.display="none";
			document.getElementById("DP").style.color="#cacaca";
			shwGph=1;
			showTooltip(item.pageX, item.pageY," X:" + x + " and Y:" + y);
		}
		else
		{
			document.getElementById("top").style.display="none";
			document.getElementById("left").style.display="none";
			document.getElementById("bottom").style.display="none";
			document.getElementById("tinyGraphArea").style.display="none";
			document.getElementById("speciesCanvas").style.display="block";	
		    document.getElementById("DP").style.color="#6e6e6e";
			shwGph=0;
			$("#tooltip").remove();
			}
	}
	
}

//fn for stepby stpe run
function stepRun()
{
	tempArray=new Array();
	tempArray1=new Array();
	tempArray2=new Array();
	document.getElementById("top").style.display="none";
	document.getElementById("left").style.display="none";
	document.getElementById("bottom").style.display="none";
	document.getElementById("tinyGraphArea").style.display="none";
	document.getElementById("speciesCanvas").style.display="block";
	document.getElementById("statLabel").style.display="none";
	document.getElementById("DP").style.color="#6e6e6e";
	document.getElementById("ST").style.color="#6e6e6e";
	document.getElementById("ST").disabled=false;
	document.getElementById("DP").disabled=false;
	selectIteration=1;
	var NoStep=document.getElementById("t").value;
	if(stepcnt==1){
		calc();
	}
	
	if(document.getElementById("dropBox").value=="Levins Model")
	{
		for(var k=1;k<R.length;k++){
			if(stepcnt==k){
			
				for(var m=0;m<(k+1);m++){
					var tempArr=[S[m],R[m]];
					tempArray.push(tempArr);
				}
			}
		}
		showGraph(tempArray);
	}else{
		for(var c=1;c<R.length;c++){
			if(stepcnt==c){
				for(var n=0;n<(c+1);n++){
					var tempArr1=[T[n-1],S[n-1]];
					tempArray1.push(tempArr1);
					var tempArr2=[T[n-1],R[n-1]];
					tempArray2.push(tempArr2);
		
				}
		
			}
		}
		showGraphs(tempArray1,tempArray2);
	}
	count1=0;
	count2=0;
	if(stepcnt<=NoStep)
	{
	clearCanvas();
	sp1nos=Math.round(R[stepcnt],0);
	sp2nos=Math.round(S[stepcnt],0);
	drawItem();
	document.getElementById("species1").innerHTML="Population of Species1:"+Math.round(R[stepcnt],0);
	document.getElementById("species2").innerHTML="IDS_Population of Predator:"+S[stepcnt];
	stepcnt++;
	}
	else
	{
		document.getElementById("SR").disabled=true;
		document.getElementById("RI").disabled=true;
		document.getElementById("Pause").disabled=true;
		document.getElementById("ReSet").disabled=false;
	}
	document.getElementById("Rt").disabled=false;
	
}

//fn for clear canvas
function clearCanvas(){
    var canvas = document.getElementById("speciesCanvas");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
}

//fn for showing statistics
function statClick(){
	if(selectIteration==1){
		if(statShw==0){
		document.getElementById("statLabel").style.display="block";
		document.getElementById("ST").style.color="#cacaca";
		statShw=1;
		}
		else
		{
			document.getElementById("statLabel").style.display="none";
			document.getElementById("ST").style.color="#6e6e6e";
			statShw=0;
		}
	}
			
}

for( w=0;w<=520;w+=20)
	{
		array_X.push(w);
	}
for( h=0;h<=408;h+=17)
	{
		array_Y.push(h);
	}
//fn for drawing species
function drawSpecies1(){
	document.getElementById("ST").disabled=false;
	document.getElementById("DP").disabled=false;
	if(count1<sp1nos)
	
	{
		rand_x = Math.random() * (27 - 0);
		rand_y=  Math.random() * (24 - 0);
		x= Math.round(rand_x,0);
		y= Math.round(rand_y,0);
		var ctx = document.getElementById('speciesCanvas').getContext('2d');
		ctx.drawImage(img,array_X[x]-1,array_Y[y]-1); 
	}
	else{
		clearInterval(inter);
	}
	count1++;
	if(count2<sp2nos)
	{
  		rand_x1 = Math.random() * (26 - 0);
		rand_y1=  Math.random() * (24 - 0);
		x1= Math.round(rand_x1,0);
		y1= Math.round(rand_y1,0);
		var ctx = document.getElementById('speciesCanvas').getContext('2d');
		ctx.drawImage(img1,array_X[x1]-1,array_Y[y1]-1);
   }
	count2++;
	
}
//fn call inside stpe run
function drawItem()
{
	
	clearInterval(inter);
	inter =setInterval("drawSpecies1()",0);	
	
}
//fn call clicking  run button
function runItration() 
{	
	selectIteration=1;
	document.getElementById("Pause").disabled=false;
	document.getElementById("top").style.display="none";
	document.getElementById("left").style.display="none";
	document.getElementById("bottom").style.display="none";
	document.getElementById("tinyGraphArea").style.display="none";
	document.getElementById("speciesCanvas").style.display="block";
	if(stepcnt==1){
		calc();
	}
    plotGraph();	
	samp=0;
	drawItem();
	timerId = setInterval(samplefn, 200); 
	
}
function plotGraph(){
	$.plot($("#tinyGraphArea"), [ [] ],{
								   
	});
	tempArray6= new Array();
	tempArray7= new Array();
	tempArray8= new Array();
	if(document.getElementById("dropBox").value=="Levins Model")
	{	
		for(var m=0;m<R.length;m++){
			var tempArr=[S[m],R[m]];
			tempArray6.push(tempArr);
		}
		showGraph(tempArray6);
	}else{	
		for (var n=0; n<R.length; n++)
		{
			var tempArr1=[T[n],S[n]];
			tempArray7.push(tempArr1);
			var tempArr2=[T[n],R[n]];
			tempArray8.push(tempArr2);
		
		}
		showGraphs(tempArray7,tempArray8);
	}
}
function samplefn(){	
	samp++;
	var NOY=document.getElementById("t").value;
	if(samp>NOY){
		clearInterval(timerId);
		document.getElementById("SR").disabled=true;
		document.getElementById("RI").disabled=true;
		//document.getElementById("tinyGraphArea").style.display="none";
		//document.getElementById("speciesCanvas").style.display="block";
		//document.getElementById("statLabel").style.display="none";
		document.getElementById("Pause").disabled=true;
		document.getElementById("ReSet").disabled=false;
		}
	else{
		clearCanvas();
		count1=0;
		count2=0;
		document.getElementById("species1").innerHTML="Population of Species1:"+Math.round(R[samp],0);
		document.getElementById("species2").innerHTML="Population of Species2:"+Math.round(S[samp],0);
		sp1nos=Math.round(R[samp],0);
		sp2nos=Math.round(S[samp],0);
		drawItem();

	}
	if(document.getElementById("RI").disabled==true){
		document.getElementById("DP").style.color="#6e6e6e";
		document.getElementById("ST").style.color="#6e6e6e";
		$.plot($("#tinyGraphArea"), [ [] ],{
								   
		});		
		plotGraph();
	}
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
$("#tinyGraphArea").bind("plothover", function (event, pos, item) {
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

$("#tinyGraphArea").bind("plotclick", function (event, pos, item) {

});
});

//fn for resetting the values
function selectPopulation()
{
	if(document.getElementById("dropBox").value=="Metapopulation Stability")
	{
		alert("hello");
	}	
}
//Play pause functions
function playPause(e){
	tempArray3= new Array();
	tempArray4= new Array();
	tempArray5= new Array();
	tempArray31= new Array();
	tempArray41= new Array();
	tempArray51= new Array();
	document.getElementById("top").style.display="none";
	document.getElementById("left").style.display="none";
	document.getElementById("bottom").style.display="none";
	document.getElementById("tinyGraphArea").style.display="none";
	document.getElementById("speciesCanvas").style.display="block";
	document.getElementById("RI").disabled=true;
	if(e.value=="Pause")
		{$.plot($("#tinyGraphArea"), [ [] ],{
									   
		});
		if(document.getElementById("dropBox").value=="Levins Model")
		{	
			for(var p=0;p<R.length;p++){
				var tempArrs1=[S[p],R[p]];
				tempArray31.push(tempArrs1);
			}
			showGraph(tempArray31);
		}else{	
			for (var q=0; q<playflag; q++)
			{
				var tempArrs1=[T[q],S[q]];
				tempArray41.push(tempArrs1);
				var tempArrs2=[T[q],R[q]];
				tempArray51.push(tempArrs2);
			
			}
			showGraphs(tempArray41,tempArray51);
		}
		clearInterval(timerId);
		document.getElementById("Pause").value="Play";		
	}else{
		$.plot($("#tinyGraphArea"), [ [] ],{
									   
		});
		document.getElementById("Pause").value="Pause";
		if(document.getElementById("dropBox").value=="Levins Model")
		{	
			for(var m=0;m<playflag;m++){
				var tempArr=[S[m],R[m]];
				tempArray3.push(tempArr);
			}
			showGraph(tempArray3);
		}else{	
			for (var n=0; n<playflag; n++)
			{
				var tempArr1=[T[n],S[n]];
				tempArray4.push(tempArr1);
				var tempArr2=[T[n],R[n]];
				tempArray5.push(tempArr2);
			
			}
			showGraphs(tempArray4,tempArray5);
		}
		//calc();
		drawItem();
		samp=0;
		timerId = setInterval(samplefn, 200); 

	}
	
}
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
		e.value="";
	}
}
function resetFN(){
		document.getElementById("RI").disabled=false;
		document.getElementById("SR").disabled=false;
		document.getElementById("Pause").disabled=true;
		document.getElementById("dropBox").selectedIndex=0;
		document.getElementById("h").value="10";
		document.getElementById("c").value="0.1";
		document.getElementById("ip").value="1";
		document.getElementById("e").value="0.04";
		document.getElementById("t").value="10";
		document.getElementById("n").value="50";
		document.getElementById("idp").value="1";
		document.getElementById("disp").value="0.25";
		document.getElementById("rgood").value="1.25";
		document.getElementById("rbad").value="0.75";
		document.getElementById("runlen").value="10";
		
}