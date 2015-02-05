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
<div id="tabContainer">
    <div class="tabs">
          <ol class="tabbed">
                <li id="tabHeader_1" ><div id="tab1">Reciprocal<br />Proportion</div></li>
                <li id="tabHeader_2" ><div id="tab2">Average<br />Time</div></li>
                <li id="tabHeader_3" ><div id="tab3">Energy&nbsp; <br />Gain</div></li>            
          </ol>
    </div>
  <br/>	
    <div class="tabscontent">
          <div class="tabpage" id="tabpage_1"><br/>	
               <p class="varTitle">Abundance of prey(a): <span id="input1">0.01</span></p>
<input class="rangeSlider AP" type="range" min="0.01" max="1" id="AP" step="0.01" name="AP" value="0.01"  onchange="showvalue1(this.value)"/>
          <div class="rangeVals">
              <span class="minrange">0.01</span><span class="maxrange">1</span></div>
              <div class="clear"></div><br/><br/><br/><br/><br/>
                 <p class="varTitle">Cut-off Radius:</p><br />  
                <p class="varTitle">Start Value: <span id="input2">1</span></p>
<input class="rangeSlider SV" type="range" min="1" max="10" id="SV" step="1" name="SV" value="1"  onchange="showvalue2(this.value)"/>            
           <div class="rangeVals">
              <span class="minrange">1</span><span class="maxrange">10</span></div>
              <div class="clear"></div><br/>
              <p class="varTitle">Fraction: <span id="input3">0.1</span></p>
<input class="rangeSlider FR" type="range" min="0.1" max="10" id="FR" step="0.1" name="FR" value="0.1"  onchange="showvalue3(this.value)"/>            
           <div class="rangeVals">
              <span class="minrange">0.1</span><span class="maxrange">10</span></div>
              <div class="clear"></div><br/>
              <p class="varTitle">End Value:<span id="input4">20</span></p>
<input class="rangeSlider EV" type="range" min="20" max="100" id="EV" step="20" name="EV" value="20"  onchange="showvalue4(this.value)"  />
              <div class="rangeVals">
              <span class="minrange">20</span><span class="maxrange">100</span></div>
              <div class="clear"></div><br/><br/><br/><br/><br /><br /><br /><br />
          </div>     
          
          <div class="tabpage" id="tabpage_2"><br/>	
              <p class="varTitle">Abundance of prey(a):<span id="input5">0.01</span></p>
<input class="rangeSlider AP1" type="range" min="0.01" max="1" id="AP1" step="0.01" name="AP1" value="0.01"  onchange="showvalue5(this.value)"/>            
          <div class="rangeVals">
              <span class="minrange">0.01</span><span class="maxrange">1</span></div>
              <div class="clear"></div><br/>	
              <p class="varTitle">Velocity(v):<span id="input6">1</span></p>
<input class="rangeSlider VE" type="range" min="1" max="100" id="VE" step="1" name="VE" value="1"  onchange="showvalue6(this.value)"/> <div class="rangeVals">
              <span class="minrange">1</span><span class="maxrange">100</span></div>
              <div class="clear"></div><br/><br /> <br />    
               <p class="varTitle">Cut-off Radius:</p><br />  
              <p class="varTitle">Start Value: <span id="input7">1</span></p>
<input class="rangeSlider SV1" type="range" min="1" max="10" id="SV1" step="1" name="SV1" value="1"  onchange="showvalue7(this.value)"/>            
           <div class="rangeVals">
              <span class="minrange">1</span><span class="maxrange">10</span></div>
              <div class="clear"></div><br/>	
               <p class="varTitle">Fraction: <span id="input8">0.1</span></p>
<input class="rangeSlider FR1" type="range" min="0.1" max="10" id="FR1" step="0.1" name="FR1" value="0.1"  onchange="showvalue8(this.value)"/>
            
           <div class="rangeVals">
              <span class="minrange">0.1</span><span class="maxrange">10</span></div>
              <div class="clear"></div><br/>	
             <p class="varTitle">End Value:<span id="input9">20</span></p>
