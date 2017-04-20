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
    stage.addChild(cat);
    
    gameLoop();
}

function gameLoop()
{
    requestAnimationFrame(gameLoop);
    
    cat.x += 1;
    
    renderer.render(stage);
}
