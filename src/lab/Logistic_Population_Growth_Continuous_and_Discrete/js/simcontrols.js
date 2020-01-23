  /**
  *Developed by Amrita CREATE (Center for Research in Advanced Technologies for Education),
  *VALUE (Virtual Amrita Laboratories Universalizing Education)
  *Amrita University, India
  *http://www.amrita.edu/create
  *author:Anitha;
  *Date of modified: 22-05-2015
  */
  
  var ctx_con,ctx_dis,draw_item_timer,randx_con_int,randy_con_int;
  var x_con_float,y_con_float,randx_dis_int,randy_dis_int,x_dis_float,y_dis_float;
  var count1_int,count2_int,step_count_int=0;
  var run_iteration_timer;
  var img_con = new Image();
  var img_dis = new Image();
  var flag_con=true;
  var flag_dis=false;
  var select_iteration_int,num_item_float,timer_current_count=0;
  var con_time_calc1,con_time_calc2,con_time_calc3,con_time_calc4,con_time_calc5,con_time_calc6,con_time_calc7,con_time_calc8 = 0;
  var con_time_calc9,con_time_calc10,con_time_calc11,con_time_calc12,con_time_calc13,con_time_calc14,con_time_calc15,con_time_calc16 = 0;
  var con_step_flag = 0;
  var con_time = 0;
  var con_height = 1;
  var theta = 1;  
  var dis_step_flag = 0;
  var dis_theta = 1;  
  var con_individuals_int=10;
  var con_growth_float=0.6;
  var con_capacity_int=100;
  var con_spatial_int=1;
  var con_steps_int=25;
  var con_ini_pop_int=100;
  var dis_individuals_int=80;
  var dis_growth_float=1.1;
  var dis_capacity_int=100;
  var dis_spatial_int=1;
  var dis_steps_int=15;
  var dis_ini_pop_int=100;
  var prev_input1 = prev_input2 = prev_input3 = prev_input4 = prev_input5 = prev_input6 = 0;
  var prev_inp1 = prev_inp2 = prev_inp3 = prev_inp4 = prev_inp5 = prev_inp6 = 0;  
  var dis_bif_count = 0;  
  var x_array=[];
  var y_array=[];
  var plot_array1=[];
  var plot_array2=[];
  var plot_array3=[];
  var plot_array4=[];
  var plot_array5=[];
  var plot_array6=[];
  var plot_array7=[];
  var plot_array8=[];
  var plot_array9=[];
  var plot_array10=[];
  var con_time_model_arr1=[];
  var con_time_model_arr2=[];
  var con_time_model_arr3=[];
  var con_time_model_arr4=[];
  var con_time_X_arr=[];
  var dis_time_model_arr=[];
  var dis_time_X_arr=[];  
  var chart_category_names=[];
  var chart_data_provider1=[];
  var chart_data_provider2=[];
  var chart_data_provider3=[];
  var chart_data_provider4=[];
  var chart_data_provider5=[];
  var chart_data_provider6=[];
  var chart_data_provider7=[];
  var chart_data_provider8=[];
  var chart_data_provider9=[];
  var chart_data_provider10=[];
  var con_num_array=[];
  var con_bif_X_arr=[];
  var con_bif_array_one=[];
  var con_bif_array_two=[];
  var con_prime_array_one=[];
  var con_prime_array_two=[];
  var con_ones_array=[];
  var dis_num_array=[];
  var dis_bif_X_arr=[];
  var dis_bif_array_one=[];
  var dis_bif_array_two=[];
  var dis_prime_array_one=[];
  var dis_prime_array_two=[];
  var dis_ones_array=[];
  var con_pop_X_arr=[];
  var con_pop_num_array1=[];
  var con_pop_num_array2=[];
  var con_pop_prime_arr=[];
  var dis_pop_X_arr=[];
  var dis_pop_num_array1=[];
  var dis_pop_num_array2=[];
  var dis_pop_prime_arr=[];
  /** Continuous tab click event */
  function tabClickCon(){
    flag_con=true;
	flag_dis=false;
	clearCanvas();
    clearAllValues();
  }  
  /** Discrete tab click event */
  function tabClickDis(){
	flag_dis=true;
	flag_con=false;
	clearCanvas();
	clearAllValues();
  }  
  $(document).ready(function(){
	/** Tab changing function */
    tabFunctions();    
	$("#plotGraph").prop("disabled",true);
	$("#Pause").prop("disabled",true);
	/** image loading */
    img_con.src = simPath+"images/continuousGrowth.png";    
    img_dis.src = simPath+"images/discreteGrowth.png";
	ctx_con = document.getElementById('speciesCanvas').getContext('2d');
	/** Image x and y with respect to Species canvas width and height */
	ctx_con.canvas.width  = $("#canvasBox").width()/1.06;
	ctx_con.canvas.height = $("#canvasBox").height()/1.05;
	ctx_dis = document.getElementById('speciesCanvas').getContext('2d');
	ctx_dis.canvas.width  = $("#canvasBox").width()/1.06;	
    ctx_dis.canvas.height = $("#canvasBox").height()/1.05;	
	/** Click function of Step Run */
	$("#stepRun").click(function(){	
	  $("#speciesCanvas").css("display","block");
	  $("#tinyGraphArea").css("display","none");
	  $(".dropBox").prop("disabled",true);
	  clearCanvas();
	  select_iteration_int=1;
	  getVal();
	  dropDownValue();
	  if ( step_count_int <= con_steps_int-1 ) { 	  
		drawItem();	
		numberOfSpecies();	
        step_count_int++;		
      } else {
	    $("#stepRun").prop("disabled",true);
		$("#runIteration").prop("disabled",true);
		$("#Pause").prop("disabled",true);
		$("#ReSet").prop("disabled",false);
	  }
	  if(step_count_int > 2) {
	    $("#plotGraph").prop("disabled",false);
	  } else {
	    $("#plotGraph").prop("disabled",true);
	  }
	});	
	/** Click function of Run Iteration */
	$("#runIteration").click(function(){
	  $("#speciesCanvas").css("display","block");
	  $("#tinyGraphArea").css("display","none");
	  $("#stepRun").prop("disabled",true);
	  $("#Pause").prop("disabled",false);
	  $("#runIteration").prop("disabled",true);
	  select_iteration_int=1;
	  getVal();
	  if( flag_con ) {
	    if ( $("#dropdownCon option:selected").val()=="Bifurcation Diagram" ) {
	      run_iteration_timer = setInterval(runItration, 14000); 
	    } else {
		  run_iteration_timer = setInterval(runItration, 350);
		}
	  } else if ( flag_dis ) {
	    if ( $("#dropdownDis option:selected").val()=="Bifurcation Diagram" ) {
	      run_iteration_timer = setInterval(runItration, 14000); 
	    } else {
		  run_iteration_timer = setInterval(runItration, 350);
		}
	  }
	});	
	/** Play pause functions */
	$("#Pause").click(function(){
	  if ( $(this).val() == "Pause" ) {	    
	    clearInterval(run_iteration_timer);
		$("#Pause").val("Play");
	  } else {
        $("#speciesCanvas").css("display","block");
		$("#tinyGraphArea").css("display","none");
	    $("#Pause").val("Pause");
		getVal();		
		if( flag_con ) {
	      if ( $("#dropdownCon option:selected").val()=="Bifurcation Diagram" ) {
	      run_iteration_timer = setInterval(runItration, 14000); 
	      } else {
		    run_iteration_timer = setInterval(runItration, 350);
		  }
	    } else if ( flag_dis ) {
	      if ( $("#dropdownDis option:selected").val()=="Bifurcation Diagram" ) {
	        run_iteration_timer = setInterval(runItration, 14000); 
	      } else {
		    run_iteration_timer = setInterval(runItration, 350);
		  }
	    }
	  }
	});	
	/** Reset function */
	$("#ReSet").click(function (){
	  window.location.reload();
	});
	/** Click function of Data plots */
	$("#plotGraph").click(function (){
	  $("#tinyGraphArea").css("display","block");
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
		  x = item.datapoint[0].toFixed(2),
		  y = item.datapoint[1].toFixed(2);	
		  showTooltip(item.pageX, item.pageY," X:" + x + " and Y:" + y);
		} else {
		  $("#tooltip").remove();
		  _previous_point = null;            
		}			
	  });	  
	});	
	/** Random x and y position of the species */
	xyPosion();	
	/** Function for restrict alphabets in textbox */
	$(".textField").keypress(function (key){
	  /** if the letter is not digit then display error and don't type anything */
	  var _keycode = (key.which) ? key.which : key.keyCode;
	  if ( !(_keycode==8 || _keycode==46)&&(_keycode < 48 || _keycode > 57) ) {
		return false;
	  }
	});
  });  
  /** Function for total itration run */
  function runItration(){  
    if(flag_con) {
      if ( step_count_int < con_steps_int ) {
		clearCanvas();
	  }
	} else if (flag_dis) {
	  if ( step_count_int < dis_steps_int ) {
		clearCanvas();
	  } else {
		clearInterval(run_iteration_timer);       
	  }
	}
	dropDownValue();
    drawItem();
    numberOfSpecies();	  
    step_count_int++;	
	if(step_count_int > 2) {
	  $("#plotGraph").prop("disabled",false);
	} else {
	  $("#plotGraph").prop("disabled",true);
	}	
  }  
  /** Getting x and y positions for species */
  function xyPosion(){
    for ( w = 0; w <= $("#canvasBox").width()/1.06; w += 20 ) {
      x_array.push(w);
    }
    for ( h = 0; h <= $("#canvasBox").height()/1.01; h += 19.2 ) {
	  y_array.push(h);
    }
  }  
  /** Function for drawing four line graphs */
  function plotFourGraph(arr1,arr2,arr3,arr4){
	$.plot($("#tinyGraphArea"), [{data: arr1, color: '#ff3300'}, {data: arr2,color: '#cc66ff'}, {data: arr3,color: '#00cc00'}, {data: arr4,color: '#0099ff'}],
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
  /** Function for drawing one line graph */
  function plotOneGraph(arr){
	$.plot($("#tinyGraphArea"), [{data: arr, color: '#ff3300'}],
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
  /** Function for drawing one line graph */
  function plotOneGraphWithoutLine(arr){
	$.plot($("#tinyGraphArea"), [{data: arr, color: '#ff3300'}],
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
	    show: false 
	  }			
	});
  }  
  /** Function for drawing two line graph */
  function plotTwoGraph(arr1,arr2){
	$.plot($("#tinyGraphArea"), [{data: arr1, color: '#FF3300'}, {data: arr2,color: '#CC66FF'}],
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
  /** Species number and graph plot values calculation of each drop down values */
  function numberOfSpecies() {  
	if (flag_con) {
	  if ($("#dropdownCon option:selected").val()=="Continuous Time model") {
		con_time_model_arr1[0]=0;
		/** Number of items to plot */
		num_item_float = parseFloat(Math.round(con_time_model_arr1[timer_current_count])+1);
		if (timer_current_count < con_time_X_arr.length) {
		  chart_category_names.push(con_time_X_arr[timer_current_count]);
		}
		chart_data_provider1.push(con_time_model_arr1[timer_current_count]);
		chart_data_provider2.push(con_time_model_arr2[timer_current_count]);
		chart_data_provider3.push(con_time_model_arr3[timer_current_count]);
		chart_data_provider4.push(con_time_model_arr4[timer_current_count]);
		timer_current_count++;
		/** Fot plotting graph */
		dataPlotArray1=[];
		dataPlotArray2=[];
		dataPlotArray3=[];
		dataPlotArray4=[];
		for ( var i = 0; i < chart_category_names.length; i++ ) {
		  plot_array1=[chart_category_names[i],chart_data_provider1[i]];
		  dataPlotArray1.push(plot_array1);
		  plot_array2=[chart_category_names[i],chart_data_provider2[i]];
		  dataPlotArray2.push(plot_array2);
		  plot_array3=[chart_category_names[i],chart_data_provider3[i]];
		  dataPlotArray3.push(plot_array3);
		  plot_array4=[chart_category_names[i],chart_data_provider4[i]];
		  dataPlotArray4.push(plot_array4);
		  plotFourGraph(dataPlotArray1,dataPlotArray2,dataPlotArray3,dataPlotArray4);
		}
	  } else if ($("#dropdownCon option:selected").val()=="Bifurcation Diagram") {
	    /** Number of items to plot */		
		num_item_float = parseFloat(Math.round(con_num_array[timer_current_count])+1);	
		for(var i=0;i<500;i++){
		  chart_category_names.push(con_bif_array_two[i]);
		}
		for(var j=0;j<500;j++){
		  chart_data_provider5.push(con_prime_array_two[j]);
		}	
		timer_current_count++;			
		/** Fot plotting graph */
		dataPlotArray5=[];
		for ( var k = 0; k < 500; k++ ) {
		  plot_array5=[chart_category_names[k],chart_data_provider5[k]];
		  dataPlotArray5.push(plot_array5);			  
		  plotOneGraphWithoutLine(dataPlotArray5);
		}
	  } else if ($("#dropdownCon option:selected").val()=="Effect of Population Density") {
	    /** Number of items to plot */
		num_item_float = parseFloat(Math.round(con_pop_num_array1[timer_current_count])+1);
		if (timer_current_count < con_pop_X_arr.length) {
		  chart_category_names.push(con_pop_X_arr[timer_current_count]);
		}
		chart_data_provider6.push(con_pop_num_array1[timer_current_count]);
		chart_data_provider7.push(con_pop_num_array2[timer_current_count]);
		timer_current_count++;
		/** Fot plotting graph */
		dataPlotArray6=[];
		dataPlotArray7=[];
		for ( var i = 0; i < chart_category_names.length; i++ ) {
		  plot_array6=[chart_category_names[i],chart_data_provider6[i]];
		  dataPlotArray6.push(plot_array6);
		  plot_array7=[chart_category_names[i],chart_data_provider7[i]]
		  dataPlotArray7.push(plot_array7);
		  plotTwoGraph(dataPlotArray6,dataPlotArray7);
		}
	  }
	} else if (flag_dis) {
	  if ($("#dropdownDis option:selected").val()=="Discrete Time model") {
	    /** Number of items to plot */
		num_item_float = parseFloat(Math.round(dis_time_model_arr[timer_current_count])+1);
		if(isNaN(num_item_float)){
		  num_item_float = 100;
		}			
		if (timer_current_count < dis_time_X_arr.length) {
		  chart_category_names.push(dis_time_X_arr[timer_current_count]);
		}
		chart_data_provider8.push(dis_time_model_arr[timer_current_count]);
		timer_current_count++;
		/** Fot plotting graph */
		dataPlotArray8=[];
		for ( var k = 0; k < chart_category_names.length; k++ ) {
		  plot_array8=[chart_category_names[k],chart_data_provider8[k]];
		  dataPlotArray8.push(plot_array8);
		  plotOneGraph(dataPlotArray8);
		}
	  } else if ($("#dropdownDis option:selected").val()=="Bifurcation Diagram") {
	    /** Number of items to plot */
		num_item_float = parseFloat(Math.round(dis_num_array[timer_current_count])+1);
		for(var i=0;i<1000;i++){
		   chart_category_names.push(dis_bif_array_two[i]);		  
		}
		for(var m=0;m<1000;m++){
		  chart_data_provider5.push(dis_prime_array_two[m]);
		}	
		timer_current_count++;			
		/** Fot plotting graph */
		dataPlotArray5=[];
		for ( var k = 0; k < 1000; k++ ) {
		  plot_array5=[chart_category_names[k],chart_data_provider5[k]];
		  dataPlotArray5.push(plot_array5);			  
		  plotOneGraphWithoutLine(dataPlotArray5);
		}
	  } else if ($("#dropdownDis option:selected").val()=="Effect of Population Density") {
	    /** Number of items to plot */
		num_item_float = parseFloat(Math.round(dis_pop_num_array1[timer_current_count])+1);
	    if (timer_current_count < dis_pop_X_arr.length) {
		  chart_category_names.push(dis_pop_X_arr[timer_current_count]);
		}
	    chart_data_provider9.push(dis_pop_num_array1[timer_current_count]);
		chart_data_provider10.push(dis_pop_num_array2[timer_current_count]);
		timer_current_count++;
		/** Fot plotting graph */
		dataPlotArray9=[];
		dataPlotArray10=[];
		for ( var k = 0; k < chart_category_names.length; k++ ) {
		  plot_array9=[chart_category_names[k],chart_data_provider9[k]];
		  dataPlotArray9.push(plot_array9);
		  plot_array10=[chart_category_names[k],chart_data_provider10[k]];
		  dataPlotArray10.push(plot_array10);
		  plotTwoGraph(dataPlotArray9,dataPlotArray10);
		}
	  }
	}
  }  
  /** Drawing the species */
  function drawSpecies(){  
    if ( flag_con ) {
	  if ( num_item_float > 0 ) {
		if ( count1_int < num_item_float ) {
		  randx_con_int = Math.random() * (27 - 0); /** Random value for x */
		  randy_con_int=  Math.random() * (24 - 0); /** Random value for y*/
		  x_con_float= Math.round(randx_con_int,0);
		  y_con_float= Math.round(randy_con_int,0);			
		  ctx_con = document.getElementById('speciesCanvas').getContext('2d');
		  ctx_con.drawImage(img_con,x_array[x_con_float],y_array[y_con_float-1],18,18);				
		} else {
		  clearInterval(draw_item_timer);
		}
	  }	
	  count1_int++;
	} 
	if ( flag_dis ) {	
	  if( num_item_float > 0 ) {
	    if(count2_int<num_item_float) {		
		  randx_dis_int = Math.random() * (26 - 0); /** Random value for x */
		  randy_dis_int=  Math.random() * (24 - 0); /** Random value for y */
		  x_dis_float= Math.round(randx_dis_int,0);
		  y_dis_float= Math.round(randy_dis_int,0);
		  ctx_dis = document.getElementById('speciesCanvas').getContext('2d');
		  ctx_dis.drawImage(img_dis,x_array[x_dis_float],y_array[y_dis_float-1],18,18);
		} else {		   		
		  clearInterval(draw_item_timer);
		}
	  }
	  count2_int++;
	}
  }  
  /** Drawing item using timer */
  function drawItem(){  
	clearInterval(draw_item_timer);
	draw_item_timer =setInterval("drawSpecies()",1);	
  }  
  /** Calculation of continuous time model */
  function conTimeModel(){
	getVal();
	con_time_model_arr1[0] = 0;
	con_time_model_arr2[0] = 0;
	con_time_model_arr3[0] = 0;
	con_time_model_arr4[0] = 0;
	con_time_model_arr1[1] = con_individuals_int;
	con_time_model_arr2[1] = con_individuals_int;
	con_time_model_arr3[1] = con_individuals_int;
	con_time_model_arr4[1] = con_individuals_int;
	while (true) {
	  con_step_flag = con_step_flag + 1;
	  if (con_step_flag > con_steps_int) {
		break;
	  }		
	  con_time_calc1 = equOneFn(con_time,con_time_model_arr1[con_step_flag],con_growth_float,con_capacity_int,1);
	  con_time_calc2 = equOneFn(con_time,con_time_model_arr2[con_step_flag],con_growth_float,con_capacity_int,2);
	  con_time_calc3 = equOneFn(con_time,con_time_model_arr3[con_step_flag],con_growth_float,con_capacity_int,3);
      con_time_calc4 = equOneFn(con_time,con_time_model_arr4[con_step_flag],con_growth_float,con_capacity_int,0.3);
		
	  con_time_calc5 = equOneFn(parseFloat(con_time + parseFloat(0.5 * con_height)),parseFloat(con_time_model_arr1[con_step_flag]) + parseFloat(0.5 * con_height * con_time_calc1),con_growth_float,con_capacity_int,1);
	  con_time_calc6 = equOneFn(parseFloat(con_time + parseFloat(0.5 * con_height)),parseFloat(con_time_model_arr2[con_step_flag]) + parseFloat(0.5 * con_height * con_time_calc2),con_growth_float,con_capacity_int,2);
	  con_time_calc7 = equOneFn(parseFloat(con_time + parseFloat(0.5 * con_height)),parseFloat(con_time_model_arr3[con_step_flag]) + parseFloat(0.5 * con_height * con_time_calc3),con_growth_float,con_capacity_int,3);
	  con_time_calc8 = equOneFn(parseFloat(con_time + parseFloat(0.5 * con_height)),parseFloat(con_time_model_arr4[con_step_flag]) + parseFloat(0.5 * con_height * con_time_calc4),con_growth_float,con_capacity_int,0.3);

	  con_time_calc9 = equOneFn(parseFloat(con_time + parseFloat(0.5 * con_height)),parseFloat(con_time_model_arr1[con_step_flag]) + parseFloat(0.5 * con_height * con_time_calc5),con_growth_float,con_capacity_int,1);
	  con_time_calc10 = equOneFn(parseFloat(con_time + parseFloat(0.5 * con_height)),parseFloat(con_time_model_arr2[con_step_flag]) + parseFloat(0.5 * con_height * con_time_calc6),con_growth_float,con_capacity_int,2);
	  con_time_calc11 = equOneFn(parseFloat(con_time + parseFloat(0.5 * con_height)),parseFloat(con_time_model_arr3[con_step_flag]) + parseFloat(0.5 * con_height * con_time_calc7),con_growth_float,con_capacity_int,3);
	  con_time_calc12 = equOneFn(parseFloat(con_time + parseFloat(0.5 * con_height)),parseFloat(con_time_model_arr4[con_step_flag]) + parseFloat(0.5 * con_height * con_time_calc8),con_growth_float,con_capacity_int,0.3);

	  con_time_calc13 = equOneFn(parseFloat(con_time + con_height),parseFloat(con_time_model_arr1[con_step_flag]) + parseFloat(con_height * con_time_calc9),con_growth_float,con_capacity_int,1);
	  con_time_calc14 = equOneFn(parseFloat(con_time + con_height),parseFloat(con_time_model_arr2[con_step_flag]) + parseFloat(con_height * con_time_calc10),con_growth_float,con_capacity_int,2);
	  con_time_calc15 = equOneFn(parseFloat(con_time + con_height),parseFloat(con_time_model_arr3[con_step_flag]) + parseFloat(con_height * con_time_calc11),con_growth_float,con_capacity_int,3);
	  con_time_calc16 = equOneFn(parseFloat(con_time + con_height),parseFloat(con_time_model_arr4[con_step_flag]) + parseFloat(con_height * con_time_calc12),con_growth_float,con_capacity_int,0.3);
	 
	  con_time_model_arr1[con_step_flag+1] = parseFloat(con_time_model_arr1[con_step_flag])+ parseFloat(con_height/6) * parseFloat(con_time_calc1 + parseFloat(2 * con_time_calc5) + parseFloat(2 * con_time_calc9) + con_time_calc13);
	  con_time_model_arr2[con_step_flag+1] = parseFloat(con_time_model_arr2[con_step_flag])+ parseFloat(con_height/6) * parseFloat(con_time_calc2 + parseFloat(2 * con_time_calc6) + parseFloat(2 * con_time_calc10) + con_time_calc14);
	  con_time_model_arr3[con_step_flag+1] = parseFloat(con_time_model_arr3[con_step_flag])+ parseFloat(con_height/6) * parseFloat(con_time_calc3 + parseFloat(2 * con_time_calc7) + parseFloat(2 * con_time_calc11) + con_time_calc15);
	  con_time_model_arr4[con_step_flag+1] = parseFloat(con_time_model_arr4[con_step_flag])+ parseFloat(con_height/6) * parseFloat(con_time_calc4 + parseFloat(2 * con_time_calc8) + parseFloat(2 * con_time_calc12) + con_time_calc16);
	
	  if( con_time_model_arr1[con_step_flag+1] < 0 ) {
	    con_time_model_arr1[con_step_flag+1]=0;
	  }
	  if( con_time_model_arr2[con_step_flag+1] < 0 ) {
			con_time_model_arr2[con_step_flag+1]=0;
	  }
	  if( con_time_model_arr3[con_step_flag+1] < 0 ) {
		con_time_model_arr3[con_step_flag+1]=0;
	  }
	  if( con_time_model_arr4[con_step_flag+1] < 0 ) {
		con_time_model_arr4[con_step_flag+1]=0;
      }
	  con_time = con_time + con_height;
	}
	for ( var i=0; i<con_steps_int; i++ ) {
	  con_time_X_arr.push(i+1);
	}		
  }
  /** Calculation of discrete time model */
  function disTimeModel(){
	getVal();	
	dis_time_model_arr[1] = dis_individuals_int;		
	while(true){
	  dis_step_flag = dis_step_flag+1;
	  if( dis_step_flag > dis_steps_int ) {
		break;
	  }	   
	  nprime=parseFloat(dis_time_model_arr[dis_step_flag]) + dis_growth_float * parseFloat(dis_time_model_arr[dis_step_flag]) * parseFloat(1 - Math.pow(parseFloat(dis_time_model_arr[dis_step_flag]/dis_capacity_int),dis_theta));
	  if( nprime < 0 ){
		nprime=0;
      }
	  dis_time_model_arr.push(nprime);   
	}
	for ( var i=0; i<dis_steps_int; i++ ) {
	  dis_time_X_arr.push(i+1);
	}
  }  
  /** Calculation of continuous bifurcation diagram */
  function conBifurcationDiagram(){
	con_bif_X_arr = []  ;
	con_bif_array_one = [];
	con_bif_array_two = [];
	con_prime_array_two = [];
	con_ones_array = [];
	con_num_array[0] = 101;
	con_num_array[1] = 101;
	for ( var j=0; j<500; j++ ) {
	  con_ones_array[j] = 1;
	}
	var ratio_val = 1.5;
	while (ratio_val<=3) {
	  for ( var t=1; t<=500; t++ ) {
	    con_prime_array_one = parseFloat(ratio_val) * parseFloat(con_num_array[t]) * parseFloat(1 - Math.pow(parseFloat(con_num_array[t]/100),1));
	    if (con_prime_array_one < 0 ) {
		   con_prime_array_one = 0;
		   con_num_array.push(con_prime_array_one);
	    }
	    con_num_array.push(con_prime_array_one);		
   	  }		 
	  for ( var jj=0; jj<500; jj++ ) {		  
	    con_bif_array_one[jj]=(ratio_val * con_ones_array[jj]);		  
	    if( jj >= 400 ) {			
	      con_bif_array_two.push(con_bif_array_one[jj]);		  
          con_prime_array_two.push(con_num_array[jj]);
	    }		
      }	 
      con_bif_X_arr=(ratio_val);
      ratio_val +=  0.01;
    }	
  }
  /** Calculation of discrete bifurcation diagram */
  function disBifurcationDiagram(){
	for (var j=0; j<500; j++) {
	  dis_ones_array[j] = 1;
	}		
	dis_num_array[0] = 101;
	var dis_ratio_value = 1.5;
	while (dis_ratio_value<=3) {
	  dis_num_array =[];
	  dis_num_array[0] = 101;
	  for (var t=0; t<=500; t++) {
		dis_prime_array_one = parseFloat(dis_num_array[t]) + parseFloat(dis_ratio_value * dis_num_array[t] * parseFloat(1 - Math.pow(parseFloat(dis_num_array[t]/100),1)));
		if (dis_prime_array_one < 0) {
		  dis_prime_array_one = 0;
		  dis_num_array.push(dis_prime_array_one);
		}
		dis_num_array.push(dis_prime_array_one);				
	  }
	  for (var n=0; n<500; n++) {
		dis_bif_array_one[n]=(dis_ratio_value * dis_ones_array[n]);
		if( n >= 400 ) {					
		  dis_bif_array_two[dis_bif_count]=dis_bif_array_one[n];
		  dis_prime_array_two[dis_bif_count]=dis_num_array[n];
		  dis_bif_count++;
		}
	  }
	  dis_bif_X_arr.push(dis_ratio_value);
	  dis_ratio_value += 0.01;
	}		
  }
  /** Calculation of continuous effect of population density */
  function conPopDen() {
	con_pop_num_array1[0] = 0;
	con_pop_num_array1[1] = 101;
	var con_pop_ratio = 1;
	while (con_pop_ratio<=25) {
	  con_pop_prime_arr = parseFloat(3 * con_pop_num_array1[con_pop_ratio] * parseFloat(1 - (Math.pow(parseFloat(con_pop_num_array1[con_pop_ratio]/100),1))));
	  if (con_pop_prime_arr < 0) {
		con_pop_prime_arr = 0;
	  } 
	  con_pop_num_array1.push(con_pop_prime_arr);
	  con_pop_ratio++;
	}
	con_pop_num_array2[0] = 0;
	con_pop_num_array2[1] = 99;
	var con_pop_ratio = 1;
	while (con_pop_ratio<=25) {
	  con_pop_prime_arr = parseFloat(3 * con_pop_num_array2[con_pop_ratio] * parseFloat(1 - (Math.pow(parseFloat(con_pop_num_array2[con_pop_ratio]/100),1))));
	  if (con_pop_prime_arr < 0) {
		con_pop_prime_arr = 0;
	  } else {
	    con_pop_num_array2.push(con_pop_prime_arr);
	  }
	  con_pop_X_arr.push(con_pop_ratio-1);
	  con_pop_ratio++;
    }
  }	
  /** Calculation of discrete effect of population density */
  function disPopDen() {		
	dis_pop_num_array1[0] = 101;
	var dis_pop_ratio = 0;
	while (dis_pop_ratio<=25) {
	  dis_pop_prime_arr = parseFloat(dis_pop_num_array1[dis_pop_ratio]) + parseFloat(3 * dis_pop_num_array1[dis_pop_ratio] * parseFloat(1 - Math.pow(parseFloat(dis_pop_num_array1[dis_pop_ratio]/100),1)));
	  if (dis_pop_prime_arr < 0) {
		dis_pop_prime_arr = 0;
	  } else {
		dis_pop_num_array1.push(dis_pop_prime_arr);
      }
	  dis_pop_ratio++;
	}	
	dis_pop_num_array2[0] = 99;
	dis_pop_ratio = 0;
	while (dis_pop_ratio<=25) {
	  dis_pop_prime_arr = parseFloat(dis_pop_num_array2[dis_pop_ratio]) + parseFloat(3 * dis_pop_num_array2[dis_pop_ratio] * parseFloat(1 - Math.pow(parseFloat(dis_pop_num_array2[dis_pop_ratio]/100),1)));
	  if (dis_pop_prime_arr < 0) {
		dis_pop_prime_arr = 0;
	  } else {
		dis_pop_num_array2.push(dis_pop_prime_arr);
	  }
	  dis_pop_X_arr.push(dis_pop_ratio+1);
	  dis_pop_ratio++;
	}
  }
  /** Equation One=Rate of growth * No. of individuals * (1 - Math.pow(No. of individuals/Carrying capacity,theta)) */
  function equOneFn(t,N,rm,K,theta) {
	var _value_one=parseFloat(N/K); /** No. of individuals/Carrying capacity */
	var _value_two=parseFloat(1 - Math.pow(_value_one,theta));
	var _return_val_eqn_one = parseFloat(rm * N * _value_two);
	return _return_val_eqn_one;
  }
  /** Equation Two=No. of individuals + Rate of growth * (1 - Math.pow(No. of individuals/Carrying capacity,theta)) */
  function equTwoFn(t,N,rm,K,theta) {
	var _return_val_eqn_two = N + rm * N *(1 - Math.pow((N/K),theta));
	if(_return_val_eqn_two < 0){
	  _return_val_eqn_two = 0;
	}
	return _return_val_eqn_two;
  }	
  /** Function for getting text box values */
  function getVal(){
	con_individuals_int=$("#conNoOfIndividuals").val();
	con_growth_float = $("#conRateGrowth").val();
	con_capacity_int = $("#conCarryCapacity").val();
	con_spatial_int=$("#conSpatialDistr").val();
	con_steps_int=$("#conNoOfSteps").val();
	con_ini_pop_int=$("#conInitialPopDen").val();	
	dis_individuals_int=$("#disNoOfIndividuals").val();
	dis_growth_float = $("#disRateGrowth").val();
	dis_capacity_int = $("#disCarryCapacity").val(); 
	dis_spatial_int=$("#disSpatialDistr").val();
	dis_steps_int=$("#disNoOfSteps").val();
	dis_ini_pop_int=$("#disInitialPopDen").val();	
	count1_int=0;
	count2_int=0;	
  }  
  /** Drop down calculation */
  function dropDownValue() {
    getVal();
	if ((prev_input1!=con_individuals_int)||(prev_input2!=con_growth_float)||(prev_input3!=con_capacity_int)||(prev_input4!=con_spatial_int)||(prev_input5!=con_steps_int)||(prev_input6!=con_ini_pop_int)||(prev_inp1!=dis_individuals_int)||(prev_inp2!=dis_growth_float)||(prev_inp3!=dis_capacity_int)||(prev_inp4!=dis_spatial_int)||(prev_inp5!=dis_steps_int)||(prev_inp6!=dis_ini_pop_int)) {
	  /** in case the user changes the previous inputed value, then it will do calculation again */
	  if (flag_con) {			
		if ($("#dropdownCon option:selected").val()=="Continuous Time model") {
		  clearCanvas();
		  conTimeModel();				
		} else if ($("#dropdownCon option:selected").val()=="Bifurcation Diagram") {
		  clearCanvas();
		  conBifurcationDiagram();
		} else if ($("#dropdownCon option:selected").val()=="Effect of Population Density") {
		  clearCanvas();
		  conPopDen();
		}
	  } else if (flag_dis) {
	    if ($("#dropdownDis option:selected").val()=="Discrete Time model") {
		  clearCanvas();
		  disTimeModel();
		} else if ($("#dropdownDis option:selected").val()=="Bifurcation Diagram") {
		  clearCanvas();
		  disBifurcationDiagram();
		} else if ($("#dropdownDis option:selected").val()=="Effect of Population Density") {
		  clearCanvas();
		  disPopDen();
		}
	  }
	}
	prev_input1 = con_individuals_int;
	prev_input2 = con_growth_float;
	prev_input3 = con_capacity_int;
	prev_input4 = con_spatial_int;
	prev_input5 = con_steps_int;
	prev_input6 = con_ini_pop_int;
	prev_inp1 = dis_individuals_int;
	prev_inp2 = dis_growth_float;
	prev_inp3 = dis_capacity_int;
	prev_inp4 = dis_spatial_int;
	prev_inp5 = dis_steps_int;
	prev_inp6 = dis_ini_pop_int;
  }
  /** Function for clear canvas */
  function clearCanvas(){	
    ctx_con.clearRect(0, 0, $('#speciesCanvas').width(), $('#speciesCanvas').height());
    ctx_dis.clearRect(0, 0, $('#speciesCanvas').width(), $('#speciesCanvas').height());    
  }  
  /** Function for clear all variables and arrays */
  function clearAllValues(){		
	$("#tinyGraphArea").css("display","none");
    clearInterval(run_iteration_timer);
    clearInterval(draw_item_timer);
	$("#stepRun").prop("disabled",false);
	$("#runIteration").prop("disabled",false);
	$("#Pause").prop("disabled",true);
	$("#ReSet").prop("disabled",false);	
	$("#plotGraph").prop("disabled",true);
	$(".dropBox").prop("disabled",false);
	select_iteration_int=0;
	step_count_int=0;
	timer_current_count=0;
	prev_input1 = prev_input2 = prev_input3 = prev_input4 = prev_input5 = prev_input6 = 0;
    prev_inp1 = prev_inp2 = prev_inp3 = prev_inp4 = prev_inp5 = prev_inp6 = 0;
	 con_step_flag=0;
    con_time = 0;
	con_height = 1;
	theta = 1;
	num_item_float=0;
	count1_int=0;
	count2_int=0;
	dis_step_flag = 0;
	dis_theta = 1;
	con_individuals_int=10;
	con_growth_float=0.6;
	con_capacity_int=100;
	con_spatial_int=1;
	con_steps_int=25;
	con_ini_pop_int=100;
	dis_individuals_int=80;
	dis_growth_float=1.1;
	dis_capacity_int=100;
	dis_spatial_int=1;
	dis_steps_int=15;
	dis_ini_pop_int=100;
	dis_bif_count = 0;	
	con_time_model_arr1=[]
	con_time_model_arr2=[];
	con_time_model_arr3=[];
	con_time_model_arr4=[];
	con_time_X_arr=[];
	dis_time_model_arr=[];
	dis_time_X_arr=[];
	chart_category_names=[];
	chart_data_provider1=[];
	chart_data_provider2=[];
	chart_data_provider3=[];
	chart_data_provider4=[];
	chart_data_provider5=[];
	chart_data_provider6=[];
	chart_data_provider7=[];
	chart_data_provider8=[];
	chart_data_provider9=[];
	chart_data_provider10=[];
	con_num_array=[];
	con_bif_X_arr=[];
	con_bif_array_one=[];
	con_bif_array_two=[];
	con_prime_array_one=[];
	con_prime_array_two=[];
	con_ones_array=[];
	dis_num_array=[];
	dis_bif_X_arr=[];
	dis_bif_array_one=[];
	dis_bif_array_two=[];
	dis_prime_array_one=[];
	dis_prime_array_two=[];
	dis_ones_array=[];
	con_pop_X_arr=[];
	con_pop_num_array1=[];
	con_pop_num_array2=[];
	con_pop_prime_arr=[];
	dis_pop_X_arr=[];
	dis_pop_num_array1=[];
	dis_pop_num_array2=[];
	dis_pop_prime_arr=[];
    plot_array1=[];
    plot_array2=[];
    plot_array3=[];
    plot_array4=[];
    plot_array5=[];
	plot_array6=[];
	plot_array7=[];
	plot_array8=[];
	plot_array9=[];
	plot_array10=[];
  }