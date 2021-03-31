var noseX = 0;
var noseY = 0;
var leftEyeX = 0;
var leftEyeY = 0;
var leftShoulderX = 0;
var leftShoulderY = 0;
function preload(){
 moustache = loadImage("https://i.postimg.cc/cCTDsqvk/Moustache.png");
 hat = loadImage("https://i.postimg.cc/mDQ7Xr8q/Hat.png");
 fries = loadImage("https://i.postimg.cc/8PBJq3dF/Fries.png");
 leaves = loadImage("https://i.postimg.cc/Cx4mcm6Y/Leaves.png");
}
function setup(){
 canvas = createCanvas(400, 400);
 canvas.center();
 video = createCapture(VIDEO);
 video.size(400, 400);
 video.hide();
 poseNet = ml5.poseNet(video, model_loaded);
 poseNet.on("pose", got_poses);
}
function draw(){
 image(video, 0, 0, 400, 400);
 image(moustache, noseX - 25, noseY - 10, 50, 50);
 image(hat, leftEyeX - 75, leftEyeY - 150, 125, 140);
 image(fries, leftShoulderX - 50, leftShoulderY - 100, 100, 100);
 image(leaves, 0, 200, 100, 150);
}
function take_photo(){
 save("selfie.png");
}
function model_loaded(){
 console.log("Model Loaded");
 console.log("PoseNet Initialised");
}
function got_poses(results){
 if(results.length > 0){
  noseX = results[0].pose.nose.x;
  noseY = results[0].pose.nose.y;
  leftEyeX = results[0].pose.leftEye.x;
  leftEyeY = results[0].pose.leftEye.y;
  leftShoulderX = results[0].pose.leftShoulder.x;
  leftShoulderY = results[0].pose.leftShoulder.y;
  console.log(results);
  console.log("Nose X = " + noseX + " Y = " + noseY);
  console.log("Left Eye X = " + leftEyeX + " Y = " + leftEyeY);
  console.log("Left Shoulder X = " + leftShoulderX + " Y = " + leftShoulderY);
 }
}