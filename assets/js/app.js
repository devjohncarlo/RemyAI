
var myConfig = [
	'particlesjs-config.json'
];

var randomConfig = myConfig[Math.floor(Math.random()*myConfig.length)]

particlesJS.load('particles-js', randomConfig, function() {
  console.log('particles.js loaded - callback');
});


const DivContainer = document.getElementById("prompt-msg");
const userInput = document.getElementById("user-input");
const buttonSubmit = document.getElementById("submit");

//A small validation for input as the button is remain disabled if input is blank
userInput.addEventListener("input", function() {
    if (userInput.value) {
      buttonSubmit.removeAttribute("disabled");
    } else {
      buttonSubmit.setAttribute("disabled", true);
    }
  });

//On key press enter
userInput.addEventListener("keypress", function(event) {
    //The condition below prevents function to execute if the input blank
    if (event.key === "Enter" && userInput.value.trim() !== "") {
      readPrompt();
    }
  });


function readPrompt() {

  hideGreetings();
  
  //Variables 
  let userInput = document.getElementById("user-input").value;
  let userName = "John Doe:";
  let aiName = "Remy AI:";

  //Creating HTML tags for User and AI conversation
  const tbl = document.createElement("table");
  const tblBody = document.createElement("tbody");
  
  let userNameContainer = document.createElement("span");
  let userMsg = document.createElement("span");
  let userPrompt = document.createElement("div");
  //Putting Class for css styles
  userNameContainer.classList.add("username-cont" );
  userMsg.classList.add("user-msg" );
  userPrompt.classList.add("user-prompt");

  DivContainer.append(userPrompt);
  userPrompt.append(userNameContainer, userMsg);
  userNameContainer.textContent = userName;
  userMsg.textContent = userInput;

  gsap.fromTo(userPrompt, { 
    opacity: 0, 
    y: 100
  }, { 
    opacity: 1, 
    y: 0, 
    duration: .2
  });

  if(userInput.toLowerCase() !== "graph"){
    
    let aiNameContainer = document.createElement("span");
    let aiMsg = document.createElement("span");
    let aiPrompt = document.createElement("div");

    aiNameContainer.classList.add("ainame-cont" );
    aiMsg.classList.add("ai-msg" );
    aiPrompt.classList.add("ai-prompt");

    DivContainer.append(aiPrompt);
    aiPrompt.append(aiNameContainer, aiMsg);
    aiNameContainer.textContent = aiName;
    aiMsg.textContent = "Hello there! How can I assist you?";
  
    gsap.fromTo(aiPrompt, { 
      opacity: 0, 
      y: 100
    }, { 
      opacity: 1, 
      y: 0, 
      duration: .4,
      delay: .6
    });

  }else if(userInput.toLowerCase() == "graph"){
    
    // creates a <table> element and a <tbody> element

    // creating all cells
    for (let i = 0; i < 7; i++) {
      // creates a table row
      const row = document.createElement("tr");

      for (let j = 0; j < 7; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        const cell = document.createElement("td");
        const cellText = document.createTextNode(`cell in row ${i}, column ${j}`);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }

      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);

    let aiNameContainer = document.createElement("span");
    let aiMsg = document.createElement("span");
    let aiPrompt = document.createElement("div");

    aiNameContainer.classList.add("ainame-cont" );
    aiMsg.classList.add("ai-msg");
    aiPrompt.classList.add("ai-prompt");
    
    DivContainer.append(aiPrompt);
    aiPrompt.append(aiNameContainer, aiMsg, tbl);
    aiNameContainer.textContent = aiName;
    aiMsg.textContent = "Here are all your current properties:";
    
    // sets the border attribute of tbl to '2'
    tbl.setAttribute("border", "2");

    gsap.fromTo(aiPrompt, { 
      opacity: 0, 
      y: 100
    }, { 
      opacity: 1, 
      y: 0, 
      duration: .4,
      delay: .6
    });

  }
 
  
  let allMsg = DivContainer.getElementsByTagName('div').length;


  /* let sixthLine = document.querySelector(`.user-prompt:nth-child(${allMsg - 5})`);
  let fifthLine = document.querySelector(`.ai-prompt:nth-child(${allMsg - 4})`);
  let removeUserMsg = document.querySelector(`.user-prompt:nth-child(${allMsg - 7})`);
  let removeAiMsg = document.querySelector(`.ai-prompt:nth-child(${allMsg - 6})`);
 */
  if(allMsg == 6){

    removeClasses();
    setClasses();
    /* gsap.to(sixthLine, {opacity: .25});
    gsap.to(fifthLine, {opacity: .5}); */
    

  }else if(allMsg >= 8 && allMsg < 10){
    removeClasses();
    setClasses();
    const prevContainer = document.querySelector('.prev-container');
    gsap.to(".prev-container", { display: "flex"});
    prevContainer.classList.add("prev-container");
   /*  gsap.to(sixthLine, {opacity: .25, delay: 1.5});
    gsap.to(fifthLine, {opacity: .5, delay: 1.5});
    gsap.to(removeUserMsg, {opacity: 0, display: "none", duration: 1});
    gsap.to(removeAiMsg, {opacity: 0,display: "none", duration: 1}); */
  }
  else if(allMsg >= 10){
    reverseRemoveClasses();
    setClasses();
  }
  prevCount = 0;
}

