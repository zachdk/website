 function calculate() {

 // all the scores from the page  user input
  var s1=document.getElementById("score1").value;  
  var s2=document.getElementById("score2").value;
  var s3=document.getElementById("score3").value;
  var s4=document.getElementById("score4").value;
  var s5=document.getElementById("score5").value;
  var s6=document.getElementById("score6").value;
  var s7=document.getElementById("score7").value;
  var s8=document.getElementById("score8").value;
 //all thw grade weights from the page   user input
  var w1=document.getElementById("Weight1").value;
  var w2=document.getElementById("Weight2").value;
  var w3=document.getElementById("Weight3").value;
  var w4=document.getElementById("Weight4").value;
  var w5=document.getElementById("Weight5").value;
  var w6=document.getElementById("Weight6").value;
  var w7=document.getElementById("Weight7").value;
  var w8=document.getElementById("Weight8").value;
  
  //the ranges a-d if class is scaled differnt  user input
  var agoal=document.getElementById("ARange").value;
  var bgoal=document.getElementById("BRange").value;
  var cgoal=document.getElementById("CRange").value;
  var dgoal=document.getElementById("DRange").value;
   
   // w = total weight of class left
  var w=100-w1-w2-w3-w4-w5-w6-w7-w8;
  // total weight of completed class
  var donage=(100-w);
  
 //following calculate score x times  weight y and adds them in small groups for viewing purpose 
  var onetwo=s1*(w1/100)+s2*(w2/100);   
  var threefour=s3*(w3/100)+s4*(w4/100);
   
   var onefour= onetwo+threefour;

  var fivesix=s5*(w5/100)+s6*(w6/100);
  var eveight=s7*(w7/100)+s8*(w8/100);
  
  var fiveeight= fivesix+eveight;
  
  //completed total of score times weight
 var score=onefour+fiveeight;
 //
  
  //average for class so far
  var myaverage= (onefour+fiveeight)/donage;
  
   document.getElementById("est").innerHTML = Math.round(myaverage*100);
 // lists the grade required by the remaining percentage to get the goal grade
  var aish=(agoal-score)/((100-donage)/100);
  var bish=(bgoal-score)/((100-donage)/100);
  var cish=(cgoal-score)/((100-donage)/100);
   var dish= (dgoal-score)/((100-donage)/100);
   
   document.getElementById("a").innerHTML = Math.round(aish);
	document.getElementById("b").innerHTML = Math.round(bish);
	document.getElementById("c").innerHTML = Math.round(cish);
	document.getElementById("d").innerHTML = Math.round(dish);
	 }
  

  
   
 
		

 
 
 
  