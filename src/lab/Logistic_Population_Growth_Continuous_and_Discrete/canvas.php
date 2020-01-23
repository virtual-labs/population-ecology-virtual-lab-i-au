  <!--
  *Developed by Amrita CREATE (Center for Research in Advanced Technologies for Education),
  *VALUE (Virtual Amrita Laboratories Universalizing Education)
  *Amrita University, India
  *http://www.amrita.edu/create
  *author:Anitha;
  *Date of modified: 13-05-2015
  -->


<script type="text/javascript" language="javascript">
	var simPath="<?php getSimPath(); ?>";
</script>
<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols.js"></script>

<div id="statLabel">
<p class="Label" id="species1"></p>
<p class="Label" id="species2"></p>
<p class="Label" id="species3"></p>
</div>

<div id="workSheet" style="display:none;">
<p class="Label" id="workSheet1"></p>
<p class="Label" id="workSheet2"></p><br>
<div id="workParagraph">
	<p class="Label" id="workSheet3">At Time: 
	<input type='text' class='textField' id='time' style='float:right'/>
	<p class="Label" id="workSheet4"></p>
	<p class="Label" id="workSheet5"></p>
	<p class="Label" id="workSheet6"></p>
</div>
</div>

<canvas id="speciesCanvas"></canvas>
<!--graph content displaying div-->
<div id="tinyGraphArea">
</div>