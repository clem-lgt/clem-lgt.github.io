



function setup (){
createCanvas (500,500);
frameRate(2);

}

function draw (){
  background('grey');

  noFill();
  stroke ('white');

for (var y = 50; y < 400 ; y = y+200) {
  for (var x = 50; x < 400; x = x+200) {
    rect(x,y,200,200);


    var aleatoire = random(3)
    if (aleatoire > 2) {
      line(x,y,x+200,y+200);
    }else if (aleatoire > 1) {
      line(x,y+200,x+200,y);
    }
  }
}



}
