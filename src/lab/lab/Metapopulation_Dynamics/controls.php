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
<select id="dropBox" class="dropdownBox" onchange="displayResult()">
<option>Levins Model</option>
<option>Metapopulation Stability</option>
</select><br />  <br />  <br />  
<div id="LM">
<p class="labelTitle">Total number of patches present in the habitat(h): 
<input type="text" class="tinyTxtArea" name="h" id="h" value="10" onkeypress=" onlyNumbers(event)"/></p> 

<p class="labelTitle">Rate at which occupied patch produce colonies(c): 
<input type="text" class="tinyTxtArea" name="c" id="c" value="0.1" onkeypress=" onlyNumbers2(event)" onchange="dotRestrict(this)"/></p> 

<p class="labelTitle">Initial number of occupied patches(p0): 
<input type="text" class="tinyTxtArea" name="ip" id="ip" value="1" onkeypress=" onlyNumbers(event)"/></p> 

<p class="labelTitle">Rate at which occupied patch goes extinct(e): 
<input type="text" class="tinyTxtArea" name="e" id="e" value="0.04" onkeypress=" onlyNumbers2(event)" onchange="dotRestrict(this)"/></p> 

<p class="labelTitle">Number of years(t): 
<input type="text" class="tinyTxtArea" name="t" id="t" value="10" onkeypress="onlyNumbers(event)"/></p> 
</div>


<div id="MS" style="display:none">
<p class="labelTitle">Initial size of population(n0): 
<input type="text" class="tinyTxtArea" name="n" id="n" value="50" onkeypress=" onlyNumbers(event)"/></p>

<p class="labelTitle">Independent: 
<input type="text" class="tinyTxtArea" name="idp" id="idp" value="1" onkeypress=" onlyNumbers(event)"/></p>

<p class="labelTitle">Dispersal: 
<input type="text" class="tinyTxtArea" name="disp" id="disp" value="0.25" onkeypress=" onlyNumbers2(event)" onchange="dotRestrict(this)"/></p>

<p class="labelTitle">Population growth rate in good years(rgood): 
<input type="text" class="tinyTxtArea" name="rgood" id="rgood" value="1.25" onkeypress=" onlyNumbers2(event)" onchange="dotRestrict(this)"/></p>

<p class="labelTitle">Population growth rate in bad years(rbad): 
<input type="text" class="tinyTxtArea"  name="rbad" id="rbad" value="0.75" onkeypress=" onlyNumbers2(event)" onchange="dotRestrict(this)"/></p> 

<p class="labelTitle">Number of time steps(runlen): 
<input type="text" class="tinyTxtArea" name="runlen" id="runlen" value="10" onkeypress=" onlyNumbers(event)"/></p>

</div>
  
</div>     
</li>
<li><h1>Controls<span></span></h1>
<br /> 
<div class="varBox">
<p><input type="button" class="subButton" name="SR" value="Step run" onClick="stepRun()" id="SR"></p>
<p><input type="button" class="subButton" name="RI" value="Run iteration" onClick="runItration()" id="RI"></p>
<p><input type="button" class="subButton" name="Pause" value="Pause" onClick="playPause(this)" id="Pause" disabled="disabled"></p>
<p><input type="button" class="subButton" name="Rt" value="Reset" id="ReSet" onclick="resetFN();window.location.reload()" ></p>
</div>
</li>
</ul>