import document from 'document';
import { switchPage } from '../navigation';

//let $buttonDetail = null;
//let $buttonReplace = null;
let $buttonTest = null;
let $buttonVerhouding = null;

function doSomething() {
  console.log('hallo index');
}

export function destroy() {
  console.log('destroy index page');
  //$buttonDetail = null;
  //$buttonReplace = null;
  $buttonTest = null;
  $buttonVerhouding = null;
}

export function init() {
  console.log('init index page');
  //$buttonDetail = document.getElementById('detail-button');
  //$buttonReplace = document.getElementById('replace-button');
  $buttonTest = document.getElementById('test-button');
  $buttonVerhouding = document.getElementById('verhouding-button');


  /*$buttonDetail.onclick = () => {
    switchPage('detail', true);
  };
  $buttonReplace.onclick = () => {
    switchPage('replace');
  };
  */
  $buttonTest.onclick = () => {
    switchPage('test', true);
  };
  $buttonVerhouding.onclick = () => {
    switchPage('verhouding', true);
  };

  doSomething();
}
