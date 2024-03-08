window.onload = function() {
  window.parent.postMessage('FormSubmitted', '*');
  window.parent.postMessage('FormSubmitted', 'http://localhost:55861/');
};
