import document from 'document';
//import { getLocationName } from '../commands';
//import { getStateItem, setStateCallback, removeStateCallback } from '../state';

let $button = 1;

/*let $locationName = null;

function draw() {
  $locationName.text = getStateItem('text');
}*/

export function destroy() {
  console.log('destroy test page');
  //$locationName = null;
  $button = null;


  //removeStateCallback('test');
}

export function init() {
  console.log('init test page');
  //$locationName = document.getElementById('location');
  $button = document.getElementById("back-button");

    $button.onclick = () => {
    destroy();
    document.history.back();
  };
  $button = document.getElementById("back-button2");

    $button.onclick = () => {
    destroy();
    document.history.back();
    };




  /*getLocationName();
  //setStateCallback('test', draw);
  draw();*/
}
