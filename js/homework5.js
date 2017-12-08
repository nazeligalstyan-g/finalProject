// Final project - Super game
const canvas = document.getElementById('canvas');
canvas.width = 1200;
canvas.height = 600;

const ctx = canvas.getContext('2d');

const rand = function(num){
    return Math.floor(Math.random()*num + 1);
};


const colors = ['#1A7DD7', '#F2B809', '#03275A', '#F37402', '#F34605'];

let yellowStrikes = 2;
let lightBlueStrikes = 1;
let darkBlueStrikes = 3;
let orangeStrikes = 2;
let redStrikes = 4;

//let orangeStrikes = 4;
//let redStrikes = 5;

const createRectangles = function(count, xCoord, yCoord, canvasWidth, canvasHeight){
    const rectangles = [];
    if(count <= 0){
        return;
    }
    const helper = function(count, xCoord, yCoord){
        if (count < 0) {
            return;
        }
        const rect = {
            x: xCoord,
            y: yCoord,
            width: 100,
            height: 30,
            gap: 25,
            color: colors[rand(5) - 1]
        };
        if (rect.x < canvas.width - rect.width && rect.y < canvas.height - rect.height && rect.x > 0 && rect.y > 0){
            rectangles.push(rect);
        }
        helper(count - 1, xCoord+110, yCoord);

        return rectangles;
    };
    return helper(count-1, xCoord, yCoord);

};

const movingRect = {
    x: 500,
    y: 570,
    width: 200,
    height: 30,
    xDelta: 150,
    color: '#03275A'
};

const ball = {
    x: 550,
    y: 500,
    r: 15,
    xDelta: 1,
    yDelta: 1,
    color: '#F2B809'
};
const gameData = {
    firstRow: createRectangles(7, 100, 10, canvas.width, canvas.height),
    secondRow: createRectangles(5, 210, 50, canvas.width, canvas.height),
    thirdRow: createRectangles(7, 210, 90, canvas.width, canvas.height)
    //fourthRow: createRectangles(7, 100, 130, canvas.width, canvas.height)
    //fifthRow: createRectangles(1, 430, 170, canvas.width, canvas.height)
}

