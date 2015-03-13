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


<!--Position along gradient(x) starting value   -->       
						
<p class="varTitle">Position along gradient(x) starting value:<span id="PGSrange">1</span></p>
<input class="rangeSlider" type="range" min="1" max="500" id="PGS" name="PGS" value="1" step="10"  onchange="showPGSvalue(this.value)" />
<div class="rangeVals">
<span class="minrange">1</span><span class="maxrange">500</span>
<div class="clear"></div>
</div>

<!--Fraction   -->       						
<p class="varTitle">Fraction:<span id="Frcrange">10</span></p>
<input class="rangeSlider" type="range" min="10" max="100" id="Frc" step="10" name="Frc" value="10"  onchange="showFrcvalue(this.value)" />
<div class="rangeVals">
<span class="minrange">10</span><span class="maxrange">100</span>
<div class="clear"></div>
</div>

<!--Ending value   -->       						
<p class="varTitle">Ending value:<span id="Endrange">1000</span></p>
<input class="rangeSlider" type="range" min="500" max="1000" id="End" step="10" name="End" value="1000"  onchange="showEndvalue(this.value)" />
<div class="rangeVals">
<span class="minrange">500</span><span class="maxrange">1000</span>
<div class="clear"></div>
</div>

<!--abh of sp1   -->       						
<p class="varTitle">abh of sp1:&nbsp;<span id="abhsrange">0.8</span></p>
<input class="rangeSlider" type="range" min="0.1" max="0.9" id="abh" step="0.1" name="abh" value="0.8"  onchange="showabhsvalue(this.value)" />
<div class="rangeVals">
<span class="minrange">0.1</span><span class="maxrange">0.9</span>
<div class="clear"></div>
</div>

<!--ahb of sp2   -->       						
<p class="varTitle">ahb of sp2:&nbsp;<span id="ahbsrange">0.6</span></p>
<input class="rangeSlider" type="range" min="0.1" max="0.9" id="ahb" step="0.1" name="ahb" value="0.6"  onchange="showahbsvalue(this.value)" />
<div class="rangeVals">
<span class="minrange">0.1</span><span class="maxrange">0.9</span>
<div class="clear"></div>
</div>
<br>
</div>
</li>
<li><h1>Controls<span></span></h1>
<div class="varBox">
<br>
<p><input type="button" class="subButton" name="PCC" value="Plot carrying capacity" onClick="plotCapacity()" id="PCC"></p>
<p><input type="button" class="subButton" name="PD" value="Plot Density" onClick="plotDensity()" id="PD"></p>
<p><input type="button" class="subButton" name="PEB" value="Plot Eastern border" onClick="PlotEastern()" id="PEB"></p>
<p><input type="button" class="subButton" name="PWB" value="Plot western border" onClick="PlotWestern()" id="PWB"></p>
<p><input type="button" class="subButton" name="Re_set" value="Reset" onClick="Reset();window.location.reload()" id="Re_set"></p>
</div>
</li>

</ul>