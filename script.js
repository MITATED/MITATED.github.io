var recognizer = new webkitSpeechRecognition();

recognizer.interimResult = true;


recognizer.lang = 'ru-Ru';

recognizer.onresult = function (event) {
  var result = event.result[event.resultIndex];
  if (result.isFinal) {
    alert(result[0].transcript)
  } else {
    console.log(result[0].transcript)
  }
};

recognizer.start();
