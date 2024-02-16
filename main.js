
status = "";

function setup() {
    canvas = createCanvas(380,330);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}

function draw(){
    image(video,0,0,380,380);
}


function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    object_name=document.getElementsById("object_name").value ;

}

function modelLoaded()
{
    console.log("Model loaded!");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}