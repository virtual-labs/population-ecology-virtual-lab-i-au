  <!--
  *Developed by Amrita CREATE (Center for Research in Advanced Technologies for Education),
  *VALUE (Virtual Amrita Laboratories Universalizing Education)
  *Amrita University, India
  *http://www.amrita.edu/create
  *author:Anitha;
  *Date of modified: 08-05-2015
  -->


  <ul>
  <li><h1>Variables<span></span></h1>
  <div class="varBox">
  <div id="tabContainer">
    <div class="tabs">
      <ol class="tabbed">
        <li id="tabHeader_1" ><div id="tab1" onClick="tabClickCon()"><img src="<?php getSimPath(); ?>images/continuousTab.png"/> Continuous</div></li>
        <li id="tabHeader_2" ><div id="tab2" onClick="tabClickDis()"><img src="<?php getSimPath(); ?>images/discreteTab.png"/> Discrete</div></li>            
      </ol>
    </div>
	<div class="tabscontent">
	  <div class="tabpage" id="tabpage_1"  >
		<p class="varTitle">Time:</p>
		<p class="varTitle">T: <input type="text" class="textField" value="100" id="contTime"></p>
		<p class="varTitle">Number of steps:</p>
		<p class="varTitle">Ns: <input type="text" class="textField" value="50" id="contSteps"></p>
		<p class="varTitle">Initial Population:</p>
		<p class="varTitle">No: <input type="text" class="textField" value="202" id="contInitialPop"></p>
		<p class="varTitle">Rate of growth R:</p>
		<p class="varTitle">R: <input type="text" class="textField" value="0.101" id="contGrowth"></p>
      </div>  
	  <div class="tabpage" id="tabpage_2">
		<p class="varTitle">Time:</p>
		<p class="varTitle">T: <input type="text" class="textField" value="100" id="disTime"></p>
		<p class="varTitle">Number of steps:</p>
		<p class="varTitle">Ns: <input type="text" class="textField" value="1000" id="disSteps" ></p>
		<p class="varTitle">Initial Population:</p>
		<p class="varTitle">No: <input type="text" class="textField" value="50" id="disInitialPop"></p>
		<p class="varTitle">Birth rate:</p>
		<p class="varTitle">B: <input type="text" class="textField" value="0.45" id="disBirth"></p>
		<p class="varTitle">Death rate:</p>
		<p class="varTitle">D: <input type="text" class="textField" value="0.1" id="disDeath"></p>
	  </div>
	</div>
  </li>
  <li><h1>Simulation Control</h1>
    <div class="varBox box">
      <div><input class="submitBtns" type="button" value="Go to step" id="goToStep"><input id="goStep"></div>
      <div><input class="submitBtns" type="button" value="Step run" id="stepRun"></div>
      <div><input class="submitBtns" type="button" value="Run iteration" id="runIteration"></div>
      <div><input class="submitBtns" type="button" value="Pause" id="Pause"></div>
      <div><input class="submitBtns" type="button" value="Reset" id="ReSet"></div>
    </div>
  </li>
  </ul>
  <script src="<?php getSimPath(); ?>js/tabs.js" language="javascript"></script>