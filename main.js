function start() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/train/audio/1ix3ut7xpo8JZRqC730AjzueJ6GqtoSyu', modelReady);
    document.getElementById("detect").innerHTML = '<span id = "detected"><h3>Detected Dog: </h3><h3>Detected Cat: </h3><h3>Detected Cow: </h3><h3>Detected Lion: </h3></span>'
    document.getElementById("detect").hidden = false
}

function modelReady() {
    classifier.classify(gotResults);
}

var lion = 0;
var cow = 0;
var cat = 0;
var dog = 0;

function gotResults(error, results) {
    if(error) {
        console.log(error);
    }
    else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        
        document.getElementById("result_label").innerHTML = "I can hear - " + results[0].label;
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

        img = document.getElementById('bark.gif') 
        img1 = document.getElementById('meow.gif')
        img2 = document.getElementById('cow.gif')
        img3 = document.getElementById('lion.gif')
    

        if (results[0].label == "dog") {
            img.src = 'bark.gif';
            var bark = bark + 1;
          } else if (results[0].label == "cat") {
            img1.src = 'meow.gif';
            var cat = cat + 1;
          } else if (results[0].label == "cow") {
            img2.src = 'cow.gif';
            var cow = cow + 1;
          }else{
            img3.src = 'lion.gif';
            var cow = cow + 1;
          }
    }
}