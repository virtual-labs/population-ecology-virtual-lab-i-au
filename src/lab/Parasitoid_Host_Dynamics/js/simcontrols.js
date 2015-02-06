/*
Developed under a Research grant from NMEICT, MHRD
by
Amrita CREATE (Center for Research in Advanced Technologies for Education),
VALUE (Virtual Amrita Laboratories Universalizing Education)
Amrita University, India 2009 - 2013
http://www.amrita.edu/create
*/


// variables for the four graphs..
var ht1,pt1,rm1,a1,c1,ht2,t2,pt2,rm2,a2,c2,k2,ht3,pt3,rm3,a3,c3,k3,ht4,pt4,a4,k4;
var tool=false;
var htArr=new Array();
var ptArr=new Array();
var timeArr=new Array();

// function to validate the input boxes..
function validate(evt) {
 	var e = evt; // for trans-browser compatibility
	var charCode = e.which || e.keyCode;
	if(((charCode == 190) ||(charCode == 110))||(charCode >= 96 && charCode <= 105)){
		return true;
	}
	if ((charCode > 31) && (charCode < 48 || charCode > 57)){
		return false;
	}
}

// function to hide the drawn graph and the tool tip when tab is clicked..
function tabClick(){
	$.plot($("#GraphArea"), [ [] ]);
	graphLabel();
	if(tool){
		document.getElementById("tooltip").style.display = 'none';
	}
}

// function for the first tab(Nicholson-Bailey) inputs and procedure..
function getFirstTabVal(){
	ht1=document.getElementById("HtVal1").value;
	pt1=document.getElementById("PtVal1").value;
	rm1=document.getElementById("RmVal1").value;
	a1=document.getElementById("aVal1").value;
	c1=document.getElementById("cVal1").value;
	
	//Checking the limits
	if(ht1<1 || ht1>1000){
		alert("'Ht' should be in the range 1-1000");	
	} else if(pt1<1 || pt1>1000){
		alert("'Pt' should be in the range 1-1000");	
	} else if(rm1<0.01 || rm1>3){
		alert("'Rm' should be in the range 0.01-3");	
	} else if(a1<0.001 || a1>0.1){
		alert("'a' should be in the range 0.001-0.1");	
	} else if(c1<1 || c1>3){
		alert("'c' should be in the range 1-3");	
	} else{
		//Procedure for the graph
		for(var i=0; i<=100; i++){
			timeArr.push(i);			
		}
		var HT = new Array(100);
		var PT = new Array(100);
		HT[0] = ht1;
		PT[0] = pt1;
		var time = 100;
		var exp1;
		for(var i=0; i<time; i++){
			exp1 = Math.exp(-a1 * PT[i]);
			HT[i+1] = rm1 * HT[i] * exp1;
			PT[i+1] = c1 * HT[i] * (1 - exp1);
		}
		for(var k=0; k < 100; k++){
			var tmpArr = [timeArr[k],HT[k]];
			htArr.push(tmpArr);
			var tmpArr2 = [timeArr[k],PT[k]];
			ptArr.push(tmpArr2);
		}
		draw_graph(htArr,ptArr,"Host","Parasitoid");
		htArr = new Array();
		ptArr = new Array();
		tmpArr = new Array();
		tmpArr2 = new Array();
	}
}

