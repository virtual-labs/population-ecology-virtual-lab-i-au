<!--
Developed under a Research grant from NMEICT, MHRD
by
Amrita CREATE (Center for Research in Advanced Technologies for Education),
VALUE (Virtual Amrita Laboratories Universalizing Education)
Amrita University, India 2009 - 2013
http://www.amrita.edu/create
-->


<ul>
<li><h1>Variables<span></span></h1>
<div class="varBox">
<div id="accordion" >

<a style="text-decoration:none;color: #626262; border:none" href="#" onclick="selectFN(this)" id="species1"><h1>species1</h1></a>
<div>
<p class="varTitle">Initial population:
<input type="text" class="tinyTxtArea"  name="IP1" id="IP1" value="100" onkeypress=" onlyNumbers2(event)" onchange="dotRestrict(this)"/></p>
<p class="varTitle">Rate of growth:
<input type="text" class="tinyTxtArea"  name="RG1" id="RG1" value="0.8" onkeypress=" onlyNumbers2(event)" onchange="dotRestrict(this)"/></p>
<p class="varTitle">Carrying capacity
<input type="text" class="tinyTxtArea"  name="CC1" id="CC1" value="10" onkeypress=" onlyNumbers2(event)" onchange="dotRestrict(this)"/></p>
<p class="varTitle">Theta value:
<input type="text" class="tinyTxtArea"  name="TV1" id="TV1" value="1.5" onkeypress=" onlyNumbers2(event)" onchange="dotRestrict(this)"/></p>
<p class="varTitle">Alpha value:
<input type="text" class="tinyTxtArea"  name="AV1" id="AV1" value="0.722" onkeypress=" onlyNumbers2(event)" onchange="dotRestrict(this)"/></p>
<p class="varTitle">Number of steps:
<input type="text" class="tinyTxtArea"  name="NS1" id="NS1" value="20" onkeypress=" onlyNumbers2(event)" onchange="dotRestrict(this)"/></p>
<p  class="varTitle">step size:
<input type="text" class="tinyTxtArea"  name="SS1" id="SS1" value="1" onkeypress="onlyNumbers2(event)" onchange="dotRestrict(this)"/></p>
</div>


<a style="text-decoration:none;color: #626262;"  href="#" onclick="selectFN(this)" id="Species2"><h1>Species2</h1></a>
<div>
<p class="varTitle">Initial population:
<input type="text" class="tinyTxtArea" onkeypress=" onlyNumbers2(event)" onchange="dotRestrict(this)" name="IP2" id="IP2" value="100" /></p>
<p class="varTitle">Rate of growth:
<input type="text" class="tinyTxtArea" onkeypress=" onlyNumbers2(event)" onchange="dotRestrict(this)" name="RG2" id="RG2" value="0.6" /></p>
<p class="varTitle">Carrying capacity
<input type="text" class="tinyTxtArea" onkeypress=" onlyNumbers2(event)" onchange="dotRestrict(this)" name="CC2" id="CC2" value="10" /></p>
<p class="varTitle">Theta value:
<input type="text" class="tinyTxtArea" onkeypress=" onlyNumbers2(event)" onchange="dotRestrict(this)" name="TV2" id="TV2" value="1.5" /></p>
<p class="varTitle">Alpha value:
<input type="text" class="tinyTxtArea" onkeypress=" onlyNumbers2(event)" onchange="dotRestrict(this)" name="AV2" id="AV2" value="0.724" /></p>
<p class="varTitle">Number of steps:
<input type="text" class="tinyTxtArea" onkeypress=" onlyNumbers2(event)" onchange="dotRestrict(this)" name="NS2" id="NS2" value="20" /></p>
<p class="varTitle">step size:
<input type="text" class="tinyTxtArea" onkeypress=" onlyNumbers2(event)" onchange="dotRestrict(this)" name="SS2" id="SS2" value="1" /></p>
</div>
</div>
</div>

</li>
<br>
<br>

<li><h1>Controls</h1>
<div class="varBox">
<br>

<p><input type="button" class="subButton" name="SR" value="Step run" onClick="stepRun()" id="SR"></p>
<p><input type="button" class="subButton" name="RI" value="Run iteration" onClick="runItration()" id="RI"></p>
<p><input type="button" class="subButton" name="Pause" value="Pause" onClick="playPause(this)" id="Pause" disabled="disabled"></p>
<p><input type="button" class="subButton" name="ReSet" value="Reset" onClick="window.location.reload()" id="ReSet"></p>


</div>
</li>

</ul>