/*
Developed under a Research grant from NMEICT, MHRD
by
Amrita CREATE (Center for Research in Advanced Technologies for Education),
VALUE (Virtual Amrita Laboratories Universalizing Education)
Amrita University, India 2009 - 2013
http://www.amrita.edu/create
*/


var nulltable;
var sampleArr=["dall","song","glandula","robin","sample"]
var selectedSample=sampleArr[0];
var TableTitle=["Dall Mountain Sheep (Ovis dalli dalli)","Song Thrush","The barnacle, Balanus glandula","American Robin (Turdus m. migratorius)","User Defined Table","Leslie Matrix for the  Dall Mountain Sheep (Ovis dalli dalli)","Leslie Matrix for the Song Thrush","Leslie Matrix for the barnacle Balanus glandula ","Leslie Matrix for the  American Robin (Turdus m. migratorius)","User Defined Leslie Matrix"];
var leftPos=[160,230,170,140,180,60,150,120,130];
var alldata = new Array();
var tableLeft;
var tableTop;
var R0=0;
var R1=0;
var T=0;
var r=0;
var t=0;
var xVal=[];
var xValue=0
var dynArr =new Array();
var dynXVal =new Array();
var pxMax =new Array();
var dynFXVal =[];
var dynXlXMXVal =[];
var dynlXMXVal =[];
var dynPXVal =[];
var dynlXVal =[];
var dynNXVal =[];
var dynMXVal =new Array();
var dynArray =new Array();	
var c=0;
var d=0;
var m=0;
var tcolm=15;
var	lifeFlag=0;
var dynLesle=0;
var tableRowCount=0;
var mgmtPlan="predator";
var eignValue;
var rateTop;
var dalldata = [[0, 1000, 0, "Predation (a=0.2; b=0.04; d=0.1)"], [1, 946, 0, "Predation (a=0.4; b=0.01; d=0.25)"],[2, 801, 0, "Predation (a=0.6; b=0.02; d=0.1))"], [3, 789, 2, "Intestinal worms (b=0.03; d=0.02; a=0.01; c=0.2; u=0.001; p=0.02; m=0.01)"],[4, 776, 3, "Intestinal worms (b=0.03; d=0.02; a=0.005; c=0.3; u=0.001; p=0.03; m=0.01)"], [5, 764, 3, "Dysentery(a bacterium) (b=0.07; p=0.01; u=0.8; d=0.06 )"],[6, 734, 3, "Malaria(macroparasite) (b=0.05; d=0.02; a=0.03; c=0.2; u=0.01; p=0.01; m=0.01)"], [7, 688, 4, "Fungus-Microparasite (b=0.04; d=0.07; a=0.006; c=0.2; u=0.002;p=0.06; m=0.01)"],
[8, 640, 4,"Fungus-Microparasite(same as above)"],[ 9, 571, 5, "Fungus-Microparasite(same as above)"],[10, 439, 5, "Predation (a=0.6; b=0.02; d=0.1)"], [11, 252, 6, "Predation (a=0.5; b=0.03; d=0.3)]"],[12, 96, 6, "Predation (a=0.7; b=0.07; d=0.3)"], [13, 6, 6, "Intestinal worms (b=0.03; d=0.02; a=0.005; c=0.3; u=0.001; p=0.03; m=0.01)"],[14, 3, 0, "Old age"] ];
var thrushData= [[0, 1000, 0, "Fungal disease (microparasite)(b=0.02; p=0.02; u=0.5; d=0.05)"], [1, 444, 0, "Fungal disease (microparasite)(b=0.04; p=0.01; u=0.2; d=0.05))"],[2, 259, 0, "Predation(a=0.3; b=0.06; d=0.001)"], [3, 123, 30, "Intestinal worms (b=0.05; d=0.01; a=0.05; c=0.01; u=0.01; p=0.03; m=0.01)"],[4, 51, 10, "Intestinal worms (b=0.03; d=0.01; a=0.05; c=0.01; u=0.01; p=0.03; m=0.01)"], [5, 30, 8, "Predation(a=0.1; b=0.006; d=0.07)"],[6, 17, 5, "Predation(a=0.08; b=0.004; d=0.06)"], [7, 6, 1, "Predation(a=0.2; b=0.05; d=0.001)"],[8, 3, 0, "Old age"]];
var glandulaData= [[0, 1000, 0, "Predation(a=0.3; b=0.06; d=0.001)"], [1, 801, 14, "Predation(a=0.1; b=0.006; d=0.07)"],[2, 789, 12, "Predation(a=0.2; b=0.05; d=0.001)"], [3, 776, 11, "Predation (a=0.2; b=0.04; d=0.1)"],[4, 764, 9, "Predation (a=0.4; b=0.01; d=0.25)"], [5, 734, 9, "Predation (a=0.6; b=0.02; d=0.1)"],[6, 688, 7, "Predation(a=0.2; b=0.05; d=0.001)"], [7, 640, 7, "Predation (a=0.6; b=0.02; d=0.1)"],[8, 571, 6, "Predation (a=0.5; b=0.03; d=0.3)"],[ 9, 439, 4, "Predation (a=0.7; b=0.07; d=0.3)"],[10, 252, 4, "Predation (a=0.6; b=0.02; d=0.1)"], [11, 96, 2, "Predation (a=0.1; b=0.03; d=0.3)"],[12, 6, 0, "Predation(a=0.1; b=0.4; d=0.003)"], [13, 3, 0, "Genetically programmed death after reproduction"] ];
var robinData= [[0, 1000, 0, "Predation(a=0.2; b=0.05; d=0.001)"], [1, 497, 28, "Fungal disease (microparasite)(b=0.02; p=0.02; u=0.5; d=0.05)"],[2, 229, 12, "Intestinal worms (b=0.03; d=0.02; a=0.005; c=0.3; u=0.001; p=0.03; m=0.01)"], [3, 99, 9, "Predation(a=0.2; b=0.05; d=0.001)"],[4, 36, 9, "Fungus-Microparasite (b=0.04; d=0.07; a=0.006; c=0.2; u=0.002; p=0.06; m=0.01)"], [5, 10, 5, "Fungus-Microparasite (b=0.04; d=0.07; a=0.006; c=0.2; u=0.002; p=0.06; m=0.01)"],[6, 6, 1, "Old age"]];
var ltDall = [[0, 1000,1,0.946,0,0,0,0], [1,444,0.946,0.846723044,0,0,0,0],[2, 801,0.801,0.985018727, 0,0,0,0], [3, 789,0.789,0.983523447,2,1.578,4.734,1.970037453 ],[4, 776,0.776,0.984536082, 3,2.328,9.312,2.950570342 ], [5, 764,0.764,0.960732984, 3,2.292,11.46, 
2.953608247],[6, 734,0.734,0.9373297, 3,2.202,13.212,2.882198953 ], [7, 688,0.688,0.930232558, 4,2.752,19.264,3.749318801 ],[8, 640,0.64,0.8921875, 4,2.56,20.48,3.720930233 ],[ 9, 571,0.571,0.76882662, 5,2.855,25.695,4.4609375 ],[10, 439,0.439,0.574031891, 5,2.195,21.95,3.8441331], [11, 252,0.252,0.380952381, 6,1.512,16.632,3.444191344 ],[12, 96,0.096,0.0625,6,0.576,6.912,
2.285714286 ], [13, 6,0.006,0.5, 6,0.036,0.468,0.375 ],[14, 3,0.003,0,0,0,0,0] ];
var ltthrush= [[0,1000,1,0.444,0,0,0,0], [1,444,0.444,0.583333333,0,0,0,0],[2,259,0.259,0.474903475,0,0,0,0], [3,123,0.123,0.414634146,30,3.69,11.07,14.24710425],[4,51,0.051,0.588235294,10,0.51,2.04,4.146341463], [5,30,0.030,566.6666667,8,0.24,1.2,4.705882353],[6,17,0.017,0.352941176,5,0.085,0.51,2833.333333], [7,6,0.006,0.5,1,0.006,0.042,0.352941176],[8, 3,0.003,0,0,0,0,0]];
var ltglandula= [[0,1000,1,0.801,0,0,0,0], [1,801,0.801,0.985018727,14,11.214,11.214,11.214],[2,789,0.789,0.983523447,12,9.468,18.936,11.82022472], [3,776,0.776,0.984536082,11,8.536,25.608,10.81875792],[4,764,0.764,0.960732984,9,6.876,27.504,8.860824742], [5,734,0.734,0.9373297,9,6.606,33.03,8.646596859],[6, 688,0.688,0.930232558,7,4.816,28.896,6.561307902], [7, 640,0.64,0.8921875,7,4.48,31.36,6.511627907],[8,571,0.571,0.76882662,6,3.426,27.408,5.353125],[ 9, 439,0.439,0.574031891, 4,1.756,15.804,3.07530648],[10, 252,0.252,0.380952381, 4,1.008,10.08,2.296127563], [11, 96,0.096,0.0625, 2,0.192,2.112,0.761904762],[12, 6,0.006,0.5, 0,0,0,0], [13, 3,0.003,0, 0,0,0,0] ];
var ltrobin= [[0, 1000,1,0.497, 0,0,0,0], [1, 497,0.497,0.460764588, 28,13.916,13.916,13.916],[2, 229,0.229,0.43231441,12,2.748,5.496,5.52917505], [3, 99,0.099,0.363636364, 9,0.891,2.673,3.890829694],[4, 36,0.036 ,0.277777778,9,0.324,1.296,3.272727273], [5, 10,0.01,0.6, 5,0.05,0.25,1.388888889],[6, 6,0.006,0,1,0.006,0.036,0.6]];
var headArray=["Age class","Number of survivors in each age class","Average female offspring per female of a given age in the population","Number alive at age x / number at age zero","The probability that an individual will survive from age (x) to age (x+1)","Fecundity value","This part of the life history has the greatest effect on the population growth rate. The major cause of mortality is Predation (a=0.6; b=0.02; d=0.1).","This part of the life history has the greatest effect on the population growth rate. The major cause of mortality is Predation(a=0.1; b=0.006; d=0.07).","This part of the life history has the greatest effect on the population growth rate. The major cause of mortality is Predation(a=0.1; b=0.006; d=0.07).","This part of the life history has the greatest effect on the population growth rate. The major cause of mortality is Old age.","This part of the life history has the greatest effect on the population growth rate. "];
$(document).ready(function() {						   
	alldata=dalldata;
	createTable();
	tableLeft=document.getElementById("tablePosition").offsetLeft;
	tableTop=document.getElementById("tablePosition").offsetTop;
	rateTop=document.getElementById("r").offsetTop;
	document.getElementById("reset").style.top=25+"px";
	document.getElementById("wrong").style.visibility='hidden';
	document.getElementById("text_wrong").style.visibility='hidden';
	document.getElementById("wrgMsg").style.visibility='hidden';
	
	calculation();	
		if ( $.browser.mozilla == true){
			document.getElementById("text_wrong").style.left=10+"px";
			
		}
});
// Function to create static table 
function createTable(){
	document.getElementById("tablePosition").innerHTML='';
	var tableData="";
	if(selectedSample==sampleArr[0]){
		
		tableData = '<table width="100%" height="100%" id="allTable"><tr><th id="h1" onmouseover="showTooltip(this.id)" onmouseout="hideTooltip()">x</th><th id="h2" onmouseover="showTooltip(this.id)" onmouseout="hideTooltip()">nx</th><th id="h3" onmouseover="showTooltip(this.id)" onmouseout="hideTooltip()">mx</th><th>Major Cause of Mortality</th></tr>';	
	}else if(selectedSample==sampleArr[1]){

		tableData = '<table width="100%" height="70%" id="allTable"><tr><th id="h1" onmouseover="showTooltip(this.id)" onmouseout="hideTooltip()">x</th><th id="h2" onmouseover="showTooltip(this.id)" onmouseout="hideTooltip()">nx</th><th id="h3" onmouseover="showTooltip(this.id)" onmouseout="hideTooltip()">mx</th><th>Major Cause of Mortality</th></tr>';
	}else if(selectedSample==sampleArr[2]){
		
		tableData = '<table width="100%" height="100%" id="allTable"><tr><th id="h1" onmouseover="showTooltip(this.id)" onmouseout="hideTooltip()">x</th><th id="h2" onmouseover="showTooltip(this.id)" onmouseout="hideTooltip()">nx</th><th id="h3" onmouseover="showTooltip(this.id)" onmouseout="hideTooltip()">mx</th><th>Major Cause of Mortality</th></tr>';
	}else if(selectedSample==sampleArr[3]){

		tableData = '<table width="100%" height="60%" id="allTable"><tr><th id="h1" onmouseover="showTooltip(this.id)" onmouseout="hideTooltip()">x</th><th id="h2" onmouseover="showTooltip(this.id)" onmouseout="hideTooltip()">nx</th><th id="h3" onmouseover="showTooltip(this.id)" onmouseout="hideTooltip()">mx</th><th>Major Cause of Mortality</th></tr>';
	}
	
	
	for(var i = 0 ; i<alldata.length; i++){
		if(i%2==0){
			tableData+= '<tr id="colorchange">'
		}else{
			tableData+= '<tr>'
		}
		for(var j = 0 ; j<4; j++){
			if(j==3){
				tableData+='<td id="alignLeft">'+alldata[i][j]+'</td>';
			}else{
				tableData+='<td>'+alldata[i][j]+'</td>';
			}
			
		}
		tableData+= '</tr>'
	}
	tableData+='</table>';

	document.getElementById("tablePosition").style.overflow='hidden';
	document.getElementById("tablePosition").innerHTML=tableData;
	
	
}
// function to create life table 
function createLifeTable(){
	
	document.getElementById("tablePosition").innerHTML='';
	var tableData1="";
	if(selectedSample==sampleArr[0]){
		
		tableData1 = '<table width="100%" height="100%" id="allTable"><tr><th>x</th><th>nx</th><th>lx</th><th>px</th><th>mx</th><th>lxmx</th><th>xlxmx</th><th>fx</th></tr>';	
	}else if(selectedSample==sampleArr[1]){

		tableData1 = '<table id="allTable"  height="60%" width="100%" ><tr><th>x</th><th>nx</th><th>lx</th><th>px</th><th>mx</th><th>lxmx</th><th>xlxmx</th><th>fx</th></tr>';
		
	}else if(selectedSample==sampleArr[2]){
		
		 tableData1 = '<table width="100%" height="100%" id="allTable"><tr><th>x</th><th>nx</th><th>lx</th><th>px</th><th>mx</th><th>lxmx</th><th>xlxmx</th><th>fx</th></tr>';
	}else if(selectedSample==sampleArr[3]){
		
		 tableData1 = '<table id="allTable" height="50%" width="100%" ><tr><th>x</th><th>nx</th><th>lx</th><th>px</th><th>mx</th><th>lxmx</th><th>xlxmx</th><th>fx</th></tr>';
	}
	
	for(var i = 0 ; i<alldata.length; i++){
		if(i%2==0){
			tableData1+= '<tr id="colorchange">'
		}else{
			tableData1+= '<tr>'
		}
		for(var j = 0 ; j<8; j++){
			   tableData1+='<td>'+alldata[i][j]+'</td>';
		}
		tableData1+= '</tr>'
	}
	tableData1+='</table>';

	document.getElementById("tablePosition").style.overflow='hidden';
	document.getElementById("tablePosition").innerHTML=tableData1;
	
}
// function to define onclick radio button 
function checkSelected(e) {
	selectedSample=e.id;
	disableFn();
	document.getElementById("grate").disabled=true;
	document.getElementById("leslie").disabled=false;
	calculation();
	document.getElementById("dynTable").style.visibility='hidden';
	if(e.checked==true){
		sampleSelection();			
	}

}
// radio button selection 
function sampleSelection(){
		
		alldata = new Array();
		if(selectedSample==sampleArr[0]){
			alldata=dalldata;
			mgmtPlan="predator";
			document.getElementById("tablePosition").style.visibility='visible';
			document.getElementById("tableTitle").innerHTML=TableTitle[0];
			document.getElementById("tableTitle").style.left=leftPos[0]+"px";
			createTable();
		}else if(selectedSample==sampleArr[1]){
			alldata=thrushData;
			mgmtPlan="predator";
			document.getElementById("tablePosition").style.visibility='visible';
			document.getElementById("tableTitle").innerHTML=TableTitle[1];
			document.getElementById("tableTitle").style.left=leftPos[1]+"px";
			createTable();
		}else if(selectedSample==sampleArr[2]){
			alldata=glandulaData;
			mgmtPlan="predator";
			document.getElementById("tablePosition").style.visibility='visible';
			document.getElementById("tableTitle").innerHTML=TableTitle[2];
			document.getElementById("tableTitle").style.left=leftPos[2]+"px";
			createTable();
		}else if(selectedSample==sampleArr[3]){
			alldata=robinData;
			mgmtPlan="predator";
			document.getElementById("tablePosition").style.visibility='visible';
			document.getElementById("tableTitle").innerHTML=TableTitle[3];
			document.getElementById("tableTitle").style.left=leftPos[3]+"px";
			createTable();
		}else if(selectedSample==sampleArr[4]){			
			document.getElementById("tablePosition").style.visibility='hidden';
			document.getElementById("dynTable").style.visibility='visible';
			document.getElementById("tableTitle").innerHTML=TableTitle[4];
			document.getElementById("tableTitle").style.left=leftPos[1]+"px";
		
		}
}
function removeTable(id)
{
	var tbl = document.getElementById(id);
	if(tbl) tbl.parentNode.removeChild(tbl);
}


