
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

  var amount = 0;
  var intervalId;
  var isForms = document.querySelectorAll(".form-prompt, .table-prompt");
  var latestCounter = 0;
  var prevCounter = 0;

  function scroll() {
    var container = document.getElementById('prompt-msg');
    var step = 10;
    var duration = 50;

    intervalId = setInterval(function() {
      var scrollHeight = container.scrollHeight;
      var scrollTop = container.scrollTop;

      if (amount > 0) {
        scrollTop += step;
      } else if (amount < 0) {
        scrollTop -= step;
      }

      container.scrollTop = scrollTop;

      if (scrollTop >= scrollHeight - container.offsetHeight || scrollTop <= 0) {
        clearInterval(intervalId);
        intervalId = null;
      }

      setFade(scrollTop);
    }, duration);
  }

  function setFade(scrollTop) {
    var prompts = document.querySelectorAll('.user-prompt, .ai-prompt');
    
    
    for (var i = 0; i < prompts.length; i++) {
      var prompt = prompts[i];
      var promptTop = prompt.offsetTop;
      
      if (scrollTop >= promptTop && scrollTop < promptTop + prompt.offsetHeight) {
        prompt.style.opacity = 0.5; 
      } else {
        if (prompt.classList.contains('prompt-200')) {
          prompt.style.opacity = 1; 
        } else if (prompt.classList.contains('form-400')) {
          prompt.style.opacity = 1; 
        } else if (prompt.classList.contains('table-600')) {
          prompt.style.opacity = 1; 
        }else if (prompt.classList.contains('user-prompt')) {
          prompt.style.opacity = 1; 
        }
      }
    }
  }
  

  var hoverLatest = document.getElementById('latest');
hoverLatest.addEventListener('mouseenter', function() {
  amount = 10;

  if (!intervalId) {
    removeClasses();
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

