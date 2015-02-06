/*
Developed under a Research grant from NMEICT, MHRD
by
Amrita CREATE (Center for Research in Advanced Technologies for Education),
VALUE (Virtual Amrita Laboratories Universalizing Education)
Amrita University, India 2009 - 2013
http://www.amrita.edu/create
*/


var SimName="Interspecific Competition and Coexistence";
var ctx;
var IP1,RG1,CC1,TV1,AV1,NS1,SS1;
var IP2,RG2,CC2,TV2,AV2,NS2,SS2;
var S=new Array();
var R=new Array();
var XArr=new Array();
var XArr1=new Array();
var arra1=new Array();
var arra2=new Array();
var timespace=new Array();
var arrTxt=new Array();
var arrTxt1=new Array();
var c=new Array();
var ah=new Array();
var theta=new Array();
var tmpArray=new Array();
var tmpArray1=new Array();
var time=0;
var w;
var h;
var inter;
var array= new Array();
var array_X= new Array();
var array_Y= new Array();;
var img = new Image();
img.src = simPath+"images/rat.jpg";simPath+"images/rat.jpg"; 
var img1 = new Image();
img1.src = simPath+"images/snake.png";
var T=new Array();
var k_1R=0;
var k_1S=0;
var k_2R=0;
var k_2S=0;
var k_3R=0;
var k_3S=0;
var k_4R=0;
var k_4S=0;
var rand_x;
var rand_y;
var x,y;
var rand_x1;
var rand_y1;
var x1,y1;
var count1=0;
var count2=0;
var stRun=0;
var initial_population1,r1,c1,theta1,ah1,numer_of_steps1=0,step_size1;
var initial_population2,r2,c2,theta2,ah2,numer_of_steps2=0,step_size2;
var carrydiiff;
var ptGraphArray = new Array();
var TimercurrentCount=0;
var val1,val2;
var pVal=0;
var shwGph=0;
var statShw=0;
var samp=0;
var sp1nos;
var sp2nos;
var stepcnt=0;
var timerId;
var flag=0;
var selectIteration=0;
$(document).ready(function(){
$("#accordion").accordion();
});
//Initially loading
function Load()
{
	document.getElementById("top").style.display="none";
	document.getElementById("left").style.display="none";
	document.getElementById("bottom").style.display="none";
document.getElementById("tinyGraphArea").style.display="none";
ctx = document.getElementById('speciesCanvas').getContext('2d');
document.getElementById("speciesCanvas").width=540;
document.getElementById("speciesCanvas").height=420;
document.getElementById("WS").style.color="#cacaca";
document.getElementById("DP").style.color="#cacaca";
document.getElementById("ST").style.color="#cacaca";
document.getElementById("ST").style.cursor= "default";
document.getElementById("WS").style.cursor= "default";
document.getElementById("DP").style.cursor= "default";
document.getElementById("statLabel").style.display="none";
document.getElementById("ReSet").disabled= true ;

	sp1nos=0;
	sp2nos=0;
	drawItem();	
}
//Fun for getting values
function getVal()
{
		
	//values of species1
	initial_population1=document.getElementById("IP1").value;
	r1=document.getElementById("RG1").value;
	c1=document.getElementById("CC1").value;
	theta1=document.getElementById("TV1").value;
	ah1=document.getElementById("AV1").value;
	numer_of_steps1=document.getElementById("NS1").value;
	step_size1=document.getElementById("SS1").value;
	
	//values of species2
	initial_population2=document.getElementById("IP2").value;
	r2=document.getElementById("RG2").value;
	c2=document.getElementById("CC2").value;
	theta2=document.getElementById("TV2").value;
	ah2=document.getElementById("AV2").value;
	numer_of_steps2=document.getElementById("NS2").value;
	step_size2=document.getElementById("SS2").value;
	count1=0;
	count2=0;

}