//Clicking tabs 
function tabClicked(e){	
	
	if(e.id=="tabHeader_1"){
		document.getElementById("dynTable").style.visibility='hidden';
		disableFn();	
		document.getElementById("grate").disabled=true;
		document.getElementById("leslie").disabled=false;
		sampleSelection();
	}
	if(selectedSample==sampleArr[4]){
		document.getElementById("predator").disabled=true;
		document.getElementById("parasite").disabled=true;
		document.getElementById("host").disabled=true;
		
	}else{
		document.getElementById("predator").disabled=false;
		document.getElementById("parasite").disabled=false;
		document.getElementById("host").disabled=false;
		
	}
	document.getElementById("reset").style.top=25+"px";
	document.getElementById("wrong").style.visibility='hidden';
	document.getElementById("text_wrong").style.visibility='hidden';
	document.getElementById("wrgMsg").style.visibility='hidden';
	calculation();
	//document.getElementById("grate").disabled=true;
	//document.getElementById("leslie").disabled=false;
	
}
// Reset the functions
function resetFN() {
	document.getElementById("grate").disabled=true;
	document.getElementById("leslie").disabled=false;
	disableFn();
}
//Function to show tooltip over table heading 
function showTooltip(e){

	var leftPosmsg;	
	var topPos;
	document.getElementById("toolImg").style.display='none';
	document.getElementById("tooltip").style.display='block';
	if(e=="h1"){
		topPos=tableTop-55+"px";
		if ( $.browser.mozilla == true){
			if(selectedSample==sampleArr[0]){
				leftPosmsg=tableLeft-15+"px";
			}else if(selectedSample==sampleArr[1]){
				leftPosmsg=tableLeft-10+"px";
			}else if(selectedSample==sampleArr[2]){
				leftPosmsg=tableLeft-10+"px";
			}else if(selectedSample==sampleArr[3]){
				leftPosmsg=tableLeft-10+"px";
			}
			
		}else{
			leftPosmsg=tableLeft-15+"px";
		}
		document.getElementById("h1").style.cursor='pointer';
		document.getElementById("tooltip").style.left=leftPosmsg;
		document.getElementById("tooltip").style.top=topPos;		
		document.getElementById("tooltip").innerHTML=headArray[0];
	}else if(e=="h2"){
		topPos=tableTop-55+"px";
		if ( $.browser.mozilla == true){
			if(selectedSample==sampleArr[0]){
				leftPosmsg=tableLeft+35+"px";
			}else if(selectedSample==sampleArr[1]){
				leftPosmsg=tableLeft+50+"px";
			}else if(selectedSample==sampleArr[2]){
				leftPosmsg=tableLeft+50+"px";
			}else if(selectedSample==sampleArr[3]){
				leftPosmsg=tableLeft+50+"px";
			}
		}else{
			leftPosmsg=tableLeft+35+"px";
		}
		
		document.getElementById("h2").style.cursor='pointer';
		document.getElementById("tooltip").style.left=leftPosmsg;
		document.getElementById("tooltip").style.top=topPos;
		document.getElementById("tooltip").innerHTML=headArray[1];
	}else if(e=="h3"){
		topPos=tableTop-50+"px";		
		if ( $.browser.mozilla == true){
			if(selectedSample==sampleArr[0]){
				leftPosmsg=tableLeft+95+"px";
			}else if(selectedSample==sampleArr[1]){
				leftPosmsg=tableLeft+130+"px";
			}else if(selectedSample==sampleArr[2]){
				leftPosmsg=tableLeft+130+"px";
			}else if(selectedSample==sampleArr[3]){
				leftPosmsg=tableLeft+130+"px";
			}
		}else{
			leftPosmsg=tableLeft+95+"px";
		}
		document.getElementById("h3").style.cursor='pointer';
		document.getElementById("tooltip").style.left=leftPosmsg;
		document.getElementById("tooltip").style.top=topPos;
		document.getElementById("tooltip").innerHTML=headArray[2];
	}else if(e=="x1"){
		topPos=tableTop-30+"px";
		leftPosmsg=tableLeft+45+"px";
		document.getElementById("x1").style.cursor='pointer';
		document.getElementById("tooltip").style.left=leftPosmsg;
		document.getElementById("tooltip").style.top=topPos;
		document.getElementById("tooltip").innerHTML=headArray[0];
	}else if(e=="nx1"){
		topPos=tableTop-30+"px";
		leftPosmsg=tableLeft+200+"px";
		document.getElementById("nx1").style.cursor='pointer';
		document.getElementById("tooltip").style.left=leftPosmsg;
		document.getElementById("tooltip").style.top=topPos;
		document.getElementById("tooltip").innerHTML=headArray[1];
	}else if(e=="mx1"){
		topPos=tableTop-30+"px";
		if ( $.browser.mozilla == true){
			leftPosmsg=tableLeft+340+"px";
		}else{
			leftPosmsg=tableLeft+360+"px";
		}
		document.getElementById("mx1").style.cursor='pointer';
		document.getElementById("tooltip").style.left=leftPosmsg;
		document.getElementById("tooltip").style.top=topPos;
		document.getElementById("tooltip").innerHTML=headArray[2];
	}else if(e=="colorchg1"){
		topPos=tableTop-50+"px";
		leftPosmsg=tableLeft+55+"px";
		document.getElementById("toolImg").style.left=leftPosmsg;
		document.getElementById("toolImg").style.top=topPos;
		document.getElementById("tooltip").style.display='none';
		document.getElementById("toolImg").style.display='block';
		document.getElementById("toolImg").innerHTML=headArray[6];
	}else if(e=="colorchg2"){
		topPos=tableTop-50+"px";
		leftPosmsg=tableLeft+55+"px";
		document.getElementById("toolImg").style.left=leftPosmsg;
		document.getElementById("toolImg").style.top=topPos;
		document.getElementById("tooltip").style.display='none';
		document.getElementById("toolImg").style.display='block';
		document.getElementById("toolImg").innerHTML=headArray[7];
	}else if(e=="colorchg3"){
		topPos=tableTop-50+"px";
		leftPosmsg=tableLeft+55+"px";
		document.getElementById("toolImg").style.left=leftPosmsg;
		document.getElementById("toolImg").style.top=topPos;
		document.getElementById("tooltip").style.display='none';
		document.getElementById("toolImg").style.display='block';
		document.getElementById("toolImg").innerHTML=headArray[8];
	}else if(e=="colorchg4"){
		topPos=tableTop-50+"px";
		leftPosmsg=tableLeft+55+"px";
		document.getElementById("toolImg").style.left=leftPosmsg;
		document.getElementById("toolImg").style.top=topPos;
		document.getElementById("tooltip").style.display='none';
		document.getElementById("toolImg").style.display='block';
		document.getElementById("toolImg").innerHTML=headArray[9];
	}else if(e=="colorchg5"){
		topPos=tableTop-50+"px";
		leftPosmsg=tableLeft+55+"px";
		document.getElementById("toolImg").style.left=leftPosmsg;
		document.getElementById("toolImg").style.top=topPos;
		document.getElementById("tooltip").style.display='none';
		document.getElementById("toolImg").style.display='block';
		document.getElementById("toolImg").innerHTML=headArray[10];
	}
}
//Function to hide tooltip
function hideTooltip(){
	document.getElementById("tooltip").style.display='none';
	document.getElementById("toolImg").style.display='none';
}
// Calculation of 'r' and 't'
function calculation(){
	if(selectedSample==sampleArr[0]){
		for(var i=0;i<ltDall.length;i++){		
			R0=R0+ltDall[i][5];
			R1=R1+ltDall[i][6];
		}
	
	}else if(selectedSample==sampleArr[1]){	
		for(var i=0;i<ltthrush.length;i++){		
			R0=R0+ltthrush[i][5];
			R1=R1+ltthrush[i][6];
		}
	}else if(selectedSample==sampleArr[2]){	
		for(var i=0;i<ltglandula.length;i++){		
			R0=R0+ltglandula[i][5];
			R1=R1+ltglandula[i][6];
		}
	}else if(selectedSample==sampleArr[3]){	
		for(var i=0;i<ltrobin.length;i++){		
			R0=R0+ltrobin[i][5];
			R1=R1+ltrobin[i][6];
			
		}
	}else if(selectedSample==sampleArr[4]){	
		for(var i=0;i<dynlXMXVal.length;i++){		
			R0=R0+dynlXMXVal[i];
			R1=R1+dynXlXMXVal[i];			
		}
		
	}
	T=R1/R0;
	r=Math.log(R0)/T;
	t=Math.log(0.5)/r;
}
// function to display life table 
function lifeTableShow(){
	
	dynArray=new Array();
	dynNXVal=new Array();
	dynMXVal=new Array();
	dynlXVal=new Array();
	dynPXVal=new Array();
	dynlXMXVal=new Array();
	dynXlXMXVal=new Array();
	dynFXVal=new Array();
	dynXVal=new Array();
	alldata = new Array();
	if(selectedSample==sampleArr[0]){		
		alldata=ltDall;
		createLifeTable();
		document.getElementById("lifeTable").disabled=true;
		document.getElementById("rate").disabled=false;
	}else if(selectedSample==sampleArr[1]){	
		alldata=ltthrush;
		createLifeTable();
		document.getElementById("lifeTable").disabled=true;
		document.getElementById("rate").disabled=false;
	}else if(selectedSample==sampleArr[2]){	
		alldata=ltglandula;
		createLifeTable();
		document.getElementById("lifeTable").disabled=true;
		document.getElementById("rate").disabled=false;
	}else if(selectedSample==sampleArr[3]){	
		alldata=ltrobin;
		createLifeTable();
		document.getElementById("lifeTable").disabled=true;
		document.getElementById("rate").disabled=false;
	}else if(selectedSample==sampleArr[4]){		
	
		for(var i=0;i<dynArr.length;i++){			
			dynArray[i]=dynArr[i];	
			
		}
		dynArray.clean(undefined);
		for(var x=0;x<(dynArray.length*2);x++){	
			dynArray.clean("rowId"+x);
		}
			
		alldata=listToMatrix(dynArray, 3)
		for(var m = 1 ; m<dynArray.length; m=m+3){		
			dynNXVal[m]=dynArray[m];
			
		}
		for(var q = 2 ; q<dynArray.length; q=q+3){		
			dynMXVal[q]=dynArray[q];
			
		}
		for(var r = 0 ; r<dynArray.length; r=r+3){		
			dynXVal[r]=dynArray[r];
			
		}
		dynNXVal.clean(undefined);
		dynXVal.clean(undefined);
		dynMXVal.clean(undefined);
		for(var p = 0 ; p<dynNXVal.length; p++){
			dynlXVal[p]=dynNXVal[p]/dynNXVal[0];
		}
		for(var n = 0 ; n<dynNXVal.length; n++){
			
			if(n==dynNXVal.length){
				dynPXVal[n]=0
			}else if(n==dynNXVal.length-1){
				dynPXVal[n]=0
			}else{
				dynPXVal[n]=dynlXVal[n+1]/dynlXVal[n];
				
			}
			
			dynlXMXVal[n]=dynlXVal[n]*dynMXVal[n];
			dynXlXMXVal[n]=dynXVal[n]*dynlXMXVal[n];
			
		}
		for(var s = 0 ; s<dynNXVal.length; s++){
			dynFXVal[s+1]=dynPXVal[s]*dynMXVal[s+1];
			dynFXVal[0]=0;
		}
		if(dynArray.length>=6){
			createdynamicLifeTable();
			document.getElementById("lifeTable").disabled=true;
			document.getElementById("rate").disabled=false;
		}else{
			alert("Please add at least 2 rows and fill all values");
		}
		 calculation();
	}

	
}

