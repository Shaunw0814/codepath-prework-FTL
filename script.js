//global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 650; //how long to wait before starting playback of the clue sequence
const key1 = document.getElementById("button1");
const lit1 = document.getElementById("lit1");
const key2 = document.getElementById("button2");
const lit2 = document.getElementById("lit2");
const key3 = document.getElementById("button3");
const lit3 = document.getElementById("lit3");
const key4 = document.getElementById("button4");
const lit4 = document.getElementById("lit4");
const key5 = document.getElementById("button5");
const lit5 = document.getElementById("lit5");
const key6 = document.getElementById("button6");
const lit6 = document.getElementById("lit6");

//Global Variables
var pattern = [1, 2, 1, 2, 1, 3, 4, 5, 6];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.2; //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 120; //how long to hold each clue's light/sound

//function random secret pattern
function randomize(pattern) {
  for (let i = 0; i < pattern.length; i++) {
    pattern[i] = Math.floor(Math.random() * 6 + 1);
    //console.log(pattern[i]);
  }
}

//startGame
function startGame() {
  if (document.getElementById("randomize").checked) {
    alert("The pattern will be random");
    randomize(pattern);
  } else {
    pattern = [1, 2, 1, 2, 1, 3, 4, 5, 6];
    alert("The pattern will be a short version of Fur-Elise");
    pattern = [1, 2, 1, 2, 1, 3, 4, 5, 6];
  }

  //initialize game variables
  progress = 0;
  gamePlaying = true;

  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");

  //calling playClueSequence
  playClueSequence();
}

//stopGame
function stopGame() {
  //gamePlaying set to false
  gamePlaying = false;

  //Start button appear, Stop button disappear
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");

  //uncheck randomize, default to Fur-Elise
  document.getElementById("randomize").checked = false;
  
}

//keybinds to clicking
document.onkeydown = function kDown(x){
  if(x.which == 49){
    lit1.style.background = "lightgreen";
    startTone(1);
    guess(1);
  }
  else if(x.which == 50){
    lit2.style.background = "lightgreen";
    startTone(2);
    guess(2);
  }
  else if(x.which == 51){
    lit3.style.background = "lightgreen";
    startTone(3);
    guess(3);
  }
  else if(x.which == 52){
    lit4.style.background = "lightgreen";
    startTone(4);
    guess(4);
  }
  else if(x.which == 53){
    lit5.style.background = "lightgreen";
    startTone(5);
    guess(5);
  }
  else if(x.which == 54){
    lit6.style.background = "lightgreen";
    startTone(6);
    guess(6);
  }
}

document.onkeyup = function kUp(x){
  if(x.which == 49){
    lit1.style.background = "white";
    stopTone(1);
  }
  else if(x.which == 50){
    lit2.style.background = "white";
    stopTone(2);
  }
  else if(x.which == 51){
    lit3.style.background = "white";
    stopTone(3);
  }
  else if(x.which == 52){
    lit4.style.background = "white";
    stopTone(4);
  }
  else if(x.which == 53){
    lit5.style.background = "white";
    stopTone(5);
  }
  else if(x.which == 54){
    lit6.style.background = "white";
    stopTone(6);
  }
}

//loseGame - notification when lost
function loseGame() {
  stopGame();
  alert("Game Over. You lost. (click ok to stop tone)");
  for(let i = 1; i < 7; i++){
    stopTone(i);
  }
}

//winGame - notification for winning
function winGame() {
  stopGame();
  alert("Game Over. You won! (click ok to stop tone)");
  for(let i = 1; i < 7; i++){
    stopTone(i);
  }
}

//playSingleCue
function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

//playClueSequence
function playClueSequence() {
  //context.resume();
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  //clueHoldTime -= 30;
}

//guess checking logic
function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }

  //right guess
  if (btn == pattern[guessCounter]) {
    //turn over check
    if (guessCounter == progress) {
      //last turn check
      if (guessCounter == pattern.length - 1) {
        lit1.style.background = "white";
        lit2.style.background = "white";
        lit3.style.background = "white";
        lit4.style.background = "white";
        lit5.style.background = "white";
        lit6.style.background = "white";
        winGame();
      } else {
        progress += 1;
        playClueSequence();
      }
    } else {
      guessCounter += 1;
    }
  }

  //wrong guess
  else {
    lit1.style.background = "white";
    lit2.style.background = "white";
    lit3.style.background = "white";
    lit4.style.background = "white";
    lit5.style.background = "white";
    lit6.style.background = "white";
    
    loseGame();
  }
}

//Lit indicator buttons when user clicks, color changing
key1.addEventListener(
  "pointerdown",
  () => (lit1.style.background = "lightgreen")
);
key1.addEventListener("pointerup", () => (lit1.style.background = "white"));
key1.addEventListener("mouseleave", () => (lit1.style.background = "white"));

key2.addEventListener(
  "pointerdown",
  () => (lit2.style.background = "lightgreen")
);
key2.addEventListener("pointerup", () => (lit2.style.background = "white"));
key2.addEventListener("mouseleave", () => (lit2.style.background = "white"));

key3.addEventListener(
  "pointerdown",
  () => (lit3.style.background = "lightgreen")
);
key3.addEventListener("pointerup", () => (lit3.style.background = "white"));
key3.addEventListener("mouseleave", () => (lit3.style.background = "white"));

key4.addEventListener(
  "pointerdown",
  () => (lit4.style.background = "lightgreen")
);
key4.addEventListener("pointerup", () => (lit4.style.background = "white"));
key4.addEventListener("mouseleave", () => (lit4.style.background = "white"));

key5.addEventListener(
  "pointerdown",
  () => (lit5.style.background = "lightgreen")
);
key5.addEventListener("pointerup", () => (lit5.style.background = "white"));
key5.addEventListener("mouseleave", () => (lit5.style.background = "white"));

key6.addEventListener(
  "pointerdown",
  () => (lit6.style.background = "lightgreen")
);
key6.addEventListener("pointerup", () => (lit6.style.background = "white"));
key6.addEventListener("mouseleave", () => (lit6.style.background = "white"));



// Sound Synthesis Functions
const freqMap = {
  1: 650,
  2: 620,
  3: 490,
  4: 570,
  5: 500,
  6: 420,
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}
