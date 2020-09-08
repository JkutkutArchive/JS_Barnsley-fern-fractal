//    Barnsley Fern for Processing 3.4
let x = 0, y = 0, times = 0;

function mapit(number, type) {
    //mapit(number, loworig, highorig, lowconversion, highconversion)
    let loworig, highorig, lowconversion, highconversion;
    if(type === "x"){
        loworig = -2.1820, highorig = 2.6558;
        lowconversion = 0, highconversion = width;
        return lowconversion + (highconversion - lowconversion) * ((number - loworig) / (highorig - loworig));
    }
    else{
        loworig = 0, highorig = 9.9983;
        lowconversion = height, highconversion = 0;
        return lowconversion + (highconversion - lowconversion) * ((number - loworig) / (highorig - loworig));
    }
}

// creating canvas
function setup() {
    //createCanvas(windowWidth-10, windowWidth-10);
    createCanvas(windowHeight-10, windowHeight-10);
    background(240);
    stroke(34, 139, 34);
    strokeWeight(5);
}

// setting stroke,  mapping canvas and then plotting the points
function drawPoint() {
    let px = mapit(x, "x");
    let py = mapit(y, "y");
    point(px, py);
}

// algorithm for calculating value of (n+1)th term of x and y based on the transformation matrices
function nextPoint() {
    let nextX, nextY;
    let r = random(1);
  if (r < 0.01) {
    nextX =  0;
    nextY =  0.16 * y;
  } else if (r < 0.86) {
    nextX =  0.8 * x + 0.04 * y;
    nextY = -0.04 * x + 0.85 * y + 1.54;
  } else if (r < 0.93) {
    nextX =  0.20 * x - 0.26 * y;
    nextY =  0.23 * x + 0.22 * y + 0.9;
  } else {
    nextX = -0.15 * x + 0.28 * y;
    nextY =  0.26 * x + 0.24 * y + 1.5;
  }
/*
  if (r < 0.01) {
    nextX =  0;
    nextY =  0.16 * y;
  } else if (r < 0.86) {
    nextX =  0.85 * x + 0.04 * y;
    nextY = -0.04 * x + 0.85 * y + 1.6;
  } else if (r < 0.93) {
    nextX =  0.20 * x - 0.26 * y;
    nextY =  0.23 * x + 0.22 * y + 1.6;
  } else {
    nextX = -0.15 * x + 0.28 * y;
    nextY =  0.26 * x + 0.24 * y + 0.44;
  }
  */
  x = nextX;
  y = nextY;
}

// iterate the plotting and calculation functions over a loop
function draw() {
  if(times < 10000){
      for (let i = 0; i < 100; i++) {
        drawPoint();
        nextPoint();
      }
    times++;
  }
}


/*
    Barnsley Fern for Processing 3.4


// declaring variables x and y
float x, y;

// creating canvas
void setup() {
  size(600, 600);
  background(255);
}

 setting stroke,  mapping canvas and then
   plotting the points
void drawPoint() {
  stroke(34, 139, 34);
  strokeWeight(1);
  float px = map(x, -2.1820, 2.6558, 0, width);
  float py = map(y, 0, 9.9983, height, 0);
  point(px, py);
}

 algorithm for calculating value of (n+1)th
   term of x and y based on the transformation
   matrices
void nextPoint() {
  float nextX, nextY;
  float r = random(1);
  if (r < 0.01) {
    nextX =  0;
    nextY =  0.16 * y;
  } else if (r < 0.86) {
    nextX =  0.85 * x + 0.04 * y;
    nextY = -0.04 * x + 0.85 * y + 1.6;
  } else if (r < 0.93) {
    nextX =  0.20 * x - 0.26 * y;
    nextY =  0.23 * x + 0.22 * y + 1.6;
  } else {
    nextX = -0.15 * x + 0.28 * y;
    nextY =  0.26 * x + 0.24 * y + 0.44;
  }
  x = nextX;
  y = nextY;
}

 iterate the plotting and calculation
   functions over a loop
void draw() {
  for (int i = 0; i < 100; i++) {
    drawPoint();
    nextPoint();
  }
}*/