function viewPrevious(){
  removeClasses();
  prevClasses();
 
}
function viewLatest(){
  removeClasses();
  nextClasses();
 
}
function removeClasses(){

  let allLine = document.querySelectorAll('.ai-prompt, .user-prompt');
  allLine.forEach((element) => {
    element.classList.remove("main", "fade");
  });
}
function reverseRemoveClasses(){

  let allLine = document.querySelectorAll('.ai-prompt, .user-prompt');
  allLine.forEach((element) => {
    element.classList.remove("main", "fade", "hidden");
  });
}
var prevCount = 0;

function prevClasses(){

  var promptCount = DivContainer.getElementsByTagName('div').length;
  var promptCount = promptCount + prevCount;
  console.log(promptCount + "test");
  let latestLine = document.querySelectorAll(`.ai-prompt:nth-child(${promptCount}), .user-prompt:nth-child(${promptCount - 1})`);
  let prevLine = document.querySelectorAll(`.ai-prompt:nth-child(${promptCount - 6}), .user-prompt:nth-child(${promptCount - 7})`);
  let secondLine = document.querySelectorAll(`.ai-prompt:nth-child(${promptCount - 2}), .user-prompt:nth-child(${promptCount - 3})`);

  console.log(prevCount);


   secondLine.forEach((element) => {
   
    element.classList.add('fade');
  });

  latestLine.forEach((element) => {
    console.log(element);
    element.classList.add('hidden');
  });
  
  prevLine.forEach((element) => {
    element.classList.add('main');
    element.classList.remove('hidden', 'fade');
   
  });

  if(promptCount <= 8){
    const prevContainer = document.querySelector('.prev-container');
    const nextContainer = document.querySelector('.next-container');
    gsap.to(".prev-container", { display: "none"});
    gsap.to(".next-container", { display: "flex"});
    prevContainer.classList.add("prev-container");
    prevContainer.classList.add("next-container");
  }else{
    prevCount = prevCount - 2;
    console.log(prevCount);
  }
}
function nextClasses(){

  var promptCount = DivContainer.getElementsByTagName('div').length;
  var promptCount = promptCount + prevCount;
  console.log(promptCount + "test");
  let latestLine = document.querySelectorAll(`.ai-prompt:nth-child(${promptCount}), .user-prompt:nth-child(${promptCount - 1})`);
  let firstLine = document.querySelectorAll(`.ai-prompt:nth-child(${promptCount - 6}), .user-prompt:nth-child(${promptCount - 7})`);
  let secondLine = document.querySelectorAll(`.ai-prompt:nth-child(${promptCount - 4}), .user-prompt:nth-child(${promptCount - 5})`);
  let hiddenLine = document.querySelectorAll(`.ai-prompt:nth-child(n+2):nth-child(-n + ${ promptCount-6}), .user-prompt:nth-child(n+1):nth-child(-n + ${ promptCount-7})`);
 
  console.log(promptCount);

  secondLine.forEach((element) => {
   
    element.classList.add('fade');
  });

  firstLine.forEach((element) => {
   
    
    element.classList.add('hidden');
  });

  latestLine.forEach((element) => {
   
    element.classList.add('main');
    element.classList.remove('hidden', 'fade');
  });

  if(promptCount >= 8){
    hiddenLine.forEach((element) => {
     /*  console.log(element); */
      element.classList.add('hidden');
    });
  }

  if(promptCount == prevCount){
    const prevContainer = document.querySelector('.prev-container');
    const nextContainer = document.querySelector('.next-container');
    gsap.to(".prev-container", { display: "flex"});
    gsap.to(".next-container", { display: "none"});
    prevContainer.classList.add("prev-container");
    prevContainer.classList.add("next-container");
  }else{
    prevCount = prevCount + 2;
    console.log(prevCount);
  }
}

function setClasses(){
  let promptCount = DivContainer.getElementsByTagName('div').length;
  let latestLine = document.querySelectorAll(`.ai-prompt:last-child, .user-prompt:nth-child(${promptCount - 1})`);
  let firstLine = document.querySelectorAll(`.ai-prompt:nth-child(${promptCount - 6}), .user-prompt:nth-child(${promptCount - 7})`);
  let secondLine = document.querySelectorAll(`.ai-prompt:nth-child(${promptCount - 4}), .user-prompt:nth-child(${promptCount - 5})`);
  let hiddenLine = document.querySelectorAll(`.ai-prompt:nth-child(n+2):nth-child(-n + ${ promptCount-6}), .user-prompt:nth-child(n+1):nth-child(-n + ${ promptCount-7})`);
 
  console.log(promptCount);

  secondLine.forEach((element) => {
   
    element.classList.add('fade');
  });

  firstLine.forEach((element) => {
   
    
    element.classList.add('hidden');
  });

  latestLine.forEach((element) => {
   
    element.classList.add('main');
  });

  if(promptCount >= 8){
    hiddenLine.forEach((element) => {
     /*  console.log(element); */
      element.classList.add('hidden');
    });
  }
}


