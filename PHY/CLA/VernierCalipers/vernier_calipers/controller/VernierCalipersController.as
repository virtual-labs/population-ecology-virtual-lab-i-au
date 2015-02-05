package vernier_calipers.controller
{
	import vernier_calipers.*;
	import vernier_calipers.model.*;
	import vernier_calipers.view.*;
	import vernier_calipers.controller.*;
	import flash.events.Event;
	import flash.events.MouseEvent;

	public class VernierCalipersController
	{
		var model:VernierCalipersModel;
		var position;
		var height;
		var radius;

		public function VernierCalipersController(model:VernierCalipersModel)
		{
			this.model = model;
		}

		public function temperatureCombo_FN(e:Event):void
		{
			if (e == null)
			{
				model.setTemperature(20);
			}
			else
			{
				if (e.target.selectedIndex == 0)
				{
					model.setTemperature(20);
				}
				else if (e.target.selectedIndex==1)
				{
					model.setTemperature(25);
				}
				else if (e.target.selectedIndex==2)
				{
					model.setTemperature(50);
				}
			}
		}

		public function positionSlider_FN(e:Event):void
		{
			if (e == null)
			{
				model.setPosition(0);
			}
			else
			{
				position = e.target.value;
				model.setPosition(position);
			}
		}

		public function heightSlider_FN(e:Event):void
		{
			if (e == null)
			{
				model.setHeight(3);
			}
			else
			{
				height = e.target.value;
				model.setHeight(height);
			}
		}

		public function diameterSlider_FN(e:Event):void
		{
			if (e == null)
			{
				model.setRadius(1);
			}
			else
			{
				radius = e.target.value;
				model.setRadius(radius);
			}
		}
	}
}

