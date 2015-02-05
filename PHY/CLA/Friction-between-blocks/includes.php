<link  href="<?php getSimCss('simstyle.css'); ?>" rel="stylesheet" type="text/css" />
<script language="javascript" type="text/javascript" src="./js/jquery/ui/1.10.2/jquery-ui-1.10.2.custom.min.js"></script>
<script language="javascript" type="text/javascript" src="<?php getSimPath()?>js/simcontrols.js"></script>
<script type="text/javascript" language="javascript" src="./js/touchconvert.js"></script>

<?php 
	$language=$_GET['elink_lan'];
	$locale = array("en-IN","hi-IN","mr-IN");
	if (!in_array($language, $locale)){
		$language = $locale[0];
	}
?>
<link rel="gettext" type="application/x-po" href='<?php getSimPath(); ?>locale/<?php echo $language ?>/messages.po' />  
<script type="text/javascript" src="<?php getSimPath(); ?>js/Gettext.js"></script>