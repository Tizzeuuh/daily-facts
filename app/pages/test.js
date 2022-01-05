import document from 'document';
import { getLocationName } from '../commands';
import { getStateItem, setStateCallback, removeStateCallback } from '../state';

let $button = null;
let $factText = null;

function draw() {
  $factText.text = getStateItem('text');
}

export function destroy() {
  console.log('destroy test page');
  $factText = null;
  $button = null;
  removeStateCallback('test');
}

export function init() {
  console.log('init test page');
  $factText = document.getElementById('location');
  $button = document.getElementById('back-button');
  $button.onclick = () => {
    destroy();
    document.history.back();
  };

  getLocationName();
  setStateCallback('test', draw);
  // draw();
}
