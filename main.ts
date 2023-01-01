input.onButtonPressed(Button.A, function () {
    Velocidad += 1
    basic.showNumber(Velocidad)
})
input.onButtonPressed(Button.B, function () {
    Velocidad += -1
    basic.showNumber(Velocidad)
})
let BLUE = 0
let GREEN = 0
let RED = 0
let Velocidad = 0
Velocidad = 5
let LucesRGB = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
basic.showNumber(Velocidad)
basic.forever(function () {
    RED = 0
    GREEN = 0
    BLUE = 255
    for (let index = 0; index < 255; index++) {
        RED += 1
        BLUE += -1
        LucesRGB.showColor(neopixel.rgb(RED, GREEN, BLUE))
        basic.pause(Velocidad)
    }
    for (let index = 0; index < 255; index++) {
        GREEN += 1
        RED += -1
        LucesRGB.showColor(neopixel.rgb(RED, GREEN, BLUE))
        basic.pause(Velocidad)
    }
    for (let index = 0; index < 255; index++) {
        BLUE += 1
        GREEN += -1
        LucesRGB.showColor(neopixel.rgb(RED, GREEN, BLUE))
        basic.pause(Velocidad)
    }
})
