//チェックボックスと送信ボタンの有効無効
document.addEventListener('DOMContentLoaded', function(e) {
const targetButton = document.querySelector('.policybutton');
const triggerCheckbox = document.querySelector('input[name="policy-checkbox"]');

targetButton.disabled = true;
targetButton.classList.add('is-inactive');

triggerCheckbox.addEventListener('change', function() {
  if (this.checked) {
    targetButton.disabled = false;
    targetButton.classList.remove('is-inactive');
    targetButton.classList.add('is-active');
    targetButton.classList.remove('js-button');
  } else {
    targetButton.disabled = true;
    targetButton.classList.remove('is-active');
    targetButton.classList.add('is-inactive');
    targetButton.classList.add('js-button');
  }
}, false);
}, false);