<?php
$simName="Vernier Calipers";
?>

<div class="g594 canvasHolder"> 
    <div id="canvasBox">
<?php
include('canvas.php');
?>
</div>
</div>

<div id="menu" class="g198 controlHolder">
<div class="nano has-scrollbar">
<?php
include('controls.php');
?>
</div>
</div>
<script type="text/javascript">
 var expTitle="<?php echo $simName; ?>";
 document.getElementById("expName").style.size="11px";
 document.getElementById("expName").innerHTML=expTitle;
 
</script>