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
  
  function enableInputField() {
    userInputDisabled.disabled = false;
    buttonDisabled.disabled = false;
    repositionWindow = document.getElementById("prompt-msg");
    repositionWindow.scrollTop = repositionWindow.scrollHeight + 600;
  }

  gsap.fromTo(userPrompt, { 
    opacity: 0, 
    y: 100
  }, { 
    opacity: 1, 
    y: 0, 
    duration: .2
  });

 
  if(userInput.toLowerCase() !== "show my property" && userInput !== "" && userInput !== "onboard new property"){
    
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
    aiPrompt.classList.add("ai-prompt", "prompt-200");
    DivContainer.append(aiPrompt);
    aiPrompt.append(aiNameContainer, aiMsg);
    aiNameContainer.textContent = aiName;

  
    if(allMsg > 0 && allMsg <= 2){
      aiPrompt.append(aiCursor);  
      }

    let text = document.querySelector("#ai-msg");
    let cursor = document.querySelector("#cursor");
    gsap.fromTo(cursor, {autoAlpha: 0, x: 2}, {autoAlpha: 1, duration: 0.5, repeat: -1, ease: SteppedEase.config(1)});
    /* userInputDisabled.disabled = true;
    buttonDisabled.disabled = true; */
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

    gsap.fromTo(aiPrompt, { 
      opacity: 0, 
      y: 100
    }, { 
      opacity: 1, 
      y: 0, 
      duration: .4,
      delay: .6
    });
  
  }else if(userInput.toLowerCase() == "show my property"){
    const movies = [
      {
        rank: 1,
        title: 'The Shawshank Redemption',
        genre: 'Drama',
        year: 1994,
        director: 'Frank Darabont'
      },
      {
        rank: 2,
        title: 'The Godfather',
        genre: 'Crime, Drama',
        year: 1972,
        director: 'Francis Ford Coppola'
      },
      {
        rank: 3,
        title: 'The Dark Knight',
        genre: 'Action, Crime, Drama, Thriller',
        year: 2008,
        director: 'Christopher Nolan'
      },
      {
        rank: 4,
        title: 'The Godfather: Part II',
        genre: 'Crime, Drama',
        year: 1974,
        director: 'Francis Ford Coppola'
      },
      {
        rank: 5,
        title: '12 Angry Men',
        genre: 'Crime, Drama',
        year: 1957,
        director: 'Sidney Lumet'
      }
    ];
    
    const table = document.createElement('table');
    table.className = 'table responsive';
    
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const headers = ['Rank', 'Title', 'Genre', 'Year', 'Director'];
    
    headers.forEach(headerText => {
      const headerCell = document.createElement('td');
      headerCell.textContent = headerText;
      headerRow.appendChild(headerCell);
    });
    
    thead.appendChild(headerRow);
    table.appendChild(thead);
  
    const tbody = document.createElement('tbody');
    
    movies.forEach(movie => {
      const row = document.createElement('tr');
    
      const rankCell = document.createElement('td');
      rankCell.setAttribute('data-label', 'Rank');
      rankCell.textContent = `${movie.rank}.`;
      row.appendChild(rankCell);
    
      const titleCell = document.createElement('td');
      titleCell.setAttribute('data-label', 'Title');
      titleCell.textContent = movie.title;
      row.appendChild(titleCell);
    
      const genreCell = document.createElement('td');
      genreCell.setAttribute('data-label', 'Genre');
      genreCell.textContent = movie.genre;
      row.appendChild(genreCell);
    
      const yearCell = document.createElement('td');
      yearCell.setAttribute('data-label', 'Year');
      yearCell.textContent = movie.year;
      row.appendChild(yearCell);
    
      const directorCell = document.createElement('td');
      directorCell.setAttribute('data-label', 'Director');
      directorCell.textContent = movie.director;
      row.appendChild(directorCell);
    
      tbody.appendChild(row);
    });
    
    table.appendChild(tbody);

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
    aiPrompt.classList.add("ai-prompt", "size-600");
    userPrompt.classList.add("size-600");
    tbl.classList.add('tbl-container');
    tbl.setAttribute("border", "2");
    DivContainer.append(aiPrompt);
    aiPrompt.append(aiNameContainer, aiMsg, table);
    aiNameContainer.textContent = aiName;

    function generateTable(){
      enableInputField();
      gsap.to(tbl,{
        opacity: 1,
        delay: 0.5
      });
    }
  
    if(allMsg > 0 && allMsg <= 2){
      aiPrompt.append(aiCursor);  
      }

    let text = document.querySelector("#ai-msg");
    let cursor = document.querySelector("#cursor");
    gsap.fromTo(cursor, {autoAlpha: 0, x: 2}, {autoAlpha: 1, duration: 0.5, repeat: -1, ease: SteppedEase.config(1)});
    /* userInputDisabled.disabled = true;
    buttonDisabled.disabled = true; */
    let tween = gsap.to("#ai-msg", {
      text: {
        value: "Hi, Here's a table that shows your property:"
      }, 
      duration: 3,
      delay: .5, 
      ease: "none",
      onComplete: generateTable,
      onUpdate: () => text.appendChild(cursor),
      
    });
    tableAndFormsCounter ++;
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
    removeClasses();
    let allMsg = DivContainer.getElementsByTagName('div').length;
    let aiCursor = document.createElement("span");
    const aiNameContainer = document.createElement("span");
    const aiMsg = document.createElement("span");
    const aiPrompt = document.createElement("div");
    const fieldContainer = document.createElement('div');
    const textField = document.createElement('input');
    const emailField = document.createElement('input');
    const fileField = document.createElement('input');
    const buttonForms = document.createElement('button');
    const labelText = document.createElement('label');
    const labelEmail = document.createElement('label');
    const labelFile = document.createElement('label');

    textField.type = 'text';
    textField.placeholder = 'Enter Username';
    emailField.type = 'email';
    emailField.placeholder = 'Enter email';
    fileField.type = 'file';
    fileField.placeholder = 'Upload a File';
    buttonForms.type = "submit";
    buttonForms.textContent = "Submit"
    labelText.textContent = "Username";
    labelEmail.textContent = "Email Address";
    labelFile.textContent = "File Upload";
    aiCursor.setAttribute('id', 'cursor');
    aiCursor.textContent = "|";

    aiNameContainer.classList.add("ainame-cont" );
    aiMsg.classList.add("ai-msg");
    aiPrompt.classList.add("ai-prompt", "size-600");
    userPrompt.classList.add("size-600");
    fieldContainer.classList.add("form-container", "inputForms-container");
    textField.classList.add("form-control");
    emailField.classList.add("form-control");
    fileField.classList.add("form-control");
    buttonForms.classList.add("btn", "btn-primary");
    labelText.setAttribute = "id", "username";
    labelEmail.setAttribute = "id", "email";
    labelFile.setAttribute = "id", "file";

    DivContainer.append(aiPrompt);
    fieldContainer.append(labelText, textField, labelEmail, emailField, labelFile, fileField, buttonForms);
    aiPrompt.append(aiNameContainer, aiMsg);
    aiNameContainer.textContent = aiName;
    

    aiNameContainer.classList.add("ainame-cont" );
    aiMsg.classList.add("ai-msg" );
    aiMsg.setAttribute('id', 'ai-msg');
    aiPrompt.classList.add("ai-prompt");

    DivContainer.append(aiPrompt);
    aiPrompt.append(aiNameContainer, aiMsg, fieldContainer);
    aiNameContainer.textContent = aiName;
    
    function generateForms(){
      enableInputField();
      gsap.to(fieldContainer,{
        opacity: 1,
        delay: 0.5
      });
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
        value: "Hello! Here's a form to onboard your new property"
      }, 
      duration: 3,
      delay: .5, 
      ease: "none",
      onComplete: generateForms,
      onUpdate: () => text.appendChild(cursor),
      
    });
    tableAndFormsCounter ++;
    gsap.fromTo(aiPrompt, { 
      opacity: 0, 
      y: 100
    }, { 
      opacity: 1, 
      y: 0, 
      duration: .4,
      delay: .6
    });
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
  
  prevCounter = 0;
  tablePrevCounter = 0;
  latestCounter = 0;
  tableLatestCounter = 0;
  }
  var tableAndFormsCounter = 0;
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
  
  console.log(repositionWindow.scrollTop);
  console.log(repositionWindow.offsetHeight);
  console.log(repositionWindow.scrollHeight);

  if(repositionWindow.scrollHeight > 700){
    displayScroll()
  }

  if(allMsg == 6 ){
    removeClasses();
    setClasses();
  }else if(allMsg >= 8 && allMsg < 10){
    removeClasses();
    setClasses();
  }
  else if(allMsg >= 10){
    removeClasses();
    setClasses();
  }else{
    
  }
}

function displayScroll() {
    let prevScroll = document.querySelector('#prev');
    let latestScroll = document.querySelector('#latest');
    prevScroll.setAttribute("style", "display: flex !important;")
    latestScroll.setAttribute("style", "display: flex !important;")
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



