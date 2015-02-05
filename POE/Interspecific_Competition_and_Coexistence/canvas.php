<!--
Developed under a Research grant from NMEICT, MHRD
by
Amrita CREATE (Center for Research in Advanced Technologies for Education),
VALUE (Virtual Amrita Laboratories Universalizing Education)
Amrita University, India 2009 - 2013
http://www.amrita.edu/create
-->


<script type="text/javascript" language="javascript">
	var simPath="<?php getSimPath(); ?>";
</script>
<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols.js"></script>

<div id="statLabel">
<p class="Label" id="species1"></p>
<p class="Label" id="species2"></p>
</div>
<!--label text display in the top-->
<p id="top" style=" margin:0px; position:relative;  font-family:Verdana, Geneva, sans-serif; font-size:13px; color:#6f6f6f; "></p>

<!--label text display in the left-->
<p id="left" style=" margin:0px; position:relative; left:-277px; top:230px; -webkit-transform: rotate(-90deg);-moz-transform: rotate(-90deg); font-family:Verdana, Geneva, sans-serif; font-size:13px; color:#6f6f6f; "></p>
<canvas id="speciesCanvas" ></canvas>
<!--graph content displaying div-->
<div id="tinyGraphArea">
</div>
<p id="bottom" style="background-color:#FFF;  padding:0px; margin:0px; font-family:Verdana, Geneva, sans-serif; font-size:13px; color:#6f6f6f; "></p>
<div id="triButton" >
<div id="ST" style="background:url(<?php getSimPath(); ?>images/Stati.svg) top left no-repeat;" onClick="statClick()">Statistics</div>
<div id="DP" style="background:url(<?php getSimPath(); ?>images/graphPlot.svg) top left no-repeat;" onClick="ShowGph()">Data plots</div>
<div id="WS" style="background:url(<?php getSimPath(); ?>images/workSheet.svg) top left no-repeat;">Work sheet</div>
</div>

<!--label text display in the bottom-->

<script language="javascript">
window.onload=Load();
</script>