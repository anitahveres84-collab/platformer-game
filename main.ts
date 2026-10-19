controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (0 == 0) {
        Hero.vy = -175
    }
})
let Hero: Sprite = null
scene.setBackgroundColor(8)
Hero = sprites.create(assets.image`Hero`, SpriteKind.Player)
controller.moveSprite(Hero, 100, 0)
tiles.setTilemap(tilemap`level1`)
Hero.ay = 250
scene.cameraFollowSprite(Hero)