// function for remove empty elements from an array
Array.prototype.clean = function(deleteValue) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == deleteValue) {         
      this.splice(i, 1);
      i--;
    }
  }
  return this;
};
// Function to create dynamic life table
function createdynamicLifeTable(){
	document.getElementById("tablePosition").innerHTML='';
	var tableData2="";
	lifeFlag=1;
	document.getElementById("tablePosition").style.overflow='scroll';
	document.getElementById("dynTable").style.visibility='hidden';
	document.getElementById("tablePosition").style.visibility='visible';
	tableData2 = '<table width="100%" height="30%" id="allTable"><tr><th>x</th><th>nx</th><th>lx</th><th>px</th><th>mx</th><th>lxmx</th><th>xlxmx</th><th>fx</th></tr>';
	for(var i = 0 ; i<dynFXVal.length-1; i++){
		if(i%2==0){
			tableData2+= '<tr id="colorchange">'
		}else{
			tableData2+= '<tr>'
		}
		tableData2+='<td>'+dynXVal[i]+'</td>';
		tableData2+='<td>'+dynNXVal[i]+'</td>';
		tableData2+='<td>'+dynlXVal[i]+'</td>';
		tableData2+='<td>'+dynPXVal[i]+'</td>';
		tableData2+='<td>'+dynMXVal[i]+'</td>';
		tableData2+='<td>'+dynlXMXVal[i]+'</td>';
		tableData2+='<td>'+dynXlXMXVal[i]+'</td>';
		tableData2+='<td>'+dynFXVal[i]+'</td>';
		tableData2+= '</tr>'
	}
	tableData2+='</table>';
	document.getElementById("tablePosition").innerHTML=tableData2;
	
}
// function to display Create Leslie Matrix
function createLesle(){
	
	alldata = new Array();
	document.getElementById("grate").disabled=false;
	document.getElementById("leslie").disabled=true;
	disableFn();
	if(selectedSample==sampleArr[0]){	
		alldata=ltDall;
		tcolm=15;
		createLesleTable();	
				
	}else if(selectedSample==sampleArr[1]){
		alldata=ltthrush;
		tcolm=9;
		createLesleTable();
				
	}else if(selectedSample==sampleArr[2]){
		alldata=ltglandula;
		tcolm=14;
		createLesleTable();
	}else if(selectedSample==sampleArr[3]){	
		alldata=ltrobin;
		tcolm=7;
		createLesleTable();
	
	}else if(selectedSample==sampleArr[4]){
		if(lifeFlag==1){
			createdynamicLesleTable();
			lifeFlag=0;
		}else{
			alert("Please Create Life Table");
		}
		
	}
	
}
// function to create Lesle Table
function createLesleTable(){
	document.getElementById("tablePosition").innerHTML='';
	var tableData3="";	
	if(selectedSample==sampleArr[0]){
		
		tableData3 = '<table width="100%" height="100%" id="allTable">';
	}else if(selectedSample==sampleArr[1]){
		
		tableData3 = '<table height="60%" id="allTable" width="100%">';
	}else if(selectedSample==sampleArr[2]){
		
		tableData3 = '<table width="100%" height="100%" id="allTable">';
	}else if(selectedSample==sampleArr[3]){
		
		tableData3 = '<table id="allTable"  height="50%" width="100%">';
	}
	
	var fx=new Array();
	var px=new Array();
	tableData3+= '<tr>'
	for(var i = 0 ; i<alldata.length; i++){			
		px[i]=alldata[i][3];
		
	}
	for(var z = 1 ; z<alldata.length; z++){
		fx[z]=alldata[z][7];	
		tableData3+='<td>'+fx[z]+'</td>';
	}
	tableData3+='<td>'+0+'</td>';
	tableData3+= '</tr>';
	for(var i = 0 ; i<alldata.length-1; i++){
		if(i%2==0){
			tableData3+= '<tr id="colorchange">'
		}else{
			tableData3+= '<tr>'
		}for(var j = 0 ; j<tcolm; j++){
			if(i==j){
			
				   tableData3+='<td>'+px[i]+'</td>';
			
			}else{
				tableData3+='<td>'+0+'</td>';
			}
		}
			
		tableData3+= '</tr>'
	}
	tableData3+='</table>';

	document.getElementById("tablePosition").style.overflow='hidden';
	document.getElementById("tablePosition").style.overflow='scroll';
	document.getElementById("tablePosition").innerHTML=tableData3;
	
}

