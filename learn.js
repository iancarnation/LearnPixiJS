var stage = new PIXI.Container(),
    renderer = PIXI.autoDetectRenderer(512, 512);
document.body.appendChild(renderer.view);

PIXI.loader
    .add("img/treasureHunter.json")
    .load(setup);

var dungeon, explorer, treasure, door, id;
    
function setup()
{
    // There are 3 ways to make sprites from texture atlas frames
    
    //1. Access the 'TextureCache' directly
    var dungeonTexture = PIXI.utils.TextureCache["dungeon.png"];
    dungeon = new PIXI.Sprite(dungeonTexture);
    stage.addChild(dungeon);
    
    //2. Access the texture using loader's resources:
    explorer = new PIXI.Sprite(PIXI.loader.resources["img/treasureHunter.json"].textures["explorer.png"]);
    explorer.x = 68;
    
    // Center explorer vertically
    explorer.y = stage.height / 2 - explorer.height / 2;
    stage.addChild(explorer);
    
    //3. Create an optional alias called 'id' for all the texture atlas
    //   frame id textures
    id = PIXI.loader.resources["img/treasureHunter.json"].textures;
    
    //Make the treasure box using the alias
    treasure = new PIXI.Sprite(id["treasure.png"]);
    stage.addChild(treasure);
    
    //Position the treasure next to the right edge of the canvas
    treasure.x = stage.width - treasure.width - 48;
    treasure.y = stage.height/2 - treasure.height/2;
    stage.addChild(treasure);
    
    //Exit door
    door = new PIXI.Sprite(id["door.png"]);
    door.position.set(32,0);
    stage.addChild(door);
    
    //Make the blobs
    var numberOfBlobs = 6,
        spacing = 48,
        xOffset = 150;
    
    for (var i=0; i<numberOfBlobs; i++)
    {
        var blob = new PIXI.Sprite(id["blob.png"]);
        blob.x = spacing * i + xOffset;
        blob.y = randomInt(0, stage.height - blob.height);
        
        stage.addChild(blob);        
    }   
    
    renderer.render(stage);
}

function randomInt(min, max)
{
    return Math.floor(Math.random() * (max-min+1)) + min;
}
