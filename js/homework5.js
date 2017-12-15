// Final project - Super game
const canvas = document.getElementById('canvas');
canvas.width = 1200;
canvas.height = 600;

const ctx = canvas.getContext('2d');

const rand = function(num){
    return Math.floor(Math.random()*num + 1);
};

alert("Start a game!");


//const backImg = new Image();
//backImg.src = 'data:image/jpeg;base64,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';


const colors = ['#1A7DD7', '#F2B809', '#03275A', '#F37402', '#F34605'];

const colorStrike = {
    '#1A7DD7' : 1,
    '#F2B809' : 1,
    '#03275A' : 2,
    '#F37402' : 2,
    '#F34605' : 3
};

const createRectangles = function(count, xCoord, yCoord, canvasWidth, canvasHeight){
    const rectangles = [];
    if(count <= 0){
        return;
    }
    //const color = colors[rand(5) - 1];
    const helper = function(count, xCoord, yCoord){
        if (count < 0) {
            return;
        }
        const color = colors[rand(5) - 1];
        const rect = {
            x: xCoord,
            y: yCoord,
            width: 100,
            height: 30,
            gap: 10,
            color: color,
            strikes: colorStrike[color]
        };
        //debugger;
        if (rect.x < canvas.width - rect.width && rect.y < canvas.height - rect.height && rect.x > 0 && rect.y > 0){
            rectangles.push(rect);
        }
        helper(count - 1, xCoord+110, yCoord);

        return rectangles;
    };
    return helper(count-1, xCoord, yCoord);

};

const movingRect = {
    x: 300,
    y: 570,
    width: 200,
    height: 30,
    xDelta: 200,
    color: '#F34605'
};

// 45 degree  98

let speed = 1;
const angle = 98;
const rad = angle*Math.PI/180;
const xD = Math.cos(rad)*speed;
const yD = Math.sin(rad)*speed;


const ball = {
    x: 350,
    y: 560,
    r: 10,
    xDelta: xD,
    yDelta: yD,
    color: '#F2B809'
};
let gameData = {
    //firstRow: createRectangles(1, 310, 11, canvas.width, canvas.height),
    //secondRow: createRectangles(1, 530, 11, canvas.width, canvas.height),
    //thirdRow: createRectangles(1, 750, 11, canvas.width, canvas.height),
    //fourthRow: createRectangles(7, 200, 50, canvas.width, canvas.height),
    //fifthRow: createRectangles(7, 200, 90, canvas.width, canvas.height),
    //sixthRow: createRectangles(1, 310, 130, canvas.width, canvas.height),
    //seventhRow: createRectangles(1, 530, 130, canvas.width, canvas.height),
    //eightRow: createRectangles(1, 750, 130, canvas.width, canvas.height)

    firstRow: createRectangles(7, 200, 20, canvas.width, canvas.height),
    secondRow: createRectangles(7, 200, 60, canvas.width, canvas.height)

}

const draw = function(){
    //ctx.drawImage(backImg, 0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const drawRect = function(i){
        for(let key in gameData){
            if(i>gameData[key].length-1){
                return;
            }
            for(let t = 0; t<=gameData[key].length-1; t++){
                ctx.fillStyle = gameData[key][t].color;
                ctx.fillRect(gameData[key][t].x, gameData[key][t].y, gameData[key][t].width, gameData[key][t].height);
            }
        }
        drawRect(i+1);
    };
    drawRect(0);

    //debugger;
    for(let key in gameData){
        for(let i = 0; i<gameData[key].length; i++){
                ctx.fillStyle = '#000';
                ctx.font = "20px Georgia";
                ctx.fillText(gameData[key][i].strikes, gameData[key][i].x +50, gameData[key][i].y+20);
        }
    }



    ctx.fillStyle = movingRect.color;
    ctx.fillRect(movingRect.x, movingRect.y, movingRect.width, movingRect.height);

    ctx.fillStyle = ball.color;
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI*2);
    ctx.fill();

    //ctx.fillRect(ball.x, ball.y, ball.r, ball.r);


};