// function to create dynamic Lesle Table
function createdynamicLesleTable(){
	document.getElementById("tablePosition").innerHTML='';
	var tableData4='';	
	document.getElementById("tablePosition").style.visibility='visible';
	document.getElementById("dynTable").style.visibility='hidden';	
	dynLesle=1;
	tableData4 = '<table width="100%" height="30%" id="allTable">';
	var fx=new Array();
	var px=new Array();
	tableData4+= '<tr>'
	for(var i = 0 ; i<dynFXVal.length-1; i++){
		px[i]=dynPXVal[i];			
				
	}
	for(var z = 0 ; z<dynFXVal.length-1; z++){
		fx[z]=dynFXVal[z];	
		
	}

	for(var r = 1 ; r<fx.length; r++){
		tableData4+='<td>'+[r]+'</td>';
	}
	tableData4+='<td>'+0+'</td>';
	tableData4+= '</tr>';
	for(var i = 0 ; i<dynFXVal.length-2; i++){
		if(i%2==0){
			tableData4+= '<tr id="colorchange">'
		}else{
			tableData4+= '<tr>'
		}for(var j = 0 ; j<dynFXVal.length-1; j++){
			if(i==j){			
				   tableData4+='<td>'+px[i]+'</td>';
			
			}else{
				tableData4+='<td>'+0+'</td>';
			}
		}
				
		tableData4+= '</tr>'
	}
	tableData4+='</table>';
	document.getElementById("tablePosition").style.overflow='hidden';
	document.getElementById("tablePosition").style.overflow='scroll';
	document.getElementById("tablePosition").innerHTML=tableData4;
	
}
// function to show rate of decline values
function rateOfDecline(){
	//this adds click event to tabs
	var container = document.getElementById("tabContainer");
    var tabs = container.querySelectorAll(".tabs ol li");
    tabs[1].onclick=displayPage;
	tabs[0].onclick = null;
	tabs[2].onclick = null;
	document.getElementById("rate").disabled=true;
	if(selectedSample==sampleArr[0]){
		document.getElementById("r").style.top=rateTop+"px";
		document.getElementById("t").style.top=rateTop+15+"px";
	}else if(selectedSample==sampleArr[1]){
		document.getElementById("r").style.top=rateTop-160+"px";
		document.getElementById("t").style.top=rateTop-145+"px";		
		
	}else if(selectedSample==sampleArr[2]){
		document.getElementById("r").style.top=rateTop+"px";
		document.getElementById("t").style.top=rateTop+15+"px";		
		
	}else if(selectedSample==sampleArr[3]){
		document.getElementById("r").style.top=rateTop-200+"px";
		document.getElementById("t").style.top=rateTop-185+"px";		
		
	}else if(selectedSample==sampleArr[4]){
		document.getElementById("r").style.top=rateTop+"px";
		document.getElementById("t").style.top=rateTop+15+"px";
		
	}
	document.getElementById("r").style.visibility="visible";
	document.getElementById("t").style.visibility="visible";
	document.getElementById("r").innerHTML="Rate of growth :"+r.toFixed(4);
	document.getElementById("t").innerHTML="Time taken for the population to become half the initial size :"+t.toFixed(4);
	
	
}
// function to disable /enable 
function disableFn(){
	document.getElementById("lifeTable").disabled=false;	
	document.getElementById("r").style.visibility="hidden";
	document.getElementById("t").style.visibility="hidden";
	document.getElementById("rate").disabled=true;
	document.getElementById("gr").style.visibility="hidden";
	
}
// function to add dynamic rows 
function addRow(tableID) { 

	var table = document.getElementById(tableID);
	var rowCount = table.rows.length;
	var row = table.insertRow(rowCount);

	var cell0 = row.insertCell(0);
	var element0 = document.createElement("input");            
	element0.type = "checkbox";
	element0.value="rowId";
	cell0.appendChild(element0);
	
	var tag1 = "c1"+c.toString(); //could just as easily be a tag "r1c1"
	var cell1 = row.insertCell(1);
	cell1.innerHTML = "<input type='text' id='"+tag1+"' onchange='storeValue();dotRestrict(this);' onkeypress='validate(event)' />";
	c++; 

	var tag2 = "c2"+d.toString(); 
	var cell2 = row.insertCell(2);
	cell2.innerHTML = "<input type='text' id='"+tag2+"' onchange='storeValue();dotRestrict(this);restricDigit1(this);' onkeypress='validate(event)'/>";
  	d++

     var tag3 = "c3"+m.toString(); 
     var cell3 = row.insertCell(3);
     cell3.innerHTML = "<input type='text' id='"+tag3+"' onchange='storeValue();dotRestrict(this);restricDigit2(this);' onkeypress='validate(event)'/>";
  	
	 m++;
	
}
//function validate text input
function validate(evt) {
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
//function to restrict number of digits between 0 an 1000
function restricDigit1(e){
	var str=e.value;
	var a1 = new Array();
	a1=str.split("");
	var len=a1.length;
	if(len>3){
		if(str!=1000){
			e.value="";			
			alert(" 'nx' ranges from 0-1000");
			e.focus();
		}
	}
	
}
//function to restrict number of digits between 0 an 100
function restricDigit2(e){
	var str=e.value;
	var a1 = new Array();
	a1=str.split("");
	var len=a1.length;
	if(len>2){
		if(str!=100){
			e.value="";		
			alert(" 'mx' ranges from 0-100");
			e.focus();
		}
	}

}
//function restrict more than one dot in textinput
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
//function to store dynamic data
function storeValue(){

	var table = document.getElementById('dynData');
	var rowCount = table.rows.length;
	 var inputElms = document.getElementsByTagName("input");	
	 for(iX=0;iX<inputElms.length;iX++){
		 if(inputElms[iX].value == 'rowId'){
		 	dynArr[iX] = "rowId"+iX;
		 }
		else if(inputElms[iX].type == 'text'){ 		
			dynArr[iX] = inputElms[iX].value;		
		}

		
	 }
	 
}
// function to delete dynamic created rows
 function deleteRow(tableID) {
	 var k=0;
	try {
	var table = document.getElementById(tableID);
	var rowCount = table.rows.length;
	//alert(rowCount);
	for(var i=0; i<rowCount; i++) {
		if(i==0){
			k=0;
		}else if(i==1){
			k=k+2;
		}else{
			k=k+4;
		}
		var row = table.rows[i];
		var chkbox = row.cells[0].childNodes[0];

		if(chkbox != null   &&  chkbox.checked == true ) {
			
			if(rowCount <= 2) {
				alert("Cannot delete all the rows.");
				break;
			}
			
			var ki=dynArr.indexOf(chkbox.value+""+k);
			dynArr.splice(ki,4);
			table.deleteRow(i);
			rowCount--;
			i--;
		}
		


	}
	}catch(e) {
		alert(e);
	}


}

// function for show simulation Predator - Prey Dynamics
function prayDynamic(){
	document.getElementById("reset").style.top=25+"px";
	document.getElementById("wrong").style.visibility='hidden';
	document.getElementById("text_wrong").style.visibility='hidden';
	document.getElementById("wrgMsg").style.visibility='hidden';

	var container = document.getElementById("tabContainer");
   	var tabs = container.querySelectorAll(".tabs ol li");
	tabs[1].onclick = null;
	tabs[2].onclick = null;
	if(selectedSample==sampleArr[3]){
		alert("No need to conserve natural death");
		tabs[0].onclick=displayPage;
	}else if(selectedSample==sampleArr[4]){
		window.open( "http://vl.balavidya.com/?sub=3&brch=67&sim=185&cnt=4");
		
	}else{
		if(mgmtPlan=="predator"){
			window.open( "http://vl.balavidya.com/?sub=3&brch=67&sim=185&cnt=4");
			tabs[0].onclick=displayPage;
		}else{
			document.getElementById("reset").style.top=60+"px";
			document.getElementById("wrong").style.visibility='visible';
			document.getElementById("text_wrong").style.visibility='visible';
			document.getElementById("wrgMsg").style.visibility='visible';
		}
	}
}
// function for show simulation Microparasite and Macroparasite
function microParasite(){
	var container = document.getElementById("tabContainer");
   	var tabs = container.querySelectorAll(".tabs ol li");
	tabs[1].onclick = null;
	tabs[2].onclick = null;
	document.getElementById("reset").style.top=25+"px";
	document.getElementById("wrong").style.visibility='hidden';
	document.getElementById("text_wrong").style.visibility='hidden';
	document.getElementById("wrgMsg").style.visibility='hidden';
	if(selectedSample==sampleArr[3]){
		alert("No need to conserve natural death");
		tabs[0].onclick=displayPage;
	}else if(selectedSample==sampleArr[4]){
		window.open( "http://vl.balavidya.com/?sub=3&brch=67&sim=888&cnt=4");
		tabs[0].onclick=displayPage;
	}else{
		document.getElementById("reset").style.top=60+"px";
		document.getElementById("wrong").style.visibility='visible';
		document.getElementById("text_wrong").style.visibility='visible';
		document.getElementById("wrgMsg").style.visibility='visible';
	}
	
	
}
// function for show simulation Parasitoid-Host Dynamics
function hostDynamic(){
	var container = document.getElementById("tabContainer");
   	var tabs = container.querySelectorAll(".tabs ol li");
	tabs[1].onclick = null;
	tabs[2].onclick = null;
	document.getElementById("reset").style.top=25+"px";
	document.getElementById("wrong").style.visibility='hidden';
	document.getElementById("text_wrong").style.visibility='hidden';
	document.getElementById("wrgMsg").style.visibility='hidden';
	if(selectedSample==sampleArr[3]){
		alert("No need to conserve natural death");
		tabs[0].onclick=displayPage;
	}else if(selectedSample==sampleArr[4]){
		window.open( "http://vl.balavidya.com/?sub=3&brch=65&sim=919&cnt=4");
		tabs[0].onclick=displayPage;
	}else{
		document.getElementById("reset").style.top=60+"px";
		document.getElementById("wrong").style.visibility='visible';
		document.getElementById("text_wrong").style.visibility='visible';
		document.getElementById("wrgMsg").style.visibility='visible';
		
	}
	
}
// convert list to matrix 
function listToMatrix(list, elementsPerSubArray) {
    var matrix = [], i, k;

    for (i = 0, k = -1; i < list.length; i++) {
        if (i % elementsPerSubArray == 0) {
            k++;
            matrix[k] = [];
        }
		 matrix[k].push(list[i]);
		
    }

    return matrix;
}

// function to show geometric growth rate 
function createGeometricRate(){
	//this adds click event to tabs
	var container = document.getElementById("tabContainer");
    var tabs = container.querySelectorAll(".tabs ol li");
	
	if(selectedSample==sampleArr[4]){
    	tabs[0].onclick=displayPage;
		tabs[1].onclick = null;
		tabs[2].onclick = null;
	}else{
		tabs[2].onclick=displayPage;
		tabs[1].onclick = null;
		tabs[0].onclick = null;
	}
	lifeTableShow();
	document.getElementById("grate").disabled=true;
	var eignArray;
	pxMax =new Array();
	document.getElementById("gr").style.visibility="visible";
	if(selectedSample==sampleArr[4]){
		eignArray=dynPXVal;
	}else{
		for(var i = 0 ; i<alldata.length; i++){
			pxMax[i]=alldata[i][3];
		}	
		eignArray=pxMax;
	}
	eignValue=eignArray[0];
	for (var c = 1; c < eignArray.length; c++)
  	{
		if (eignArray[c] > eignValue)
		{
		   eignValue  = eignArray[c];
		   
		}
  	}
	
	
	document.getElementById("gr").innerHTML="Geometric growth Rate: "+eignValue.toFixed(2);
	if(selectedSample==sampleArr[4]){
		createDynamicGrowthTable();
	}else{
		createGrowthTable();
	}
}
// Get highest of an array
Array.prototype.maxValue = null;

Array.prototype.setIndex = function(index, value){
  this[index] = value;
  if (value > this.maxValue || this.maxValue == null)
    this.maxValue = value;
}
// function to create life table for showing geometric growth data
function createGrowthTable(){
	document.getElementById("tablePosition").innerHTML='';
	var tableData5="";	
	if(selectedSample==sampleArr[0]){
		
		 tableData5 = '<table width="100%" height="100%" id="allTable"><tr><th>x</th><th>nx</th><th>lx</th><th>px</th><th>mx</th><th>lxmx</th><th>xlxmx</th><th>fx</th></tr>';
	}else if(selectedSample==sampleArr[1]){
	
		 tableData5 = '<table width="100%" height="60%" id="allTable"><tr><th>x</th><th>nx</th><th>lx</th><th>px</th><th>mx</th><th>lxmx</th><th>xlxmx</th><th>fx</th></tr>';
	}else if(selectedSample==sampleArr[2]){
		
		 tableData5 = '<table width="100%" height="100%" id="allTable"><tr><th>x</th><th>nx</th><th>lx</th><th>px</th><th>mx</th><th>lxmx</th><th>xlxmx</th><th>fx</th></tr>';
	}else if(selectedSample==sampleArr[3]){
		
		 tableData5 = '<table width="100%" height="50%" id="allTable"><tr><th>x</th><th>nx</th><th>lx</th><th>px</th><th>mx</th><th>lxmx</th><th>xlxmx</th><th>fx</th></tr>';
	}
	
	for(var i = 0 ; i<alldata.length; i++){
		if(selectedSample==sampleArr[0]){		
			if(i==2){
				tableData5+= '<tr id="colorchg1" onmouseover="showTooltip(this.id)" onmouseout="hideTooltip()">'
			}else{
				if(i%2==0){
					tableData5+= '<tr id="colorchange">'
				}else{
					tableData5+= '<tr>'
				}
			}
		}else if(selectedSample==sampleArr[1]){	
			if(i==5){
				tableData5+= '<tr id="colorchg2" onmouseover="showTooltip(this.id)" onmouseout="hideTooltip()">'
			}else{
				if(i%2==0){
					tableData5+= '<tr id="colorchange">'
				}else{
					tableData5+= '<tr>'
				}
			}
		}else if(selectedSample==sampleArr[2]){	
			if(i==1){
				tableData5+= '<tr id="colorchg3" onmouseover="showTooltip(this.id)" onmouseout="hideTooltip()">'
			}else{
				if(i%2==0){
					tableData5+= '<tr id="colorchange">'
				}else{
					tableData5+= '<tr>'
				}
			}
		}else if(selectedSample==sampleArr[3]){	
			if(i==6){
				tableData5+= '<tr id="colorchg4" onmouseover="showTooltip(this.id)" onmouseout="hideTooltip()">'
			}else{
				if(i%2==0){
					tableData5+= '<tr id="colorchange">'
				}else{
					tableData5+= '<tr>'
				}
			}
		}
		
		for(var j = 0 ; j<8; j++){
			   tableData5+='<td>'+alldata[i][j]+'</td>';
		}
		tableData5+= '</tr>'
	}
	tableData5+='</table>';

	document.getElementById("tablePosition").style.overflow='hidden';
	document.getElementById("tablePosition").innerHTML=tableData5;
	
}
// function to create life table for showing geometric growth data
function createDynamicGrowthTable(){
	document.getElementById("tablePosition").innerHTML='';
	var tableData6="";	
	document.getElementById("tablePosition").style.visibility='visible';
	 tableData6 = '<table width="100%" height="30%" id="allTable"><tr><th>x</th><th>nx</th><th>lx</th><th>px</th><th>mx</th><th>lxmx</th><th>xlxmx</th><th>fx</th></tr>';
	for(var i = 0 ; i<dynFXVal.length-1; i++){
		if(dynPXVal[i]==eignValue){
				tableData6+= '<tr id="colorchg5" onmouseover="showTooltip(this.id)" onmouseout="hideTooltip()">'
		}else{
			if(i%2==0){
				tableData6+= '<tr id="colorchange">'
			}else{
				tableData6+= '<tr>'
			}
		}
		tableData6+='<td>'+dynXVal[i]+'</td>';
		tableData6+='<td>'+dynNXVal[i]+'</td>';
		tableData6+='<td>'+dynlXVal[i]+'</td>';
		tableData6+='<td>'+dynPXVal[i]+'</td>';
		tableData6+='<td>'+dynMXVal[i]+'</td>';
		tableData6+='<td>'+dynlXMXVal[i]+'</td>';
		tableData6+='<td>'+dynXlXMXVal[i]+'</td>';
		tableData6+='<td>'+dynFXVal[i]+'</td>';
		tableData6+= '</tr>'
	}
	tableData6+='</table>';
	document.getElementById("tablePosition").style.overflow='hidden';
	document.getElementById("tablePosition").innerHTML=tableData6;
	
}