// function for the second tab(Host Density) inputs and procedure..
function getSecondTabVal(){	
	ht2=document.getElementById("HtVal2").value;
	t2=document.getElementById("TVal2").value;
	pt2=document.getElementById("PtVal2").value;
	rm2=document.getElementById("RmVal2").value;
	a2=document.getElementById("aVal2").value;
	c2=document.getElementById("cVal2").value;
	k2=document.getElementById("kVal2").value;
	
	//Checking the limits
	if(ht2<1 || ht2>2000){
		alert("'Ht' should be in the range 1-2000");	
	} else if(t2<0 || t2>100){
		alert("'T' should be in the range 0-100");	
	} else if(pt2<1 || pt2>2000){
		alert("'Pt' should be in the range 1-2000");	
	} else if(rm2<0.01 || rm2>4){
		alert("'R' should be in the range 0.01-4");	
	} else if(a2<0.001 || a2>0.1){
		alert("'a' should be in the range 0.001-0.1");	
	} else if(c2<1 || c2>10){
		alert("'c' should be in the range 1-10");	
	} else if(k2<2000 || k2>8000){
		alert("'K' should be in the range 2000-8000");	
	} else{
		//Procedure for the graph
		for(var i=0; i<=100; i++){
			timeArr.push(i);			
		}
		var HT = new Array(100);
		var PT = new Array(100);
		var nprime = new Array;
		var pprime = new Array;
		HT[0] = ht2;
		PT[0] = 0;
		var time = 100;
		var exp1;
		for(var i=0; i<time; i++){
				exp1 = Math.exp(-a2 * PT[i]);
				HT[i+1] = rm2 * HT[i] * (1 - HT[i]/k2) * exp1;
			if(i < t2-2){
				PT[i+1] = 0;
			} else if(i == t2-2){
				PT[i+1] = pt2;
			} else{
				PT[i+1] = c2 * HT[i] * (1 - exp1);
			}
		}
		for(var k=0; k < 100; k++){
			var tmpArr = [timeArr[k],HT[k]];
			htArr.push(tmpArr);
			var tmpArr2 = [timeArr[k],PT[k]];
			ptArr.push(tmpArr2);
		}
		draw_graph(htArr,ptArr,"Host","Parasitoid");
		htArr = new Array();
		ptArr = new Array();
		tmpArr = new Array();
		tmpArr2 = new Array();
	}

}

// function for the third tab(Negative Binomial) inputs and procedure..
function getThirdTabVal(){	
	ht3=document.getElementById("HtVal3").value;
	pt3=document.getElementById("PtVal3").value;
	rm3=document.getElementById("RmVal3").value;
	a3=document.getElementById("aVal3").value;
	c3=document.getElementById("cVal3").value;
	k3=document.getElementById("kVal3").value;
	
	//Checking the limits
	if(ht3<1 || ht3>1000){
		alert("'Ht' should be in the range 1-2000");	
	} else if(pt3<1 || pt3>1000){
		alert("'Pt' should be in the range 1-2000");	
	} else if(rm3<0.1 || rm3>10){
		alert("'Rm' should be in the range 0.1-10");	
	} else if(a3<0.001 || a3>0.1){
		alert("'a' should be in the range 0.001-0.1");	
	} else if(c3<1 || c3>10){
		alert("'c' should be in the range 1-10");	
	} else if(k3<0.1 || k3>1.5){
		alert("'k' should be in the range 0.1-1.5");	
	} else{
		//Procedure for the graph
		for(var i=0; i<100; i++){
			timeArr.push(i+1);			
		}
		var HT = new Array(100);
		var PT = new Array(100);
		HT[0] = ht3;
		PT[0] = pt3;
		var time = 100;
		var exp1;
		for(var i=0; i<time; i++){
			exp1 = Math.pow(1 + a3 * PT[i]/k3,-k3);
			HT[i+1] = rm3 * HT[i] * exp1;
			PT[i+1] = c3 * HT[i] * (1 - exp1);
		}
		for(var k=0; k < 100; k++){
			var tmpArr = [timeArr[k],HT[k]];
			htArr.push(tmpArr);
			var tmpArr2 = [timeArr[k],PT[k]];
			ptArr.push(tmpArr2);
		}
		draw_graph(htArr,ptArr,"Host","Parasitoid");
		htArr = new Array();
		ptArr = new Array();
		tmpArr = new Array();
		tmpArr2 = new Array();
	}
}

// function for the fourth tab(Comparison) inputs and procedure..
function getFourthTabVal(){	
	pt4=document.getElementById("PtVal4").value;
	a4=document.getElementById("aVal4").value;
	k4=document.getElementById("kVal4").value;
	
	//Checking the limits
	if(pt4<1 || pt4>10000){
		alert("'T' should be in the range 1-10000");	
	} else if(a4<0.001 || a4>0.1){
		alert("'a' should be in the range 0.001-0.1");	
	} else if(k4<0.1 || k4>10){
		alert("'k' should be in the range 0.1-10");	
	} else{
		//Procedure for the function
		pt4=Number(pt4)
		var p = new Array();
		for(var i=pt4; i<10000; i+=100){
			p.push(i);
		}
		
		var poisson = new Array();
		var negbinomial = new Array();
		var exp1, exp2;
		for(var i=0; i<p.length; i++){
			exp1 = Math.exp(-a4 * p[i]);
			exp2 = Math.pow(1 + a4 * p[i]/k4,-k4);
			poisson[i] = exp1;
			negbinomial[i] = exp2;
		}
		for(var k=0; k < p.length; k++){
			var tmpArr = [p[k],poisson[k]];
			htArr.push(tmpArr);
			var tmpArr2 = [p[k],negbinomial[k]];
			ptArr.push(tmpArr2);
		}
		draw_graph(htArr,ptArr,"Poisson Distribution","Negative Binomial");
		htArr = new Array();
		ptArr = new Array();
		tmpArr = new Array();
		tmpArr2 = new Array();
	}
}

