Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:'90'
});

camera=document.getElementById("camera");

Webcam.attach('#camera');
 function snapshot(){
     Webcam.snap(function(data_uri){
     document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'">';
    });
 }
 console.log('ml5 version', ml5.version);
 classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/gXeQ58Acu/model.json',modelLoaded);
 function modelLoaded(){
     console.log('Model Loaded!');
 }

 function speak(){
     var synth=window.speechSynthesis;
     speak_data_1="the first prediction is "+prediction_1;
     speak_data_2="the second prediction is "+prediction_2;
     var utterThis=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
     utterThis.rate=0.5;
     synth.speak(utterThis);
 }

 function check(){
     img=document.getElementById('selfie_image');
     classifier.classify(img, gotResult);

 }
  function gotResult(error, results){
if(error){
    console.error(error);
}else{
console.log(results);
document.getElementById("result_hand_gesture_name").innerHTML=results [0].label;
document.getElementById("result_hand gesture_name2").innerHTML=results [1].label;
prediction_1=results [0].label;
prediction_2=results [1].label;
speak();

}
if(results[0].label=="peace"){
    document.getElementById("update_emoji").innerHTML="&#9996;";
}
if(results[0].label=="very nice"){
    document.getElementById("update_emoji").innerHTML="&#128076;";
}
if(results[0].label=="thumbs up"){
    document.getElementById("update_emoji").innerHTML="&#128077;";
}
if(results[0].label=="hang loose"){
    document.getElementById("update_emoji").innerHTML="&#129305;";
}
if(results[0].label=="good luck"){
    document.getElementById("update_emoji").innerHTML="&#129310;";
}

if(results[1].label=="peace"){
    document.getElementById("update_emoji2").innerHTML="&#9996;";
}
if(results[1].label=="very nice"){
    document.getElementById("update_emoji2").innerHTML="&#128076;";
}
if(results[1].label=="thumbs up"){
    document.getElementById("update_emoji2").innerHTML="&#128077;";
}
if(results[1].label=="hang loose"){
    document.getElementById("update_emoji2").innerHTML="&#129305;";
}
if(results[1].label=="good luck"){
    document.getElementById("update_emoji2").innerHTML="&#129310;";
}
}
