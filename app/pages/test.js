import document from 'document';
import { getLocationName } from '../commands';
import {
  init as initState,
  getStateItem,
  setStateCallback,
  removeStateCallback,
} from '../state';

initState();

let $button = null;
let text = document.getElementById('text');

function draw() {
  text.text = getStateItem('text');
}

export function destroy() {
  console.log('destroy test page');
  text = null;
  $button = null;
  removeStateCallback('text');
}

export function init() {
  console.log('init test page');
  text = document.getElementById('text');
  $button = document.getElementById('back-button');

  $button.onclick = () => {
    destroy();
    document.history.back();
    document.getElementById("deep").style.display = "inline";
    document.getElementById("countdown").style.display = "inline";
    const myInterval = setInterval(myTimer, 60000);

    var countdownNumberEl = document.getElementById('countdown');
    var countdown = 1200;

    countdownNumberEl.textContent = countdown;

    function myTimer() {

      countdown = --countdown <= 0 ? 1200 : countdown;
      countdownNumberEl.textContent = countdown;

  };

  function myStopFunction() {
    if(countdown <= 0){
    document.getElementById("countdown").style.display = "none";
    }
  };

  if (countdown <= 0) {
    myStopFunction();
  }

  };
  $button = document.getElementById('back-button2');

  $button.onclick = () => {
    destroy();
    document.history.back();
    document.getElementById("deep").style.display = "inline";
    document.getElementById("countdown").style.display = "inline";
    const myInterval = setInterval(myTimer, 60000);

    var countdownNumberEl = document.getElementById('countdown');
    var countdown = 1200;

    countdownNumberEl.textContent = countdown;

    function myTimer() {

      countdown = --countdown <= 0 ? 1200 : countdown;
      countdownNumberEl.textContent = countdown;

  };

  function myStopFunction() {
    if(countdown <= 0){
    document.getElementById("countdown").style.display = "none";
    }
  };

  if (countdown <= 0) {
    myStopFunction();
  }
  };

  getLocationName();
  setStateCallback('text', draw);
  // draw();
}
