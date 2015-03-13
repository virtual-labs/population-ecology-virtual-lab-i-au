<!--
Developed under a Research grant from NMEICT, MHRD
by
Amrita CREATE (Center for Research in Advanced Technologies for Education),
VALUE (Virtual Amrita Laboratories Universalizing Education)
Amrita University, India 2009 - 2013
http://www.amrita.edu/create
-->

<ul>
<!--top panel-->
<li><h1>Variables<span></span></h1>

<div id="tooltip2" style="background:#FFE; height:auto; width:auto; border: solid thin #000; position:absolute; padding:3px; font-family:Arial, Helvetica, sans-serif; font-size:12; display:none"></div>

	<div id="tabContainer">
    <div class="tabs">
      <ol class="tabbed" >
        <li id="tabHeader_1" >Nicholson-Bailey</li>
        <li id="tabHeader_2" >Host Density</li>
        <li id="tabHeader_3" >Negative Binomial</li>
        <li id="tabHeader_4" >Comparison</li>
      </ol>
    </div>
    
    <div class="tabscontent" style="height:340px;">
      <div class="tabpage" id="tabpage_1">
      <!--contents in the first tab-->
        <br/><br/><p class="tabItemTitle" id="Ht1">Initial population of host (Ht) : <input type="text" class="inputTxtArea" id="HtVal1" name="HtVal1" value="25" onkeydown="return validate(event)" /></p><br/><!-- onkeyup="this.value = this.value.replace(/[^\d]/, '');"-->
		<p class="tabItemTitle" id="Pt1">Initial population of female parasitoids (Pt) : <input type="text" class="inputTxtArea" id="PtVal1" name="PtVal1" value="10" onkeydown="return validate(event)"  /></p><br/>
		<p class="tabItemTitle" id="Rm1">Reproductive rate of host without parasitism (Rm) : <input type="text" class="inputTxtArea" id="RmVal1" name="RmVal1" value="1.5" onkeydown="return validate(event)"  /></p><br/>
        <p class="tabItemTitle" id="a1">Searching efficiency of parasitoid (a) : <input type="text" class="inputTxtArea" id="aVal1" name="aVal1" value="0.023" onkeydown="return validate(event)" /></p><br/>
		<p class="tabItemTitle" id="c1">Avg no. of female parasitoids produced from each host (c) : <input type="text" class="inputTxtArea" id="cVal1" name="cVal1" value="2" onkeydown="return validate(event)" /></p>
      </div>
      
      <div class="tabpage" id="tabpage_2">
      <!--contents in the second tab-->
        <p class="tabItemTitle" id="Ht2">Initial population of host (Ht) : <input type="text" class="inputTxtArea" id="HtVal2" name="HtVal2" value="2000" onkeydown='return validate(event)'  /></p>
		<p class="tabItemTitle" id="T2">Parasitoid introduction time (T) : <input type="text" class="inputTxtArea" id="TVal2" name="TVal2" value="20" onkeydown='return validate(event)'  /></p>
        <p class="tabItemTitle" id="Pt2">No. of parasitoids introduced (Pt) : <br/>
          <input name="PtVal2" type="text" class="inputTxtArea" id="PtVal2" onkeydown="return validate(event)" value="800" />
        </p>
	    <p class="tabItemTitle" id="Rm2">Reproductive rate of host without parasitism (R) : <input type="text" class="inputTxtArea" id="RmVal2" name="RmVal2" value="3" onkeydown='return validate(event)'  /></p>
        <p class="tabItemTitle" id="a2">Searching efficiency of parasitoid (a) : <input type="text" class="inputTxtArea" id="aVal2" name="aVal2" value="0.01" onkeydown='return validate(event)' /></p> 
		<p class="tabItemTitle" id="c2">Avg no. of female parasitoids produced from each host (c) : <input type="text" class="inputTxtArea" id="cVal2" name="cVal2" value="1" onkeydown='return validate(event)' /></p>
        <p class="tabItemTitle" id="k2">Carrying capacity of host (K) : <input type="text" class="inputTxtArea" id="kVal2" name="kVal2" value="8000" onkeydown='return validate(event)' /></p>
      </div>
      
      <div class="tabpage" id="tabpage_3">
      <!--contents in the third tab-->
        <br/><br/><p class="tabItemTitle" id="Ht3">Initial population of host (Ht) : <input type="text" class="inputTxtArea" id="HtVal3" name="HtVal3" value="25" onkeydown='return validate(event)'  /></p>
		<p class="tabItemTitle" id="Pt3">Initial population of female parasitoids (Pt) : <input type="text" class="inputTxtArea" id="PtVal3" name="PtVal3" value="10" onkeydown='return validate(event)'  /></p>
		<p class="tabItemTitle" id="Rm3">Reproductive rate of host without parasitism (Rm) : <input type="text" class="inputTxtArea" id="RmVal3" name="RmVal3" value="1.5" onkeydown='return validate(event)'  /></p>
        <p class="tabItemTitle" id="a3">Searching efficiency of parasitoid (a) : <input type="text" class="inputTxtArea" id="aVal3" name="aVal3" value="0.023" onkeydown='return validate(event)' /></p> 
		<p class="tabItemTitle" id="c3">Avg no. of female parasitoids produced from each host (c) : <input type="text" class="inputTxtArea" id="cVal3" name="cVal3" value="2" onkeydown='return validate(event)' /></p>
        <p class="tabItemTitle" id="k3">Clumping factor (k) : <input type="text" class="inputTxtArea" id="kVal3" name="kVal3" value="1.3" onkeydown='return validate(event)' /></p>
      </div>
      
      <div class="tabpage" id="tabpage_4">
      <!--contents in the fourth tab-->
        <br/><br/><p class="tabItemTitle" id="Pt4">Initial population of female parasitoids (Pt) : <input type="text" class="inputTxtArea" id="PtVal4" name="PtVal4" value="10" onkeydown='return validate(event)'  /></p><br/>
        <p class="tabItemTitle" id="a4">Searching efficiency of parasitoid (a) : <input type="text" class="inputTxtArea" id="aVal4" name="aVal4" value="0.001" onkeydown='return validate(event)' /></p><br/> 
        <p class="tabItemTitle" id="k4">Clumping factor (k) : <input type="text" class="inputTxtArea" id="kVal4" name="kVal4" value="0.5" onkeydown='return validate(event)' /></p>
      
      </div>
  </div>
  </div>
</li>

<!--bottom panel-->
<li><h1>Controls<span></span></h1>
	<div id="bottomPanel" style="padding:10px 8px;"><input type="button" class="submitBtn" id="plot" name="plot" value="Plot Graph" onclick="plotBtnClick()" />
	
    <input type="button" class="submitBtn" id="reset" name="reset" value="Reset" onclick="resetBtnClick()" /><!--window.location.reload()-->
    <div class="clr"></div>
    </div>

</ul>

