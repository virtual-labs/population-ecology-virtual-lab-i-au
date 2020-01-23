  /**
  *Developed by Amrita CREATE (Center for Research in Advanced Technologies for Education),
  *VALUE (Virtual Amrita Laboratories Universalizing Education)
  *Amrita University, India
  *http://www.amrita.edu/create
  *author:Anitha;
  *Date of modified: 08-05-2015
  */

  var ctx_con;
  var ctx_dis;
  var draw_item_timer;
  var randx_con_int;
  var randy_con_int;
  var x_con_float,y_con_float;
  var randx_dis_int;
  var randy_dis_int;
  var x_dis_float,y_dis_float;
  var count_con_int=0;
  var count_dis_int=0;
  var show_graph_int=0;
  var stat_show_int=0;
  var step_count_int=0;
  var run_iteration_timer;
  var flag_con=true;
  var flag_dis=false;
  var select_iteration_int=0;
  var timer_current_count_int=0;
  var worksheet_show_int=0;
  var prev_item_int=0;
  var timevar_dis_int=0.1;
  var timevar_con_int=2;
  var time_diff_dis_float=0;
  var time_diff_con_float=0;
  var num_prev_item_float=0;
  var num_item_float=0;
  var stat_time_int=0;
  var stat_step_int=0;
  var stat_popultn_int=0;
  var goto_steps_int=0;
  var con_time_int=100;
  var con_steps_int=50;
  var con_initial_pop_int=202;
  var con_growth_float=0.101;		
  var dis_time_int=100;
  var dis_steps_int=1000;
  var dis_initial_pop_int=50;
  var dis_birth_float=0.45;
  var dis_death_float=0.1;
  var prev_con_initial_pop_int=0;
  var prev_dis_initial_pop_int=0;
  var x_array= [];
  var y_array= [];
  var chart_category_names_array=[0];
  var chart_data_provider_array=[];
  var plot_array=[];	
  var img_con = new Image();
  var img_dis = new Image();
  /** Click of tab Continuous */
  function tabClickCon(){
    flag_con=true;
	flag_dis=false;
	clearCanvas();	
	chart_category_names_array=[0];
	chart_data_provider_array=[202];
	if ( step_count_int > 1 ) {
	  stat_popultn_int=$("#contInitialPop").val();
	}
	statiticsDisplay();
  }  
  /** Click of tab Discrete */
  function tabClickDis(){
	flag_dis=true;
	flag_con=false;
	clearCanvas();
	chart_category_names_array=[0];
	chart_data_provider_array=[50];	
	if ( step_count_int > 1 ) {
	  stat_popultn_int=$("#disInitialPop").val();
	}	
	statiticsDisplay();
  }
  $(document).ready(function(){
    tabFunctions();	
    img_con.src = simPath+"images/continuousGrowth.png";    
    img_dis.src = simPath+"images/discreteGrowth.png";
	ctx_con = document.getElementById('speciesCanvas').getContext('2d');
	ctx_con.canvas.width  = $("#canvasBox").width()/1.06;
	ctx_con.canvas.height = $("#canvasBox").height()/1.2;
	ctx_dis = document.getElementById('speciesCanvas').getContext('2d');
	ctx_dis.canvas.width  = $("#canvasBox").width()/1.06;	
    ctx_dis.canvas.height = $("#canvasBox").height()/1.2;
	$("#statLabel").css("display","none");
	$("#Pause").prop("disabled",true);
    chart_data_provider_array.push($("#contInitialPop").val());
	prev_con_initial_pop_int=$("#contInitialPop").val();
	prev_dis_initial_pop_int=$("#disInitialPop").val();
	/** Click function of Statistics */
	$("#Statistics").click(function (){
	  if ( stat_show_int == 0 ) {
	    $("#statLabel").css("display","block");
	    $("#Statistics").css("color","#cacaca");
	    stat_show_int=1;
	    statiticsDisplay();
	  } else {
	    $("#statLabel").css("display","none");
	    $("#Statistics").css("color","#6e6e6e");
	    stat_show_int=0;
      }
    });
	/** Click function of Data plots */
	$("#dataPlots").click(function (){	
	  if ( (select_iteration_int == 1) & (chart_data_provider_array.length > 1) ) {
	    if ( worksheet_show_int == 1 ) {
		  worksheet_show_int=0;
		  $("#workSheet").css("display","none");
		}
		if ( show_graph_int == 0 ) {
		  $("#tinyGraphArea").css("display","block");
		  $("#dataPlots").css("color","#cacaca");
		  show_graph_int=1;
		  /** Function for the x and y position tooltip inside the graph */				
		  function showTooltip(x, y, contents){		
		    $('<div id="tooltip">' + contents + '</div>').css( {
		    position: 'absolute',
		    display: 'block',
			top: y + 5,
			left: x + 5,
			border: '1px solid #fdd',
			padding: '2px',
			'background-color': '#fee',
			opacity: 0.80
			}).appendTo("body").fadeIn(200);
		  }
		  var _previous_point;	
		  $("#tinyGraphArea").bind("plothover", function (event, pos, item) {
		    $("#x").text(pos.x.toFixed(2));
		    $("#y").text(pos.y.toFixed(2));			
			if ( _previous_point != item.dataIndex ) {
			  _previous_point = item.dataIndex;
			  $("#tooltip").remove();
			  _x = item.datapoint[0].toFixed(2),
			  _y = item.datapoint[1].toFixed(2);	
			  showTooltip(item.pageX, item.pageY," X:" + _x + " and Y:" + _y);
			} else {
			  $("#tooltip").remove();
			  _previous_point = null;            
			}			
	      });			
		} else {
		  $("#tinyGraphArea").css("display","none");
		  $("#dataPlots").css("color","#6e6e6e");
		  show_graph_int=0;
		  $("#tooltip").remove();
		}
	  } else {
	    alert("To plot a graph you need to complete two steps.");
	  }
	});
	/** Click function of worksheet */
	$("#workSheets").click(function (){
      if ( show_graph_int == 1 ) {
	    show_graph_int=0;
		$("#tinyGraphArea").css("display","none");
	  }	
	  if ( worksheet_show_int == 0 ) {
        $("#workSheet").css("display","block");
		$("#workSheets").css("color","#cacaca");
        $("#time").val("");		
		if ( flag_dis ) {			
		  $("#workSheet1").html("Population with discrete model");
		  $("#workSheet2").html("P = R"+"t".sup()+" N"+"0".sub());
		  $("#workSheet4").html("R = 1 + (B-D)");
		  $("#workSheet5").html("P = R"+"t".sup()+" * N"+"0".sub());
		  $("#workSheet6").html("P = ");
		  $("#workSheet6").append("<input type='text' class='textField' disabled='true' id='population'/>");
		} else if ( flag_con ) {
		  $("#workSheet1").html("Population with continuous model");
		  $("#workSheet2").html("P = N"+"0".sub()+" e"+"rt".sup());
		  $("#workSheet4").html("P = N"+"0".sub()+" * e"+"rt".sup());
		  $("#workSheet5").html("P = ");
		  $("#workSheet5").append("<input type='text' class='textField' disabled='true' id='population'/>");
		  $("#workSheet6").html("");
		}
		worksheet_show_int=1;
      }	else {	
		$("#workSheet").css("display","none");
		$("#workSheets").css("color","#6e6e6e");
		worksheet_show_int=0;
	  }
	  inputValueAtTimeChanged();
	});
	/** Click function of Run Iteration */
	$("#runIteration").click(function(){
	  $("#runIteration").prop("disabled",true);
	  $("#stepRun").prop("disabled",true);
	  $("#Pause").prop("disabled",false);
	  select_iteration_int=1;
	  getVal();
	  run_iteration_timer = setInterval(runItration, 200); 
	});  
	/** Click function of Step Run */
	$("#stepRun").click(function(){
	  if(step_count_int==0) {
	    chart_category_names_array=[0];
		if ( flag_con ) {
	      chart_data_provider_array[0]=$("#contInitialPop").val();
		} else if ( flag_dis ) {
		  chart_data_provider_array[0]=$("#disInitialPop").val();
		}
	  }
	  select_iteration_int=1;
	  getVal();
	  if ( step_count_int <= con_steps_int-1 ) {		
	    drawItem();		
		stat_step_int=step_count_int;
		stat_time_int=chart_category_names_array[step_count_int];
		stat_popultn_int=chart_data_provider_array[step_count_int];
		step_count_int++;		
		statiticsDisplay();		
      } else {
	    $("#stepRun").prop("disabled",true);
		$("#runIteration").prop("disabled",true);
		$("#Pause").prop("disabled",true);
		$("#ReSet").prop("disabled",false);
	  }
	  graphPlotValues();	  
	});	
	/** Play pause functions */
	$("#Pause").click(function(){
	  if ( $(this).val() == "Pause" ) {
	    clearInterval(run_iteration_timer);
		$("#Pause").val("Play");
	  } else {
	    $("#Pause").val("Pause");
		getVal();		
		run_iteration_timer = setInterval(runItration, 200);
	  }
	});
	/** Go to step button */
	$("#goToStep").click(function(){
	  getVal();
	  if ( $("#goStep").val() != "" ) {
	    if ( $("#goStep").val() > 0 ) {
		  select_iteration_int=1;
		  goto_steps_int=$("#goStep").val();
     	  step_count_int=goto_steps_int;
		  statiticsDisplay();
		  if ( flag_con ) {
		    $("#contSteps").val(goto_steps_int);			
		  } else {
			$("#disSteps").val(goto_steps_int);
		  }	
		  for(i=0; i<=goto_steps_int; i++) {
		    graphPlotValues();
			run_iteration_timer = setInterval(drawSpecies, 0); 
		  }
		  stat_step_int=step_count_int;
		  stat_time_int=chart_category_names_array[step_count_int];
		  stat_popultn_int=chart_data_provider_array[step_count_int].toFixed(5);		  
		} 
	  } else {
	    alert("Enter a number");
	  }
	});
	/** Function for restrict alphabets in textbox */
	$(".textField").keypress(function (key){
	  /** In case the user changes the previous inputed value, then it will do clear all values */
	  if ( (prev_con_initial_pop_int!=$("#contInitialPop").val()) || (prev_dis_initial_pop_int!=$("#disInitialPop").val()) ) {
	    clearCanvas();
        step_count_int=0;	  
	  }
	  /** if the letter is not digit then display error and don't type anything */
	  var _keycode = (key.which) ? key.which : key.keyCode;
	  if ( !(_keycode==8 || _keycode==46)&&(_keycode < 48 || _keycode > 57) ) {
		return false;
	  }
	});
	/** Keypress function for go to step input box */
	$("#goStep").keypress(function (key){
	  /** if the letter is not digit then display error and don't type anything */
	  var _keycode = (key.which) ? key.which : key.keyCode;
	  if ( !(_keycode==8 || _keycode==46)&&(_keycode < 48 || _keycode > 57) ) {
		return false;
	  }
	});	
	/** Reset function */
	$("#ReSet").click(function (){
	  window.location.reload();
	});  
	/** Getting x and y values*/
	xyPosion();
  });  
  /** Statistics label display */
  function statiticsDisplay(){
    $("#species1").html("Time: "+stat_time_int);
    $("#species2").html("Step: "+stat_step_int);
    $("#species3").html("Population: "+stat_popultn_int);
  }  
  /** Function for drawing Graph */
  function showGraph(arr){
	$.plot($("#tinyGraphArea"), [arr],
	{
	  grid: 
	  {
		hoverable: true, clickable: true
	  },
	  points: 
	  { 
		show: true 
	  },
	  lines: 
	  {
	    show: true 
	  }			
	});
  }
  /** Function for getting values */
  function getVal(){		
	/** values of Continuous */
	con_time_int=$("#contTime").val();
	con_steps_int=$("#contSteps").val();
	con_initial_pop_int=$("#contInitialPop").val();
	con_growth_float=$("#contGrowth").val();		
	/** values of Discrete */
	dis_time_int=$("#disTime").val();
	dis_steps_int=$("#disSteps").val();
	dis_initial_pop_int=$("#disInitialPop").val();
	dis_birth_float=$("#disBirth").val();
	dis_death_float=$("#disDeath").val();
	count_con_int=0;
	count_dis_int=0;
  }
  /** Getting x and y positions for species */
  function xyPosion(){
    for ( w = 0; w <= $("#canvasBox").width()/1.06; w += 20 ) {
      x_array.push(w);
    }
    for ( h = 0; h <= $("#canvasBox").height()/1.02; h += 16.8 ) {
	  y_array.push(h);
    }
  }
  /** Drawing item using timer */
  function drawItem(){
	clearInterval(draw_item_timer);
	draw_item_timer =setInterval("drawSpecies()",1);		
  }  
  /** Drawing the species */
  function drawSpecies(){
    $("#Statistics").prop("disabled",false);
	$("#dataPlots").prop("disabled",false);
	if ( flag_con ) {
	  if ( num_item_float > 0 ) {
		if ( count_con_int < num_item_float ) {				
		  randx_con_int = Math.random() * (27 - 0); /** Random value for x */
		  randy_con_int=  Math.random() * (24 - 0); /** Random value for y*/
		  x_con_float= Math.round(randx_con_int,0);
		  y_con_float= Math.round(randy_con_int,0);			
		  ctx_con = document.getElementById('speciesCanvas').getContext('2d');
		  ctx_con.drawImage(img_con,x_array[x_con_float],y_array[y_con_float-1],18,18);				
		} else {				
		  clearInterval(draw_item_timer);
		  checkValueAlert(); 
		}
	  }	
	  count_con_int++;
    } 
    if ( flag_dis ) {
	  if( num_item_float > 0 ) {
	    if(count_dis_int < num_item_float) {
		  randx_dis_int = Math.random() * (26 - 0); /** Random value for x */
		  randy_dis_int=  Math.random() * (24 - 0); /** Random value for y */
		  x_dis_float= Math.round(randx_dis_int,0);
		  y_dis_float= Math.round(randy_dis_int,0);
		  ctx_dis = document.getElementById('speciesCanvas').getContext('2d');
		  ctx_dis.drawImage(img_dis,x_array[x_dis_float],y_array[y_dis_float-1],18,18);
		} else {		   		
		  clearInterval(draw_item_timer);
		  checkValueAlert(); 
		}
	  }
	  count_dis_int++;
	}
  }  
  /** Getting the values for ploting graph */
  function graphPlotValues(){
	getVal();
	if ( flag_con ) {
	  time_diff_con_float = parseFloat(con_time_int/con_steps_int);
	  num_item_float=con_initial_pop_int*Math.exp(con_growth_float*timevar_con_int);
	  chart_category_names_array.push(timevar_con_int);	  
	} else if ( flag_dis ) {	
	  time_diff_dis_float = parseFloat(dis_time_int/dis_steps_int);
	  var _calc=Number(dis_birth_float)-Number(dis_death_float);
	  var _growth=1+_calc;
	  num_item_float=dis_initial_pop_int*Math.pow(_growth,timevar_dis_int);
	  chart_category_names_array.push(timevar_dis_int);
	}
	chart_data_provider_array.push(num_item_float);
	timevar_dis_int=(timevar_dis_int+time_diff_dis_float);
	timevar_con_int=(timevar_con_int+time_diff_con_float);
	for ( var i = 0; i < chart_category_names_array.length; i++ ) {
	  plot_array[i]=[chart_category_names_array[i],chart_data_provider_array[i]];
	  showGraph(plot_array);
	}
	num_item_float=Math.floor(num_item_float);
	timer_current_count_int++;	
  }  
  /** Calculating the worsheet values and displayed it in a textbox */
  function inputValueAtTimeChanged(){
	getVal();
	if ( flag_con ) {
	  var _initial_pop_int=con_initial_pop_int;
	  var _calc_one=Number(con_growth_float)-Number(dis_death_float);
	  var _growth=1+_calc_one;
	} else {
	  var _initial_pop_int=dis_initial_pop_int;
	  var _calc_one=Number(dis_birth_float)-Number(dis_death_float);
	  var _growth=1+_calc_one;
	}
	$("#time").keyup(function (){
	  if ( !isNaN($("#time").val()) ) {
	    var _time=Number($("#time").val());
	 	var _population="";
	 	if ( flag_dis ) {
	 	  _population=_initial_pop_int*Math.pow(_growth,_time);	/** Calculation of equation R = 1 + (B-D), P = Rt * N0 */			
	 	} else {
	 	  _growth=Number(con_growth_float);
	 	  _population=_initial_pop_int*Math.exp(_growth*_time); /** Calculation of equation P = N0 * ert */
	 	}
	    if ( $("#time").val() == "" ) {
	    } else if (!isNaN(_population)) {
	    /** To show answer in the work book */
	      $("#population").val(_population);
	    }
	  } else {
	    alert("Please enter a valid number");
	  }
    });	
  }  
  /** Function for total itration run */
  function runItration(){
	drawItem();
	$("#species1").html("Time:"+parseFloat(chart_category_names_array[step_count_int-1]).toFixed(5));
	$("#species2").html("Step:"+parseFloat(step_count_int-1));
	$("#species3").html("Population:"+chart_data_provider_array[step_count_int-1]);
	step_count_int++;	
	graphPlotValues();
  }  
  /** Checking the values */
  function checkValueAlert(){
	getVal();
	if ( flag_dis ) {
	  if ( ( dis_birth_float < 0) || ( dis_birth_float > 1 ) ) {
		alert("Number of births and deaths should be between 0 and 1.");
	  } else if ( ( dis_birth_float == 0 ) && ( dis_death_float == 1 ) ) {
	    alert("Number of births and deaths should be between 0 and 1.");
	  } else if ( ( dis_death_float < 0 ) || ( dis_death_float > 1 ) ) {
	    alert("Number of births and deaths should be between 0 and 1.");
	  } else if ( ( ( String(dis_birth_float) ) == ( String(dis_death_float) ) ) ) {
	    alert("Number of births and deaths should not be equal.");
	  }
	}
  }  
  /** Function for clear canvas */
  function clearCanvas(){
	stat_time_int=0;
    stat_step_int=0;
    stat_popultn_int=0;
	count_con_int=0;
	count_dis_int=0;
	show_graph_int=0;
	stat_show_int=0;
	step_count_int=0;
	select_iteration_int=0;
	timer_current_count_int=0;
	worksheet_show_int=0;
	prev_item_int=0;
	timevar_dis_int=0.1;
	timevar_con_int=2;
	time_diff_dis_float=0;
	time_diff_con_float=0;
	num_prev_item_float=0;
	num_item_float=0;
	goto_steps_int=0;
	con_time_int=100;
    con_steps_int=50;
    con_initial_pop_int=202;
    con_growth_float=0.101;		
    dis_time_int=100;
    dis_steps_int=1000;
    dis_initial_pop_int=50;
    dis_birth_float=0.45;
    dis_death_float=0.1;
	chart_category_names_array=[];
	chart_data_provider_array=[];	
	plot_array=[];	
	$("#time").val("");
	$("#goStep").val("");
    $("#Pause").val("Pause");	
	$("#workSheet").css("display","none");
	$("#statLabel").css("display","none");
	$("#tinyGraphArea").css("display","none");
	$("#Statistics").css("color","#6e6e6e");
	$("#dataPlots").css("color","#6e6e6e");
	$("#workSheets").css("color","#6e6e6e");
    ctx_con.clearRect(0, 0, $('#speciesCanvas').width(), $('#speciesCanvas').height());
    ctx_dis.clearRect(0, 0, $('#speciesCanvas').width(), $('#speciesCanvas').height());
    clearInterval(run_iteration_timer);
    clearInterval(draw_item_timer);
	$("#stepRun").prop("disabled",false);
	$("#runIteration").prop("disabled",false);
	$("#Pause").prop("disabled",true);
	$("#ReSet").prop("disabled",false);
  }