const draw = function(){
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


    ctx.fillStyle = movingRect.color;
    ctx.fillRect(movingRect.x, movingRect.y, movingRect.width, movingRect.height);

    ctx.fillStyle = ball.color;
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI*2);
    ctx.fill();
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
    if(ball.x - ball.r <= 0){
        ball.xDelta = -ball.xDelta + 0.1;
        ball.yDelta = -ball.yDelta + 0.1;
    }
    if(ball.x + ball.r >= canvas.width){
        ball.xDelta = -ball.xDelta + 0.1;
        ball.yDelta = -ball.yDelta + 0.1;
    }

    if(ball.y - ball.r <= 0){
        ball.xDelta = -ball.xDelta + 0.1;
        ball.yDelta = -ball.yDelta + 0.1;
    }

    if(ball.y + ball.r >= canvas.height){
        alert('Game over!');
        location.reload();
    }

    // ball changes direction when hits moving rectangle
    if(ball.y + ball.r >= movingRect.y && ball.x + ball.r >= movingRect.x && ball.x - ball.r <= movingRect.x + movingRect.width && ball.y - ball.r <= movingRect.y + movingRect.height){
        ball.xDelta = ball.xDelta;
        ball.yDelta = -ball.yDelta;
    }
    for(let i =0; i<=90; i++){
        if(ball.r*Math.cos(i) >= movingRect.y &&  ball.r*Math.sin(i) >= movingRect.x && ball.r*Math.sin(i) <= movingRect.x + movingRect.width && ball.r*Math.cos(i) <= movingRect.y + movingRect.height){
            ball.xDelta = ball.xDelta;
            ball.yDelta = -ball.yDelta;
        }
    }


    //ball changes direction when hits rectangles in row
    for(let key in gameData){
        if(ball.y + ball.r >= gameData[key][j].y && ball.x + ball.r >= gameData[key][j].x && ball.x - ball.r <= gameData[key][j].x + gameData[key][j].width && ball.y-ball.r <= gameData[key][j].y + gameData[key][j].height){

            ball.xDelta = ball.xDelta + 0.2;
            ball.yDelta = -ball.yDelta;

             //when ball hits yellow rectangles in row  ///////////////////////////////////////////////
            const coords = [];
            const boghos = function(){
                if(gameData[key][j].color === ('#F2B809') && ball.y + ball.r >= gameData[key][j].y && ball.x + ball.r >= gameData[key][j].x && ball.x - ball.r <= gameData[key][j].x + gameData[key][j].width && ball.y-ball.r <= gameData[key][j].y + gameData[key][j].height){
                    debugger;
                    coords.push(gameData[key][j].x);
                    coords.push(gameData[key][j].y);
                }
            };
            console.log(boghos());
            console.log(coords);
            if(gameData[key][j].color === ('#F2B809') && ball.y + ball.r >= gameData[key][j].y && ball.x + ball.r >= gameData[key][j].x && ball.x - ball.r <= gameData[key][j].x + gameData[key][j].width && ball.y-ball.r <= gameData[key][j].y + gameData[key][j].height && (gameData[key][j].x === coords[0] && gameData[key][j].y === coords[1])){
                if(yellowStrikes<0){
                    return;
                }
                yellowStrikes--;
            }
            if(gameData[key][j].color === ('#F2B809') && yellowStrikes === 0){
                gameData[key][j] = '';
            }









            //if(gameData[key][j].color === ('#F2B809') && ball.y + ball.r >= gameData[key][j].y && ball.x + ball.r >= gameData[key][j].x && ball.x - ball.r <= gameData[key][j].x + gameData[key][j].width && ball.y-ball.r <= gameData[key][j].y + gameData[key][j].height){
            //    if(yellowStrikes<0){
            //        return;
            //    }
            //    gameData[key][j].id = true;
            //    yellowStrikes--;
            //}
            //if(gameData[key][j].color === ('#F2B809') && yellowStrikes === 0 && (gameData[key][j].id = true)){
            //    gameData[key][j] = '';
            //}

            //when ball hits light blue rectangles in row

            if(gameData[key][j].color === ('#1A7DD7') && ball.y + ball.r >= gameData[key][j].y && ball.x + ball.r >= gameData[key][j].x && ball.x - ball.r <= gameData[key][j].x + gameData[key][j].width && ball.y-ball.r <= gameData[key][j].y + gameData[key][j].height){
                if(lightBlueStrikes<0){
                    return;
                }
                gameData[key][j].id = true;
                lightBlueStrikes--;
            }
            if(gameData[key][j].color === ('#1A7DD7') && lightBlueStrikes === 0 && (gameData[key][j].id = true)){
                gameData[key][j] = '';
            }

            //when ball hits dark blue rectangles in row

            if(gameData[key][j].color === ('#03275A') && ball.y + ball.r >= gameData[key][j].y && ball.x + ball.r >= gameData[key][j].x && ball.x - ball.r <= gameData[key][j].x + gameData[key][j].width && ball.y-ball.r <= gameData[key][j].y + gameData[key][j].height){
                if(darkBlueStrikes<0){
                    return;
                }
                gameData[key][j].id = true;
                darkBlueStrikes--;
            }
            if(gameData[key][j].color === ('#03275A') && darkBlueStrikes === 0 && (gameData[key][j].id = true)){
                gameData[key][j] = '';
            }

            //when ball hits orange rectangles in row

            if(gameData[key][j].color === ('#F37402') && ball.y + ball.r >= gameData[key][j].y && ball.x + ball.r >= gameData[key][j].x && ball.x - ball.r <= gameData[key][j].x + gameData[key][j].width && ball.y-ball.r <= gameData[key][j].y + gameData[key][j].height){
                if(orangeStrikes<0){
                    return;
                }
                gameData[key][j].id = true;
                orangeStrikes--;
            }
            if(gameData[key][j].color === ('#F37402') && orangeStrikes === 0 && (gameData[key][j].id = true)){
                gameData[key][j] = '';
            }

            //when ball hits red rectangles in row

            if(gameData[key][j].color === ('#F34605') && ball.y + ball.r >= gameData[key][j].y && ball.x + ball.r >= gameData[key][j].x && ball.x - ball.r <= gameData[key][j].x + gameData[key][j].width && ball.y-ball.r <= gameData[key][j].y + gameData[key][j].height){
                if(redStrikes<0){
                    return;
                }
                gameData[key][j].id = true;
                redStrikes--;
            }
            if(gameData[key][j].color === ('#F34605') && redStrikes === 0 && (gameData[key][j].id = true)){
                gameData[key][j] = '';
            }
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


document.addEventListener('keydown', function(event){
    if(event.keyCode === rightKey) {
        movingRect.x += movingRect.xDelta;
        if(movingRect.x >= canvas.width-movingRect.width){
            movingRect.x = 1000;
        }

    }else if(event.keyCode === leftKey){
        movingRect.x -= movingRect.xDelta;
        if(movingRect.x<=0){
            movingRect.x = 0;
        }
    }
}, false);


// Picture part

//const canvas = document.getElementById('canvas1');
//canvas.width = 400;
//canvas.height = 400;





