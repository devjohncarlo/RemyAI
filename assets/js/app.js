
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

  let sixthLine = document.querySelector(`.user-prompt:nth-child(${allMsg - 5})`);
  let fifthLine = document.querySelector(`.ai-prompt:nth-child(${allMsg - 4})`);
  let removeUserMsg = document.querySelector(`.user-prompt:nth-child(${allMsg - 7})`);
  let removeAiMsg = document.querySelector(`.ai-prompt:nth-child(${allMsg - 6})`);

  if(allMsg == 6){

    gsap.to(sixthLine, {opacity: .25});
    gsap.to(fifthLine, {opacity: .5});
    

  }else if(allMsg >= 7){
    gsap.to(sixthLine, {opacity: .25, delay: 1.5});
    gsap.to(fifthLine, {opacity: .5, delay: 1.5});
    
    gsap.to(removeUserMsg, {opacity: 0, display: "none", duration: 1});
    gsap.to(removeAiMsg, {opacity: 0,display: "none", duration: 1});
  }
  
}





