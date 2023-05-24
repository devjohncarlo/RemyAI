
function hideGreetings(){
    gsap.to('.greetings', {
      opacity: 0,
      y: -100,
      duration: 1.5, 
      marginBottom: "-100px"
    });
    gsap.to('.input-group', {
      width: "90%",
      duration: 1.5
    });
  }

 
  var isForms = document.querySelectorAll(".form-prompt, .table-prompt");
  var latestCounter = 0;
  var prevCounter = 0;
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
        var windowHeight = scrollHeight - container.offsetHeight;
          console.log(scrollTop, windowHeight, container.offsetHeight+ "1h")
          if (scrollTop == windowHeight ) {
            latestCounter = latestCounter + 2;  
          }
            latestCounter = latestCounter + 2;
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

  var latestCounter = 0;
  var prevCounter = 0;
  var tablePrevCounter = 0;
  var tableLatestCounter = 0;
  var formPrevCounter = 0;
  var formLatestCounter = 0;

  
  function ScrollLatest(scrollTop) {
    let fadedLatest = document.querySelectorAll(`.ai-prompt:nth-child(${latestCounter + 2 }), .user-prompt:nth-child(${latestCounter + 1})`);
    fadedLatest.forEach((element) => {
      /* console.log(element); */
      /* console.log(element); */
      if(element.classList.contains("form-400")){
        latestCounter = latestCounter - 2;
        formLatestCounter ++;
        if(formLatestCounter == 2){
          latestCounter = latestCounter + 2;
          formLatestCounter = 0;
        }
      }else if (element.classList.contains("table-600")){
        latestCounter = latestCounter - 2;
        tableLatestCounter ++;
        console.log(latestCounter);
        if(tableLatestCounter == 4){
          
          latestCounter = latestCounter + 2;
          tableLatestCounter = 0;
        }

        console.log("table", tableLatestCounter);
      }
      
      element.classList.add('fade');
    });
    console.log('Scrolling down:', scrollTop);
  }


  function ScrollPrev(scrollTop) {
   
    var promptCount = DivContainer.querySelectorAll('.user-prompt, .ai-prompt').length;
    let fadedPrev = document.querySelectorAll(`.ai-prompt:nth-child(${promptCount - prevCounter}), .user-prompt:nth-child(${promptCount - prevCounter - 1})`);
    
    fadedPrev.forEach((element) => {
      /* console.log(element); */
      if(element.classList.contains("form-400")){
        prevCounter = prevCounter - 2;
        formPrevCounter ++;
        if(formPrevCounter == 2){
          prevCounter = prevCounter + 2;
          formPrevCounter = 0;
        }
      }else if (element.classList.contains("table-600")){
        prevCounter = prevCounter - 2;
        tablePrevCounter ++;
        console.log(prevCounter);
        if(tablePrevCounter == 4){
          
        prevCounter = prevCounter + 2;
        tablePrevCounter = 0;
        }

        console.log("table", tablePrevCounter);
      }
      
      element.classList.add('fade');
    });

    console.log('Scrolling up:', scrollTop);
  }

  var hoverLatest = document.getElementById('latest');
  hoverLatest.addEventListener('mouseenter', function() {
    amount = 10;

    if (!intervalId) {
      removeClasses();
      let fadedLatest = document.querySelectorAll(`.ai-prompt:nth-child(${latestCounter + 2 }), .user-prompt:nth-child(${latestCounter + 1})`);
      fadedLatest.forEach((element) => {
      /* console.log(element); */
      element.classList.add('fade');
    });
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
      var promptCount = DivContainer.querySelectorAll('.user-prompt, .ai-prompt').length;
      let fadedPrev = document.querySelectorAll(`.ai-prompt:nth-child(${promptCount - prevCounter}), .user-prompt:nth-child(${promptCount - prevCounter - 1})`);
      fadedPrev.forEach((element) => {
        /* console.log(element); */
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


//Responsive grab scroll

var ele = document.getElementById('prompt-msg');
ele.scrollTop = 100;
ele.scrollLeft = 150;

var pos = { top: 0, left: 0, x: 0, y: 0 };

var mouseDownHandler = function (e) {
    pos = {
        // The current scroll
        left: ele.scrollLeft,
        top: ele.scrollTop,
        // Get the current mouse position
        x: e.clientX,
        y: e.clientY,
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
};

var mouseMoveHandler = function (e) {
    // How far the mouse has been moved
    var dx = e.clientX - pos.x;
    var dy = e.clientY - pos.y;

    // Scroll the element
    ele.scrollTop = pos.top - dy;
    ele.scrollLeft = pos.left - dx;
};

var mouseUpHandler = function () {
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);

    ele.style.cursor = 'grab';
    ele.style.removeProperty('user-select');
};

ele.addEventListener('mousedown', mouseDownHandler);

