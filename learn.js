var stage = new PIXI.Container(),
    renderer = PIXI.autoDetectRenderer(256, 256);

document.body.appendChild(renderer.view);


PIXI.loader
    .add("img/cat.png")
    .load(setup);
    
function setup()
{
    var cat = new PIXI.Sprite(
        PIXI.loader.resources["img/cat.png"].texture
    );
    
    cat.x = 96;
    cat.y = 96;
    
    cat.anchor.x = 0.5;
    cat.anchor.y = 0.5;
    
    cat.rotation = 0.5;
    
    stage.addChild(cat);
    
    renderer.render(stage);
}
