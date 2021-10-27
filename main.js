function preload(){

}
function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
  
    
}

function draw(){
    image(video,0,0,640,480);
    rect(0,0,55,55);
    rect(585,0,55,55);   
    rect(585,425,55,55);  
    rect(0,425,55,55);  
}

function take_snapshot(){
    save('student_name.png')
}

function Frame()
{
    tint_color=document.getElementById("color_name").value;
    
}