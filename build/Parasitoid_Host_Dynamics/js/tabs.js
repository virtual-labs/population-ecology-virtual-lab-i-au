/*
Developed under a Research grant from NMEICT, MHRD
by
Amrita CREATE (Center for Research in Advanced Technologies for Education),
VALUE (Virtual Amrita Laboratories Universalizing Education)
Amrita University, India 2009 - 2013
http://www.amrita.edu/create
*/


var tab = 1;

window.onload=function() {

  // get tab container
  var container = document.getElementById("tabContainer");
    // set current tab
    var navitem = container.querySelector(".tabs ol li");
    //store which tab we are on
    var ident = navitem.id.split("_")[1];
    navitem.parentNode.setAttribute("data-current",ident);
    //set current tab with class of activetabheader
    navitem.setAttribute("class","tabActiveHeader");

    //hide two tab contents we don't need
    var pages = container.querySelectorAll(".tabpage");
    for (var i = 1; i < pages.length; i++) {
      pages[i].style.display="none";
    }

    //this adds click event to tabs
    var tabs = container.querySelectorAll(".tabs ol li");
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].onclick=displayPage;
	  tabs[i].onmouseover=showLabel;
	  tabs[i].onmouseout=hideLabel;
    }
}

// show tooltip on mouseover of the tabs..
function showLabel(){
	var current = this.id.split("_")[1];
	document.getElementById("tooltip2").style.display="block";
	document.getElementById("tooltip2").style.top=((document.getElementById("tabHeader_" + current).offsetTop) - 22)+"px";	
	if(current == 1){
		document.getElementById("tooltip2").style.left=((document.getElementById("tabHeader_" + current).offsetLeft) - 0)+"px";	
		document.getElementById("tooltip2").innerHTML="Nicholson-Bailey Model";
	} else if(current == 2){
		document.getElementById("tooltip2").style.left=((document.getElementById("tabHeader_" + current).offsetLeft) - 200)+"px";	
		document.getElementById("tooltip2").innerHTML="Nicholson-Bailey Model with Host Density Dependence";
	} else if(current == 3){
		document.getElementById("tooltip2").style.left=((document.getElementById("tabHeader_" + current).offsetLeft) - 0)+"px";
		document.getElementById("tooltip2").innerHTML="Negative Binomial Model";
	} else if(current == 4){
		document.getElementById("tooltip2").style.left=((document.getElementById("tabHeader_" + current).offsetLeft) - 200)+"px";
		document.getElementById("tooltip2").innerHTML="Comparison of Poisson and Negative Binomial Distribution";
	}
}

// hide tooltip on mouseout of the tabs..
function hideLabel(){
	var current = this.id.split("_")[1];
	document.getElementById("tooltip2").style.display="none";
	document.getElementById("tooltip2").style.left=((document.getElementById("tabHeader_" + current).offsetLeft) + 0)+"px";
}

// on click of the tabs..
function displayPage() {
	var current = this.parentNode.getAttribute("data-current");
	//remove class of activetabheader and hide old contents
	document.getElementById("tabHeader_" + current).removeAttribute("class");
	document.getElementById("tabpage_" + current).style.display="none";
		
	var ident = this.id.split("_")[1];
	//add class of activetabheader to new active tab and show contents
	this.setAttribute("class","tabActiveHeader");
	document.getElementById("tabpage_" + ident).style.display="block";
	this.parentNode.setAttribute("data-current",ident);
	tab = ident;
	tabClick(); // function defined in 'simcontrols.js'
}
