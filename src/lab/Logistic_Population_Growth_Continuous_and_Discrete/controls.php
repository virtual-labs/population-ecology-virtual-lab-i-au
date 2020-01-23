  <!--
  *Developed by Amrita CREATE (Center for Research in Advanced Technologies for Education),
  *VALUE (Virtual Amrita Laboratories Universalizing Education)
  *Amrita University, India
  *http://www.amrita.edu/create
  *author:Anitha;
  *Date of modified: 13-05-2015
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
		  <p class="title">No. of Individuals</p>
		  <p class="title">N: <input type="text" class="textField" value="10" id="conNoOfIndividuals"></p>
		  <p class="title">Maximum Rate of Growth</p>
		  <p class="title">Rm: <input type="text" class="textField" value="0.6" id="conRateGrowth"></p>
		  <p class="title">Carrying Capacity</p>
		  <p class="title">K: <input type="text" class="textField" value="100" id="conCarryCapacity"></p>
		  <p class="title">Spatial Distribution of Individuals</p>
		  <p class="title"><input type="text" class="textField" value="1" id="conSpatialDistr"></p>
		  <p class="title">No. of steps</p>
		  <p class="title"><input type="text" class="textField" value="25" id="conNoOfSteps"></p>
		  <p class="title">Initial Population Density</p>
		  <p class="title"><input type="text" class="textField" value="100" id="conInitialPopDen"></p>
		  <p class="title">Select the graph:<br><br>
		    <select class="dropBox" id="dropdownCon">
			  <option value="Continuous Time model">Continuous Time model</option>
			  <option value="Bifurcation Diagram">Bifurcation Diagram</option>
			  <option value="Effect of Population Density">Effect of Population Density</option>
			</select>
		  </p>
		</div>  
		<div class="tabpage" id="tabpage_2">
		  <p class="title">No. of Individuals at time t</p>
		  <p class="title">Nt: <input type="text" class="textField" value="80" id="disNoOfIndividuals"></p>
		  <p class="title">Maximum Rate of Growth</p>
		  <p class="title">Rm: <input type="text" class="textField" value="1.1" id="disRateGrowth" ></p>
		  <p class="title">Carrying Capacity</p>
		  <p class="title">K: <input type="text" class="textField" value="100" id="disCarryCapacity"></p>
		  <p class="title">Spatial Distribution of Individuals</p>
		  <p class="title"><input type="text" class="textField" value="1" id="disSpatialDistr"></p>
		  <p class="title">No. of steps</p>
		  <p class="title"><input type="text" class="textField" value="15" id="disNoOfSteps"></p>
		  <p class="title">Initial Population Density</p>
		  <p class="title"><input type="text" class="textField" value="100" id="disInitialPopDen"></p>
		  <p class="title">Select the graph:<br><br>
		    <select class="dropBox" id="dropdownDis">
			  <option value="Discrete Time model">Discrete Time model</option>
			  <option value="Bifurcation Diagram">Bifurcation Diagram</option>
			  <option value="Effect of Population Density">Effect of Population Density</option>
			</select>
		  </p>
		</div>
	  </div>
	</div>
  </div>
  </li>
  <li>
    <div class="varBox box">
      <div><input class="submitBtns" type="button" value="Step run" id="stepRun"><input class="submitBtns" type="button" value="Run iteration" id="runIteration"></div>
      <div><input class="submitBtns" type="button" value="Pause" id="Pause"><input class="submitBtns" type="button" value="Reset" id="ReSet"></div>
      <div><input class="submitBtns" type="button" value="Plot Graph" id="plotGraph"></div>
    </div>
  </li>
  </ul>
<script src="<?php getSimPath(); ?>js/tabs.js" language="javascript">
</script>
