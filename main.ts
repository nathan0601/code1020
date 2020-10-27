basic.forever(function () {
    for (let I = 0; I <= 4; I++) {
        for (let j = 0; j <= I; j++) {
            led.plot(4 - I + j, j)
            basic.pause(200)
        }
    }
    for (let x = 0; x <= 3; x++) {
        for (let y = 0; y <= 3 - x; y++) {
            led.plot(y, x + y + 1)
            basic.pause(200)
        }
    }
    basic.clearScreen()
})
