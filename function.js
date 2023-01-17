
let computerNumber = 10;

function readNumber(){
  let Submition = document.getElementById("submition").value
console.log(Submition);
return Submition;

}

function numberComparison(submittedNumber){
    if (submittedNumber>computerNumber){
        return "The submitted number is larger"
    };
    if (submittedNumber<computerNumber){
        return "The computer generated number is larger"
    };
    return "You won."

}

function answerOutput(answer){
    document.getElementById("answer").innerHTML=answer;
}

function checkSubmittion(){
    console.log("Checked", computerNumber);
    let mention = readNumber();
    let result = numberComparison(mention);
    answerOutput(result);   
}

function changeNumber(){
    computerNumber = Math.round(Math.random() * 100);
    console.log(computerNumber);
}