// function to display the graph title and axes names.. 
function graphLabel(){
	if(tab == 1){
		document.getElementById("top").innerHTML="Nicholson-Bailey Model";
		document.getElementById("left").innerHTML="Population size";
		document.getElementById("bottom").innerHTML="Time (in years)";
	} else if(tab == 2){
		document.getElementById("top").innerHTML="Nicholson-Bailey Model with Host Density Dependence";
		document.getElementById("left").innerHTML="Population density";
		document.getElementById("bottom").innerHTML="Time (in years)";
	} else if(tab == 3){
		document.getElementById("top").innerHTML="Negative Binomial Model";
		document.getElementById("left").innerHTML="Population size";
		document.getElementById("bottom").innerHTML="Time (in years)";
	} else if(tab == 4){
		document.getElementById("top").innerHTML="Comparison of Poisson and Negative Binomial Distribution";
		document.getElementById("left").innerHTML="Probability that a host will not be found by the parasitoid";
		document.getElementById("bottom").innerHTML="Number of parasitoids";
	}
}

// function called when the plot button is clicked..
function plotBtnClick(){
	if(tab == 1){
		getFirstTabVal();
	} else if(tab == 2){
		getSecondTabVal();		
	} else if(tab == 3){
		getThirdTabVal();		
	} else if(tab == 4){
		getFourthTabVal();		
	}
	graphLabel();
}


//To show the grapg area onload
$(document).ready(function() {
	$.plot($("#GraphArea"), [ [] ]);
});

// function to draw the graph..
function draw_graph(tmArray,tmArray2,label1,label2){
	$.plot($("#GraphArea"), [ { data: tmArray, label: label1, color: '#FF6666'}, 
							 { data: tmArray2, label: label2, color: '#006666' } ],
	{
		grid: 
		{
			hoverable: true, clickable: true
		},
		//shadowSize:1,
		xaxis:
		{

		},	
		points: 
		{ 
			show: true, radius: 3 
		},
		lines: 
		{
			show: true 
		}
	});
}

// function to show tool tip in graph..
$(function () {
	function showTooltip(x, y, contents) {
        $('<div id="tooltip">' + contents + '</div>').css( {
            position: 'absolute',
            display: 'none',
            top: y - 60,
            left: x - 35,
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
                    
                showTooltip(item.pageX, item.pageY," X: " + x +"</br>"+"Y: " + y);
				tool = true;
            }
            else {
                $("#tooltip").remove();
                previousPoint = null; 
				tool = false;
            }
    });

    $("#GraphArea").bind("plotclick", function (event, pos, item) {
        
    });
});

// function called when the reset button is clicked..
function resetBtnClick(){
	window.location.reload();
	tab = 1;
	document.getElementById("HtVal1").value = 25;
	document.getElementById("PtVal1").value = 10;
	document.getElementById("RmVal1").value = 1.5;
	document.getElementById("aVal1").value = 0.023;
	document.getElementById("cVal1").value = 2;
	
	document.getElementById("HtVal2").value = 2000;
	document.getElementById("TVal2").value = 20;
	document.getElementById("PtVal2").value = 800;
	document.getElementById("RmVal2").value = 3;
	document.getElementById("aVal2").value = 0.01;
	document.getElementById("cVal2").value = 1;
	document.getElementById("kVal2").value = 8000;
	
	document.getElementById("HtVal3").value = 25;
	document.getElementById("PtVal3").value = 10;
	document.getElementById("RmVal3").value = 1.5;
	document.getElementById("aVal3").value = 0.023;
	document.getElementById("cVal3").value = 2;
	document.getElementById("kVal3").value = 1.3;
	
	document.getElementById("PtVal4").value = 10;
	document.getElementById("aVal4").value = 0.001;
	document.getElementById("kVal4").value = 0.5;
	
	graphLabel();
}