//fn for calculation
function calc(pVal)
{
	document.getElementById("DP").style.color="#6e6e6e";
	document.getElementById("ST").style.color="#6e6e6e";
	document.getElementById("ST").style.cursor="Pointer";
	document.getElementById("DP").style.cursor="Pointer";
	getVal();
	if(pVal==0)
	{
	for(var j=0; j<numer_of_steps1; j++)
	{
		S[j]=0;
		R[j]=0;	
	}
	rm = new Array();
	c=new Array();
	theta=new Array();
	ah=new Array();
	tmpArray=new Array();
	tmpArray1=new Array();
	rm.push(r1);
	rm.push(r2);
	c.push(c1);
	c.push(c2);
	theta.push(theta1);
	theta.push(theta2);
	ah.push(ah1);
	ah.push(ah2);
	h=step_size1;
	var t=0.1*c[0];
	var r=0.1*c[1];
	var s=1.2*c[0];
	array= new Array();
	array.push(t);
	array.push(s);

	for (var n1=array[0]; n1 <= array[1]; ) {
		
		
		for (var n2=0.1*c[1]; n2 <= 1.2*c[1]; ) {
			R[0]=n1;
			S[0]=n2;
			//alert("N2:"+n2);
			for (var i=0; i<= numer_of_steps1;i++) {
			k_1R=f(time,R[i],S[i],rm[0],c[0],theta[0],ah[0]);
			k_1S=g(time,S[i],R[i],rm[1],c[1],theta[1],ah[1]);
			//////////
			k_2R=f(time+0.5*h,R[i]+0.5*h*k_1R,S[i]+0.5*h*k_1S,rm[0],c[0],theta[0],ah[0]);
			k_2S=g(time+0.5*h,S[i]+0.5*h*k_1S,R[i]+0.5*h*k_1R,rm[1],c[1],theta[1],ah[1]);
			//////////
			k_3R=f(time+0.5*h,R[i]+0.5*h*k_2R,S[i]+0.5*h*k_2S,rm[0],c[0],theta[0],ah[0]);
			k_3S=g(time+0.5*h,S[i]+0.5*h*k_2S,R[i]+0.5*h*k_2R,rm[1],c[1],theta[1],ah[1]);
			//////////
			k_4R=f(time+h,R[i]+h*k_3R,S[i]+h*k_3S,rm[0],c[0],theta[0],ah[0]);
			k_4S=g(time+h,S[i]+h*k_3S,R[i]+h*k_3R,rm[1],c[1],theta[1],ah[1]);
			//////////
			R[i+1] = R[i]+ (h/6)*(k_1R +  (2*k_2R) + (2*k_3R) + k_4R);
			S[i+1] = S[i]+ (h/6)*(k_1S +  (2*k_2S) + (2*k_3S) + k_4S);
			time=time+h;
			var tmpArr=[R[i],S[i]];
			sp1nos=Math.round(R[i],0);
			sp2nos=Math.round(S[i],0);
			tmpArray.push(tmpArr);
			//showGraph(tmpArray);
	
				}
				
			n2+=r;
		}
		n1+=array[1]-r;
			
	}
	
	for (var n2=array[0]; n2 <= array[1]; ) {
		
		for (var n1=0.2*c[0]; n1 <= 1.2*c[0]; ) {
			R[0]=n1;
			S[0]=n2;
			//pts=new Array();
			//ptGraph=grapher.addPtGraph(pts,true,true,hLineStyle);
			for (var i=0; i<= numer_of_steps1; i++) {
				k_1R=f(time,R[i],S[i],rm[0],c[0],theta[0],ah[0]);
				k_1S=g(time,S[i],R[i],rm[1],c[1],theta[1],ah[1]);
				//////////
				k_2R=f(time+0.5*h,R[i]+0.5*h*k_1R,S[i]+0.5*h*k_1S,rm[0],c[0],theta[0],ah[0]);
				k_2S=g(time+0.5*h,S[i]+0.5*h*k_1S,R[i]+0.5*h*k_1R,rm[1],c[1],theta[1],ah[1]);
				//////////
				k_3R=f(time+0.5*h,R[i]+0.5*h*k_2R,S[i]+0.5*h*k_2S,rm[0],c[0],theta[0],ah[0]);
				k_3S=g(time+0.5*h,S[i]+0.5*h*k_2S,R[i]+0.5*h*k_2R,rm[1],c[1],theta[1],ah[1]);
				//////////
				k_4R=f(time+h,R[i]+h*k_3R,S[i]+h*k_3S,rm[0],c[0],theta[0],ah[0]);
				k_4S=g(time+h,S[i]+h*k_3S,R[i]+h*k_3R,rm[1],c[1],theta[1],ah[1]);
				//////////
				R[i+1] = R[i]+ (h/6)*(k_1R +  (2*k_2R) + (2*k_3R) + k_4R);
				S[i+1] = S[i]+ (h/6)*(k_1S +  (2*k_2S) + (2*k_3S) + k_4S);
				time=time+h;
	
		var tmpArr=[R[i],S[i]];
		
		//var tmpArr=[R[i]];
		tmpArray.push(tmpArr);

		
		}
		n1+=r;
			
		}
		n2+=array[1]-r;
		//alert("R:"+tmpArray1);
		
	}
	}

	if(pVal==1)
	{
	sleep();	
	}
	
	tmpArray[20]=" ";
	tmpArray[41]=" ";
	tmpArray[62]=" ";
	tmpArray[83]=" ";
	tmpArray[104]=" ";
	tmpArray[125]=" ";
	tmpArray[146]=" ";
	tmpArray[167]=" ";
	tmpArray[188]=" ";
	tmpArray[209]=" ";
	tmpArray[230]=" ";
	tmpArray[251]=" ";
	tmpArray[272]=" ";
	tmpArray[293]=" ";
	tmpArray[314]=" ";
	tmpArray[335]=" ";
	tmpArray[356]=" ";
	tmpArray[377]=" ";
	tmpArray[398]=" ";
	tmpArray[419]=" ";
	tmpArray[440]=" ";
	tmpArray[461]=" ";
	tmpArray[482]=" ";
	tmpArray[503]=" ";
	tmpArray[524]=" ";
	tmpArray[104]=" ";
	tmpArray[545]=" ";
	tmpArray[566]=" ";
	tmpArray[587]=" ";
	tmpArray[608]=" ";
	tmpArray[629]=" ";
	tmpArray[650]=" ";
	tmpArray[671]=" ";
	tmpArray[692]=" ";
	tmpArray[713]=" ";
	tmpArray[734]=" ";
	tmpArray[755]=" ";
	tmpArray[776]=" ";
	tmpArray[797]=" ";
	tmpArray[818]=" ";
	tmpArray[839]=" ";
	tmpArray[860]=" ";
	tmpArray[881]=" ";
	tmpArray[902]=" ";
	tmpArray[923]=" ";
	tmpArray[944]=" ";
	tmpArray[965]=" ";
    //nullValue();
	showGraph(tmpArray);
	for (var m=0;m<numer_of_steps1;m++)
	{
	clearCanvas();
	drawItem();	
	sp1nos=Math.round(R[m],0);
	sp2nos=Math.round(S[m],0);

	document.getElementById("species1").innerHTML="Population of Species1: "+Math.round(R[m],0);
	document.getElementById("species2").innerHTML="Population of Species2: "+Math.round(S[m],0);
	}
	//document.write(tmpArray);
	
}

