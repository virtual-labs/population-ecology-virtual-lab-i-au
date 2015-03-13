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
<script src="<?php getSimPath(); ?>js/mouse_events.js" language="javascript"></script>

<!--graph heading on the top-->
<p id="top" style=" margin:0px; position:relative; display:block; height:15px; font-family:Verdana, Geneva, sans-serif; font-size:13px; color:#6f6f6f; ">Nicholson-Bailey Model</p>
<!--x axis label on the left-->
<p id="left" style=" margin:0px; position:relative; display:block; height:15px; left:-277px; top:230px; -webkit-transform: rotate(-90deg);-moz-transform: rotate(-90deg); font-family:Verdana, Geneva, sans-serif; font-size:13px; color:#6f6f6f; ">Population size</p>
<!--graph content displaying div-->
<div id="GraphArea" style="width:550px; height:445px; top:-10px; margin:0px 0px 0px 20px;"></div>
<!--y axis label at the bottom-->
<p id="bottom" style=" padding:0px; margin:-5px; display:block; height:15px; font-family:Verdana, Geneva, sans-serif; font-size:13px; color:#6f6f6f; ">Time (in years)</p>

<!--<script language="javascript">
window.onload=loadGraph();
</script>
-->


