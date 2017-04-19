var stage = new PIXI.Container(),
    renderer = PIXI.autoDetectRenderer(256, 256);

document.body.appendChild(renderer.view);


PIXI.loader
    .add("img/tileset.png")
    .load(setup);
    
function setup()
{
    var texture = PIXI.utils.TextureCache["img/tileset.png"];
    
    var subRegion = new PIXI.Rectangle(192,128,64,64);
    
    texture.frame = subRegion;
    
    var rocket = new PIXI.Sprite(texture);
    
    rocket.x = 32;
    rocket.y = 32;
    
    stage.addChild(rocket);
    
    renderer.render(stage);
}
