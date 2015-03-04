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
<br />
<!--Handling of worm(hw):-->
<p class="varTitle">Handling of worm(hw):  <span id="HWrange">1</span></p>
<input class="rangeSlider HW" type="range" min="1" max="100" id="HW" step="1" name="HW" value="1"  onchange="showHWvalue(this.value)" />
<div class="rangeVals">
<span class="minrange">1</span><span class="maxrange">100</span>
<div class="clear"></div>
</div>

<!--Abundance of worm(aw) Starting value:-->
<p class="varTitle">Abundance of worm(aw) Starting value:  0.00<span id="AWrange">5</span></p>
<input class="rangeSlider AW" type="range" min="1" max="9" id="AW" step="1" name="AW" value="5"  onchange="showAWvalue(this.value)" />
<div class="rangeVals">
<span class="minrange">0.001</span><span class="maxrange">0.009</span>
<div class="clear"></div>
</div>
<!--Fractions:-->
<p class="varTitle">Fractions:  0.00<span id="Frcrange">5</span></p>
<input class="rangeSlider FRC" type="range" min="1" max="9" id="FRC" step="1" name="FRC" value="5"  onchange="showFrcvalue(this.value)" />
<div class="rangeVals">
<span class="minrange">0.001</span><span class="maxrange">0.009</span>
<div class="clear"></div>
</div>
<!--Ending value:-->
<p class="varTitle">Ending value:  <span id="Endrange">0.05</span></p>
<input class="rangeSlider END" type="range" min="0.01" max="0.09" id="END" step="0.01" name="END" value="0.05"  onchange="showEndvalue(this.value)" />
<div class="rangeVals">
<span class="minrange">0.01</span><span class="maxrange">0.09</span>
<div class="clear"></div>
</div>
<!--Handling of Beetle:-->
<p class="varTitle">Handling of Beetle:  <span id="HBrange">60</span></p>
<input class="rangeSlider HB" type="range" min="1" max="100" id="HB" step="1" name="HB" value="60"  onchange="showHBvalue(this.value)" />
<div class="rangeVals">
<span class="minrange">1</span><span class="maxrange">100</span>
<div class="clear"></div>
</div>
<!--Abundance of Beetle(ab):-->
 <p class="varTitle" >Abundance of Beetle(ab):  </p>
  <p class="varTitle" >
 <input class="wideTxtArea" type="text" id="AB" name="AB" value="0.0025" readonly="readonly" > </p>

</div>
</li><br /><br />
<li><h1>Controls<span></span></h1>
<div class="varBox">

<br />
<p><input type="button" class="subButton" name="runBtn" value="Run" onClick="runFN()" id="runBtn"></p>
<p><input type="button" class="subButton" name="resetbtn" value="Reset" onClick="resetFN();window.location.reload()" id="resetbtn"></p>

</div>
</li>

</ul>