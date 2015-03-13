<!--
Developed under a Research grant from NMEICT, MHRD
by
Amrita CREATE (Center for Research in Advanced Technologies for Education),
VALUE (Virtual Amrita Laboratories Universalizing Education)
Amrita University, India 2009 - 2013
http://www.amrita.edu/create
-->


<div id="morevar" class="MoreVar"  style=" position:absolute;visibility:hidden; margin:0px auto; left:50%; " >
<!--ew(in calorie):-->
<p class="varTitle">ew(in calorie):<span id="EWrange">0.03</span></p>
<input class="rangeSlider" type="range" min="0.01" max="2" id="EW" step="0.01" name="EW" value="0.03"  onchange="showEWvalue(this.value)" onmouseover="showLabel(event)" onmouseout="hideLabel(event)" />
<div class="rangeVals">
<span class="minrange">0.1</span><span class="maxrange">2</span>
<div class="clear"></div>
</div>

<!--tw(in seconds):-->
<p class="varTitle">tw(in seconds):<span id="TWrange">0.03</span></p>
<input class="rangeSlider" type="range" min="0.01" max="1" id="TW" step="0.01" name="TW" value="0.29"  onchange="showTWvalue(this.value)" onmouseover="showLabel(event)" onmouseout="hideLabel(event)" />
<div class="rangeVals">
<span class="minrange">0.01</span><span class="maxrange">1</span>
<div class="clear"></div>
</div>

<!--ef(in calorie):-->
<p class="varTitle">ef(in calorie):<span id="EFrange">0.02</span></p>
<input class="rangeSlider" type="range" min="0.01" max="1" id="EF" step="0.01" name="EF" value="0.02"  onchange="showEFvalue(this.value)" onmouseover="showLabel(event)" onmouseout="hideLabel(event)" />
<div class="rangeVals">
<span class="minrange">0.01</span><span class="maxrange">1</span>
<div class="clear"></div>
</div>


<!--tf(in seconds):-->
<p class="varTitle">tf(in seconds):<span id="TFrange">15</span></p>
<input class="rangeSlider" type="range" min="1" max="50" id="TF" step="1" name="TF" value="15"  onchange="showTFvalue(this.value)" onmouseover="showLabel(event)" onmouseout="hideLabel(event)" />
<div class="rangeVals">
<span class="minrange">1</span><span class="maxrange">50</span>
<div class="clear"></div>
</div>

<!--ee(in calorie):-->
<p class="varTitle">ee(in calorie):<span id="EErange">0.01</span></p>
<input class="rangeSlider" type="range" min="0.01" max="1" id="EE" step="0.01" name="EE" value="0.01"  onchange="showEEvalue(this.value)" onmouseover="showLabel(event)" onmouseout="hideLabel(event)" />
<div class="rangeVals">
<span class="minrange">0.01</span><span class="maxrange">1</span>
<div class="clear"></div>
</div>

<!--te(in seconds):-->
<p class="varTitle">te(in seconds):<span id="TErange">9</span></p>
<input class="rangeSlider" type="range" min="1" max="30" id="TE" step="1" name="TE" value="9"  onchange="showTEvalue(this.value)" onmouseover="showLabel(event)" onmouseout="hideLabel(event)" />
<div class="rangeVals">
<span class="minrange">1</span><span class="maxrange">30</span>
<div class="clear"></div>
</div>

<!--Position(n):-->
<p class="varTitle">Position(n):<span id="POSrange">10</span></p>
<input class="rangeSlider" type="range" min="1" max="20" id="POS" step="1" name="POS" value="10"  onchange="showPOSvalue(this.value)" onmouseover="showLabel(event)" onmouseout="hideLabel(event)" />
<div class="rangeVals">
<span class="minrange">1</span><span class="maxrange">20</span>
<div class="clear"></div>
<p><input type="button" class="subButton" name="close" value="Close" onclick="Close()"  id="close"></p>
</div>
</div>

<ul>
<li><h1>Variables<span></span></h1>
<div class="varBox">
<p class="varTitle" >Num of cal <input class="wideTxtArea" type="text" id="NOC" name="NOC" value="20" onkeypress=" onlyNumbers(event)" > </p>
<p class="varTitle" >Y-intrecept<input class="wideTxtArea" type="text" id="YI" name="YI" value="1.7" onkeypress=" onlyNumbers2(event)" onchange="dotRestrict(this)"> </p>

<!--Posotion of flowers   -->       						
<p class="varTitle">Posotion of flowers:<span id="POFrange">10</span></p>
<input class="rangeSlider" type="range" min="1" max="20" id="POF" name="POF" value="10"  onchange="showPOFvalue(this.value)" onmouseover="showLabel(event)" onmouseout="hideLabel(event)" />
<div class="rangeVals">
<span class="minrange">1</span><span class="maxrange">20</span>
<div class="clear"></div>
</div>

<!--Necter Delay(p)   -->       						
<p class="varTitle">Necter Delay(p):<span id="NDrange">0.4</span></p>
<input class="rangeSlider" type="range" min="0" max="1" id="ND" step="0.1" name="ND" value="0.4"  onchange="showNDvalue(this.value)" onmouseover="showLabel(event)" onmouseout="hideLabel(event)" />
<div class="rangeVals">
<span class="minrange">0</span><span class="maxrange">1</span>
<div class="clear"></div>
</div>

<!--eb(in calorie):   -->       						
<p class="varTitle">eb(in calorie):<span id="EBrange">0.1</span></p>
<input class="rangeSlider" type="range" min="0.1" max="2" id="EB" step="0.1" name="EB" value="0.1"  onchange="showEBvalue(this.value)" onmouseover="showLabel(event)" onmouseout="hideLabel(event)" />
<div class="rangeVals">
<span class="minrange">0.1</span><span class="maxrange">2</span>
<div class="clear"></div>
</div>


<!--tb(in seconds)-->
<p class="varTitle">tb(in seconds):<span id="TBrange">5</span></p>
<input class="rangeSlider" type="range" min="1" max="30" id="TB" step="1" name="TB" value="5"  onchange="showTBvalue(this.value)"  onmouseover="showLabel(event)" onmouseout="hideLabel(event)"/>
<div class="rangeVals">
<span class="minrange">0</span><span class="maxrange">30</span>
<div class="clear"></div>
</div>

<p><input type="button" class="subButton" name="More" id="More" onclick="popup()"  style=" margin:5px 0px 5px 0px; width:150px; " value="more variables"></p>						
</div>

</li>
<li><h1>Controls<span></span></h1>
<div class="varBox">
<br />
<p><input type="button" class="subButton" name="PNC" value="Plot Net Calorie" onClick="draw_caloriegraph()" id="PNC"></p>
<p><input type="button" class="subButton" name="Re_set" value="Plot Total Energy" onClick="draw_energygraph()" id="PTE"></p>
<p><input type="button" class="subButton" name="Re_set" value="Reset" onClick=" Reset();window.location.reload()" id="Re_set"></p>
</div>
</li>
<div id="tooltip2" style="background:#FFE; height:auto; width:auto; border: solid thin #000; position:absolute; padding:3px; font-family:Arial, Helvetica, sans-serif; font-size:12px; visibility:hidden;" ></div>
 
</ul>