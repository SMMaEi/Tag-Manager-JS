function getSelectedText() {
  var text = '';
  if (window.getSelection().toString().length > 0) {
    text = window.getSelection().toString();
  } 
  else if (document.getSelection().toString().length > 0) {
    text = document.getSelection().toString();
  }
  return text;
}
  
document.addEventListener("copy", function(e) {
  dataLayer.push({
    'event': 'textCopied',
    'clipboardText': getSelectedText()                      
  });                          
});