<input class="rangeSlider EV1" type="range" min="20" max="100" id="EV1" step="20" name="EV1" value="20"  onchange="showvalue9(this.value)" />
              <div class="rangeVals">
              <span class="minrange">20</span><span class="maxrange">100</span></div>
              <div class="clear"></div><br/><br/><br/><br /><br /><br />
          </div>
          
          <div class="tabpage" id="tabpage_3">
             <p class="varTitle">Abundance of prey(a):<span id="input10">0.01</span></p>
<input class="rangeSlider AP2" type="range" min="0.01" max="1" id="AP2" step="0.01" name="AP2" value="0.01"  onchange="showvalue10(this.value)"/>
           <div class="rangeVals">
              <span class="minrange">0.01</span><span class="maxrange">1</span>
              <div class="clear"></div></div>
               <p class="varTitle">Velocity(v):<span id="input11">1</span></p>
<input class="rangeSlider VE1" type="range" min="1" max="100" id="VE1" step="1" name="VE1" value="1"  onchange="showvalue11(this.value)"/>
         <div class="rangeVals">
              <span class="minrange">1</span><span class="maxrange">100</span>
              <div class="clear"></div></div>
       			<p class="varTitle">Energy content(e):<span id="input12">250</span></p>
<input class="rangeSlider EC" type="range" min="0" max="1000" id="EC" step="250" name="EC" value="250"  onchange="showvalue12(this.value)"/>
         <div class="rangeVals">
              <span class="minrange">0</span><span class="maxrange">1000</span>
              <div class="clear"></div></div>    
       <p class="varTitle">Energy burned(ew):<span id="input13">0.1</span></p>
<input class="rangeSlider EB" type="range" min="0.1" max="2" id="EB" step="0.1" name="EB" value="0.1"  onchange="showvalue13(this.value)" />
       <div class="rangeVals">
              <span class="minrange">0.1</span><span class="maxrange">2</span>
              <div class="clear"></div></div>      
       <p class="varTitle">Flying speed(v):<span id="input14">1</span></p>
<input class="rangeSlider FS" type="range" min="1" max="50" id="FS" step="1" name="FS" value="1"  onchange="showvalue14(this.value)"/>
       <div class="rangeVals">
              <span class="minrange">1</span><span class="maxrange">50</span>
              <div class="clear"></div></div>       
       			<p class="varTitle">Energy burned (ep):2kCal</p>  
               <p class="varTitle">Cut-off Radius:</p>
               <p class="varTitle">Start Value: <span id="input15">1</span></p>
<input class="rangeSlider SV2" type="range" min="1" max="10" id="SV2" step="1" name="SV2" value="1"  onchange="showvalue15(this.value)"/>
              <div class="rangeVals">
              <span class="minrange">1</span><span class="maxrange">10</span></div>
              <div class="clear"></div><br/>	
               <p class="varTitle">Fraction: <span id="input16">0.1</span></p>
<input class="rangeSlider FR2" type="range" min="0.1" max="10" id="FR2" step="0.1" name="FR2" value="0.1"  onchange="showvalue16(this.value)"/>            
              <div class="rangeVals">
              <span class="minrange">0.1</span><span class="maxrange">10</span></div>
              <div class="clear"></div><br/>	
             <p class="varTitle">End Value:<span id="input17">20</span></p>
<input class="rangeSlider EV2" type="range" min="20" max="100" id="EV2" step="20" name="EV2" value="20"  onchange="showvalue17(this.value)" />
            
              <div class="rangeVals">
              <span class="minrange">20</span><span class="maxrange">100</span>
              <div class="clear"></div></div>
                    
          </div>
	  </div>
   </div>
   
</li>

<li><h1>Controls<span></span></h1>

<div style="padding:10px 20px;"><input type="button" style="width:70px;" name="plot" value="Plot Graph" onClick="plotGraphFN(this)" id="plot">&nbsp;<input type="button"  style="width:70px;" name="reset" value="Reset" onClick="Resetvalues();window.location.reload();" id="reset"></div>

</li>

</ul>
<script type="text/javascript">
  var inputs = document.getElementsByTagName('p');
  for(var i = 0; i < inputs.length; i++) {
	  
    if(inputs[i].type == 'range') {
		alert("a")
		inputs[i].addEventListener('click', function() {
        this.focus(); 
      });
    }
  }
</script>