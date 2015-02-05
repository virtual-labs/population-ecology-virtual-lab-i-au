<ul style="right:-17px;" tabindex="0" class="overthrow content description">
	<li>	
        <div class="varBox"> 
        	
            <p class="varTitle">
                <span id="envmntLabel">Select Environment</span>
                <select class="dropBox" id="envmnt"></select>
            </p> 
            <p id="AngleLbl" class="varTitle"></p>
            <p id="AngleVal" class="varTitle"></p> 
            <p class="varTitle" >
            	<input type="range" class="rangeSlider" min="0" max="60" id="angleslider" name="angleslider" value="0" step="1" oninput="changeAngle(this.value)" />
            </p>     
                
            <span id="rightminval"></span>
            <span id="rightmaxval"></span> 
            <p id="hangingWhtLbl" class="varTitle"></p>
            <p id="LeftVal" class="varTitle"></p> 
            <p class="varTitle">
           		 <input type="range" class="rangeSlider" min="5" max="100" id="HangMass" name="HangMass" value="5" step="1" oninput="changeHangWeight(this.value)"/>
            </p>
            <span id="leftminval"></span>
            <span id="leftmaxval"></span>
            <br />
            <br />
            <br />
            <br />
            <p align="center">
            	<input type="button" class="subButton scale" id="scaleBtn" name="scaleBtn"  onclick="ShowScale();"  />
            </p>
             <br />
            <br />
            <p class="addstartSpace"></p>
             <p align="center">
            	<input type="button" class="subButton scale" id="ResetBtn" name="ResetBtn"  onclick="window.location.reload();"  /> 
             </p>           
        </div>
	</li>
</ul>

