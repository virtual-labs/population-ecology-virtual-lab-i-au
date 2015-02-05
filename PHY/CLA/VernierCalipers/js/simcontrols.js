var FlagThree;
var Least_count=0.1;
var cmn={
	one: null,offsetOne:null,value_main:null,Main_Scl_reading:null,Vernr_Scl_Reading:null,Result:null,AdjstVal:null,ArrayVal_Four:null
	}
var BobArray=[1.02,1.8,2.14,1.11,2.29];
var BobVer_Scl=[0.8,0.1,0,0.6,0.7];
var Iron_length=[2.32,2.71,3.18,3.82,4.31];
var Iron_Breadth=[1.62,1.86,2.14,2.54,2.71];
var Iron_Thickness=[0.51,0.74,0.92,1.17,1.27];
var Beaker_Diameter=[3.51,3.65,4.16,4.34];
var ArryCmn_Width=[48,55,65,75,80];
var ArryCmn_Height=[77,95,114,139,147];
var ArryCmn_Top=[258,261,261,261,261];
var ArryCmn_B_size=[47,53,64,71,77];
var ArryCmn_SCLD_size=[81,87,98,105,111];
var ArryCmn_SCLD_width=[406,406,406,406,406];
var Iron_Ver_Scl=[0.7,0.6,0.6,0.3,0.9,0.2,0.6,0.4,0.7];
var Iron_ver_breadth=[0.7,0.7,0.4,0.6,0.6];
var Iron_block_adjst_array=[0.2,0.2,0.2,0.3,0.3]
//=== Array of Iron Block
var Array_Ironblock_Tkns_width=[16,23,28,35,37];
var Array_Ironblock_Tkns_height=[56,87,102,125,134];
var Array_Ironblock_Tkns_B_size=[17,22,29,33,36];
var Array_Ironblock_Tkns_SCLD_size=[50,56,62,67,70];
var Array_Ironblock_Tkns_SCLD_width=[406,406,406,406,406];
var Array_Ironblock_Tkns_Adjst=[0,0,-0.1,-0.1,-0.1];
var Array_Ironblock_Tkns_ver=[0.4,0.4,0.4,0.1,0.0];
//===Array of Beaker Inner diameter
var Array_Beaker_top=[75,68,52,47];
var Array_Beaker_height=[121,126,153,146];
var Array_Beaker_width=[126,132,144,152];
var Array_Beaker_BSize=[115,120,135,140];
var Array_Beaker_DCL=[112,114,106,110];

var Array_Beaker_vsr=[0.6,0.2,0.6,0.2];
var Array_Beaker_adjst=[-0.4,-0.4,-0.5,-0.5];

