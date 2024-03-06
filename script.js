function startGame(){

alert("welcome to treasure pursuit")
alert("in this game the treasures are of different value")
alert("the winner has treasures of most value")


//confirms 


var question1 = confirm("would you like to start from at home in the city?")

if(question1 === true){
    alert(" now you can start your trek")
}
else{
   var question2 = confirm("or from at home in a town?")
   if(question2 === true){
    alert(" now you can start your trek")
   }else{
    var question3=confirm("or from at home in the countryside")
    if(question3 === true)
    alert("now you can start your trek)")}
}
   
alert("list of treasures and their value")
alert("Treasures: gems value = 3, food = 5, friends = 8")
}