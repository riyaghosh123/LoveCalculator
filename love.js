function love(){
    var name1= document.getElementById("nameo").Value;
    var name2= document.getElementById("namet").Value;
    var random= Math.floor(Math.random()*101);
    document.getElementById("print").innerHTML= "you both have "+ random +"%"+ " of love ";
}
