function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/qCO6vL8i8/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error, results) 
{
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I Can Hear - '+ results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
        (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")";

        img = document.getElementById('Dog');
        img1 = document.getElementById('Tiger');
        img2 = document.getElementById('Cow');
        img3 = document.getElementById('Cat');

        if (results[0].label == "Dog") {
            img.src = 'Dog.gif';
            img1.src = 'Tiger.png';
            img2.src = 'Cow.png';
            img3.src = 'Cat.png';
        } else if (results[0].label == "Tiger") {
            img.src = 'Dog.png';
            img1.src = 'Tiger.gif';
            img2.src = 'Cow.png';
            img3.src = 'Cat.png';
        } else if (results[0].label == "Cow") {
            img.src = 'Dog.png';
            img1.src = 'Tiger.png';
            img2.src = 'Cow.gif';
            img3.src = 'Cat.png';
        } else if (results[0].label == "Cat") {
            img.src = 'Dog.png';
            img1.src = 'Tiger.png';
            img2.src = 'Cow.png';
            img3.src = 'Cat.gif';
        }else{
            img.src = 'Dog.png';
            img1.src = 'Tiger.png';
            img2.src = 'Cow.png';
            img3.src = 'Cat.png';
        }
    }
}