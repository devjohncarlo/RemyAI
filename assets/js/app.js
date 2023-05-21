/* Particle JS */
var myConfig = [
	'particlesjs-config.json'
];

var randomConfig = myConfig[Math.floor(Math.random()*myConfig.length)]

particlesJS.load('particles-js', randomConfig, function() {
  console.log('particles.js loaded - callback');
});
/*End of Particle JS */



const DivContainer = document.getElementById("prompt-msg");
const userInput = document.getElementById("user-input");
const buttonSubmit = document.getElementById("submit");
const form = document.getElementById('myForm');
const formFieldsContainer = document.getElementById('formFieldsContainer');

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
  let aiName = "Remy:";
  let userInputDisabled = document.getElementById("user-input");
  let buttonDisabled = document.getElementById("submit");
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

  //Type Writing JS
 
  if(userInput.toLowerCase() !== "graph" && userInput !== "" && userInput !== "onboard new property"){
    
    removeClasses();
    let allMsg = DivContainer.getElementsByTagName('div').length;
    let aiNameContainer = document.createElement("span");
    let aiMsg = document.createElement("span");
    let aiPrompt = document.createElement("div");
    let aiCursor = document.createElement("span");
    aiCursor.setAttribute('id', 'cursor');
    aiCursor.textContent = "|";

    aiNameContainer.classList.add("ainame-cont" );
    aiMsg.classList.add("ai-msg" );
    aiMsg.setAttribute('id', 'ai-msg');
    aiPrompt.classList.add("ai-prompt");

    DivContainer.append(aiPrompt);
    aiPrompt.append(aiNameContainer, aiMsg);
    aiNameContainer.textContent = aiName;

    function enableInputField() {
      userInputDisabled.disabled = false;
      buttonDisabled.disabled = false;
    }

    if(allMsg > 0 && allMsg <= 2){
      aiPrompt.append(aiCursor);  
      }

    let text = document.querySelector("#ai-msg");
    let cursor = document.querySelector("#cursor");
    gsap.fromTo(cursor, {autoAlpha: 0, x: 2}, {autoAlpha: 1, duration: 0.5, repeat: -1, ease: SteppedEase.config(1)});
    userInputDisabled.disabled = true;
    buttonDisabled.disabled = true;
    let tween = gsap.to("#ai-msg", {
      text: {
        value: "Hello there! How can I assist you?"
      }, 
      duration: 3,
      delay: .5, 
      ease: "none",
      onComplete: enableInputField,
      onUpdate: () => text.appendChild(cursor),
      
    });

    
   
    /* document.querySelector('#restart').onclick = () => tween.restart() */
    /* document.querySelector('#pause').onclick = () => tween.pause()
    document.querySelector('#resume').onclick = () => tween.resume() */
    /*  document.querySelector('#reverse').onclick = () => tween.reverse() */
  
  
  
    //end of typewriting

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
    for (let i = 0; i < 7; i++) {
      const row = document.createElement("tr");
      for (let j = 0; j < 7; j++) {
        const cell = document.createElement("td");
        const cellText = document.createTextNode(`cell in row ${i}, column ${j}`);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
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
    
  }else if(userInput.toLowerCase() == "onboard new property") {
    const aiNameContainer = document.createElement("span");
    const aiMsg = document.createElement("span");
    const aiPrompt = document.createElement("div");
    const fieldContainer = document.createElement('div');
    const textField = document.createElement('input');
    const emailField = document.createElement('input');
    const numberField = document.createElement('input');
    const buttonForms = document.createElement('button');
    
    textField.type = 'text';
    textField.placeholder = 'Enter text';
    emailField.type = 'email';
    emailField.placeholder = 'Enter email';
    numberField.type = 'number';
    numberField.placeholder = 'Enter number';
    buttonForms.type = "submit";
    buttonForms.textContent = "Submit"

    aiNameContainer.classList.add("ainame-cont" );
    aiMsg.classList.add("ai-msg");
    aiPrompt.classList.add("ai-prompt");
    fieldContainer.classList.add("form-container", "inputForms-container");
    textField.classList.add("form-control");
    emailField.classList.add("form-control");
    numberField.classList.add("form-control");
    buttonForms.classList.add("btn", "btn-primary");

    DivContainer.append(aiPrompt);
    fieldContainer.append(textField,emailField,numberField, buttonForms);
    aiPrompt.append(aiNameContainer, aiMsg, fieldContainer);
    aiNameContainer.textContent = aiName;
    aiMsg.textContent = "Here are all your current properties:";
    
    gsap.fromTo(aiPrompt, { 
      opacity: 0, 
      y: 100
    }, { 
      opacity: 1, 
      y: 0, 
      duration: .4,
      delay: .6
    });
   

  // Append the input fields to the field container
  
  
  }

  repositionWindow = document.getElementById("prompt-msg");
  repositionWindow.scrollTop = repositionWindow.scrollHeight;
  clearInput = document.getElementById("user-input");
  clearInput.value = "";
  clearInput.setAttribute("placeholder", "");
  clearInput.blur();

  let allMsg = DivContainer.getElementsByTagName('div').length;
  if (clearInput === ""){
    buttonSubmit.setAttribute("disabled", true);
  }
  if(allMsg == 6 ){
    removeClasses();
    setClasses();
  }else if(allMsg >= 8 && allMsg < 10){
    let prevScroll = document.querySelector('#prev');
    let latestScroll = document.querySelector('#latest');
    prevScroll.setAttribute("style", "display: flex !important;")
    latestScroll.setAttribute("style", "display: flex !important;")
    removeClasses();
    setClasses();
  }
  else if(allMsg >= 10){
    removeClasses();
    setClasses();
  }else{
    
  }
}



function removeClasses(){
    let allLine = document.querySelectorAll('.ai-prompt, .user-prompt, .ai-msg');
  allLine.forEach((element) => {
    element.classList.remove("fade", "lightFade");
    element.removeAttribute("id");
  });
}

function setClasses(){
  let promptCount = DivContainer.getElementsByTagName('div').length;
  let secondLine = document.querySelectorAll(`.ai-prompt:nth-child(${promptCount - 4}), .user-prompt:nth-child(${promptCount - 5})`);

  secondLine.forEach((element) => {
   
    element.classList.add('fade');
  });

}



