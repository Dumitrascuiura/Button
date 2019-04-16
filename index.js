first.onclick = function (evt) {
    var phase = evt.eventPhase;
    P.innerHTML = 'You clicked the first button';
    console.log('using DOM properties', phase);
  };
  
  second.onclick = function (evt) {
    var phase = evt.eventPhase;
    P.innerHTML = 'You clicked the second button';
    console.log('using DOM properties', phase);
  };
  
  
  third.onclick = function handler(evt) {
    var phase = evt.eventPhase;
    P.innerHTML = 'You clicked the third button';
    console.log('using addEventListener', phase);
  };
  third.addEventListener('click', handler);