const update = function(j){
    for(let key in gameData){
        if(j>gameData[key].length-1){
            return;
        }
    }
    ball.x += ball.xDelta;
    ball.y += ball.yDelta;


    //ball changes direction when hits canvas walls

    if( (ball.x - ball.r <= 0) || (ball.x + ball.r + ball.xDelta >= canvas.width) || (ball.y - ball.r <= 0)){
        ball.xDelta = -ball.xDelta;
        ball.yDelta = -ball.yDelta;
    }

    if(ball.y + ball.r >= canvas.height){
        location.reload();

    }
    // ball changes direction when hits moving rectangle

    if(ball.y + ball.r + ball.yDelta >= movingRect.y && ball.x + ball.r + ball.xDelta >= movingRect.x && ball.x - ball.r - ball.xDelta <= movingRect.x + movingRect.width && ball.y - ball.r -ball.yDelta <= movingRect.y + movingRect.height){
        ball.xDelta = ball.xDelta;
        ball.yDelta = -ball.yDelta;
    }

    //ball changes direction when hits rectangles in row
    for(let key in gameData){
        const collosion = (ball.y + ball.r + ball.yDelta >= gameData[key][j].y) && (ball.x + ball.r + ball.xDelta >= gameData[key][j].x) && (ball.x - ball.r - ball.xDelta <= gameData[key][j].x + gameData[key][j].width) && (ball.y-ball.r - ball.yDelta <= gameData[key][j].y + gameData[key][j].height)
        if(collosion) {
            ball.xDelta = ball.xDelta;
            ball.yDelta = -ball.yDelta;
        }

        // for the 2nd phase ////////////////////////////

        let isEmpty = false;
        for(let i = 0; i<gameData[key].length; i++){
            if(gameData[key][i]=== ''){
                isEmpty = true;
            }else{
                isEmpty = false;
                break;
            }
        }
        if(isEmpty === true){
            //speed = 10;
            gameData = {
                firstRow: createRectangles(7, 200, 20, canvas.width, canvas.height),
                secondRow: createRectangles(7, 200, 60, canvas.width, canvas.height),
                thirdRow: createRectangles(7, 200, 100, canvas.width, canvas.height)
            }

        }


// Yellow Strike
            if(gameData[key][j].color === ('#F2B809') && collosion){
                //debugger;
                if(gameData[key][j].strikes<0){
                    return;
                }
                gameData[key][j].strikes--;
            }
            if(gameData[key][j].color === ('#F2B809') && gameData[key][j].strikes === 0){
                gameData[key][j] = '';
            }

// Blue strike
            if(gameData[key][j].color === ('#1A7DD7') && collosion){
                if(gameData[key][j].strikes<0){
                    return;
                }
                gameData[key][j].strikes--;
            }
            if(gameData[key][j].color === ('#1A7DD7') && gameData[key][j].strikes === 0){
                gameData[key][j] = '';
            }
// dark blue strike
            if(gameData[key][j].color === ('#03275A') && collosion){
                if(gameData[key][j].strikes<0){
                    return;
                }
                gameData[key][j].strikes--;
            }
            if(gameData[key][j].color === ('#03275A') && gameData[key][j].strikes === 0){
                gameData[key][j] = '';
            }

//orange strike
            if(gameData[key][j].color === ('#F37402') && collosion){
                if(gameData[key][j].strikes<0){
                    return;
                }
                gameData[key][j].strikes--;
            }
            if(gameData[key][j].color === ('#F37402') && gameData[key][j].strikes === 0){
                gameData[key][j] = '';
            }
// red strikes F34605
            if(gameData[key][j].color === ('#F34605') && collosion){
                if(gameData[key][j].strikes<0){
                    return;
                }
                gameData[key][j].strikes--;
            }
            if(gameData[key][j].color === ('#F34605') && gameData[key][j].strikes === 0){
                gameData[key][j] = '';
            }
        }
    update(j+1);
};

const loop = function(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    draw();
    update(0);
    requestAnimationFrame(loop);
};

loop();


const leftKey = 37;
const rightKey = 39;
const leftA = 65;
const rightF = 70;

// Moving rectangle from left to right
document.addEventListener('keydown', function(event){
    //debugger;
    if(event.keyCode === rightKey) {
        movingRect.x += movingRect.xDelta;
        if(movingRect.x >= canvas.width-movingRect.width){
            movingRect.x = 1000;
        }

    }
    if(event.keyCode === leftKey){
        movingRect.x -= movingRect.xDelta;
        if(movingRect.x<=0){
            movingRect.x = 0;
        }
    }

    if(event.keyCode === rightF){
        ball.x = ball.x+50;
    }
    if(event.keyCode === leftA){
        ball.x = ball.x-50;
    }

}, false);











