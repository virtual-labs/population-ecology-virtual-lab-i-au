// JavaScript Document
var gt;
var Comn = { NrmlRectn:null,dickWeight:null,AppliedFource:null,LimitingFriction:null,CoFrcn:null,CoEfficientOfFriction:null,timerId:null,NewAppldForce:null,NewNormalReaction:null,New_cofrctFirst:null };
var cofFriction_wood=0.5;
var cofFriction_SteelOnWood=0.6;
var cofFriction_SteelOnSteel=0.74;
var cofFriction_SteelOnGlass=0.7;
var cofFriction_Brick=0.6;
var cofFriction_CastIron=0.4;
var cofFriction_Brass=0.35;
var cofFriction_Nickel=0.78;
var cofFriction_Glass=0.94;

var itmRandom=Math.floor((Math.random()*4));
var graphRandomVale = [1150,1110,1011,1035];
var limitingFriction_extention="g.wt";


var rangeval=1;
var interval;
var rangeX=0;
var rangeY=150;
var rangeXTwo=2;
var gaphSection=8;
var gaphSectionTwo=4;
var rangeYTwo=140;
var CofFrictionFlag=false;
var clearRectValue=150;
var clearRectSecndValue=138;
window.onload = function(){ 

	gt = new Gettext({ 'domain' : 'messages' });
	
	var graphY_Cordnt=gt.gettext("Limiting Friction(F)-->");
	var graphX_Cordnt=gt.gettext("Normal Reaction (R)-->");
	var blockMtrial_text=gt.gettext("Block material:");
	var surfaceMtrial_text=gt.gettext("Surface material:"); 
	var blockWeight_text=gt.gettext("Block weight:");
	var hangingWght_text=gt.gettext("Hanging weight:");
	var shwResult_text=gt.gettext("Show result");
	var lmtngFrctn_text=gt.gettext("Limiting friction:");
	var gram_text=gt.gettext("g");
	var nrmlRectn=gt.gettext("Normal reaction:");
	var coefficientFrctn_text=gt.gettext("Coefficient of friction:");
	var reset_text=gt.gettext("Reset");
	
	//Text adding to the template elements.
	document.getElementById("expName").innerHTML=gt.gettext("Limiting Friction Between Blocks");
	$('#olabmenuBar li:first-child a').html(gt.gettext("SAVE"));
	$('#olabmenuBar li:nth-child(2) a').html(gt.gettext("FULL SCREEN"));
	$('#olabmenuBar li:last-child a').html(gt.gettext("EXIT"));
	$(".labName").html(gt.gettext("Developed by CDAC Mumbai & Amrita University <br> Under research grant from department of IT"));
	
	var dropDwn_FirstSet=[gt.gettext("Wood"),gt.gettext("Steel"),gt.gettext("Glass")];//Drop-down menu (Block material.)
	var dropDwn_SecondSet=[gt.gettext("Wood"),gt.gettext("Steel"),gt.gettext("Brick")];//Second section drop-down menu (Surface material)
	var dropDwn_ThirdSet=[gt.gettext("Steel"),gt.gettext("Cast Iron"),gt.gettext("Brass")];//Third section drop-down menu (Surface material).
	var dropDwn_FourthSet=[gt.gettext("Glass"),gt.gettext("Steel"),gt.gettext("Nickel")];//Fourth section drop-down menu (Surface material).
	var imageBlock_array=["WoodenBlock","SteelBlock","GlassBlock"]; //Image array for blocks. 
	var imageTable_array=["Wood","Steel","Glass","Brick","Cast_Iron","Brass","Nickel"];// Image array for tables.
	
	$(document).ready(function() {
		Comn.NrmlRectn=300;//initial value of normal reaction.
		Comn.NewAppldForce=300;// //initial value of applied force. 
		Comn.NewNormalReaction=1000;//initial value of second normal reaction.
		//(Text adding into the  corresponding field)
		$("#restBton").val(reset_text);
		$('.rotate').html(graphY_Cordnt);
		$('#NrCn').html(graphX_Cordnt);
		$("#Blockweight_textbox").html(1000);
		
		$('#blockMtrial').html(blockMtrial_text);
		$('#surfaceMtrial').html(surfaceMtrial_text);
		$('#blockWeight_one').html(blockWeight_text);
		$('#hangingWght').html(hangingWght_text);
		$('#shwResultDiv').html(shwResult_text);
		$("#blockWeight_one_extnt").html(gram_text);
		$("#hangingWght_extnt").html(gram_text);
		
		$('#LmtngFrctn').html(lmtngFrctn_text);//Limiting Friction default text view.
		$('#NrmlRctn').html(nrmlRectn);//normal reaction default text view.
		$("#NrmlRctn_Extn_val").html(Comn.NewNormalReaction+limitingFriction_extention);
		$('#CoffntFrctn').html(coefficientFrctn_text);//Coefficient Friction default view.
		$("#CoffntFrctn_Extn_val").html(0);
		$('#restBton').prop('disabled',true);
		$('#LmtngFrctn').html(lmtngFrctn_text);//Limiting Friction default view.
		$('#LmtngFrctn_Extn_val').html(0+limitingFriction_extention);
		$('#NrmlRctn').html(nrmlRectn);//normal reaction default view.
		$('#CoffntFrctn').html(coefficientFrctn_text);//Coefficient Friction default view.
		$('#restBton').prop('disabled',true);
		Comn.AppliedFource=300;
		Comn.CoFrcn=cofFriction_wood;//default Coefficient Value of wood 

		//Common drop-down function.
		function dropdown_function(getid,array_set){
				$.each(array_set, function(val, text) {
				getid.append(
				$('<option></option>').val(val).html(text)
					);
				});
			}
			
		dropdown_function($("#dropbox_BlockMtrl"),dropDwn_FirstSet);//Setting the Block material Drop-down.
		dropdown_function($("#dropbox_SurfcMtrl"),dropDwn_SecondSet);//Setting the Surface material Drop-down.
		
		//Block material Drop-down.
		$("#dropbox_BlockMtrl").change(function(){
		ClearRctCanvas();
			$('#dropbox_SurfcMtrl').empty();//setting Surface material the drop-down menu empty.
			var dropboxValue_BlockMtrl=$("#dropbox_BlockMtrl").find(':selected').val();
			resetSlider();// function for resetting the value of the range slider.
			$('#BlockImage').css("width","31px");//changing the image width
			switch (dropboxValue_BlockMtrl) {
						case  "0":
   								dropdown_function($("#dropbox_SurfcMtrl"),dropDwn_SecondSet);
								$('#BlockImage').attr({'src':simPath+"/images/"+imageBlock_array[0]+".png"}); //Wood :Wood
								$('#TableImage').attr({'src': simPath+"/images/"+imageTable_array[0]+".png"});
								Comn.CoFrcn=cofFriction_wood //adding the value of Coefficient friction of wood.
  						break;
						case  "1":
   								dropdown_function($("#dropbox_SurfcMtrl"),dropDwn_ThirdSet);
								$('#BlockImage').attr({'src':simPath+"/images/"+imageBlock_array[1]+".png"}); //Steel : Steel.
								$('#TableImage').attr({'src': simPath+"/images/"+imageTable_array[1]+".png"});
								Comn.CoFrcn=cofFriction_SteelOnSteel; //adding the value of Coefficient friction of steel on steel.
						break;
						case  "2":
   								dropdown_function($("#dropbox_SurfcMtrl"),dropDwn_FourthSet);
								$('#BlockImage').attr({'src':simPath+"/images/"+imageBlock_array[2]+".png"}); //Glass :Glass.
								$('#TableImage').attr({'src': simPath+"/images/"+imageTable_array[2]+".png"});
								Comn.CoFrcn=cofFriction_Glass; //adding the value of Coefficient friction of glass.
  						break;
						default:
    						console.log("Error");
					}
			});
			//Surface material Drop-down.
		$("#dropbox_SurfcMtrl").change(function(){
			ClearRctCanvas();
			resetSlider();// function for resetting the value of the range slider.
			var dropboxValue_SrfcMtrl=$("#dropbox_SurfcMtrl").find(':selected').val();
			var dropboxValue_BlockMtrl=$("#dropbox_BlockMtrl").find(':selected').val();
			$('#BlockImage').css("width","31px");//changing the image width
			switch (dropboxValue_SrfcMtrl) {
						case  "0":
   								if(dropboxValue_BlockMtrl==0){
									$('#BlockImage').attr({'src':simPath+"/images/"+imageBlock_array[0]+".png"}); //Wood :Wood
									$('#TableImage').attr({'src': simPath+"/images/"+imageTable_array[0]+".png"});
									Comn.CoFrcn=cofFriction_wood;//adding the value of Coefficient friction of wood.
									}
								else if(dropboxValue_BlockMtrl==1){
										$('#BlockImage').attr({'src':simPath+"/images/"+imageBlock_array[1]+".png"}); //Steel : Steel.
										$('#TableImage').attr({'src': simPath+"/images/"+imageTable_array[1]+".png"});
										Comn.CoFrcn=cofFriction_SteelOnSteel; //adding the value of Coefficient friction of steel on steel.
										}
								else if(dropboxValue_BlockMtrl==2){
										$('#BlockImage').attr({'src':simPath+"/images/"+imageBlock_array[2]+".png"});
										$('#TableImage').attr({'src': simPath+"/images/"+imageTable_array[2]+".png"}); //Glass :Glass.
										Comn.CoFrcn=cofFriction_Glass;//adding the value of Coefficient friction of glass.
										}
						break;
						case  "1":
								if(dropboxValue_BlockMtrl==0){
									 $('#BlockImage').attr({'src':simPath+"/images/"+imageBlock_array[0]+".png"});  //wood : Steel.
									 $('#TableImage').attr({'src': simPath+"/images/"+imageTable_array[1]+".png"});
									 Comn.CoFrcn=cofFriction_SteelOnWood;//adding the value of Coefficient friction of steel on wood.
									}
								else if(dropboxValue_BlockMtrl==1){
										$('#BlockImage').attr({'src':simPath+"/images/"+imageBlock_array[1]+".png"});
										$('#TableImage').attr({'src': simPath+"/images/"+imageTable_array[4]+".png"});//Steel : Cast Iron.
										Comn.CoFrcn=cofFriction_CastIron;//adding the value of Coefficient friction of CastIron.
										}
								else if(dropboxValue_BlockMtrl==2){
										$('#BlockImage').attr({'src':simPath+"/images/"+imageBlock_array[2]+".png"});  //Glass :Steel
										$('#TableImage').attr({'src': simPath+"/images/"+imageTable_array[1]+".png"});
										Comn.CoFrcn=cofFriction_SteelOnGlass;//adding the value of Coefficient friction of steel on glass.
										}
						break;
						case  "2":
						 if(dropboxValue_BlockMtrl==0){
									 $('#BlockImage').attr({'src':simPath+"/images/"+imageBlock_array[0]+".png"}); 	//Wood :Brick.
									 $('#TableImage').attr({'src': simPath+"/images/"+imageTable_array[3]+".png"});
									 Comn.CoFrcn=cofFriction_Brick//adding the value of Coefficient friction of brick.
									}
								else if(dropboxValue_BlockMtrl==1){
									 $('#BlockImage').attr({'src':simPath+"/images/"+imageBlock_array[1]+".png"}); //Steel : Brass.
									 $('#TableImage').attr({'src': simPath+"/images/"+imageTable_array[5]+".png"});
									 Comn.CoFrcn=cofFriction_Brass;//adding the value of Coefficient friction of brass.
									}
								else if(dropboxValue_BlockMtrl==2){
									 $('#BlockImage').attr({'src':simPath+"/images/"+imageBlock_array[2]+".png"}); //Glass : Nickel.
									 $('#TableImage').attr({'src': simPath+"/images/"+imageTable_array[6]+".png"});
									 Comn.CoFrcn=cofFriction_Nickel;//adding the value of Coefficient friction of nickel.
									}
						break;
						default:
    						console.log("Error");
					}
			});
                            
		//(Reset The Two Sliders)
		function resetSlider() {
			$('#FirstRangr').val(0); 
			$('#SecondRange').val(0);
			
		}
		
		//(Check Box Hide/Show)
		$('#chkBox').click(function() {
			$("#ResultBox").toggle(this.checked);
		});
		
		//( Reset Button)
		$('#restBton').click(function(){
		window.location.reload(true);
			});	
	});
	}
	 function ClearRctCanvas(){//function for clear canvas.
	 var c = document.getElementById("graph");
		var ctx = c.getContext("2d");
		ctx.clearRect(0,0, 450, 150);
		Comn.NewNormalReaction=1000;
		Comn.NewAppldForce=300;
		$("#Blockweight_textbox").html(Comn.NewNormalReaction);//changing the label.
		$("#Hangingweight_textbox").html(Comn.NewAppldForce);//passing the Applied Force value to the display.
		$("#NrmlRctn_Extn_val").html(Comn.NewNormalReaction+limitingFriction_extention);//changing the label.
		//resetting the graph value.
		rangeX=0;
		rangeY=150;
		rangeXTwo=8;
		rangeYTwo=140;
	}
	function clearGraph(){//last section clearRect value.
		rangeYTwo=150;
		rangeXTwo=0;
		clearRectValue=150; 
	}
		//(Drawing Graph)
	function plot(){
	//slanted  line 
		var c = document.getElementById("graph");
		var ctx = c.getContext("2d");
		ctx.beginPath();
		ctx.moveTo(rangeXTwo,rangeYTwo);
		ctx.lineTo(rangeX,rangeY);
		ctx.lineWidth=2;
		ctx.strokeStyle = '#0099FF';
		ctx.stroke();
		ctx.clearRect(0,0, 450, clearRectValue);
		rangeX=rangeXTwo;
		rangeY=rangeYTwo;
		if(CofFrictionFlag){
			var timer_second=1;
			ctx.moveTo(rangeXTwo,rangeYTwo+15);
			ctx.lineTo(rangeXTwo,rangeYTwo);
			ctx.stroke();
				var timerTwo=0;
					intervalThird=setInterval(function () {
					ctx.moveTo(rangeXTwo+timerTwo,rangeYTwo+15);
					ctx.lineTo(rangeXTwo,rangeYTwo+15);
					ctx.stroke();
					timerTwo++
					
				if(timerTwo==100){
					clearInterval(intervalThird);
					}
		},29);

}
		
				

}
	function BlockMove(){//(MOVE)
		$('#FirstRangr').attr("disabled", "disabled"); 
		$('#SecondRange').attr("disabled", "disabled"); 
		$('#LmtngFrctn_Extn_val').html(Comn.LimitingFriction+limitingFriction_extention);
		$("#CoffntFrctn_Extn_val").html(Comn.CoFrcn);
		$("#LmtngFrctn_Extn_val").css({"margin-left":"105px"});
		$("#ImgBlock" ).animate ({ left: '352px'}, {easing:"easeInExpo" ,duration: 3000, }); //Block step:function(){plot();}
		$('#twine').animate({ width: '30px' }, 3000,"easeInExpo");//Twine
		$("#weightBlock" ).animate({ top:'266px'   }, 3000,"easeInExpo" );//WeightBlock
		$('#twineTwo').animate({ height: '104px' },  3000,"easeInExpo");//Twine Two.
		$('#dropbox_BlockMtrl').attr("disabled", "disabled"); 
		$('#dropbox_SurfcMtrl').attr("disabled", "disabled"); 
		$('#restBton').prop('disabled', false);
	}

	//(Change of Block weight )
	function changeBlockweight(val){
		var MassOfBolock = $('#FirstRangr').val();
		$('#BlockImage').css("width",31+MassOfBolock*0.9+"px");//changing the image width
		Comn.NewNormalReaction=1000+(100*MassOfBolock);//weight of the body.(R)
		$("#Blockweight_textbox").html(Comn.NewNormalReaction);//passing the Normal reaction value to the display.
		Comn.New_cofrctFirst=Comn.NewAppldForce/Comn.NewNormalReaction; //Coefficient of friction 
		$("#NrmlRctn_Extn_val").html(Comn.NewNormalReaction+limitingFriction_extention);//passing the normal reaction value into the result box
		Comn.LimitingFriction=Comn.CoFrcn*Comn.NewNormalReaction; //finding the value of Limiting Friction
		if(Comn.New_cofrctFirst >=Comn.CoFrcn){
			BlockMove();
			CofFrictionFlag=true;
			plot();
			$('#SecondRange').attr("disabled", "disabled"); 
		}
			
	}

	//( Change of Hanging weight)
	function changeHangingweight(val){
	Comn.dickWeight = $('#SecondRange').val();
	var RangeChangeValue=$('#SecondRange').val();
		if(Comn.CoFrcn==0.5){//Graph plotting when the cofFriction of wood 
		clearRectValue=Math.abs(gaphSection*RangeChangeValue-clearRectSecndValue);
		rangeXTwo=gaphSection*RangeChangeValue+10;// adding value of x position of graph.
		rangeYTwo=Math.abs(gaphSection*RangeChangeValue-140);// adding value of y position of graph.
		if(RangeChangeValue==0){//clearing the graph when slider comes last step. 
		clearGraph();
		}
		}
		else{//Graph plotting when the greater than wood.
		clearRectValue=Math.abs(gaphSectionTwo*RangeChangeValue-clearRectSecndValue);
		rangeXTwo=gaphSectionTwo*RangeChangeValue+10;// adding value of x position of graph.
		rangeYTwo=Math.abs(gaphSectionTwo*RangeChangeValue-140);// adding value of y position of graph.
		if(RangeChangeValue==0){//clearing the graph when slider comes last step. 
		 clearGraph();
		}
		}
		plot();
		
	$('#weightBar').css("height",4+(Comn.dickWeight) * 4+"px");//changing the image height (weight dick)
		Comn.NewAppldForce=Comn.NrmlRectn+(100*Comn.dickWeight);//Applied force .(P)
		$("#Hangingweight_textbox").html(Comn.NewAppldForce);//passing the Applied Force value to the display.
		Comn.New_cofrctFirst=Comn.NewAppldForce/Comn.NewNormalReaction;//Coefficient of friction In the second Change.
		Comn.LimitingFriction=Comn.CoFrcn*Comn.NewNormalReaction; //finding the value of Limiting Friction in the second change.
			if(Comn.New_cofrctFirst >= Comn.CoFrcn ){
			BlockMove();
			CofFrictionFlag=true;
			plot();
			$('#FirstRangr').attr("disabled", "disabled"); 
			}
			
	}