let projectile: Sprite = null
scene.setBackgroundColor(6)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . c c c c . . . . 
    . . . . . . c c d d d d c . . . 
    . . . . . c c c c c c d c . . . 
    . . . . c c 4 4 4 4 d c c . . . 
    . . . c 4 d 4 4 4 4 4 1 c . c c 
    . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
    . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
    f 4 4 f 4 4 1 4 4 4 4 4 1 4 4 f 
    f 4 4 f f 4 1 c c 4 4 4 1 f 4 f 
    f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
    . f 4 4 4 4 1 c 4 f 4 d f f f f 
    . . f f 4 d 4 4 f f 4 c f c . . 
    . . . . f f 4 4 4 4 c d b c . . 
    . . . . . . f f f f d d d c . . 
    . . . . . . . . . . c c c . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSprite(img`
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        .....88.........
        .....868........
        .....7868.......
        .....75868......
        .....57866......
        ....5778676.....
        ....5767656.....
        ....5756758.....
        ....65775868....
        ....65656868....
        ....87678868....
        ....87678668....
        ....87677668....
        ....8776768.....
        .....87678......
        ......8768......
        `, mySprite, randint(-25, 25), randint(-25, 25))
    mySprite.startEffect(effects.bubbles)
    projectile.lifespan = 3000
    if (projectile.vx < 0) {
        projectile.image.flipX()
    }
})
