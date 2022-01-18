import document from 'document';

let $button = null;

export function destroy() {
  console.log('destroy test page');
  $button = null;
}

export function init() {
  console.log('init test page');
  $button = document.getElementById('back-button');

  $button.onclick = () => {
    destroy();
    document.history.back();
  };
}