function f(t,lion,hyena,rate_lion,k_lion,theta_lion,alp_lion) {
	//alert("Funstion F2");
	var v=rate_lion*lion*(1-(Math.pow((lion/k_lion),theta_lion))-alp_lion*(hyena/k_lion));
	return v;
}
function g(t,hyena,lion,rate_hyena,k_hyena,theta_hyena,alp_hyena) {
	var q=rate_hyena*hyena*(1-(Math.pow((hyena/k_hyena),theta_hyena))-alp_hyena*(lion/k_hyena));
	return q;
}

for( w=0;w<=520;w+=20)
	{
		array_X.push(w);
	}
for( h=0;h<=408;h+=17)
	{
		array_Y.push(h);
	}
	
var nos;	
function drawSpecies1(){
	document.getElementById("ST").disabled=false;
	document.getElementById("DP").disabled=false;

	if(sp1nos>0){
		if(count1<sp1nos)
		{
			rand_x = Math.random() * (27 - 0);
			rand_y=  Math.random() * (24 - 0);
			x= Math.round(rand_x,0);
			y= Math.round(rand_y,0);
			var ctx = document.getElementById('speciesCanvas').getContext('2d');
	/*		img = new Image();
			img.onload = function(){*/
			ctx.drawImage(img,array_X[x],array_Y[y-1]); 
	/*    	};
			img.src = '../../Template/expimages/rat.jpg';*/
		}else{
			clearInterval(inter);
		}
	}	
	count1++;
	if(sp2nos>0){
		if(count2<sp2nos){
			
			rand_x1 = Math.random() * (26 - 0);
			rand_y1=  Math.random() * (24 - 0);
			x1= Math.round(rand_x1,0);
			y1= Math.round(rand_y1,0);
			var ctx = document.getElementById('speciesCanvas').getContext('2d');
			//img1 = new Image();
			//img1.onload = function(){
			ctx.drawImage(img1,array_X[x1],array_Y[y1-1]);
		//};
	   //img1.src = '../../Template/expimages/snake12.png';
	   }
	}
	count2++;
	
}

