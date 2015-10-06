<!--
Developed under a Research grant from NMEICT, MHRD
by
Amrita CREATE (Center for Research in Advanced Technologies for Education),
VALUE (Virtual Amrita Laboratories Universalizing Education)
Amrita University, India 2009 - 2013
http://www.amrita.edu/create
-->


<script type="text/javascript" language="javascript">
	var simPath="<?php getSimPath(); ?>";</script>
	<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols.js"></script>
<script src="<?php getSimPath(); ?>js/tabs.js" language="javascript"></script>
<div id="tablePosition"></div>
<p id="tableTitle">Dall Mountain Sheep (Ovis dalli dalli)</p>
<div id="tooltip" style="background:url(<?php getSimPath(); ?>images/tooltips.png) top left no-repeat; text-align:center; font-size:12px; padding:3px 1px;  position:absolute; display:none; width:202px; height:49px; z-index:9999;"></div>

<div id="toolImg" style="background:url(<?php getSimPath(); ?>images/toolImg.png) top left no-repeat; text-align:center; font-size:12px; padding:3px 1px;  position:absolute; display:none; width:356px; height:70px; z-index:9999;"></div>
<p class="varTitle1" id="r"></p>
<p class="varTitle1" id="t"></p>
<p class="varTitle1" id="extraspace"></p>
<div id="dynTable">
<div align="center">
<input type="button" class="subButton2" value="Add Row" onclick="addRow('dynData')" />
 
    <input type="button" class="subButton2" value="Delete Row" onclick="deleteRow('dynData')" /></div>
 
    <table id="dynData"  border="1">
        <tr>
       		<th></th>
            <th onmouseover="showTooltip(this.id)" onmouseout="hideTooltip()" id="x1" >x</th>
            <th onmouseover="showTooltip(this.id)" onmouseout="hideTooltip()" id="nx1">nx</th>
            <th onmouseover="showTooltip(this.id)" onmouseout="hideTooltip()" id="mx1">mx</th>            
        </tr>
         <tr>
           <td><input type="checkbox" name="chk" value="rowId" onchange='storeValue()'/></td>
            <td><input type="text" id="x" onchange='storeValue();dotRestrict(this);' onkeypress='validate(event)' /></td> 
            <td><input type="text" id="nx" onchange='storeValue();dotRestrict(this);restricDigit1(this);' onkeypress='validate(event)'/></td>
            <td><input type="text" id="mx" onchange='storeValue();dotRestrict(this);restricDigit2(this);' onkeypress='validate(event)'/></td>                      
        </tr>
    </table>
</div>