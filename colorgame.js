//variable declaration
var totalboxes= 6;
var colors = generaterandomcolors(totalboxes);
var colorgiv =document.querySelectorAll(".color");
var colorquest= document.getElementById("colorquest");
var pickedcolor= pickcolor();
var msg=document.getElementById("message");
var head=document.querySelector(".head");
var reset=document.getElementById("reset");

//start fro here
colorquest.textContent=pickedcolor;
gamestart();

//function for start the game//
function gamestart(){
for(var i=0;i<colors.length;i++)
{
	colorgiv[i].style.backgroundColor=colors[i];
colorgiv[i].addEventListener("click",function(){
var clickedcolor = this.style.backgroundColor;
if(clickedcolor===pickedcolor)
{msg.textContent="correct";
reset.textContent="Play Again!";
changecolor(pickedcolor);
head.style.backgroundColor=pickedcolor;
}
else
{this.style.backgroundColor="rgb(0, 0, 0)";
msg.textContent="Try Again!";}	
})
}
}
//-----------------------------------//

//function for changing color of black div//
function changecolor(color){
	for(var i=0;i<colors.length;i++)
colorgiv[i].style.backgroundColor=color;
}
//--------------------------------------//

//function for puhing the colors un array which are randomaly generated//
function generaterandomcolors(num){
var arr = [];
for(var i=0;i<num;i++)
arr.push(randomcolor());
return arr;
}
//---------------------------//

//function for randomaly color allocating..
function randomcolor()
{
var r=Math.floor(Math.random() * 256);
var g=Math.floor(Math.random() * 256);
var b=Math.floor(Math.random() * 256);	
return "rgb(" + r +", "+ g +", "+ b +")";
}
//---------------------------------//

//code for pickcolorfunction//
function pickcolor(){
	var random=Math.floor(Math.random() * colors.length);
     return colors[random]; 
                    }
 //-----------------------------//
                    
 //code for new color button-----//    
 reset.addEventListener("click",function(){
msg.textContent="ready";
reset.textContent="NEW COLORS";
head.style.backgroundColor="#537ec5";
colors = generaterandomcolors(totalboxes);
pickedcolor= pickcolor();
colorquest.textContent=pickedcolor;
gamestart();
 })
//------------------------------// 


//----code for the two buttons easy and hard----//
var easebtn=document.getElementById("easy");
var hardbtn=document.getElementById("hard");
easebtn.addEventListener("click",function(){
	hardbtn.classList.remove("selected");
	easebtn.classList.add("selected");
	reset.textContent="NEW COLORS";
	msg.textContent="ready";
head.style.backgroundColor="#537ec5";
	totalboxes = 3;
    colors = generaterandomcolors(totalboxes);
    pickedcolor= pickcolor();
    colorquest.textContent=pickedcolor;
    for(var i=0;i<colorgiv.length;i++)
   {if(colors[i])
colorgiv[i].style.backgroundColor=colors[i];
   	else
colorgiv[i].style.display="none";
   }	

});
hardbtn.addEventListener("click",function(){
	easebtn.classList.remove("selected");
	hardbtn.classList.add("selected");
	reset.textContent="NEW COLORS";
	msg.textContent="ready";
head.style.backgroundColor="#537ec5";
	totalboxes = 6;
colors = generaterandomcolors(totalboxes);
    pickedcolor= pickcolor();
    colorquest.textContent=pickedcolor;
    for(var i=0;i<colorgiv.length;i++)
      {
colorgiv[i].style.backgroundColor=colors[i];
colorgiv[i].style.display="block";	
      }
})
//-------------------------------//
