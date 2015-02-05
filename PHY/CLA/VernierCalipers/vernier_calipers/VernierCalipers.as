package vernier_calipers
{
	public class VernierCalipers
	{
		import vernier_calipers.view.*;
		import vernier_calipers.model.*;
		import vernier_calipers.controller.*;
		import flash.display.MovieClip;
		
		private var view_obj:VernierCalipersView;
		private var model_obj:VernierCalipersModel;
		private var controller_obj:VernierCalipersController;
		
		public function VernierCalipers(holder:Object, positionX:Number, positionY:Number,loadFont:Object,FontName:String,fullmovie:MovieClip,lan:String)
		{
			model_obj=new VernierCalipersModel();
			controller_obj=new VernierCalipersController(model_obj);
			view_obj=new VernierCalipersView(model_obj, controller_obj, holder, positionX, positionY,loadFont,FontName,fullmovie,lan);
			
			model_obj.addEventListener(VernierCalipersModel.UPDATE, view_obj.update);
		}
	}
}