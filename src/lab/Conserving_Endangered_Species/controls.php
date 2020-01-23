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
                <li id="tabHeader_1" ><div id="tab1">Field Data</div></li>
                <li id="tabHeader_2" ><div id="tab2">Sensitivity Analysis </div></li>
                <li id="tabHeader_3" ><div id="tab3">Management Plan</div></li>           
          </ol>
    </div>
  <br/>	
    <div class="tabscontent">
          <div class="tabpage" id="tabpage_1">     
               <br /> <br />       
              <p class="varTitle"><input type = "radio" name = "radSize" id = "dall" value = "dall" checked onclick="checkSelected(this);"/>&nbsp;Dall Mountain Sheep (Ovis dalli dalli) </p><br />
             <p class="varTitle"> <input type = "radio" name = "radSize" id = "song" value = "song" onclick="checkSelected(this)"/>&nbsp;Song Thrush</p> <br /> 
             <p class="varTitle"> <input type = "radio" name = "radSize" id = "glandula" value = "glandula" onclick="checkSelected(this)"/>&nbsp;The barnacle, Balanus glandula </p><br />
              <p class="varTitle"> <input type = "radio" name = "radSize" id = "robin" value = "glandula" onclick="checkSelected(this)"/>&nbsp;American Robin (Turdus m. migratorius) </p><br /> 	
             <p class="varTitle"> <input type = "radio" name = "radSize" id = "sample" value = "sample" onclick="checkSelected(this)" />&nbsp;User defined sample </p><br /> <br /> 
              <p><input type="button" class="subButton1" name="lifeTable" value="Create Life Table" id="lifeTable" onclick="lifeTableShow()"></p> <br />         
               <p><input type="button" class="subButton1" name="rate" value="Rate of Decline" id="rate" onclick="rateOfDecline()" disabled="disabled"></p>         
                     
          </div>           
          <div class="tabpage" id="tabpage_2">	
           <br /> <br /><br />  <br /> <br /> <br /><br />  <br />  <br /> 
          <p><input type="button" class="subButton1" name="leslie" value="Create Leslie Matrix" id="leslie" onclick="createLesle()"></p> <br /><br />          
               <p><input type="button" class="subButton1" name="grate" value="Geometric Growth rate" id="grate" onClick="createGeometricRate()" disabled="disabled"></p> <br /> <br /><br /> 
                <p class="varTitle1" id="gr"></p>
                 <br /><br />  <br />              
          </div>          
          <div class="tabpage" id="tabpage_3">
          <br /> <br /> <br /><br />  <br /><br />  <br />  
          <p><input type="button" class="subButton1" name="predator" value="Predator - Prey Dynamics" id="predator" onClick="prayDynamic()"></p> <br /><br />         
               <p><input type="button" class="subButton1" name="parasite" value="Microparasite and Macroparasite" id="parasite" onClick="microParasite()"></p> <br /> <br />        
               <p><input type="button" class="subButton1" name="host" value="Parasitoid-Host Dynamics" id="host" onClick="hostDynamic()"></p> 
               <br /> <br /> <br /><br />  <br /> 
          </div>
                    
      </div>
	</div>
</div>
   
</li>

 <br /> <br /> <br /> 
<li><h1>Controls<span></span></h1>
<div class="varBox iconPos">
 <br /> 
<img id="wrong"  src="<?php getSimPath(); ?>images/wrong.png" /><span id="wrgMsg" class="varTitle">Try again.</span>
<p class="varTitle" id="text_wrong">Wrong management plan.</p>
<p><input type="button" class="subButton" name="reset" value="Reset" onClick="resetFN();window.location.reload()" id="reset"></p>
</div>
</li>

</ul>
