var result =document.getElementById("result");
function display(number){
result.value +=number;
}
function calculation(){
 var output = result.value;
 var final_output = eval(output);
 result.value= final_output;
}
function allclear(){
    result.value = "";
}
function drop(){
    result.value = result.value.slice(0, -1);
}