function drawItem()
{
	clearInterval(inter);
	inter =setInterval("drawSpecies1()",0);	
}

//fn for showing graph and hiding graph
function ShowGph()
{   
	document.getElementById("top").innerHTML="Population Densities of two competing species";
	document.getElementById("left").innerHTML="Density of species 2";
	document.getElementById("bottom").innerHTML="Density of species 1";
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

//fn for allow only numbers in a Textbox
function isNumberKey(evt)
{
	var charCode = (evt.which) ? evt.which : event.keyCode
	if (charCode != 46 && charCode > 31 
	&& (charCode < 48 || charCode > 57))
	return false;
	return true;
}

//fn for drawing Graph
function showGraph(arr)
{
	
	$.plot($("#tinyGraphArea"), [arr],
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
//fn for showing statClick and disable the statclick
function statClick(){
	if(selectIteration==1){
		if(statShw==0){
		//val1=Math.round(S[stRun],0);
		//val2=Math.round(R[stRun],0);
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
//fn for total itration run
function runItration() 
{
	
	if(flag==0){
		alert("Select Species 2 also")
	}else{
		document.getElementById("Pause").disabled=false;
		document.getElementById("SR").disabled=true;
		selectIteration=1;
		calc(pVal);
		samp=0;
		timerId = setInterval(samplefn, 200); 
	}

}
function samplefn(){
	samp++;
	if(samp >20){
	clearInterval(timerId);
	document.getElementById("SR").disabled=true;
	document.getElementById("RI").disabled=true;
	document.getElementById("Pause").disabled=true;
	document.getElementById("ReSet").disabled=false;
	}
	else{
	clearCanvas();
	count1=0;
	count2=0;
	//document.getElementById("species1").innerHTML="Population of Species1:"+Math.round(R[samp],0);
	//document.getElementById("species2").innerHTML="Population of Species2:"+Math.round(S[samp],0);
	drawItem();
	}
}
//fn for stepbystep run
function stepRun()
{
	
	if(flag==0){
		alert("Select Species 2 also")
	}else{
		selectIteration=1;
		var NoStep=document.getElementById("NS1").value;
		if(stepcnt<=NoStep-1){
			
	
		clearCanvas();
		calc(pVal);
		sp1nos=Math.round(R[stepcnt],0);
		sp2nos=Math.round(S[stepcnt],0);
		
		drawItem();
		document.getElementById("species1").innerHTML="Population of Species1:"+Math.round(R[stepcnt],0);
		document.getElementById("species2").innerHTML="Population of Species2:"+Math.round(S[stepcnt],0);
		stepcnt++;
		}
		else{
			document.getElementById("SR").disabled=true;
			document.getElementById("RI").disabled=true;
			document.getElementById("Pause").disabled=true;
			document.getElementById("ReSet").disabled=false;
		}
	}
	
}
//Play pause functions
function playPause(e){
	if(e.value=="Pause"){
		clearInterval(timerId);
		document.getElementById("Pause").value="Play";
	}else{
		document.getElementById("Pause").value="Pause";
		calc(pVal);
		samp=0;
		timerId = setInterval(samplefn, 200); 

	}
	
}

//fn to show tool tip in graph
$(function () {
function showTooltip(x, y, contents) 
{
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
$("#tinyGraphArea").bind("plotclick", function (event, pos, item) {
});

});


//fn for clear canvas
function clearCanvas(){
    var canvas = document.getElementById("speciesCanvas");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
}
// Fun for resetting
/*function Reset(){
	
		document.getElementById("SR").disabled=false;
		document.getElementById("RI").disabled=false;
		document.getElementById("Pause").disabled=false;
		document.getElementById("ReSet").disabled=true;
		clearCanvas();
		stepcnt=0;
		document.getElementById("WS").style.color="#cacaca";
		document.getElementById("DP").style.color="#cacaca";
		document.getElementById("ST").style.color="#cacaca";
		document.getElementById("ST").style.cursor= "default";
		document.getElementById("WS").style.cursor= "default";
		document.getElementById("DP").style.cursor= "default";
		document.getElementById("statLabel").style.display="none";
	
}*/
// Function to know species select or not 
function selectFN(e){
	if(e.id=="Species2"){
		flag++;
	}else{
		flag=0;
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
