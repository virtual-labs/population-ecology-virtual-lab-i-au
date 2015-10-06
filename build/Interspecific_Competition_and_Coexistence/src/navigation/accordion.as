package src.navigation{
	import flash.display.*;
	import flash.geom.*;
	import flash.events.*;
	import caurina.transitions.Tweener;
	
	public class accordion extends MovieClip{
		private var mywidth;
		private var myheight;
		private var navW;
		private var navH;
		private var panelN;
		private var panelW;
		private var panelH;
		private var panelWithBtnWidth;
		private var panelWithBtnHeight;
		public var currpanel:Number=0;
		private var vertical:Boolean;
		public static const EVENT_ON_CHANGE = "change";
		// first one is always open
		public function accordion($width:Number, $height:Number, panelNumber:Number=0, navWidth:Number=0,navHeight:Number=0,allignment:Boolean=false){
			vertical=allignment;
			mywidth  = $width;
			myheight = $height;
			panelN = panelNumber;
			navW = navWidth;
			navH = navHeight;
			//this.graphics.beginFill(0xFF0000);
			this.graphics.drawRect(0,0, mywidth, myheight);
			this.graphics.endFill();
			panelW = $width-panelNumber*navWidth;
			panelH = $height-panelNumber*navHeight;
			panelWithBtnWidth=panelW+navWidth;
			panelWithBtnHeight=panelH+navHeight;
			var mk:Sprite = new Sprite();
			mk.graphics.beginFill(0x999999);
			mk.graphics.drawRect(0,0, mywidth, myheight);
			mk.graphics.endFill();
			this.addChild(mk);
			this.mask = mk;
		}
		public function openPanel(pNumber:Number):void{
			var obj;
			var i;
			for(i=1;i<this.numChildren;i++){
				obj = this.getChildAt(i) as Sprite;
				obj.getChildByName("btn").addEventListener(MouseEvent.CLICK, handleOpenClick);
				obj.getChildByName("btn").buttonMode=true;
			}
			obj = this.getChildAt(pNumber) as Sprite;
			obj.getChildByName("btn").buttonMode=false;
			obj.getChildByName("btn").removeEventListener(MouseEvent.CLICK, handleOpenClick);
			for(i=pNumber+1; i<this.numChildren;i++){
				obj = this.getChildAt(i);
				////////////////////////
				if (!vertical)  Tweener.addTween(obj, {x:mywidth-(this.numChildren-i)*navW, time:1.0, transition:"easeOutCubic", rounded:true});
				else Tweener.addTween(obj, {y:myheight-(this.numChildren-i)*navH, time:1.0, transition:"easeOutCubic", rounded:true});
				////////////////////////
			}
			for(i=1; i<=pNumber;i++){
				obj = this.getChildAt(i);
				////////////////////////
				if (!vertical) Tweener.addTween(obj, {x:(i-1)*navW, time:1.0, transition:"easeOutCubic", rounded:true});
				else Tweener.addTween(obj, {y:(i-1)*navH, time:1.0, transition:"easeOutCubic", rounded:true});
				////////////////////////
			}
			currpanel=pNumber;
			dispatchEvent(new Event(EVENT_ON_CHANGE));
			
		}
		public function addPanel(btnBackground:MovieClip,contMovie:MovieClip){
			//trace(btnBackground)
			
			var pnl:Sprite = new Sprite();
			var color = 0xEFE7E4;
			pnl.graphics.beginFill(color);
			/////////////////
			if (!vertical) pnl.graphics.drawRect(0,0,panelWithBtnWidth,myheight);
			else pnl.graphics.drawRect(0,0,mywidth,panelWithBtnHeight);
			/////////////////
			pnl.graphics.endFill();
			var btn:MovieClip = getBtnBase();
			var msk:MovieClip = getBtnBase();
			pnl.addChild(btnBackground);
			pnl.addChild(btn);
			btn.addChild(msk);
			btn.mask = msk;
			var localcont = contMovie;
			pnl.addChild(localcont);
			
			/////////////////
			if (!vertical) localcont.x+=navW;
			else localcont.y+=navH;
			/////////////////
			var contmask:MovieClip = getContentBase();
			localcont.addChild(contmask);
			localcont.mask = contmask;
			this.addChild(pnl);
			/////////////////
			if (!vertical) pnl.x= (this.numChildren-2)*navW;
			else pnl.y= (this.numChildren-2)*navH;
			/////////////////
			btn.panelNumber = this.numChildren-1;
			btn.mouseChildren=false;
			btn.buttonMode=true;
			btn.name="btn";
			/*if(btnBackground =="[object channel]")
			{*/
			//trace(btnBackground.value)
			//}
		}
		public function getPanelContentsAt(i):MovieClip{
			var obj:Sprite = this.getChildAt(i) as Sprite;
			return obj.getChildAt(2) as MovieClip;
			//trace(this.getChildAt(i).getChildAt(0));
		}
		private function handleOpenClick(evt:Event){
			if(evt.target.panelNumber){
				openPanel(evt.target.panelNumber);
			}
		}
		public function t1(){
			trace("currpanel ====="+currpanel)
			return currpanel;
		}
		private function getBtnBase():MovieClip{
			var btn:MovieClip = new MovieClip();
			var color = Math.round(Math.random()*0xFFFFFF);
			btn.graphics.beginFill(color,0);
			/////////////////
			if (!vertical) btn.graphics.drawRect(0,0,navW,myheight);
			else btn.graphics.drawRect(0,0,mywidth,navH);
			/////////////////
			btn.graphics.endFill();
			return btn;
		} 
		private function getContentBase():MovieClip{
			var cont:MovieClip = new MovieClip();
			var color = Math.round(Math.random()*0xFFFFFF);
			cont.graphics.beginFill(color,0.5);
			/////////////////
			if (!vertical) cont.graphics.drawRect(0,0,panelW,myheight);
			else cont.graphics.drawRect(0,0,mywidth,panelH);
			/////////////////
			cont.graphics.endFill();
			return cont;
		}
	}
}