var Array_Beaker_SDL=[116,119,140,141];
var Array_set_Vrnr=[82,91,110,111];
var Array_set_nedl=[91,99,120,121];
var Array_Set_zoom=[-464,-502,-566,-566]
var B_top;
var B_height;
var B_width;
var B_Bsize;
var B_DCL;
var B_SDl;
var B_VSR;
var B_adjst;
var exp_val_two;
var set_Vrnr;
var set_nedl;
var set_zoom;
//===Array of Beaker depth.
var Array_beaker_depth=[4.27,4.72,4.97,5.04];
var Array_beaker_depth_width=[119,130,198,143];
var Array_beaker_depth_height=[113,124,130,135];
var Array_beaker_depth_BSize=[120,130,141,142];
var Array_beaker_depth_SCLD=[236,247,257,257];
var Array_beaker_depth_ver=[0.8,0.5,0.8,0.8]
var Array_beaker_depth_Adjst=[-0.7,-0.7,-0.8,-0.8];
var depth_width
var depth_height
var depth_BSize
var depth_SCLD
//===Array of Cylinder Diameter. 
var Array_Cylinder_Diameter=[0,1,2,3,4];
var Array_Cylinder_Diameter_Width=[92,70,80,101,115];
var Array_Cylinder_Diameter_Height=[115,129,154,185,212];
var Array_Cylinder_Diameter_Bsize=[64,69,80,99,113];
var Array_Cylinder_Diameter_SCLD=[97,102,113,132,146];
var Array_Cylinder_Diameter_ver=[0,0.7,0.3,0.6,0.2];
var Array_Cylinder_Diameter_adjst=[-0.2,-0.3,-0.3,-0.4,-0.5];
var Diameter_Width;
var Diameter_Height;
var Diameter_Bsize;
var Diameter_SCLD;
//===Array of Cylinder Length.
var Array_Cylinder_Length_width=[105,110,114,123,129];
var Array_Cylinder_Length_Height=[56,59,63,68,69];
var Array_Cylinder_Length_Bsize=[108,110,117,124,127];
var Array_Cylinder_Length_SCLD=[138,142,147,155,158];
var Array_Cylinder_Length_ver=[0.6,0.9,0.6,0.3,0.2];
var Array_Cylinder_Length_adjst=[-0.5,-0.5,-0.5,-0.5,-0.5];
var Cylinder_width;
var Cylinder_Height;
var Cylinder_Bsize;
var Cylinder_SCLD;
//===
function ini(){//Initialization.
var gt;
gt=new Gettext({ 'domain' : 'messages' });
$('#olabmenuBar li:first-child a').html(gt.gettext("SAVE"));
$('#olabmenuBar li:nth-child(2) a').html(gt.gettext("FULLSCREEN"));
$('#olabmenuBar li:last-child a').html(gt.gettext("EXIT"));
var CntlTitle=gt.gettext("Select an object:");
var SphrText=gt.gettext("Sphere");
var IrnBlkText=gt.gettext("Iron block");
var BkrText=gt.gettext("Beaker");
var ClndrText=gt.gettext("Cylinder");
var SelectMeasureText=gt.gettext("Select what to measure:");
var Diameter=gt.gettext("Diameter");
var FlagOne;
var FlagTwo;
var resultText=gt.gettext("Enter reading (cm): ");
var rslt=gt.gettext("Result");
var ButtnValue=gt.gettext("Reset");
var CheckBttnVal=gt.gettext("Check");
var LC_value=gt.gettext("L.C = 0.01cm");
//===========
$("#ResetBtn").val(ButtnValue);
$("#AnswrChkr").val(CheckBttnVal);
$("#Lc_labl").html(LC_value);
$("#Rsl_text_div").html(rslt);
$("#ReseltText").html(resultText);	
$("#CnrtlTitle").html(CntlTitle);
$("#SphereText").html(SphrText);
$("#IronBlockText").html(IrnBlkText);
$("#BeakerText").html(BkrText);
$("#CylinderText").html(ClndrText);
$("#Select_Measure_text").html(SelectMeasureText);
$("#FirstRDBttn").html(Diameter);
$("#Radio_Two").css({"visibility":"hidden"});
$("#Verier_Scale").css({"z-index":"2"});
$("#Radio_Three").css({"visibility":"hidden"});
$("#SecondRDBttn").css({"visibility":"hidden"});
$("#ThirdRDBttn").css({"visibility":"hidden"});
$("#Result_Icon_correct").css({"visibility":"hidden"});
$("#Result_Icon_wrong").css({"visibility":"hidden"});
$("#Reading").css({"visibility":"hidden"});
$( "#Radio_One" ).prop( "checked", true );
};
//Initialization 
$(document).ready(function(){
	var gt;
	gt=new Gettext({ 'domain' : 'messages' });
	var Length=gt.gettext("Length");
	var Breadth=gt.gettext("Breadth");
	var Thickness=gt.gettext("Thickness");
	var InnerDiameter=gt.gettext("Inner diameter");
	var Depth=gt.gettext("Depth");
	var Diameter=gt.gettext("Diameter");
	var labl=gt.gettext("Developed by CDAC Mumbai & Amrita University <br/>Under research grant from department of IT");
	var Exp_title=gt.gettext("Vernier Calipers");
	$('.labName').html(labl);
	$('#expName').html(Exp_title);
	ini();//Initialization function calling.
	$("#Object_Store").hide();
//Collision Detection between two Divs	
	var collisionVal=false
	function collision($div1, $div2) {
      var x1 = $div1.offset().left;
      var y1 = $div1.offset().top;
      var h1 = $div1.outerHeight(true);
      var w1 = $div1.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $div2.offset().left;
      var y2 = $div2.offset().top;
      var h2 = $div2.outerHeight(true);
      var w2 = $div2.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
	  if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return collisionVal=false;
      return collisionVal=true;
		}	  

//Dragg Function 	
$( "#Verier_Scale").draggable({ revert:true,containment: "#sclDragger", axis:"x",revert:false,

 		drag: function(){//drag function.
				 var MainPos=$("#ExpContainer").position().left;
				 cmn.offsetOne = $(this).position().left;
				 cmn.value_main=cmn.offsetOne/2.64;
				 cmn.Main_Scl_reading=Math.floor(cmn.value_main)*0.1+cmn.AdjstVal;
				 cmn.one=(cmn.offsetOne+MainPos)*-3.51;
				 $("#Scale_Needl").css({"left":cmn.offsetOne+MainPos+9+"px"});
				 $("#Zoom_Scale").css({"left":-179+Math.ceil(cmn.one)-1+"px"});
				 //console.log(cmn.Main_Scl_reading);
				 if(cmn.offsetOne==0){
							$("#Zoom_Scale").css({"left":-174+"px"});
								}
					collision($("#Verier_Scale"), $("#Object_Store"));//Collision Function.
					 if(collisionVal==true){
					 $("#TextBox").prop("disabled", false);
					cmn.Result=cmn.Main_Scl_reading+(cmn.Vernr_Scl_Reading*Least_count);
					//console.log("ans"+Math.floor(cmn.Result* 100) / 100);
					
				
		}
		collision($('#Scale_Needl'), $('#Object_Store'));
					 if(collisionVal==true){
					 $("#TextBox").prop('disabled', false);
					cmn.Result=cmn.Main_Scl_reading+(cmn.Vernr_Scl_Reading*Least_count);
					//console.log("ans"+Math.floor(cmn.Result* 100) / 100);
		}		
	}
	
});
//===Function for bob.
function Bob_function(){
	FlagOne=1//Diameter 
	$("#Vernier_Main").css({"left":"0px"});
	$("#Object_Store").css({"background-image":"url(../PHY/CLA/VernierCalipers/images/sphere.png)"});
		var Array_val = BobArray[Math.floor(Math.random()*BobArray.length)];
	$("#Object_Store").css({"top":"251px","left":"43px","height":"55px","z-index":"0"});
	$("#Object_Store").show();
	$("#Verier_Scale").css({"left":"222px"});
	$("#Scale_Needl").css({"left":"244px"});
	$("#Zoom_Scale").css({"left":"-719px"});
	$("#Verier_Scale").css({"z-index":"2"});
	$("#Object_Store").css({"display":"block"});
		if(Array_val==BobArray[0]){
			$("#sclDragger").css({"left":"63px","width":"451px"});
			$("#Object_Store").css({"background-size":"32px","width":"33px","z-index":"0"});
			$("#TextBox").prop('disabled', true);
			cmn.Vernr_Scl_Reading=BobVer_Scl[0];
			cmn.AdjstVal=-0.1;
//console.log(0);
			}
	   else if(Array_val==BobArray[1]){
			$("#sclDragger").css({"left":"85.1px","width":"429px"});
			$("#Object_Store").css({"background-size":"54px","width":"55px","z-index":"0"});
			$("#TextBox").prop('disabled', true);
			cmn.Vernr_Scl_Reading=BobVer_Scl[1];
			cmn.AdjstVal=-0.1;
//console.log(1);
			}
	  else if(Array_val==BobArray[2]){
			$("#sclDragger").css({"left":"97px","width":"416px"});
			$("#Object_Store").css({"background-size":"67px","width":"65px","height":"65px","z-index":"0"});
			$("#TextBox").prop('disabled', true);
			cmn.AdjstVal=-0.2;
			cmn.Vernr_Scl_Reading=BobVer_Scl[2];
				//console.log(2);
				}
	 else if(Array_val==BobArray[3]){
			$("#sclDragger").css({"left":"65.5px","width":"447px"});
			$("#Object_Store").css({"background-size":"34px","width":"36px","z-index":"0"});
			$("#TextBox").prop('disabled', true);
			cmn.AdjstVal=-0.1;
			cmn.Vernr_Scl_Reading=BobVer_Scl[3];
			//console.log(3);
				}
	 else if(Array_val==BobArray[4]){
			$("#sclDragger").css({"left":"99px","width":"406px"});
			$("#Object_Store").css({"background-size":"70px","width":"71px","height":"69px","z-index":"0"});
			$("#TextBox").prop('disabled', true);
			cmn.AdjstVal=-0.3;
			cmn.Vernr_Scl_Reading=BobVer_Scl[4];
			//console.log(4);
					 	}}
//==Iron block Length=====
function Iron_block_lngth(){
	FlagOne=2
	FlagTwo=2
	var Array_val_two = Iron_length[Math.floor(Math.random()*Iron_length.length)];//Random array value
	$("#Vernier_Main").css({"left":"0px"});
	$("#Object_Store").css({"background-image":"url(../PHY/CLA/VernierCalipers/images/IronBlock_Length.png)"});
	$("#Object_Store").css({"top":"261px","left":"44px"});
	$("#Verier_Scale").css({"left":"222px"});
	$("#Scale_Needl").css({"left":"244px"});
	$("#Zoom_Scale").css({"left":"-634.1px"});
	$("#Verier_Scale").css({"z-index":"2"});
	$("#Object_Store").show();	
			if(Array_val_two==Iron_length[0]){
				$("#Object_Store").css({"background-size":"69px","width":"68px","height":"53px","z-index":"0"});
				$("#sclDragger").css({"left":"102px","width":"373px"});
				$("#TextBox").prop('disabled', true);
				$("#Object_Store").css({"display":"block"});
					cmn.AdjstVal=-0.3;
					cmn.Vernr_Scl_Reading=Iron_Ver_Scl[0];
					Exp_val=0
					//console.log(0);
			
				}
				else if (Array_val_two==Iron_length[1]){
				$("#Object_Store").css({"background-size":"77px","width":"80px","height":"53px","z-index":"0"});
				$("#sclDragger").css({"left":"111px","width":"373px"});
				$("#TextBox").prop('disabled', true);
				$("#Object_Store").css({"display":"block"});
					cmn.AdjstVal=-0.3;
					cmn.Vernr_Scl_Reading=Iron_Ver_Scl[1];
					Exp_val=1;
					//console.log(1);
					
					}
						else if (Array_val_two==Iron_length[2]){
				$("#Object_Store").css({"background-size":"89px","width":"91px","height":"59px","z-index":"0"});
				$("#sclDragger").css({"left":"123px","width":"373px"});
				$("#TextBox").prop('disabled', true);
				$("#Object_Store").css({"display":"block"});
					cmn.AdjstVal=-0.4;
					cmn.Vernr_Scl_Reading=Iron_Ver_Scl[2];
					Exp_val=2;
					//console.log(2);
					
					}
						else if (Array_val_two==Iron_length[3]){
				$("#Object_Store").css({"background-size":"109px","width":"111px","height":"66px","z-index":"0"});
				$("#sclDragger").css({"left":"143px","width":"373px"});
				$("#TextBox").prop('disabled', true);
				$("#Object_Store").css({"display":"block"});
					cmn.AdjstVal=-0.4;
					cmn.Vernr_Scl_Reading=Iron_Ver_Scl[3];
					Exp_val=3;
					//console.log(3);
					
					}
						else if (Array_val_two==Iron_length[4]){
				$("#Object_Store").css({"background-size":"123px","width":"125px","height":"75px","z-index":"0"});
				$("#sclDragger").css({"left":"157px","width":"320px"});
				$("#TextBox").prop('disabled', true);
				$("#Object_Store").css({"display":"block"});
					cmn.AdjstVal=-0.6;
					cmn.Vernr_Scl_Reading=Iron_Ver_Scl[4];
					Exp_val=4;
					//console.log(4);
					
					}
		}
//===Iron block Breadth=====				
function Iron_block_Breadth(){
	var	Cmn_Width;
	var Cmn_Height;
	var Cmn_Top;
	var Cmn_B_size;
	var Cmn_SCLD_size;
	var Cmn_SCLD_width;
	var cmn_Ver_brdth;
	var Iron_block_adjst;
	Cmn_Width=ArryCmn_Width[Exp_val];
	Cmn_Height=ArryCmn_Height[Exp_val];
	Cmn_Top=ArryCmn_Top[Exp_val];
	Cmn_B_size=ArryCmn_B_size[Exp_val];
	Cmn_SCLD_size=ArryCmn_SCLD_size[Exp_val];
	Cmn_SCLD_width=ArryCmn_SCLD_width[Exp_val];
	cmn_Ver_brdth=Iron_ver_breadth[Exp_val];
	Iron_block_adjst=Iron_block_adjst_array[Exp_val];
		$("#Radio_One").prop('disabled', false);
		$("#Object_Store").show();
		$("#Zoom_Scale").css({"left":"-794px"});
		$("#Verier_Scale").css({"left":"222px"});
		$("#Scale_Needl").css({"left":"244px"});
		$("#Object_Store").css({"background-image":"url(../PHY/CLA/VernierCalipers/images/Iron_Block_B.png)"}) ;
		$("#Object_Store").css({"width":Cmn_Width+"px","height":Cmn_Height+"px","top":Cmn_Top+"px","background-size":Cmn_B_size+"px","z-index":"0"});
		$("#sclDragger").css({"left":Cmn_SCLD_size+"px","width":Cmn_SCLD_width+"px"});
		cmn.AdjstVal=-Iron_block_adjst;
		cmn.Vernr_Scl_Reading=cmn_Ver_brdth;
		$("#TextBox").prop('disabled', true);
		//console.log(Exp_val);
		
	}
		//=============/Iron block Thickness=====				
function Iron_block_Thickness(){
			Tkns_width=Array_Ironblock_Tkns_width[Exp_val];
			Tkns_height=Array_Ironblock_Tkns_height[Exp_val];
			Tkns_B_size=Array_Ironblock_Tkns_B_size[Exp_val];
			Tkns_SCLD_size=Array_Ironblock_Tkns_SCLD_size[Exp_val];
			Tkns_SCLD_width=Array_Ironblock_Tkns_SCLD_width[Exp_val];
			Tkns_Ver_Tcns=Array_Ironblock_Tkns_Adjst[Exp_val];
				$("#TextBox").prop('disabled', true);
				$("#Object_Store").show();
				$("#Zoom_Scale").css({"left":"-794px"});
				$("#Verier_Scale").css({"left":"222px"});
				$("#Scale_Needl").css({"left":"244px"});
				$("#Object_Store").css({"background-image":"url(../PHY/CLA/VernierCalipers/images/Iron_Block_T.png)"}) ;
				$("#Object_Store").css({"width":Tkns_width+"px","height":Tkns_height+"px","top":"261px","background-size":Tkns_B_size+"px","z-index":"0"});
				$("#sclDragger").css({"left":Tkns_SCLD_size+"px","width":Tkns_SCLD_width+"px"});
				cmn.AdjstVal=Tkns_Ver_Tcns;
				cmn.Vernr_Scl_Reading=Array_Ironblock_Tkns_ver[Exp_val];
				//console.log(Exp_val);
				
	}		
// Beaker inner daimeter				
function Beaker_function(){	
	FlagTwo=3
	$("#Vernier_Main").css({"left":"0px"});
	var ArrayVal_three=Beaker_Diameter[Math.floor(Math.random()*Beaker_Diameter.length)];
	if(ArrayVal_three==Beaker_Diameter[0]){
	B_top=Array_Beaker_top[0];
	B_height=Array_Beaker_height[0];
	B_width=Array_Beaker_width[0];
	B_Bsize=Array_Beaker_BSize[0];
	B_DCL=Array_Beaker_DCL[0];
	B_SDl=Array_Beaker_SDL[0]
	B_VSR=Array_Beaker_vsr[0];
	B_adjst=Array_Beaker_adjst[0];
	set_Vrnr=Array_set_Vrnr[0];
	set_nedl=Array_set_nedl[0];
	set_zoom=Array_Set_zoom[0];
	exp_val_two=0;
	
	}
	else if(ArrayVal_three==Beaker_Diameter[1]){
	B_top=Array_Beaker_top[1];
	B_height=Array_Beaker_height[1];
	B_width=Array_Beaker_width[1];
	B_Bsize=Array_Beaker_BSize[1];
	B_SDl=Array_Beaker_SDL[1]
	B_DCL=Array_Beaker_DCL[1];
	B_VSR=Array_Beaker_vsr[1];
	B_adjst=Array_Beaker_adjst[1];
	set_Vrnr=Array_set_Vrnr[1];
	set_nedl=Array_set_nedl[1];
	set_zoom=Array_Set_zoom[1];
	exp_val_two=1
	}
	else if(ArrayVal_three==Beaker_Diameter[2]){
	B_top=Array_Beaker_top[2];
	B_height=Array_Beaker_height[2];
	B_width=Array_Beaker_width[2];
	B_Bsize=Array_Beaker_BSize[2];
	B_SDl=Array_Beaker_SDL[2]
	B_DCL=Array_Beaker_DCL[2];
	B_VSR=Array_Beaker_vsr[2];
	B_adjst=Array_Beaker_adjst[2];
	set_Vrnr=Array_set_Vrnr[2];
	set_nedl=Array_set_nedl[2];
	set_zoom=Array_Set_zoom[2];
	exp_val_two=2
	}
	else if(ArrayVal_three==Beaker_Diameter[3]){
	B_top=Array_Beaker_top[3];
	B_height=Array_Beaker_height[3];
	B_width=Array_Beaker_width[3];
	B_SDl=Array_Beaker_SDL[3]
	B_Bsize=Array_Beaker_BSize[3];
	B_DCL=Array_Beaker_DCL[3];
	B_VSR=Array_Beaker_vsr[3];
	B_adjst=Array_Beaker_adjst[3];
	set_Vrnr=Array_set_Vrnr[3];
	set_nedl=Array_set_nedl[3];
	set_zoom=Array_Set_zoom[3];
	exp_val_two=3
	}
	$("#Object_Store").css({"background-image":"url(../PHY/CLA/VernierCalipers/images/Beaker_Big.png)"}) ;
	$("#Verier_Scale").css({"left":set_Vrnr+"px"});
	$("#Zoom_Scale").css({"left":set_zoom+"px"});
	$("#Scale_Needl").css({"left":set_nedl+"px"});
	$("#Object_Store").css({"top":B_top+"px","left":"17px","z-index":"3","height":B_height+"px","width":+B_width+"px",		  "background-size":B_Bsize+"px"});
	$("#TextBox").prop('disabled', true);
	$("#Object_Store").css({"display":"block"});
	$("#sclDragger").css({"left":B_SDl+"px","width":B_DCL+"px"});
	
	cmn.AdjstVal= B_adjst;
	cmn.Vernr_Scl_Reading=B_VSR;
	//console.log(exp_val_two);
	}
//function for finding beaker depth
function Beaker_depth(){
	FlagThree=2;
	$("#Vernier_Main").css({"left":"-129px"});
	$("#Drag_area").css({"left":"35px","width":"481px"});
	$("#Verier_Scale").css({"left":"60px"});
	$("#Zoom_Scale").css({"left":"-387px"});
	$("#Scale_Needl").css({"left":"68px"})
	$("#Object_Store").show();
	$("#Object_Store").css({"background-image":"url(../PHY/CLA/VernierCalipers/images/Beaker_Big_Two.png)"}) ;
	depth_width=Array_beaker_depth_width[exp_val_two]//width of Object 
	depth_height=Array_beaker_depth_height[exp_val_two]//height of Object
	depth_BSize=Array_beaker_depth_BSize[exp_val_two]//Background-size of object
	depth_SCLD=Array_beaker_depth_SCLD[exp_val_two]//width of dragg area.
	$("#Object_Store").css({"top":"166px","left":"421px","height":depth_height+"px","width":depth_width+"px","background-size":depth_BSize+"px","z-index":"0"});
	$("#sclDragger").css({"left":"35px","width":depth_SCLD+"px"});
	cmn.Vernr_Scl_Reading=Array_beaker_depth_ver[exp_val_two];
	cmn.AdjstVal=Array_beaker_depth_Adjst[exp_val_two];
	//console.log(exp_val_two);
	}
//Cylinder Diameter		
function Cylinder_Diameter_function(){	
	FlagTwo=4	
	cmn.ArrayVal_Four=Array_Cylinder_Diameter[Math.floor(Math.random()*Array_Cylinder_Diameter.length)];
	$("#Vernier_Main").css({"left":"0px"});
	$("#Object_Store").show();
	$("#Object_Store").css({"background-image":"url(../PHY/CLA/VernierCalipers/images/Cylinder_Diameter.png)"}) ;
	$("#Verier_Scale").css({"left":"209px"});
	$("#Scale_Needl").css({"left":"219px"});
	$("#Zoom_Scale").css({"left":"-917px"});
	$("#TextBox").prop('disabled', true);
	Diameter_SCLD=Array_Cylinder_Diameter_SCLD[cmn.ArrayVal_Four];
	Diameter_Width=Array_Cylinder_Diameter_Width[cmn.ArrayVal_Four];
	Diameter_Height=Array_Cylinder_Diameter_Height[cmn.ArrayVal_Four];
	Diameter_Bsize=Array_Cylinder_Diameter_Bsize[cmn.ArrayVal_Four];
	$("#Object_Store").css({"width":Diameter_Width+"px","height":Diameter_Height+"px","top":"261px","background-size":Diameter_Bsize+"px","left":"44px","z-index":"0"});
	$("#sclDragger").css({"left":Diameter_SCLD+"px","width":"350px"});
	cmn.Vernr_Scl_Reading=Array_Cylinder_Diameter_ver[cmn.ArrayVal_Four];
	cmn.AdjstVal=Array_Cylinder_Diameter_adjst[cmn.ArrayVal_Four];
	//console.log(cmn.ArrayVal_Four);
										}
//Cylinder Length.
function Cylinder_Length(){
	$("#Vernier_Main").css({"left":"0px"});
	$("#Object_Store").show();
	$("#Zoom_Scale").css({"left":"-794px"});
	$("#Verier_Scale").css({"left":"222px"});
	$("#Scale_Needl").css({"left":"244px"});
	$("#TextBox").prop('disabled', true);
	$("#Object_Store").css({"background-image":"url(../PHY/CLA/VernierCalipers/images/Cylinder_Length.png)"}) ;
	Cylinder_width=Array_Cylinder_Length_width[cmn.ArrayVal_Four];
	Cylinder_Height=Array_Cylinder_Length_Height[cmn.ArrayVal_Four];
	Cylinder_Bsize=Array_Cylinder_Length_Bsize[cmn.ArrayVal_Four];
	Cylinder_SCLD=Array_Cylinder_Length_SCLD[cmn.ArrayVal_Four];
	$("#Object_Store").css({"width":Cylinder_width+"px","height":Cylinder_Height+"px","top":"261px","background-size":Cylinder_Bsize+"px","left":"43px","z-index":"0"});
	$("#sclDragger").css({"left":Cylinder_SCLD+"px","width":"350px"});
	cmn.Vernr_Scl_Reading=Array_Cylinder_Length_ver[cmn.ArrayVal_Four];
	cmn.AdjstVal=Array_Cylinder_Length_adjst[cmn.ArrayVal_Four];
	//console.log(cmn.ArrayVal_Four);
	}
	//Radio button One - Click Function.
$('#Radio_One').click(function() {
    var chk=$('#Radio_One').val();
	/*var FlagOne;
	var FlagTwo;*/
	
	if(FlagTwo==2){
	Iron_block_lngth();
	$("#Result_Icon_wrong").css({"visibility":"hidden"});
	$("#Result_Icon_correct").css({"visibility":"hidden"});
	 $("#TextBox").val("");
		}
	 else if(FlagTwo==3){
	 Beaker_function();
	 $("#Result_Icon_wrong").css({"visibility":"hidden"});
	 $("#Result_Icon_correct").css({"visibility":"hidden"});
	 $("#TextBox").val("");
	 
	 	 }
	 else if(FlagTwo==4){
	  Cylinder_Diameter_function();
	  $("#Result_Icon_wrong").css({"visibility":"hidden"});
	 $("#Result_Icon_correct").css({"visibility":"hidden"});
	 $("#TextBox").val("");
	  	 }
});
// Radio Button Two -Click function.
$("#Radio_Two").click(function(){
	if(FlagThree==1){
	Iron_block_Breadth();
	$("#Result_Icon_wrong").css({"visibility":"hidden"});
	$("#Result_Icon_correct").css({"visibility":"hidden"});
	$("#TextBox").val("");
		}
	else if(FlagThree==2){
	Beaker_depth();
	$("#TextBox").prop('disabled', true);
	$("#Radio_One").prop('disabled', false);
	$("#Result_Icon_wrong").css({"visibility":"hidden"});
	$("#Result_Icon_correct").css({"visibility":"hidden"});
	$("#TextBox").val("");
		 }
	else if(FlagThree==3){
		Cylinder_Length();
		$("#Radio_One").prop('disabled', false);
	 $("#Result_Icon_wrong").css({"visibility":"hidden"});
	 $("#Result_Icon_correct").css({"visibility":"hidden"});
	 $("#TextBox").val("");
		  }
		});
		
//Radio Button Three-Click function
$("#Radio_Three").click(function(){
	Iron_block_Thickness();
	$("#Result_Icon_wrong").css({"visibility":"hidden"});
	$("#Result_Icon_correct").css({"visibility":"hidden"});
	$("#TextBox").val("");
			});
// allow only numeric value in the text box.
$("#TextBox").keydown(function (e) {
var keyCode = e.which; // Capture the event
//190 is the key code of decimal if you dont want decimals remove this condition keyCode != 190
if (keyCode != 8 && keyCode != 9 && keyCode != 13 && keyCode != 37 && keyCode != 38 && keyCode != 39 && keyCode != 40 && keyCode != 46 && keyCode != 110 && keyCode != 190) {
 if (keyCode < 48) {
e.preventDefault();
}
else if (keyCode > 57 && keyCode < 96) {
e.preventDefault();
				 }
else if (keyCode > 105) {
e.preventDefault();
				 }
				} });
//Hiding the icons.
$("#TextBox").keyup(function() {
	$("#Result_Icon_wrong").css({"visibility":"hidden"});
	$("#Result_Icon_correct").css({"visibility":"hidden"});	  
});
//Click Function Sphere	
$("#sphere").click(function(){	
	Bob_function();
	$("#Reading").css({"visibility":"visible","margin-top":"0px"});
	$("#ResetBtn").css({"margin-top":"60px"});
	$("#TextBox").prop('disabled', true);
	$("#TextBox").val("");
	$("#sphere").css({"opacity":"0.4"});
	$("#SphereText").css({"opacity":"0.4"});
	$("#IronBlock").css({"opacity":"1"});
	$("#IronBlockText").css({"opacity":"1"});
	$("#Beaker").css({"opacity":"1"});
	$("#BeakerText").css({"opacity":"1"});
	$("#Cylinder").css({"opacity":"1"});
	$("#CylinderText").css({"opacity":"1"});
	$("#Select_Measure").css({"visibility":"visible"});
	$("#Radio_One").prop('disabled', true);
	$("#Radio_One" ).prop( "checked", true);
	$("#Radio_Two").css({"visibility":"hidden"});
	$("#Radio_Three").css({"visibility":"hidden"});
	$("#SecondRDBttn").css({"visibility":"hidden"});
	$("#ThirdRDBttn").css({"visibility":"hidden"});
	$("#FirstRDBttn").html(Diameter);
	$("#Result_Icon_wrong").css({"visibility":"hidden"});
	$("#Result_Icon_correct").css({"visibility":"hidden"});
});
//Click Function Iron Block.
$("#IronBlock").click(function(){
	FlagThree=1;
	$("#TextBox").val("");
	var Array_val_two = Iron_length[Math.floor(Math.random()*Iron_length.length)];
	Iron_block_lngth();
	$("#Object_Store").css({"background-image":"url(../PHY/CLA/VernierCalipers/images/IronBlock_Length.png)"});
	$("#Reading").css({"visibility":"visible","margin-top":"50px"});
	$("#Select_Measure").css({"margin-top":"-166px"});
	$("#ResetBtn").css({"margin-top":"61px"});
	$("#TextBox").prop('disabled', true);
	$("#sphere").css({"opacity":"1"});
	$("#SphereText").css({"opacity":"1"});
	$("#IronBlock").css({"opacity":"0.4"});
	$("#IronBlockText").css({"opacity":"0.4"});
	$("#Beaker").css({"opacity":"1"});
	$("#BeakerText").css({"opacity":"1"});
	$("#Cylinder").css({"opacity":"1"});
	$("#CylinderText").css({"opacity":"1"});
	$("#Select_Measure,#FirstRDBttn,#Radio_Two,#Radio_Three,#ThirdRDBttn,#SecondRDBttn").css({"visibility":"visible"});
	$("#FirstRDBttn").html(Length);
	$("#SecondRDBttn").html(Breadth);
	$("#ThirdRDBttn").html(Thickness);
	$( "#Radio_One,#Radio_Two,#Radio_Three" ).prop( "checked", false );
	$("#Radio_One").prop('disabled', true);
	$( "#Radio_One" ).prop( "checked", true );
	$("#Result_Icon_wrong").css({"visibility":"hidden"});
	$("#Result_Icon_correct").css({"visibility":"hidden"});
	$("#TextBox").val("");
	});
//Click Function Beaker.
$("#Beaker").click(function(){
	 Beaker_function();
	 FlagThree=2;
	 FlagTwo=3;
	$("#Reading").css({"visibility":"visible","margin-top":"25px"});
	$("#Select_Measure").css({"margin-top":"-166px"});
	$("#ResetBtn").css({"margin-top":"60px"});
	$("#TextBox").prop('disabled', true);
	$("#sphere").css({"opacity":"1"});
	$("#SphereText").css({"opacity":"1"});
	$("#IronBlock").css({"opacity":"1"});
	$("#IronBlockText").css({"opacity":"1"});
	$("#Beaker").css({"opacity":"0.4"});
	$("#BeakerText").css({"opacity":"0.4"});
	$("#Cylinder").css({"opacity":"1"});
	$("#CylinderText").css({"opacity":"1"});
	$("#Select_Measure,#FirstRDBttn,#Radio_Two,#SecondRDBttn").css({"visibility":"visible"});
	$("#Radio_Three,#ThirdRDBttn").css({"visibility":"hidden"});
	$("#FirstRDBttn").html(InnerDiameter);
	$("#SecondRDBttn").html(Depth);
	$("#Radio_One,#Radio_Two,#Radio_Three" ).prop( "checked", false );
	$("#Radio_One").prop('disabled', true);
	$("#Radio_One" ).prop( "checked", true );
	$("#Result_Icon_wrong").css({"visibility":"hidden"});
	 $("#Result_Icon_correct").css({"visibility":"hidden"});
	 $("#TextBox").val("");
});	
//Click Function Cylinder.
$("#Cylinder").click(function(){
	$( "#Radio_One" ).prop( "checked", true );
	$("#Radio_One").prop('disabled', true);
	FlagThree=3
	 Cylinder_Diameter_function();
	$("#Reading").css({"visibility":"visible","margin-top":"25px"});
	$("#Select_Measure").css({"margin-top":"-166px"});
	$("#ResetBtn").css({"margin-top":"60px"});
	$("#TextBox").prop('disabled', true);
	$("#Cylinder").css({"opacity":"0.4"});
	$("#CylinderText").css({"opacity":"0.4"});
	$("#sphere").css({"opacity":"1"});
	$("#SphereText").css({"opacity":"1"});
	$("#IronBlock").css({"opacity":"1"});
	$("#IronBlockText").css({"opacity":"1"});
	$("#Beaker").css({"opacity":"1"});
	$("#BeakerText").css({"opacity":"1"});
	$("#Select_Measure,#FirstRDBttn,#Radio_Two,#SecondRDBttn").css({"visibility":"visible"});
	$("#Radio_Three,#ThirdRDBttn").css({"visibility":"hidden"});
	$("#FirstRDBttn").html(Diameter);
	$("#SecondRDBttn").html(Length);
	$( "#Radio_Two,#Radio_Three" ).prop( "checked", false );
	$("#Result_Icon_wrong").css({"visibility":"hidden"});
	 $("#Result_Icon_correct").css({"visibility":"hidden"});
	 $("#TextBox").val("");
	});	
//Chaking the answer.
$("#AnswrChkr").click(function(){
	var textValue = $("#TextBox").val();
	  if(textValue==Math.floor(cmn.Result* 100) / 100){
	  $("#Result_Icon_correct").css({"visibility":"visible"});
	  $("#Result_Icon_wrong").css({"visibility":"hidden"});
  			}
		else{
	  $("#Result_Icon_wrong").css({"visibility":"visible"});
	  $("#Result_Icon_correct").css({"visibility":"hidden"});
			}
		if (textValue==""){
	  $("#Result_Icon_correct").css({"visibility":"hidden"});
	  $("#Result_Icon_wrong").css({"visibility":"hidden"});
			 }
	
	});
		
//( Reset Button).
$("#ResetBtn").click(function(){
	window.location.reload(true);
	});	
});