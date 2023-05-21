
function hideGreetings(){
    gsap.to('.greetings', {
      opacity: 0,
      y: -100,
      duration: 1.5, 
      marginBottom: "-100px"
    });
    gsap.to('.input-group', {
      width: "70%",
      duration: 1.5
    });
  }

var amount = 0;
var intervalId;

function scroll() {
  var container = document.getElementById('prompt-msg');
  var step = 10;
  var duration = 50 ;

  intervalId = setInterval(function() {
    var scrollHeight = container.scrollHeight;
    var scrollTop = container.scrollTop;

    if (amount > 0) {
      scrollTop += step;
    } else if (amount < 0 || container.scrollTop != 0) {
      scrollTop -= step;
    }

    container.scrollTo({
      top: scrollTop,
    behavior: 'smooth'
    });

    if (scrollTop >= scrollHeight - container.offsetHeight || scrollTop <= 0) {
      clearInterval(intervalId);
      intervalId = null;
    }
    
    if (scrollTop % 200 === 0) {
      if (amount > 0) {
      var windowHeight = scrollHeight - 600;
        console.log(scrollTop, windowHeight, container.offsetHeight+ "1h")
        if (scrollTop == windowHeight ) {
          latestCounter = latestCounter + 2;
        } else{
          latestCounter = latestCounter + 2;
        }
        ScrollLatest(scrollTop);
        prevCounter = 0;
      } else if (amount < 0) {
        
        if (scrollTop <= 0) {
          prevCounter = DivContainer.getElementsByTagName('div').length - 6;
        } else{
          prevCounter = prevCounter + 2;
        }
        ScrollPrev(scrollTop);
        latestCounter = 0;
      }
    }
  }, duration);
}

function ScrollLatest(scrollTop) {
  removeClasses();
  let fadeLatest = document.querySelector(`.user-prompt:nth-child(${latestCounter + 1})`);
  let lightFadeLatest =  document.querySelector(`.ai-prompt:nth-child(${latestCounter + 2 }`);
  fadeLatest.classList.add('fade');
  lightFadeLatest.classList.add('lightFade');

  /* fadedLatest.forEach((element) => {
    element.classList.add('fade');
  }); */

  console.log('Scrolling down:', scrollTop);
}

var latestCounter = 0;
var prevCounter = 0;
function ScrollPrev(scrollTop) {
  removeClasses();
  var promptCount = DivContainer.getElementsByTagName('div').length;
  let fadedLine = document.querySelectorAll(`.ai-prompt:nth-child(${promptCount - prevCounter}), .user-prompt:nth-child(${promptCount - prevCounter - 1})`);
  
  fadedLine.forEach((element) => {
    console.log(element[0]);
  console.log(element[1]);
    element.classList.add('fade');
  });

  console.log('Scrolling up:', scrollTop);
}

var hoverLatest = document.getElementById('latest');
hoverLatest.addEventListener('mouseenter', function() {
  amount = 10;

  if (!intervalId) {
    removeClasses();
    let fadeLatest = document.querySelector(`.user-prompt:nth-child(${latestCounter + 1})`);
    let lightFadeLatest =  document.querySelector(`.ai-prompt:nth-child(${latestCounter + 2 }`);
    fadeLatest.classList.add('fade');
    lightFadeLatest.classList.add('lightFade');
    /* let fadedLatest = document.querySelectorAll(`.ai-prompt:nth-child(${latestCounter + 2 }), .user-prompt:nth-child(${latestCounter + 1})`);
    fadedLatest.forEach((element) => {
    console.log(element);
    element.classList.add('fade');
    }); */
    scroll();
  }
 
});

hoverLatest.addEventListener('mouseleave', function() {
  amount = 0;
  clearInterval(intervalId);
  intervalId = null;
});

var hoverPrev = document.getElementById('prev');
hoverPrev.addEventListener('mouseenter', function() {
  amount = -10;
  
  if (!intervalId) {
    removeClasses();
    var promptCount = DivContainer.getElementsByTagName('div').length;
    let fadedPrev = document.querySelectorAll(`.ai-prompt:nth-child(${promptCount - prevCounter}), .user-prompt:nth-child(${promptCount - prevCounter - 1})`);
    fadedPrev.forEach((element) => {
   
    element.classList.add('fade');
    });
    scroll();
  }
});

hoverPrev.addEventListener('mouseleave', function() {
  amount = 0;
  clearInterval(intervalId);
  intervalId = null;
});


