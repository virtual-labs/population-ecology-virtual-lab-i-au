package vernier_calipers.model
{
	import vernier_calipers.*;
	import vernier_calipers.model.*;
	import vernier_calipers.view.*;
	import vernier_calipers.controller.*;
	import flash.events.EventDispatcher;
	import flash.events.Event;

	public class VernierCalipersModel extends EventDispatcher
	{
		public static const UPDATE:String = 'update';
		var position;
		var height;
		var g;
		g = 9.8;
		var density;
		density = 1000;
		var LC = 0.001;
		var temperature;
		var radius;
		var rise;
		var tension;

		public function VernierCalipersModel()
		{
		}

		public function setTemperature(temperature:Number):void
		{
			this.temperature = temperature;
			setTension(temperature);
			notifyObservers();
		}
		public function getTemperature():Number
		{
			return temperature;
		}

		public function setPosition(position:Number):void
		{
			this.position = position / 100;
			notifyObservers();
		}
		public function getPosition():Number
		{
			return position;
		}

		public function setRadius(diameter:Number):void
		{
			this.radius = diameter / 2000;
			notifyObservers();
		}
		public function getRadius():Number
		{
			return radius;
		}

		public function setHeight(height:Number):void
		{
			this.height = height / 100;
			notifyObservers();
		}
		public function getHeight():Number
		{
			return height;
		}

		public function setTension(temperature:Number)
		{
			if (temperature == 20)
			{
				this.tension = 0.073;
			}
			else if (temperature==25)
			{
				this.tension = 0.07197;
			}
			else if (temperature==50)
			{
				this.tension = 0.06791;
			}
			notifyObservers();
		}
		public function getTension():Number
		{
			return tension;
		}

		public function setMSR(MSR:Number)
		{
			this.MSR = MSR;
			notifyObservers();
		}
		public function getMSR():Number
		{
			return MSR;
		}

		public function setVSR(VSR:Number)
		{
			this.VSR = VSR;
			notifyObservers();
		}
		public function getVSR():Number
		{
			return VSR;
		}

		public function calculateR1(MSR:Number,VSR:Number):Number
		{
			R1=MSR+(VSR*LC);
			return R1;
		}

		public function calculateR2(MSR:Number,VSR:Number):Number
		{
			R2=MSR+(VSR*LC);
			return R2;
		}

		public function calculateRise(tension:Number,radius:Number):Number
		{
			//rise=R1-R2;
			rise=((2*tension)/(radius*1000*9.8))-radius/3;
			return rise;
		}

		public function calculateTension(rise:Number,radius:Number):Number
		{
			tension=(rise*radius*density*g)/2;
			return tension;
		}

		function notifyObservers():void
		{
			dispatchEvent(new Event(VernierCalipersModel.UPDATE));
		}
	}
}

