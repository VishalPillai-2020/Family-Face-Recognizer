camera = document.getElementById("webcam_view1");
Webcam.set({
    width: 425,
    height: 240,
    image_format: "png",
    png_quality: "90"
});
Webcam.attach(camera);
function snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = "<img id='snapshot' src='" + data_uri + "'>"
    });
}
console.log("ml5.version:", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/JBI9n-v9_/model.json", model_loaded);
function model_loaded() {
    console.log("Model successfull")
}