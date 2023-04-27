objects = []
status="";
function preload(){
   bm =  loadSound("alert.mp3")

}

function setup(){
 canvas =   createCanvas(380, 380);
 canvas.center();
 vid= createCapture(VIDEO)
 vid.size(380,380)
 vid.hide()
 od= ml5.objectDetector("cocossd", modelLoaded);
 document.getElementById("stat").innerHTML = "Status : Detecting Objects"


}

function draw(){
    image(vid, 0,0,380,380);
    if(status != ""){
for(i=0 ; i< objects.length; i++){
    document.getElementById("stat").innerHTML = "Status : Objects Detected"
    document.getElementById("nod").innerHTML = "Number of objects detected : "+ objects.length;
    if(objects[0].label == "person"){
       document.getElementById("nod").innerHTML = "Baby Found"
        
    }
    else{
        document.getElementById("nod").innerHTML = "Baby Not Found"
    }
    fill("blue");
    per= floor(objects[i].confidence* 100)
    text(objects[i].label+ " "+ per + " %", objects[i].x, objects[i].y);
    noFill();
    stroke("Blue");
    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

}
    }
    }
    
 
function modelLoaded(){
    console.log("Model has been succesfully loaded");
    status = true;
    od.detect(vid, gotResults);

}

function gotResults(error, results){
 if(error){
console.log(error)

 }
 else{
    console.log(results)
    objects = results
 }
}