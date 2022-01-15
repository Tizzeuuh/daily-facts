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
  $button = document.getElementById('back-button');

  $button.onclick = () => {
    destroy();
    document.history.back();
  };


  getLocationName();
  setStateCallback('text', draw);
  // draw();
}
