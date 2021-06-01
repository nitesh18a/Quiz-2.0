let Quiz = [
  {
    question:
      "What does HTML stand for? ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
    option: [
      "Hyper Tag Markup Language",
      "Hyper Text Markup Language",
      "Hyperlinks Text Mark Language",
      "Hyperlinking Text Marking Language",
    ],
    answer: 2,
  },
  {
    question: "What does CSS stand for?",
    option: [
      "Computing Style Sheet",
      "Creative Style System",
      "Cascading Style Sheet",
      "Creative Styling Sheet",
    ],
    answer: 3,
  },
  {
    question: "Where should a CSS file be referenced in a HTML file?",
    option: [
      "Before any HTML code",
      "After all HTML code",
      "Inside the head section",
      "Inside the body section",
    ],
    answer: 3,
  },
  {
    question:
      "What is the correct format for aligning written content to the center of the page in CSS?",
    option: [
      "Text-align:center;",
      "Font-align:center;",
      "Text:align-center;",
      "Font:align-center;",
    ],
    answer: 1,
  },
  {
    question:
      "What is the correct format for changing the background colour of a div in CSS?",
    option: [
      "Bg-color:red;",
      "bg:red;",
      "Background-colour:red;",
      "Background-color:red;",
    ],
    answer: 4,
  },
  {
    question: "Choose the correct HTML tag for the largest heading",
    option: ["<heading>", "<h6>", "<head>", "<h1>"],
    answer: 4,
  },
  {
    question: "Which is the correct CSS syntax?",
    option: [
      "Body {color: black}",
      "{body;color:black}",
      "{body:color=black(body}",
      "body:color=black",
    ],
    answer: 1,
  },
  {
    question:
      "In CSS, what is the correct option to select all the tags on a page?",
    option: ["<p> { }", ".p { }", "#p { }", "* { }"],
    answer: 4,
  },
  {
    question: "Select the correct HTML tag to make a text italic?",
    option: ["Italic", "II", "IT", "I"],
    answer: 4,
  },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");

const mark = document.querySelector("#mark");

const clearoptions = document.querySelector("#clear-button");
const prev = document.querySelector("#prev-question-button");
const next = document.querySelector("#next-question-button");
const save = document.querySelector("#save-button");
const review = document.querySelector("#review-button");
const submit = document.querySelector("#submit-button");
const answers = document.querySelectorAll(".answer");

let questioncount = 0;

var n = Quiz.length;
var Qstatus = new Array(n).fill(0);
var AStatus = new Array(n).fill(0);
var answered=0, marked=0,visited=0, maa=0;

const loadQuestion = () => {
  document.getElementById('answerd').innerText = answered;
  document.getElementById('marked').innerText = marked;
  document.getElementById('notvisited').innerText = n-visited-1;
  document.getElementById('notans').innerText = visited - maa-answered;
  document.getElementById('maa').innerText = maa;

  if(questioncount==n-1) document.getElementById('next-question-button').disabled = true;
  else document.getElementById('next-question-button').disabled = false;
  if(questioncount==0)  document.getElementById("prev-question-button").disabled = true;
  else document.getElementById("prev-question-button").disabled = false;
  if(questioncount==n-1) document.getElementById('review-button').innerHTML ="Review";
  else document.getElementById('review-button').innerHTML ="Review & Next";
  const questionlist = Quiz[questioncount];
  question.innerHTML = questionlist.question;
  option1.innerText = questionlist.option[0];
  option2.innerText = questionlist.option[1];
  option3.innerText = questionlist.option[2];
  option4.innerText = questionlist.option[3];
  var ele = document.getElementsByName("option");
  if(AStatus[questioncount]==0){
    for(var i=0;i<ele.length;i++) ele[i].checked =false;
  }
  else{
    for(var i=0;i<ele.length;i++)
       if(AStatus[questioncount]==i+1) ele[i].checked=true;
  }
};
//pallate code start
function loadQuestion_on_id(props) {
  questioncount = props.id;
  loadQuestion();
  console.log("clicked");
}
function printBtn() {
    for (var i = 0; i < n; i++) {
       var btn = document.createElement("button");
       var t = document.createTextNode(i+1);
       btn.appendChild(t);
      //  console.log(t);
       btn.style.marginLeft = "50px";
       btn.style.margin ="10px";
       btn.id =i+1;
       document.getElementById('pallate').appendChild(btn);
    }
}
var testi = document.getElementById('pallate');
console.log(testi);

printBtn();

//pallate code end


$(function () {
  //time code starts
  let totaltime = 600;
  let min = 0;
  let sec = 0;

  let counter = 0;
  let timer = setInterval(function () {
    counter++;
    min = Math.floor((totaltime - counter) / 60);
    sec = totaltime - min * 60 - counter;
    $(".timer").text("Time Left: " + min + ":" + sec);
    $(".line1 span").text(1 + questioncount + "/" + Quiz.length);
  }, 1000);
  //time code ends
});

loadQuestion();

// const getCheckAnswer = () => {
//   let answer;
//   answers.forEach((curAnsElem) => {
//     if (curAnsElem.checked) {
//       answer = curAnsElem.id;
//     }
//   });
//   return answer;
// };
// const deselectAll = () => {
//   answers (curAnsElem) => (curAnsElem.checked = false));
// };

prev.addEventListener("click", () => {
  visited = Math.max(visited, questioncount);
  var ele = document.getElementsByName("option");
    for(var i=0;i<ele.length;i++)
       if(ele[i].checked == true) AStatus[questioncount]=i+1;
  questioncount--;
  loadQuestion();
});
next.addEventListener("click", () => {
  visited = Math.max(visited, questioncount+1);
  if(Qstatus[questioncount]==0)  Qstatus[questioncount]=1;
  var ele = document.getElementsByName("option");
    for(var i=0;i<ele.length;i++)
       if(ele[i].checked == true) AStatus[questioncount]=i+1;
  questioncount++;
  loadQuestion();
});
save.addEventListener("click", () =>{
  visited = Math.max(visited, questioncount+1);
  var ele = document.getElementsByName("option");
    for(var i=0;i<ele.length;i++)
       if(ele[i].checked == true) AStatus[questioncount]=i+1;

  if(AStatus[questioncount]!=0) {
    if(Qstatus[questioncount]!=5) {Qstatus[questioncount]=5;  answered++;}
    if(questioncount!=n-1){
      questioncount++;
    loadQuestion();
    }
    else window.alert("do you really want to submit the Quiz.");
  } 
});
review.addEventListener("click", () =>{
  visited = Math.max(visited, questioncount+1);
  var ele = document.getElementsByName("option");
    for(var i=0;i<ele.length;i++)
       if(ele[i].checked == true) AStatus[questioncount]=i+1;

  if(AStatus[questioncount]==0) {marked++; Qstatus[questioncount]=3;}
  else { maa++; Qstatus[questioncount]=4;}
  console.log();
  if(questioncount!=n-1) {questioncount++; loadQuestion();}

});
clearoptions.addEventListener("click", () => {
  visited = Math.max(visited, questioncount+1);
  AStatus[questioncount] =0;
  Qstatus[questioncount]=1;
  loadQuestion();
});
submit.addEventListener("click", () =>{
  visited = Math.max(visited, questioncount+1);
  console.log(Qstatus);
  console.log("clicked");

  //window.alert("do you really want to submit the Quiz.");
});
// mark.addEventListener("click", () => {
//   var curcircle = questioncount;
//   var element = document.getElementById(curcircle);
//   element.classList.add("marked");
//   questioncount++;
//   if (questioncount >= 0 && questioncount < Quiz.length) {
//     loadQuestion();
//     deselectAll();
//   } else {
//     questioncount = Quiz.length - 1;
//     loadQuestion();
//   }
// });
