package vernier_calipers.view
{
	import vernier_calipers.view.*;
	import flash.display.MovieClip;
	import flash.text.TextField;
	import flash.text.TextFormat;
	import fl.controls.ComboBox;
	import fl.controls.Button;
	import fl.controls.CheckBox;
	import fl.controls.RadioButton;

	public class VernierCalipersMenu extends MovieClip
	{
				//var Disabled_Font_Format:TextFormat = new TextFormat  ;

		
		
	
		public function VernierCalipersMenu()
		{
		}

		public function createComboBox(cbLabels:Array,cbName:String,posX:Number,posY:Number,cbWidth:Number,cbRows:Number,format:TextFormat):ComboBox
		{
			var cb:ComboBox = new ComboBox();
			for (var j=0; j<cbLabels.length; j++)
			{
				cb.addItem({label:cbLabels[j]});
			}
			cb.name = cbName;
			cb.x = posX;
			cb.y = posY;
			cb.width = cbWidth;
			cb.setSize(cb.width,25);
			cb.rowCount=cbRows;
			cb.textField.setStyle('textFormat',format);
			cb.textField.setStyle('embedFonts',true);
			return cb;
		}

		public function createButton(btnLabel:String,posX:Number,posY:Number,txtWidth:Number,isVisible:Boolean,isEnabled:Boolean,format:TextFormat):Button
		{
			var btn:Button = new Button();
			btn.label = btnLabel;
			btn.x = posX;
			btn.y = posY;
			btn.width = txtWidth;
			btn.visible = isVisible;
			btn.enabled = isEnabled;
			btn.height = 25;
			btn.setStyle('textFormat',format);
			btn.setStyle('embedFonts',true);
			return btn;
		}

		public function createTextField(txtLabel:String,isSelectable:Boolean,posX:Number,posY:Number,txtWidth:Number,format:TextFormat):TextField
		{
			var txtField:TextField = new TextField();
			txtField.text = txtLabel;
			txtField.selectable = isSelectable;
			txtField.x = posX;
			txtField.y = posY;
			txtField.width = txtWidth;
			txtField.height = 20;
			txtField.setTextFormat(format);
			txtField.embedFonts=true;
			return txtField;
		}

		public function createCheckBox(chkLabel:String,chkName:String,posX:Number,posY:Number,chkWidth:Number,isSelected:Boolean,format:TextFormat):CheckBox
		{
			var chBox:CheckBox = new CheckBox();
			chBox.label = chkLabel;
			chBox.name = chkName;
			chBox.x = posX;
			chBox.y = posY;
			chBox.setSize(chkWidth,25);
			chBox.selected = isSelected;
			chBox.setStyle('textFormat',format);
			chBox.setStyle('embedFonts',true);
			return chBox;
		}
		
		public function createRadioButton(rbLabel:String,rbName:String,posX:Number,posY:Number,rbWidth:Number,isSelected:Boolean,format:TextFormat):RadioButton
		{
			var rb:RadioButton = new RadioButton();
			rb.label = rbLabel;
			rb.name = rbName;
			rb.x = posX;
			rb.y = posY;
			rb.setSize(rbWidth,25);
			rb.selected = isSelected;
			rb.setStyle('textFormat',format);
			rb.setStyle('embedFonts',true);
			
			
			return rb;
		}
		
	}
}

