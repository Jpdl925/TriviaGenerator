let generalKnowledge = document.getElementById("generalKnowledge").addEventListener('click', () =>{
    triviaQuestion();
});
let scienceNature = document.getElementById("scienceNature").addEventListener('click', () =>{
    scienceNatureQuestion();
});
let art = document.getElementById("art").addEventListener('click', () =>{
    artQuestion();
});
let questionTxt = document.getElementById("questionTxt");
let answerTxt = document.getElementById("answer");
let audio = new Audio("/media/laughTrack.mp3");





async function triviaQuestion(){
    let firstQ = await fetch("https://opentdb.com/api.php?amount=10&category=9").then((Response) => Response.json());
    let question = firstQ.results[0].question;
    let answer = firstQ.results[0].correct_answer;
    questionTxt.innerText = question;
    answerTxt.innerText = answer;
    console.log(firstQ.results);
    console.log(question);
    console.log(answer);
}
async function scienceNatureQuestion(){
    let secondQ = await fetch("https://opentdb.com/api.php?amount=10&category=17").then((Response) => Response.json());
    let question2 = secondQ.results[0].question;
    let answer2 = secondQ.results[0].correct_answer;
    questionTxt.innerText = question2;
    answerTxt.innerText = answer2;
    console.log(secondQ.results);
    console.log(question2);
    console.log(answer2);
}

async function artQuestion(){
    let thirdQ = await fetch("https://opentdb.com/api.php?amount=10&category=25").then((Response) => Response.json());
    let question3 = thirdQ.results[0].question;
    let answer3 = thirdQ.results[0].correct_answer;
    questionTxt.innerText = question3;
    answerTxt.innerText = answer3;
    console.log(thirdQ.results);
    console.log(question3);
    console.log(answer3);

}


