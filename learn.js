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
    cat.vx = 1;
    cat.x += cat.vx;
}


function keyboard(KeyCode)
{
    
}

function randomInt(min, max)
{
    return Math.floor(Math.random() * (max-min+1)) + min;
}