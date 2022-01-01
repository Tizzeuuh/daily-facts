import document from 'document';
import { switchPage } from '../navigation';

//let $buttonDetail = null;
//let $buttonReplace = null;
let $buttonTest = null;

function doSomething() {
  console.log('hallo index');
}

export function destroy() {
  console.log('destroy index page');
  //$buttonDetail = null;
  //$buttonReplace = null;
  $buttonTest = null;
}

export function init() {
  console.log('init index page');
  //$buttonDetail = document.getElementById('detail-button');
  //$buttonReplace = document.getElementById('replace-button');
  $buttonTest = document.getElementById('test-button');

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

  doSomething();
}
