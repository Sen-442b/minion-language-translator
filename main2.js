fetch("https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=work pls")
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  