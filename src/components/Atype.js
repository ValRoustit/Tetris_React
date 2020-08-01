import React from 'react';
import { tetrominos, colors, speed } from "../utils/Data";
import { useEffect } from 'react';

const Atype = () => {

  let canvas = null;
  let ctx = null;
  useEffect(() => {
    startGame();
    window.addEventListener("keydown", handleInput);
  })

  let board = new Array(220);
  board.fill(0 ,0 ,220);
  let x = 0;
  let y = 0;
  let input = null;

  let tetromino = null;
  let level = 0;
  let newTetro = false;

  let rotation = 0;
  let nextTetromino = randomTetromino();
  newPiece();
  let frameCount = 0;

  let lignCount = 0;

  let frameReference = null;
  let logicReference = null;


  let block1 = new Image();
  let block2 = new Image();

  block1.onload = () => {
    block2.onload = () => {
      frameReference = window.requestAnimationFrame(render);
      logicReference = setInterval(logic, 1000/60);
    }
  };

  block1.src = require("../assets/block1.png");
  block2.src = require("../assets/block2.png");

  function startGame() {
    canvas = document.getElementById("tetris-board");
    ctx = canvas.getContext('2d');
  }

  function newPiece () {
    x = 5;
    y = 2;
    rotation = 0;
    
    tetromino = nextTetromino
    nextTetromino = randomTetromino();

    if(colision(x, y, rotation)) {
      gameLost()
    }
  }

  function randomTetromino() {
    const names = ['T', 'J', 'Z', 'O', 'S', 'L', 'I'];

    let n = 0;
    n =  Math.floor(Math.random() * 7);

    let name = names[n];

    if (tetrominos[name] === tetromino) {
      n =  Math.floor(Math.random() * 7);
      name = names[n];
    }
    return tetrominos[name];
  }

  function colision(nextX, nextY, nextRotation) { // return true if a colision happened
    let x = 0;
    let y = 0;
    let coor = 0;

    const tetroArr = tetromino[nextRotation].flat();
    for(let i = 0; i < tetroArr.length; i ++) {
      if(tetroArr[i] > 0) {
        x = nextX + (i % 5) - 2;
        y = nextY + Math.floor(i / 5) - 2;
        coor = y * 10 + x;

        if (board[coor] > 0 || y >= 22 || x < 0 || x > 9) {
          return true;
        }
      }
    }
    return false;
  }

  function addToBoard() {
    let x2 = 0;
    let y2 = 0;
    let coor = 0;

    const tetroArr = tetromino[rotation].flat();
    for(let i = 0; i < tetroArr.length; i ++) {
      if(tetroArr[i] > 0) {
        x2 = x + (i % 5) - 2;
        y2 = y + Math.floor(i / 5) - 2;
        coor = y2 * 10 + x2;
        board[coor] = tetroArr[i];
      }
    }
  }

  function handleInput(e) {
    input = e.key.toLowerCase();
  }

  function gameLost() {
    if(frameReference) window.cancelAnimationFrame(frameReference);
    if(logicReference) window.clearInterval(logicReference);
    console.log("you lost!")
  }

  function logic() {
    let nextX = x;
    let nextY = y;
    let nextRotation = rotation;
    let gravity = 0;

    if(level < 29) {
      gravity = speed[level];
    }
    else {
      gravity = 1;
    }

    frameCount += 1; //logic counter for drop speed

    if(input !== "") {// create a function for this bit
      switch(input) {
        case "a":
          nextX -= 1;
          break;
        case "d":
          nextX += 1;
          break;
        case "s":
          nextY += 1;
          break;
        case "arrowleft":
          if(nextRotation === 0) {
            nextRotation = tetromino.length
          }
            nextRotation -= 1;
          break;
        case "arrowright":
          nextRotation += 1;
          nextRotation = nextRotation % tetromino.length
          break;
        default :
          break;
      }

      input = "";
    }

    if(colision(nextX, nextY, nextRotation)) { // if colision keep previous coordinates
      if( nextX === x && nextRotation === rotation) {
        newTetro = true;
      }
      nextX = x;
      nextY = y;

      nextRotation = rotation;
    }

    if(frameCount % gravity === 0) { //drop
      if(nextY === y) {
        nextY += 1;
      }
      frameCount = 0;
    }

    if(newTetro) { // add to board and a create a new tetromino
      addToBoard();

      let nextBoard = board;

      for(let i = 0; i < 4; i ++) {
        const start = (y - 2 + i) * 10
        const end = start + 10
        const row = nextBoard.slice(start, end)
        if(!row.includes(0) && start < 220) {
          nextBoard.splice(start, 10)
          nextBoard.unshift(0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
          lignCount += 1;
        }
      }

      if(lignCount > 10 * (level + 1)) {
        level += 1;
      }

      board = nextBoard

      newPiece();

      newTetro = false;
      return
    }

    if(colision(nextX, nextY, nextRotation)) { // if colision keep previous coordinates
      if( nextX === x && nextRotation === rotation) {
        newTetro = true;
      }
      nextY = y;
    }

    x = nextX;
    y = nextY;
    rotation = nextRotation;
  }

  function drawBoard() {
    board.forEach((element, index) => {
      let x = index % 10;
      let y = Math.floor(index / 10) - 2;

      drawElement(element , x, y)
    })
  }
  function drawTetromino() {
    const tetroArr = tetromino[rotation].flat();
    tetroArr.forEach((element, index) => {
      let x2 = x + (index % 5) - 2;
      let y2 = (y + Math.floor(index / 5) - 2) - 2;

      drawElement(element , x2, y2)
    })
  }
  function drawElement(e , x, y) {
    if(e === 1) {
      ctx.fillStyle = colors[level % 10][0];
      ctx.fillRect(x * 8, y * 8, 8, 8);
      ctx.drawImage(block2, x * 8, y * 8, 8, 8);
    }
    if(e === 2) {
      ctx.fillStyle = colors[level % 10][0];
      ctx.fillRect(x * 8, y * 8, 8, 8);
      ctx.drawImage(block1, x * 8, y * 8, 8, 8);
    }
    if(e === 3) {
      ctx.fillStyle = colors[level % 10][1];
      ctx.fillRect(x * 8, y * 8, 8, 8);
      ctx.drawImage(block1, x * 8, y * 8, 8, 8);
    }
  }
  function render() {
    if(ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawBoard()
      drawTetromino()

      window.requestAnimationFrame(render);
    }
  }

  return (
    <div id="game">
      <div className="element">
        <img id="game-window" src={require("../assets/background.png")} alt="background" />
      </div>

      <div className="element">
        <canvas id="tetris-board" width="80" height="160"></canvas>
      </div>
    </div>
  )

}

export default Atype;