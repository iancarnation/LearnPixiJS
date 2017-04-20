function randomInt(min, max)
{
    return Math.floor(Math.random() * (max-min+1)) + min;
}

var stage = new PIXI.Container(),
    renderer = PIXI.autoDetectRenderer(512, 512);
document.body.appendChild(renderer.view);


PIXI.loader
    .add("img/cat.png")
    .load(setup);

var cat;
    
function setup()
{
    cat = new PIXI.Sprite(PIXI.loader.resources["img/cat.png"].texture);
    cat.y = 96;
    
    cat.vx = 0;
    cat.vy = 0;
    
    stage.addChild(cat);
    
    gameLoop();
}

function gameLoop()
{
    requestAnimationFrame(gameLoop);
    
    cat.vx = 1;
    cat.vy = 1;
    
    cat.x += cat.vx;
    cat.y += cat.vy;
    
    renderer.render(stage);
}
