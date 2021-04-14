// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`100010000305050505050505050505050505050406080c0c0c0c0c0c0c0c0c0c0c0c0706060e0f0f0f0f0f0f0f0f0f0f0f0f0d06060e0f0f0f0f0f0f0f0f0f0f0f0f0d06060e0f0f0f0f0f0f0f0f0f0f0f0f0d06060e0f0f0f0f0f0f0f0f0f0f0f0f0d06060e0f0f0f0f0f0f0f0f0f0f0f0f0d06060e0f0f0f0f0f0f0f0f0f0f0f0f0d06060e0f0f0f0f0f0f0f0f0f0f0f0f0d06060e0f0f0f0f0f0f0f0f0f0f0f0f0d06060e0f0f0f0f0f0f0f0f0f0f0f0f0d06060e0f0f0f0f0f0f0f0f0f0f0f0f0d06060e0f0f0f0f0f0f0f0f0f0f0f0f0d06060e0f0f0f0f0f0f0f0f0f0f0f0f0d06060a0b0b0b0b0b0b0b0b0b0b0b0b090602050505050505050505050505050501`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.vehicle.roadTurn4,sprites.vehicle.roadTurn3,sprites.vehicle.roadTurn1,sprites.vehicle.roadTurn2,sprites.vehicle.roadHorizontal,sprites.vehicle.roadVertical,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundCenter], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
