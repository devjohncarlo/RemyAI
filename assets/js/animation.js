
function hideGreetings(){
    gsap.to('.greetings', {
      opacity: 0,
      y: -100,
      duration: 1.5, 
      marginBottom: "-100px"
    });
    gsap.to('.input-group', {
      width: "75%",
      duration: 1.5
    });
  }

  function aiTypeWriting(){
    gsap.to('')
  }
  
function messageAnimation(){
  gsap.set('.prompt', {
    opacity:  1,
  });

  gsap.to('.prompt', {
    opacity:  1,
    duration: .4,
    delay: .2
  });

}
function messageAIAnimation(){
  gsap.set('.promptAI', {
    opacity:  0
  });

 /*  gsap.to('.promptAI', {
    opacity:  1,
    duration: .4,
    delay: .7,
    y: 0
  }); */

}