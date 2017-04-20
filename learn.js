var stage = new PIXI.Container(),
    renderer = PIXI.autoDetectRenderer(512, 512);
document.body.appendChild(renderer.view);


PIXI.loader
    .add("img/cat.png")
    .load(setup);

var cat, state;
    
function setup()
{
    cat = new PIXI.Sprite(PIXI.loader.resources["img/cat.png"].texture);
    cat.y = 96;
    cat.vx = 0;
    cat.vy = 0;
    stage.addChild(cat);
    
    var left = keyboard(37),
        up = keyboard(38),
        right = keyboard(39),
        down = keyboard(40);
        
    left.press = function(){
        cat.vx = -5;
        cat.vy = 0;
    };
    left.release = function(){
        if (!right.isDown && cat.vy === 0)
            cat.vx = 0;
    };
    
    up.press = function(){
        cat.vx = 0;
        cat.vy = -5;
    };
    up.release = function(){
        if (!down.isDown && cat.vx === 0)
            cat.vy = 0;
    };
    
    right.press = function(){
        cat.vx = 5;
        cat.vy = 0;
    };
    right.release = function(){
        if (!left.isDown && cat.vy === 0)
            cat.vx = 0;
    };
    
    down.press = function(){
        cat.vx = 0;
        cat.vy = 5;
    };
    down.release = function(){
        if (!up.isDown && cat.vx === 0)
            cat.vy = 0;
    };
    
    
    state = play;
    
    gameLoop();
}


function gameLoop()
{
    requestAnimationFrame(gameLoop);
    state();
    
    renderer.render(stage);
}

function play()
{
    cat.x += cat.vx;
    cat.y += cat.vy;
}


function keyboard(keyCode)
{
    var key = {};
    key.code = keyCode;
    key.isDown = false;
    key.isUp = true;
    key.press = undefined;
    key.release = undefined;
    
    key.onKeyDown = function(event){
        if (event.keyCode === key.code)
        {
            if (key.isUp && key.press) key.press();
            key.isDown = true;
            key.isUp = false;
        }
        event.preventDefault();
    };
    
    key.onKeyUp = function(event){
        if (event.keyCode === key.code)
        {
            if (key.isDown && key.release) key.release();
            key.isDown = false;
            key.isUp = true;
        }
        event.preventDefault();
    };
    
    window.addEventListener("keydown", key.onKeyDown.bind(key), false);
    window.addEventListener("keyup", key.onKeyUp.bind(key), false);
    
    return key;
}

function randomInt(min, max)
{
    return Math.floor(Math.random() * (max-min+1)) + min;
}