<link href="../../../css/default.css" rel="stylesheet" type="text/css" />
<div class="post" align="left">&nbsp; <!--leave this space as such.. som wired issue-->
<?php include('breadcum.php'); ?>
  <blockquote> 
    <span class="title">Population Ecology</span>
    <p>&nbsp;</p>
    <?php if($_GET['ln']==1)
	{
	?>
    <div class="contentTitle">Virtual Lab I</div><br />
   <!-- <div class="contentTitle"><a href="javascript:toggleDisplay(document.getElementById('VL1'),'notaff')" style="color:#000000" >Virtual Lab I</a></div><br />-->
    
    <table id="VL1" width="95%" border="0" align="center" cellpadding="0" cellspacing="5" class="tableClass">
    <!--<tr>     <td width="5%"> </td><td  width="5%"><p><span class="contentTitle"><br />Virtual Lab I<br /><br /></span></p></td>
      </tr>-->
      <tr>
        <td width="8%" align="center" valign="top"><img src="images/icons/temp.gif" alt="" width="48" height="48" /></td>
        <td width="92%" valign="top"><span class="menuText"><a href="?sub=BIOTECH&amp;brch=POE&amp;sim=Population-with-continous-discrete-growth&amp;ln=<?php echo $_GET['ln']; ?>;&amp;cnt=theory">Population with continuous and discrete growth</a></span><br />
        In discrete breeding population the species may breed only at a specific time usually at a particular time of the year. Breeding seasons introduce some delay in the regulative process. A population growth model may be defined as continuous population growth model if the individuals of a population show continuous breeding season.  </td>
      </tr>
       <tr>
        <td width="8%"  align="center" valign="top"><img src="images/icons/temp.gif" alt="" width="48" height="48" /></td>
         <td width="92%" valign="top"><span class="menuText"><a href="?sub=BIOTECH&amp;brch=POE&amp;sim=Spread_Pest_Population_invasion&amp;ln=<?php echo $_GET['ln']; ?>;&amp;cnt=theory">Spread of a pest population - population invasion</a></span><br />
         Invasive pest population is one of the serious threats faced in population ecology. Pests are likely to get introduced into an area through transportation and if they find suitable environmental conditions, they start to exploit the resources and spread at a very fast pace. They cause the displacement of the native species of that region due to the competition for the natural resources and food.
 
</td>
      </tr>   
      
      
      <tr>
        <td width="8%"  align="center" valign="top"><img src="images/icons/temp.gif" alt="" width="48" height="48" /></td>
        <td width="92%" valign="top"><span class="menuText"><a href="?sub=BIOTECH&amp;brch=POE&amp;sim=Agestructured_LeslieMatrix&amp;ln=<?php echo $_GET['ln']; ?>;&amp;cnt=theory">Age structured Leslie Matrix</a></span><br />
        Leslie matrix is a discrete, age-structured model of population growth that is very popular in population ecology. 
It was invented by and named after P. H. Leslie. The Leslie Matrix (also called the Leslie Model) is one of the best known ways to describe the growth of populations(and their projected age distribution), in which a population is closed to migration and where only one sex, usually the female, is considered. Leslie matrix is generally applied to populations with annual breeding cycle.
</td>
      </tr>
      <tr>
        <td width="8%"  align="center" valign="top"><img src="images/icons/temp.gif" alt="" width="48" height="48" /></td>
        <td width="92%" valign="top"><span class="menuText"> Logistic population growth - continuous and dicrete growth models</span><br />
       
</td>
      </tr>
      <tr>
        <td width="8%"  align="center" valign="top"><img src="images/icons/temp.gif" alt="" width="48" height="48" /></td>
        <td width="92%" valign="top"><span class="menuText"><!--<a href="?sub=BIOTECH&amp;brch=POE&amp;sim=Stage&amp;ln=;&amp;cnt=theory">Stage structures Leslie Matrix - Green spotted moth</a>-->Stage structures Leslie Matrix - Green spotted moth</span></td>
      </tr>
      <tr>
        <td width="8%"  align="center" valign="top"><img src="images/icons/temp.gif" alt="" width="48" height="48" /></td>
        <td width="92%" valign="top"><span class="menuText"><!--<a href="?sub=BIOTECH&amp;brch=POE&amp;sim=Metapopulation_Dynamics&amp;ln=;&amp;cnt=theory">Metapopulation dynamics -Levins model</a>-->Metapopulation dynamics -Levins model</span></td>
      </tr>
      <!-- <tr>
        <td width="8%"  align="center" valign="top"><img src="images/icons/temp.gif" alt="" width="48" height="48" /></td>
        <td width="92%" valign="top"><span class="menuText">Logistic population growth - continuous and dicrete growth models</span></td>
      </tr>-->
      <tr>
        <td width="8%"  align="center" valign="top"><img src="images/icons/temp.gif" alt="" width="48" height="48" /></td>
        <td width="92%" valign="top"><span class="menuText">Interspecific competition and coexistence</span></td>
      </tr>
      <tr>
        <td width="8%"  align="center" valign="top"><img src="images/icons/temp.gif" alt="" width="48" height="48" /></td>
        <td width="92%" valign="top"><span class="menuText">Interspecific competitions and geographic distributions</span></td>
      </tr>
      <tr>
        <td width="8%"  align="center" valign="top"><img src="images/icons/temp.gif" alt="" width="48" height="48" /></td>
        <td width="92%" valign="top"><span class="menuText">Effect of interspecific competition on species border</span></td>
      </tr>
     
    </table>
    <? }?>
    <?php if($_GET['ln']==2)
	{
	?>
     <!--<div class="contentTitle"><a href="javascript:toggleDisplay(document.getElementById('VL2'),'notaff')" style="color:#000000" >Virtual Lab II</a></div>--><br />
     <div class="contentTitle">Virtual Lab II</div><br />
     <table id="VL2" width="95%" height="180" border="0" align="center" cellpadding="0" cellspacing="5" class="tableClass">
    <!--<tr>     <td width="5%"> </td><td  width="5%"><p><span class="contentTitle"><br />Virtual Lab II<br /><br /></span></p></td>
      </tr>-->
      <tr>
        <td align="center" valign="top"><img src="images/icons/temp.gif" alt="" width="48" height="48" /></td>
        <td valign="top"><span class="menuText"><a href="?sub=BIOTECH&amp;brch=POE&amp;sim=lotka_volta_simulator&amp;ln=<?php echo $_GET['ln']; ?>;&amp;cnt=theory">Lotka Volterra simulation</a></span><br />The Lotka-Volterra equations, also known as the predator-prey equations, are a pair of first-order, non-linear, differential equations frequently used to describe the dynamics of biological systems in which two species interact, one a predator and one its prey.</td>
      </tr>
      
       <tr>
        <td align="center" valign="top"><img src="images/icons/temp.gif" alt="" width="48" height="48" /></td>
        <td valign="top"><span class="menuText"><a href="?sub=BIOTECH&amp;brch=POE&amp;sim=Predator -Prey dynamics - effect of predator efficiency on equilibrium densities and population stability&amp;ln=<?php echo $_GET['ln']; ?>;&amp;cnt=theory">Predator -Prey dynamics - effect of predator efficiency on equilibrium densities and population stability</a></span><br />
         Predation is a process that involves interactions between prey defences and the foraging tactics of predators. 
Prey items (species, age class and quality) are assumed to exist in patches and it is also assumed that these patches differ in prey density or quality. The forager (predator) exploiting and choosing patches in a manner that maximises energy intake or maximises its prey encounter rate. The success rate in the killing of the prey depends on the efficacy of the predator.
        </td>
      </tr>
            
      <tr>
        <td width="8%"  align="center" valign="top"><img src="images/icons/temp.gif" alt="" width="48" height="48" /></td>
        <td width="92%" valign="top"><span class="menuText"><a href="?sub=BIOTECH&amp;brch=POE&amp;sim=Predator_Prey_Dynamics_Effects_of_Social_Behavior&amp;ln=<?php echo $_GET['ln']; ?>;&amp;cnt=theory">Effect of social behavior amongst predator-prey populations</a></span><br/>Social interactions, both affiliative and agonistic, occur sometimes with relatives, sometimes with strangers, sometimes with members of the same sex, sometimes with members of other sex; and sometimes with members of the same generation while at other times with members of other generations. The interactions themselves can be aggressive, cooperative or even altruistic and develop into strong relationships among particular individuals. Depending on the nature of these relationships and with whom they form a variety of social systems can develop.</td>
      </tr>
      <tr>
        <td width="8%"  align="center" valign="top"><img src="images/icons/temp.gif" alt="" width="48" height="48" /></td>
        <td width="92%" valign="top"><span class="menuText">Effects of carrying capacity and satiation in predator-prey dynamics</span></td>
      </tr>
      <tr>
        <td width="8%"  align="center" valign="top"><img src="images/icons/temp.gif" alt="" width="48" height="48" /></td>
        <td width="92%" valign="top"><span class="menuText">Harvesting a prey population</span></td>
      </tr>
      <tr>
        <td width="8%"  align="center" valign="top"><img src="images/icons/temp.gif" alt="" width="48" height="48" /></td>
        <td width="92%" valign="top"><span class="menuText">Optimal foraging with minimal time: a case of searching predators</span></td>
      </tr>
      <tr>
        <td width="8%"  align="center" valign="top"><img src="images/icons/temp.gif" alt="" width="48" height="48" /></td>
        <td width="92%" valign="top"><span class="menuText">Searching predators that maximize energy</span></td>
      </tr>
      <tr>
        <td width="8%"  align="center" valign="top"><img src="images/icons/temp.gif" alt="" width="48" height="48" /></td>
        <td width="92%" valign="top"><span class="menuText">Sit-and-wait predators that maximize energy</span></td>
      </tr>
      <tr>
        <td width="8%"  align="center" valign="top"><img src="images/icons/temp.gif" alt="" width="48" height="48" /></td>
        <td width="92%" valign="top"><span class="menuText">Pollinators</span></td>
      </tr>
      <tr>
        <td width="8%"  align="center" valign="top"><img src="images/icons/temp.gif" alt="" width="48" height="48" /></td>
        <td width="92%" valign="top"><span class="menuText">Microparasite host dynamics</span></td>
      </tr>
      <tr>
        <td width="8%"  align="center" valign="top"><img src="images/icons/temp.gif" alt="" width="48" height="48" /></td>
        <td width="92%" valign="top"><span class="menuText">Parasitoid dynamics</span></td>
      </tr>
      <tr>
        <td width="8%"  align="center" valign="top"><img src="images/icons/temp.gif" alt="" width="48" height="48" /></td>
        <td width="92%" valign="top"><span class="menuText">Endangered species conservation</span></td>
      </tr>
      
    </table>
    <? } ?>
  </blockquote></div>