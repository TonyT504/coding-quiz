// connect html to js by creating variables and using document.getElementById
var startButton = document.getElementById("start")
var quizStart = document.querySelector(".quiz-start")
var Qi = 0
// Make array of question objects 
var questions = [
    {
    questionText:"question 1", 
    choices: ["a", "b", "c", "d"], 
    answer:"a"
},{
    questionText:"question 2", 
    choices: ["a", "b", "c", "d"], 
    answer:"b"
},{
    questionText:"question 3", 
    choices: ["a", "b", "c", "d"], 
    answer:"c"
},{
    questionText:"question 4", 
    choices: ["a", "b", "c", "d"], 
    answer:"d"
}]
function buildQuestionCard(){
    var questionTextEl = document.getElementById("question-text")
    questionTextEl.textContent = questions[Qi].questionText;
    var answersEl = document.querySelector(".answers")
    answersEl.innerHTML = ""
    questions[Qi].choices.forEach(function(choice){
        var button = document.createElement("button")
        button.setAttribute("value",choice)
        button.onclick = function(){
            console.log(this.value)
            if (this.value !==questions[Qi].answer){
                console.log("wrong") // timer 
            } else {
                console.log("right") // add to score
            } Qi++ ;
            if(Qi === questions.length){
                console.log("End game") // accept initials
            } else{
                buildQuestionCard()
            }
        
        }
        button.textContent = choice;
        answersEl.appendChild(button)
    })

}
// add event listener for start button 
startButton.addEventListener("click", function(){
    quizStart.classList.add("hide");
    buildQuestionCard();

})
