package vernier_calipers.view
{
	import vernier_calipers.*;
	import vernier_calipers.model.*;
	import vernier_calipers.view.*;
	import vernier_calipers.controller.*;
	import flash.display.MovieClip;
	import fl.lang.Locale;
	import flash.events.Event;
	import flash.events.TextEvent;
	import flash.text.TextField;
	import flash.text.TextFormat;
	import fl.controls.ComboBox;
	import fl.controls.CheckBox;
	import flash.events.MouseEvent;
	import fl.controls.Button;
	import fl.controls.Slider;
	import fl.events.SliderEvent;
	import flash.display.Shape;
	import flash.filters.*;
	import flash.geom.*;
	import flash.net.URLRequest;
	import flash.net.navigateToURL;
	import fl.motion.Color;
	import flash.display.GradientType;
	import flash.geom.ColorTransform;
	import fl.controls.RadioButton;
	import fl.controls.RadioButtonGroup;
	import flash.external.*;
	import flash.system.SecurityDomain;
	import com.cartogrammar.drawing.DashedLine;//should import DashedLine.as


	public class VernierCalipersView
	{
		var model:VernierCalipersModel;
		var controller:VernierCalipersController;
		var menu:VernierCalipersMenu = new VernierCalipersMenu  ;
		var objStage:Object;
		var loadFont;
		var FontName;
		var fullmovie:MovieClip;
		var lan:String;
		var positionX;
		var positionY;
		var vernierX;
		var vernierY;
		var scaleZoomX;
		var movingX;
		var tailX;
		var leftX;
		var star:Boolean;
		var flag:Boolean;
		var select:String;
		var ans:Number;
		var movingLast;
		var Embedded_Font_Format:TextFormat = new TextFormat  ;
				var Embedded_Font_Format2:TextFormat = new TextFormat  ;
		var Disabled_Font_Format:TextFormat = new TextFormat  ;
		var rect:Rectangle;
		var rect1:Rectangle;
		var txt:String;
		var sphere_obj:MovieClip = new MovieClip  ;
		var blockLength_obj:MovieClip = new MovieClip  ;
		var blockBreadth_obj:MovieClip = new MovieClip  ;
		var blockThick_obj:MovieClip = new MovieClip  ;
		var beaker_obj:MovieClip = new MovieClip  ;
		var cylinder_obj:MovieClip = new MovieClip  ;
		var cylinderLength_obj:MovieClip = new MovieClip  ;
		var beakerIntDia_obj:MovieClip = new MovieClip  ;
		var beakerDepth_obj:MovieClip = new MovieClip  ;
		var beakerDepthback_obj:MovieClip = new MovieClip  ;
		var warningIcon:MovieClip=new warning();

		var dashLengths:Array = new Array();
		var dashy;
		var dashy1;




		public function VernierCalipersView(model:VernierCalipersModel,controller:VernierCalipersController,holder:Object,positionX:Number,positionY:Number,loadFont:Object,FontName:String,fullmovie:MovieClip,lan:String)
		{
			// setup mvc references
			this.model = model;
			this.controller = controller;
			this.objStage = holder;
			this.loadFont = loadFont;
			this.FontName = FontName;
			this.fullmovie = fullmovie;
			this.lan = lan;
			this.positionX = positionX;
			this.positionY = positionY;
			Locale.addXMLPath(lan,"VernierCalipers_" + lan + ".xml");
			Locale.setLoadCallback(onLoaded);
			Locale.loadLanguageXML(lan);

			Embedded_Font_Format = loadFont.EmbeddedFontFormat(FontName,"regular");
			Embedded_Font_Format.color = "0x626262";
			Embedded_Font_Format.size=12;
			
			Embedded_Font_Format2 = loadFont.EmbeddedFontFormat(FontName,"regular");
			Embedded_Font_Format2.color = "0x626262";
			Embedded_Font_Format2.size=14;
			//Embedded_Font_Format2.bold = true;
			Disabled_Font_Format = loadFont.EmbeddedFontFormat(FontName,"regular");
			Disabled_Font_Format.color = "0xCCCCCC";
			Disabled_Font_Format.size = 12;
		}

		public function onLoaded(success:Boolean):void
		{
			rect = new Rectangle(-140,objStage.Exp_Content.vernier.scale.y - objStage.Exp_Content.vernier.scale.width / 15.4,393,0);
			rectTail = new Rectangle(-67.7,objStage.Exp_Content.vernier.scale.y - objStage.Exp_Content.vernier.scale.width / 15.4,393,0);
			vernierX = objStage.Exp_Content.vernier.x;
			vernierY = objStage.Exp_Content.vernier.y;
			scaleZoomX = objStage.Exp_Content.zoomMC.scale.x;
			movingX = objStage.Exp_Content.vernier.moving.x;
			tailX = objStage.Exp_Content.vernier.tail.x;
			leftX = objStage.Exp_Content.vernier.leftMC.x;
			objStage.Menu_Content1.sphere.buttonMode = objStage.Menu_Content1.block.buttonMode = objStage.Menu_Content1.beaker.buttonMode = objStage.Menu_Content1.cylinder.buttonMode = objStage.Exp_Content.vernier.moving.buttonMode = true;

			object_label = new TextField  ;
			object_label = menu.createTextField(Locale.loadString("IDS_OBJECT"),false,positionX,positionY - 40,165,Embedded_Font_Format2);
			objStage.Menu_Content1.addChild(object_label);

			selected_label = new TextField  ;
			selected_label = menu.createTextField(Locale.loadString("IDS_SELECTED OBJECT"),false,positionX - 5,positionY - 40,165,Embedded_Font_Format2);
			objStage.Menu_Content1.addChild(selected_label);
			//selected_label.rotation=40
			selected_label.visible = false;

			sphere_txt = new TextField  ;
			sphere_txt = menu.createTextField(Locale.loadString("IDS_SPHERE"),false,objStage.Menu_Content1.sphere.x - 22,objStage.Menu_Content1.sphere.y + 65 - 40,165,Embedded_Font_Format);
			objStage.Menu_Content1.addChild(sphere_txt);

			block_txt = new TextField  ;
			block_txt = menu.createTextField(Locale.loadString("IDS_BLOCK"),false,objStage.Menu_Content1.block.x - 30,objStage.Menu_Content1.block.y + 35,165,Embedded_Font_Format);
			objStage.Menu_Content1.addChild(block_txt);

			beaker_txt = new TextField  ;
			beaker_txt = menu.createTextField(Locale.loadString("IDS_BEAKER"),false,objStage.Menu_Content1.beaker.x - 20,objStage.Menu_Content1.beaker.y + 70,165,Embedded_Font_Format);
			objStage.Menu_Content1.addChild(beaker_txt);

			cylinder_txt = new TextField  ;
			cylinder_txt = menu.createTextField(Locale.loadString("IDS_CYLINDER"),false,objStage.Menu_Content1.cylinder.x - 23,objStage.Menu_Content1.beaker.y + 70,165,Embedded_Font_Format);
			objStage.Menu_Content1.addChild(cylinder_txt);

			sphere_label = new TextField  ;
			sphere_label = menu.createTextField(Locale.loadString("IDS_SPHERE"),false,positionX + 103,positionY - 40,165,Embedded_Font_Format2);
			objStage.Menu_Content1.addChild(sphere_label);
			sphere_label.visible = false;

			block_label = new TextField  ;
			block_label = menu.createTextField(Locale.loadString("IDS_BLOCK"),false,positionX + 103,positionY - 40,165,Embedded_Font_Format2);
			objStage.Menu_Content1.addChild(block_label);
			block_label.visible = false;

			beaker_label = new TextField  ;
			beaker_label = menu.createTextField(Locale.loadString("IDS_BEAKER"),false,positionX + 103,positionY - 40,165,Embedded_Font_Format2);
			objStage.Menu_Content1.addChild(beaker_label);
			beaker_label.visible = false;

			cylinder_label = new TextField  ;
			cylinder_label = menu.createTextField(Locale.loadString("IDS_CYLINDER"),false,positionX + 103,positionY - 40,165,Embedded_Font_Format2);
			objStage.Menu_Content1.addChild(cylinder_label);
			cylinder_label.visible = false;

			measure_label = new TextField  ;
			measure_label = menu.createTextField(Locale.loadString("IDS_MEASURE"),false,positionX - 5,positionY + 120,165,Embedded_Font_Format);
			objStage.Menu_Content1.addChild(measure_label);
			measure_label.visible = false;

			diameter_radio = new RadioButton  ;
			diameter_radio = menu.createRadioButton(Locale.loadString("IDS_DIAMETER"),"diameter_radio",positionX + 30,positionY + 140,165,false,Embedded_Font_Format);
			objStage.Menu_Content1.addChild(diameter_radio);
			diameter_radio.visible = false;
			diameter_radio.setStyle('disabledTextFormat',Disabled_Font_Format);

			length_radio = new RadioButton  ;
			length_radio = menu.createRadioButton(Locale.loadString("IDS_LENGTH"),"length_radio",positionX + 30,positionY + 140,165,false,Embedded_Font_Format);
			objStage.Menu_Content1.addChild(length_radio);
			length_radio.visible = false;
			length_radio.setStyle('disabledTextFormat',Disabled_Font_Format);


			breadth_radio = new RadioButton  ;
			breadth_radio = menu.createRadioButton(Locale.loadString("IDS_BREADTH"),"breadth_radio",positionX + 30,positionY + 160,165,false,Embedded_Font_Format);
			objStage.Menu_Content1.addChild(breadth_radio);
			breadth_radio.visible = false;
			breadth_radio.setStyle('disabledTextFormat',Disabled_Font_Format);


			thick_radio = new RadioButton  ;
			thick_radio = menu.createRadioButton(Locale.loadString("IDS_THICKNESS"),"thick_radio",positionX + 30,positionY + 180,165,false,Embedded_Font_Format);
			objStage.Menu_Content1.addChild(thick_radio);
			thick_radio.visible = false;
			thick_radio.setStyle('disabledTextFormat',Disabled_Font_Format);


			internaldia_radio = new RadioButton  ;
			internaldia_radio = menu.createRadioButton(Locale.loadString("IDS_INTERNAL DIAMETER"),"internaldia_radio",positionX + 30,positionY + 140,165,false,Embedded_Font_Format);
			objStage.Menu_Content1.addChild(internaldia_radio);
			internaldia_radio.visible = false;
			internaldia_radio.setStyle('disabledTextFormat',Disabled_Font_Format);


			depth_radio = new RadioButton  ;
			depth_radio = menu.createRadioButton(Locale.loadString("IDS_DEPTH"),"depth_radio",positionX + 30,positionY + 160,165,false,Embedded_Font_Format);
			objStage.Menu_Content1.addChild(depth_radio);
			depth_radio.visible = false;
			depth_radio.setStyle('disabledTextFormat',Disabled_Font_Format);


			reading_label = new TextField  ;
			reading_label = menu.createTextField(Locale.loadString("IDS_ENTER"),false,positionX - 5,positionY + 220,165,Embedded_Font_Format);
			objStage.Menu_Content1.addChild(reading_label);
			reading_label.visible = false;


			warningIcon.x = positionX + 22;
			warningIcon.y = positionX + 345;

			objStage.Menu_Content1.addChild(warningIcon);
			warningIcon.visible = false;


			input_label = new TextField  ;
			input_label.x = positionX + 125;
			input_label.y = positionY + 220;
			input_label.width = 60;
			input_label.height = 20;
			input_label.name = 'input_label';
			input_label.type = "input";
			input_label.restrict = '\\.\\0-9';
			input_label.border = true;
			input_label.background = 0xFFFFFF;
			objStage.Menu_Content1.addChild(input_label);
			input_label.visible = false;

			check_btn = new Button  ;
			check_btn = menu.createButton(Locale.loadString("IDS_CHECK"),positionX + 54,positionY + 260,70,true,true,Embedded_Font_Format);
			objStage.Menu_Content1.addChild(check_btn);
			check_btn.addEventListener(MouseEvent.MOUSE_DOWN,checkBtn_FN);
			check_btn.visible = false;
			check_btn.name = 'check_btn';

			try_label = new TextField  ;
			try_label = menu.createTextField(Locale.loadString("IDS_TRY"),false,positionX + 40,positionY + 293,165,Embedded_Font_Format);
			objStage.Menu_Content1.addChild(try_label);
			try_label.visible = false;

			correct_label = new TextField  ;
			correct_label = menu.createTextField(Locale.loadString("IDS_CORRECT"),false,positionX + 40,positionY + 293,165,Embedded_Font_Format);
			objStage.Menu_Content1.addChild(correct_label);
			correct_label.visible = false;

			noObject_label = new TextField  ;
			noObject_label = menu.createTextField(Locale.loadString("IDS_NO OBJECT"),false,positionX + 72,positionY + 263,165,Embedded_Font_Format);
			objStage.Menu_Content1.addChild(noObject_label);
			noObject_label.visible = false;

			empty_label = new TextField  ;
			empty_label = menu.createTextField(Locale.loadString("IDS_EMPTY"),false,positionX + 40,positionY + 293,165,Embedded_Font_Format);
			objStage.Menu_Content1.addChild(empty_label);
			empty_label.visible = false;

			answer_btn = new Button  ;
			answer_btn = menu.createButton(Locale.loadString("IDS_ANSWER"),positionX - 4,positionY + 310,70,true,true,Embedded_Font_Format);
			//objStage.Menu_Content1.addChild(answer_btn);
			//answer_btn.addEventListener(MouseEvent.MOUSE_DOWN,answerBtn_FN);
			answer_btn.visible = false;

			answer_label = new TextField  ;
			answer_label = menu.createTextField("",false,positionX + 85,positionY + 313,60,Embedded_Font_Format);
			//objStage.Menu_Content1.addChild(answer_label);
			answer_label.visible = false;

			reset_btn = new Button  ;
			reset_btn = menu.createButton(Locale.loadString("IDS_RESET"),positionX + 20,positionY + 340,150,true,true,Embedded_Font_Format);
			objStage.Menu_Content1.addChild(reset_btn);
			reset_btn.addEventListener(MouseEvent.MOUSE_DOWN,resetBtn_FN);
			reset_btn.visible = false;

			objStage.addEventListener(MouseEvent.MOUSE_DOWN,stageDown_FN);
			objStage.Exp_Content.vernier.moving.addEventListener(MouseEvent.MOUSE_DOWN,movingMouseDown_FN);
			objStage.Exp_Content.vernier.moving.addEventListener(MouseEvent.MOUSE_UP,movingMouseUp_FN);
			objStage.addEventListener(MouseEvent.MOUSE_UP,movingMouseUp_FN);
			objStage.Exp_Content.addEventListener(MouseEvent.MOUSE_DOWN,ExpClick_FN);
			objStage.Menu_Content1.sphere.addEventListener(MouseEvent.CLICK,mcMouseClick_FN);
			objStage.Menu_Content1.block.addEventListener(MouseEvent.CLICK,mcMouseClick_FN);
			objStage.Menu_Content1.beaker.addEventListener(MouseEvent.CLICK,mcMouseClick_FN);
			objStage.Menu_Content1.cylinder.addEventListener(MouseEvent.CLICK,mcMouseClick_FN);
			objStage.Menu_Content1.sphere.mouseChildren = objStage.Menu_Content1.beaker.mouseChildren = objStage.Menu_Content1.cylinder.mouseChildren = false;

			sphere_obj.visible = blockLength_obj.visible = blockBreadth_obj.visible = blockThick_obj.visible = cylinder_obj.visible = cylinderLength_obj.visible = beakerIntDia_obj.visible = beakerDepth_obj.visible = false;

			dotlineDrwaFN();

		}

		/// function for drawing dotted line.....
		function dotlineDrwaFN()
		{

			dashLengths = new Array();
			dashLengths[0] = 5;
			dashLengths[1] = 5;
			dashLengths[2] = 5;
			dashLengths[3] = 3;
			dashy = new DashedLine(1,0x626262,dashLengths);
			dashy1 = new DashedLine(1,0x626262,dashLengths);

			objStage.Exp_Content.addChild(dashy);
			objStage.Exp_Content.addChild(dashy1);

			dashy.moveTo(254,301);
			dashy.lineTo(99,190);
			dashy1.moveTo(506,300);
			dashy1.lineTo(99,190);


		}

		function stageDown_FN(e:Event):void
		{
			if (e.target.name != 'check_btn' && e.target.name != 'input_label')
			{
				ExpClick_FN(e);
			}
			if (e.target.name != 'input_label')
			{
				txt = input_label.text;
				check_btn.enabled = false;
				check_btn.setStyle('textFormat',Disabled_Font_Format);
				check_btn.removeEventListener(MouseEvent.MOUSE_DOWN,checkBtn_FN);
			}
			if (e.target.name == 'input_label')
			{
				check_btn.enabled = true;
				check_btn.setStyle('textFormat',Embedded_Font_Format);
				check_btn.addEventListener(MouseEvent.MOUSE_DOWN,checkBtn_FN);
				noObject_label.visible = try_label.visible = correct_label.visible = empty_label.visible = answer_label.visible = false;
				warningIcon.visible = false;
			}
		}

		function movingMouseDown_FN(e:Event):void
		{

			objStage.Exp_Content.vernier.moving.addEventListener(Event.ENTER_FRAME,movingEnterframe);
			update(e);
		}

		function ExpClick_FN(e:Event):void
		{
			noObject_label.visible = try_label.visible = correct_label.visible = empty_label.visible = answer_label.visible = false;
			warningIcon.visible = false;
			objStage.Menu_Content1.removeChild(input_label);
			input_label = new TextField  ;
			input_label.x = positionX + 125;
			input_label.y = positionY + 220;
			input_label.width = 60;
			input_label.height = 20;
			input_label.name = 'input_label';
			input_label.type = "input";
			input_label.restrict = '\\.\\0-9';
			input_label.border = true;
			input_label.background = 0xFFFFFF;
			objStage.Menu_Content1.addChild(input_label);
			input_label.visible = check_btn.visible;
			update(e);
		}

		function movingEnterframe(e:Event):void
		{

			dashy.clear();
			dashy1.clear();
			dashy.moveTo(254,301);
			dashy.lineTo(objStage.Exp_Content.vernier.moving.x+239,190);
			dashy1.moveTo(506,300);
			dashy1.lineTo(objStage.Exp_Content.vernier.moving.x+239,190);

			objStage.Exp_Content.vernier.moving.startDrag(false,rect);
			if (objStage.Exp_Content.vernier.moving.hitObj.hitTestObject(sphere_obj) == true)
			{
				objStage.Exp_Content.vernier.moving.stopDrag();
				objStage.Exp_Content.vernier.tail.stopDrag();
				objStage.Exp_Content.vernier.moving.startDrag(false,rect1);
				check_btn.visible = reading_label.visible = input_label.visible = true;
			}

			if (blockLength_obj.visible == true)
			{
				if (objStage.Exp_Content.vernier.moving.hitObj.hitTestObject(blockLength_obj) == true)
				{
					objStage.Exp_Content.vernier.moving.stopDrag();
					objStage.Exp_Content.vernier.tail.stopDrag();
					objStage.Exp_Content.vernier.moving.startDrag(false,rect1);
					check_btn.visible = reading_label.visible = input_label.visible = true;
				}
			}
			else if (blockBreadth_obj.visible == true)
			{
				if (objStage.Exp_Content.vernier.moving.hitObj.hitTestObject(blockBreadth_obj) == true)
				{
					objStage.Exp_Content.vernier.moving.stopDrag();
					objStage.Exp_Content.vernier.tail.stopDrag();
					objStage.Exp_Content.vernier.moving.startDrag(false,rect1);
					check_btn.visible = reading_label.visible = input_label.visible = true;
				}
			}
			else if (blockThick_obj.visible == true)
			{
				if (objStage.Exp_Content.vernier.moving.hitObj.hitTestObject(blockThick_obj) == true)
				{
					objStage.Exp_Content.vernier.moving.stopDrag();
					objStage.Exp_Content.vernier.tail.stopDrag();
					objStage.Exp_Content.vernier.moving.startDrag(false,rect1);
					check_btn.visible = reading_label.visible = input_label.visible = true;
				}
			}

			if (cylinder_obj.visible == true)
			{
				if (objStage.Exp_Content.vernier.moving.hitObj.hitTestObject(cylinder_obj) == true)
				{
					objStage.Exp_Content.vernier.moving.stopDrag();
					objStage.Exp_Content.vernier.tail.stopDrag();
					objStage.Exp_Content.vernier.moving.startDrag(false,rect1);
					check_btn.visible = reading_label.visible = input_label.visible = true;
				}
			}
			else if (cylinderLength_obj.visible == true)
			{
				if (objStage.Exp_Content.vernier.moving.hitObj.hitTestObject(cylinderLength_obj) == true)
				{
					objStage.Exp_Content.vernier.moving.stopDrag();
					objStage.Exp_Content.vernier.tail.stopDrag();
					objStage.Exp_Content.vernier.moving.startDrag(false,rect1);
					check_btn.visible = reading_label.visible = input_label.visible = true;
				}

			}
			//
			if (beakerIntDia_obj.visible == true)
			{

				if (objStage.Exp_Content.vernier.moving.x >= -38)
				{
					objStage.Exp_Content.vernier.moving.stopDrag();
					objStage.Exp_Content.vernier.tail.stopDrag();
					objStage.Exp_Content.vernier.moving.startDrag(false,rect1);
					check_btn.visible = reading_label.visible = input_label.visible = true;
				}
				dashy.clear();
				dashy1.clear();
				dashy.moveTo(254,301);
				dashy1.moveTo(506,300);
				dashy1.lineTo(objStage.Exp_Content.vernier.moving.x+240,206);
				dashy.lineTo(objStage.Exp_Content.vernier.moving.x+243,206);

			}
			else if (beakerDepth_obj.visible == true)
			{
				if (objStage.Exp_Content.vernier.tail.hitTestObject(objStage.Exp_Content.hitObject) == true)
				{
					objStage.Exp_Content.vernier.moving.stopDrag();
					objStage.Exp_Content.vernier.tail.stopDrag();
					objStage.Exp_Content.vernier.moving.startDrag(false,rect1);
					check_btn.visible = reading_label.visible = input_label.visible = true;
				}
				dashy.clear();
				dashy1.clear();
				dashy.moveTo(254,301);
				dashy1.moveTo(506,300);
				dashy1.lineTo(objStage.Exp_Content.vernier.moving.x+79,206);
				dashy.lineTo(objStage.Exp_Content.vernier.moving.x+79,206);
			}
			update(e);


			answer_btn.enabled = true;
			answer_btn.setStyle('textFormat',Embedded_Font_Format);

		}

		function movingMouseUp_FN(e:Event):void
		{
			objStage.Exp_Content.vernier.moving.removeEventListener(Event.ENTER_FRAME,movingEnterframe);
			objStage.Exp_Content.vernier.moving.stopDrag();
			objStage.Exp_Content.vernier.tail.stopDrag();
			update(e);
		}

		function mcMouseClick_FN(e:Event):void
		{

			dashy.clear();
			dashy1.clear();
			dashy.moveTo(254,301);
			dashy.lineTo(objStage.Exp_Content.vernier.moving.x+239,190);
			dashy1.moveTo(506,300);
			dashy1.lineTo(objStage.Exp_Content.vernier.moving.x+239,190);
			objStage.Exp_Content.vernier.x = vernierX;
			objStage.Exp_Content.vernier.y = vernierY;
			selected_label.visible = measure_label.visible = answer_btn.visible = true;
			answer_btn.enabled = false;
			answer_btn.setStyle('textFormat',Disabled_Font_Format);
			object_label.visible = sphere_txt.visible = block_txt.visible = beaker_txt.visible = cylinder_txt.visible = false;
			objStage.Menu_Content1.sphere.visible = objStage.Menu_Content1.block.visible = objStage.Menu_Content1.beaker.visible = objStage.Menu_Content1.cylinder.visible = false;
			objStage.Menu_Content1.sphere.buttonMode = objStage.Menu_Content1.block.buttonMode = objStage.Menu_Content1.beaker.buttonMode = objStage.Menu_Content1.cylinder.buttonMode = false;
			if (e.target.name == 'sphere')
			{
				star = 0;
				sphere_label.visible = objStage.Menu_Content1.sphere.visible = diameter_radio.visible = true;
				block_label.visible = beaker_label.visible = cylinder_label.visible = false;
				objStage.Menu_Content1.sphere.x = positionX + 90;
				objStage.Menu_Content1.sphere.y = positionY + 50;
				diameter_radio.addEventListener(MouseEvent.CLICK,diameter_radioClicked);
			}
			if (e.target.name == 'block')
			{
				flag = 0;
				block_label.visible = objStage.Menu_Content1.block.visible = length_radio.visible = breadth_radio.visible = thick_radio.visible = true;
				sphere_label.visible = beaker_label.visible = cylinder_label.visible = false;
				objStage.Menu_Content1.block.x = positionX + 90;
				objStage.Menu_Content1.block.y = positionY + 50;
				length_radio.addEventListener(MouseEvent.CLICK,length_radioClicked);
				breadth_radio.addEventListener(MouseEvent.CLICK,breadth_radioClicked);
				thick_radio.addEventListener(MouseEvent.CLICK,thick_radioClicked);

			}
			if (e.target.name == 'beaker')
			{

				objStage.Exp_Content.vernier.y = vernierY + 15;
				beaker_label.visible = objStage.Menu_Content1.beaker.visible = internaldia_radio.visible = depth_radio.visible = true;
				sphere_label.visible = block_label.visible = cylinder_label.visible = false;
				objStage.Menu_Content1.beaker.x = positionX + 90;
				objStage.Menu_Content1.beaker.y = positionY + 50;
				dashy.clear();
				dashy1.clear();
				dashy.moveTo(254,301);
				dashy1.moveTo(506,300);
				dashy1.lineTo(objStage.Exp_Content.vernier.moving.x+240,206);
				dashy.lineTo(objStage.Exp_Content.vernier.moving.x+243,206);
				internaldia_radio.addEventListener(MouseEvent.CLICK,internaldia_radioClicked);
				depth_radio.addEventListener(MouseEvent.CLICK,depth_radioClicked);




			}
			if (e.target.name == 'cylinder')
			{
				star = flag = 1;
				cylinder_label.visible = objStage.Menu_Content1.cylinder.visible = diameter_radio.visible = length_radio.visible = true;
				sphere_label.visible = block_label.visible = beaker_label.visible = false;
				length_radio.y = positionY + 160;
				objStage.Menu_Content1.cylinder.x = positionX + 90;
				objStage.Menu_Content1.cylinder.y = positionY + 50;
				diameter_radio.addEventListener(MouseEvent.CLICK,diameter_radioClicked);
				length_radio.addEventListener(MouseEvent.CLICK,length_radioClicked);
			}
			update(e);
			reset_btn.visible = true;
		}

		function diameter_radioClicked(e:Event):void
		{

			if (diameter_radio.selected == true)
			{
				if (star == 0)
				{
					diameter_radio.enabled = false;
					select = 'sphereDia';
					ans = 1.93;
					sphere_obj = new sphereClass  ;
					objStage.Exp_Content.addChild(sphere_obj);
					sphere_obj.x = objStage.Exp_Content.vernier.x - 166;
					sphere_obj.y = objStage.Exp_Content.vernier.y + 30;
					sphere_obj.width = objStage.Menu_Content1.sphere.width;
					sphere_obj.height = objStage.Menu_Content1.sphere.height;
					objStage.Exp_Content.setChildIndex(sphere_obj,3);
					objStage.Exp_Content.vernier.moving.x = movingX + 200;
					movingLast = objStage.Exp_Content.vernier.moving.x;
					rect1 = new Rectangle(-140 + sphere_obj.width + 2,objStage.Exp_Content.vernier.scale.y - objStage.Exp_Content.vernier.scale.width / 15.4,393 - sphere_obj.width + 2,0);
				}
				else if (star == 1)
				{
					diameter_radio.enabled = false;
					length_radio.enabled = true;
					select = 'cylinderDia';
					ans = 2.08;
					cylinderLength_obj.visible = false;
					cylinder_obj = new cylinderClass  ;
					objStage.Exp_Content.addChild(cylinder_obj);
					cylinder_obj.x = objStage.Exp_Content.vernier.x - 164.3;
					cylinder_obj.y = objStage.Exp_Content.vernier.y + 40;
					cylinder_obj.width = objStage.Menu_Content1.cylinder.width;
					cylinder_obj.height = objStage.Menu_Content1.cylinder.height;
					objStage.Exp_Content.setChildIndex(cylinder_obj,3);
					objStage.Exp_Content.vernier.moving.x = movingX + 200;
					movingLast = objStage.Exp_Content.vernier.moving.x;
					rect1 = new Rectangle(-140 + cylinder_obj.width + 3,objStage.Exp_Content.vernier.scale.y - objStage.Exp_Content.vernier.scale.width / 15.4,393 - cylinder_obj.width + 3,0);
				}
			}
			dashy.clear();
			dashy1.clear();
			dashy.moveTo(254,301);
			dashy.lineTo(objStage.Exp_Content.vernier.moving.x+239,190);
			dashy1.moveTo(506,300);
			dashy1.lineTo(objStage.Exp_Content.vernier.moving.x+239,190);
			check_btn.visible = reading_label.visible = input_label.visible = false;
			update(e);
		}

		function length_radioClicked(e:Event):void
		{

			if (length_radio.selected == true)
			{
				if (flag == 0)
				{
					length_radio.enabled = false;
					breadth_radio.enabled = thick_radio.enabled = true;
					select = 'blockLength';
					ans = 4.05;
					blockBreadth_obj.visible = blockThick_obj.visible = false;
					blockLength_obj = new blockClass  ;
					objStage.Exp_Content.addChild(blockLength_obj);
					blockLength_obj.x = objStage.Exp_Content.vernier.x - 139.7;
					blockLength_obj.y = objStage.Exp_Content.vernier.y + 30;
					blockLength_obj.width = objStage.Menu_Content1.block.width;
					blockLength_obj.height = objStage.Menu_Content1.block.height;
					objStage.Exp_Content.setChildIndex(blockLength_obj,3);
					objStage.Exp_Content.vernier.moving.x = movingX + 200;
					movingLast = objStage.Exp_Content.vernier.moving.x;
					rect1 = new Rectangle(-140 + blockLength_obj.width + 9,objStage.Exp_Content.vernier.scale.y - objStage.Exp_Content.vernier.scale.width / 15.4,393 - blockLength_obj.width + 9,0);
				}
				else if (flag == 1)
				{
					length_radio.enabled = false;
					diameter_radio.enabled = true;
					select = 'cylinderLength';
					ans = 4.53;
					cylinder_obj.visible = false;
					cylinderLength_obj = new cylinderLengthClass  ;
					objStage.Exp_Content.addChild(cylinderLength_obj);
					cylinderLength_obj.x = objStage.Exp_Content.vernier.x - 129.5;
					cylinderLength_obj.y = objStage.Exp_Content.vernier.y + 90;
					cylinderLength_obj.width = objStage.Menu_Content1.cylinder.height + 16.8;
					cylinderLength_obj.height = objStage.Menu_Content1.cylinder.width;
					objStage.Exp_Content.setChildIndex(cylinderLength_obj,3);
					objStage.Exp_Content.vernier.moving.x = movingX + 200;
					movingLast = objStage.Exp_Content.vernier.moving.x;
					rect1 = new Rectangle(-140 + cylinderLength_obj.width + 9,objStage.Exp_Content.vernier.scale.y - objStage.Exp_Content.vernier.scale.width / 15.4,393 - cylinderLength_obj.width + 9,0);
				}
			}
			dashy.clear();
			dashy1.clear();
			dashy.moveTo(254,301);
			dashy.lineTo(objStage.Exp_Content.vernier.moving.x+239,190);
			dashy1.moveTo(506,300);
			dashy1.lineTo(objStage.Exp_Content.vernier.moving.x+239,190);
			check_btn.visible = reading_label.visible = input_label.visible = false;
			update(e);
		}

		function breadth_radioClicked(e:Event):void
		{

			if (breadth_radio.selected == true)
			{
				breadth_radio.enabled = false;
				length_radio.enabled = thick_radio.enabled = true;
				select = 'blockBreadth';
				ans = 2.53;
				blockLength_obj.visible = blockThick_obj.visible = false;
				blockBreadth_obj = new blockBreadthClass  ;
				objStage.Exp_Content.addChild(blockBreadth_obj);
				blockBreadth_obj.x = objStage.Exp_Content.vernier.x - 150.5;
				blockBreadth_obj.y = objStage.Exp_Content.vernier.y + 35;
				blockBreadth_obj.width = objStage.Menu_Content1.block.height + 1;
				blockBreadth_obj.height = objStage.Menu_Content1.block.width;
				objStage.Exp_Content.setChildIndex(blockBreadth_obj,3);
				objStage.Exp_Content.vernier.moving.x = movingX + 200;
				movingLast = objStage.Exp_Content.vernier.moving.x;
				rect1 = new Rectangle(-140 + blockBreadth_obj.width + 5,objStage.Exp_Content.vernier.scale.y - objStage.Exp_Content.vernier.scale.width / 15.4,393 - blockBreadth_obj.width + 5,0);
			}
			dashy.clear();
			dashy1.clear();
			dashy.moveTo(254,301);
			dashy.lineTo(objStage.Exp_Content.vernier.moving.x+239,190);
			dashy1.moveTo(506,300);
			dashy1.lineTo(objStage.Exp_Content.vernier.moving.x+239,190);
			check_btn.visible = reading_label.visible = input_label.visible = false;
			update(e);
		}

		function thick_radioClicked(e:Event):void
		{

			if (thick_radio.selected == true)
			{
				thick_radio.enabled = false;
				length_radio.enabled = breadth_radio.enabled = true;
				select = 'blockThick';
				ans = 1.37;
				blockLength_obj.visible = blockBreadth_obj.visible = false;
				blockThick_obj = new blockThickClass  ;
				objStage.Exp_Content.addChild(blockThick_obj);
				blockThick_obj.x = objStage.Exp_Content.vernier.x - 172.3;
				blockThick_obj.y = objStage.Exp_Content.vernier.y + 35;
				blockThick_obj.width = objStage.Menu_Content1.block.height / 1.8;
				blockThick_obj.height = objStage.Menu_Content1.block.width;
				objStage.Exp_Content.setChildIndex(blockThick_obj,3);
				objStage.Exp_Content.vernier.moving.x = movingX + 200;
				movingLast = objStage.Exp_Content.vernier.moving.x;
				rect1 = new Rectangle(-140 + blockThick_obj.width + 2.5,objStage.Exp_Content.vernier.scale.y - objStage.Exp_Content.vernier.scale.width / 15.4,393 - blockThick_obj.width + 2.5,0);
			}
			dashy.clear();
			dashy1.clear();
			dashy.moveTo(254,301);
			dashy.lineTo(objStage.Exp_Content.vernier.moving.x+239,190);
			dashy1.moveTo(506,300);
			dashy1.lineTo(objStage.Exp_Content.vernier.moving.x+239,190);
			check_btn.visible = reading_label.visible = input_label.visible = false;
			update(e);
		}

		function internaldia_radioClicked(e:Event):void
		{
			if (internaldia_radio.selected == true)
			{
				internaldia_radio.enabled = false;
				depth_radio.enabled = true;
				select = 'beakerIntDia';
				ans = 3.93;
				objStage.Exp_Content.vernier.x = vernierX;
				objStage.Exp_Content.vernier.moving.x = movingX;
				objStage.Exp_Content.vernier.tail.x = tailX;
				beakerDepth_obj.visible = false;
				if (beakerDepthback_obj.parent != null)
				{
					objStage.Exp_Content.removeChild(beakerDepthback_obj);
				}
				beakerIntDia_obj = new beakerIntDiaClass  ;
				objStage.Exp_Content.addChild(beakerIntDia_obj);
				beakerIntDia_obj.x = objStage.Exp_Content.vernier.x - 164.8;
				beakerIntDia_obj.y = objStage.Exp_Content.vernier.y - 135;
				beakerIntDia_obj.width = objStage.Menu_Content1.beaker.width;
				beakerIntDia_obj.height = objStage.Menu_Content1.beaker.height;
				objStage.Exp_Content.setChildIndex(beakerIntDia_obj,3);
				objStage.Exp_Content.vernier.moving.x = movingX + 30;
				movingLast = objStage.Exp_Content.vernier.moving.x;
				rect1 = new Rectangle(-140,objStage.Exp_Content.vernier.scale.y - objStage.Exp_Content.vernier.scale.width / 15.4,beakerIntDia_obj.width - 19,0);

			}
			dashy.clear();
			dashy1.clear();
			dashy.moveTo(254,301);
			dashy.lineTo(objStage.Exp_Content.vernier.moving.x+243,206);
			dashy1.moveTo(506,300);
			dashy1.lineTo(objStage.Exp_Content.vernier.moving.x+240,206);

			check_btn.visible = reading_label.visible = input_label.visible = false;
			update(e);
		}

		function depth_radioClicked(e:Event):void
		{

			if (depth_radio.selected == true)
			{
				depth_radio.enabled = false;
				internaldia_radio.enabled = true;
				select = 'beakerDepth';
				ans = 6.08;
				objStage.Exp_Content.vernier.x = vernierX - 170;
				objStage.Exp_Content.vernier.moving.x = 47 - 100;
				objStage.Exp_Content.vernier.tail.x = 215 - 100;
				beakerIntDia_obj.visible = false;
				beakerDepth_obj = new beakerDepthClass  ;
				objStage.Exp_Content.addChild(beakerDepth_obj);
				beakerDepth_obj.x = objStage.Exp_Content.vernier.x + 345;
				beakerDepth_obj.y = objStage.Exp_Content.vernier.y - 40;
				beakerDepth_obj.width = objStage.Menu_Content1.beaker.height + 34;
				beakerDepth_obj.height = objStage.Menu_Content1.beaker.width;
				objStage.Exp_Content.setChildIndex(beakerDepth_obj,3);
				beakerDepthback_obj = new beakerDepthbackClass  ;
				objStage.Exp_Content.addChild(beakerDepthback_obj);
				beakerDepthback_obj.x = objStage.Exp_Content.vernier.x + 347;
				beakerDepthback_obj.y = objStage.Exp_Content.vernier.y - 40;
				beakerDepthback_obj.width = objStage.Menu_Content1.beaker.height + 27;
				beakerDepthback_obj.height = objStage.Menu_Content1.beaker.width;
				objStage.Exp_Content.setChildIndex(beakerDepthback_obj,1);
				rect1 = new Rectangle(-140 + beakerDepthback_obj.width - 97,objStage.Exp_Content.vernier.scale.y - objStage.Exp_Content.vernier.scale.width / 15.4,101,0);
			}
			dashy.clear();
			dashy1.clear();
			dashy.moveTo(254,301);
			dashy.lineTo(objStage.Exp_Content.vernier.moving.x+79,206);
			dashy1.moveTo(506,300);
			dashy1.lineTo(objStage.Exp_Content.vernier.moving.x+79,206);
			check_btn.visible = reading_label.visible = input_label.visible = false;
			update(e);
		}

		function answerBtn_FN(e:Event):void
		{
			noObject_label.visible = empty_label.visible = try_label.visible = warningIcon.visible = false;
			if (! isNaN(ans))
			{
				answer_label.visible = true;
				answer_label.text = ans + " cm";
				answer_label.setTextFormat(Embedded_Font_Format);
			}
			else
			{
				noObject_label.visible = true;
				noObject_label.y = positionY + 313;
			}
		}

		function checkBtn_FN(e:Event):void
		{
			noObject_label.visible = try_label.visible = warningIcon.visible = correct_label.visible = empty_label.visible = answer_label.visible = false;
			if (diameter_radio.selected == false && length_radio.selected == false && breadth_radio.selected == false && thick_radio.selected == false && internaldia_radio.selected == false && depth_radio.selected == false)
			{
				try_label.visible = warningIcon.visible = correct_label.visible = false;
				noObject_label.visible = true;
				noObject_label.y = positionY + 263;
			}
			else if (input_label.text == "")
			{
				empty_label.visible = true;
				warningIcon.visible = true;
			}
			else
			{
				if (select == 'sphereDia')
				{
					if (input_label.text == "1.93")
					{
						try_label.visible = false;

						correct_label.visible = true;
					}
					else
					{
						try_label.visible = true;
						warningIcon.visible = true;
						correct_label.visible = false;
					}
				}
				else if (select == 'cylinderDia')
				{
					if (input_label.text == "2.08")
					{
						try_label.visible = false;
						correct_label.visible = true;
					}
					else
					{
						try_label.visible = true;
						warningIcon.visible = true;
						correct_label.visible = false;
					}
				}
				else if (select == 'blockLength')
				{
					if (input_label.text == "4.05")
					{
						try_label.visible = false;

						correct_label.visible = true;
					}
					else
					{
						try_label.visible = true;
						warningIcon.visible = true;
						correct_label.visible = false;
					}
				}
				else if (select == 'cylinderLength')
				{
					if (input_label.text == "4.53")
					{
						try_label.visible = false;
						correct_label.visible = true;
					}
					else
					{
						try_label.visible = true;
						correct_label.visible = false;
					}
				}
				else if (select == 'blockBreadth')
				{
					if (input_label.text == "2.53")
					{
						try_label.visible = false;
						correct_label.visible = true;
					}
					else
					{
						try_label.visible = true;
						correct_label.visible = false;
					}
				}
				else if (select == 'blockThick')
				{
					if (input_label.text == "1.37")
					{
						try_label.visible = false;
						correct_label.visible = true;
					}
					else
					{
						try_label.visible = true;
						warningIcon.visible = true;
						correct_label.visible = false;
					}
				}
				else if (select == 'beakerIntDia')
				{
					if (input_label.text == "3.93")
					{
						try_label.visible = false;
						correct_label.visible = true;
					}
					else
					{
						try_label.visible = true;
						warningIcon.visible = true;
						correct_label.visible = false;
					}
				}
				else if (select == 'beakerDepth')
				{
					if (input_label.text == "6.08")
					{
						try_label.visible = false;
						correct_label.visible = true;
					}
					else
					{
						try_label.visible = true;
						warningIcon.visible = true;
						correct_label.visible = false;
					}
				}
			}
			input_label.type = "dynamic";
			input_label.addEventListener(MouseEvent.MOUSE_DOWN,fn);
		}

		function fn(e:Event):void
		{
			input_label.type = "input";
		}

		function resetBtn_FN(e:Event):void
		{
			ExternalInterface.call("reset");
			//navigateToURL(new URLRequest("VernierCalipers.swf"),"_self");
		}

		public function update(e:Event):void
		{
			temperature = model.getTemperature();
			if (isNaN(temperature))
			{
				temperature = 20;
			}
			var x_diff = objStage.Exp_Content.vernier.moving.x - movingX;
			objStage.Exp_Content.vernier.tail.x = tailX + x_diff;
			objStage.Exp_Content.zoomMC.scale.x = scaleZoomX - x_diff;
		}
	}
}