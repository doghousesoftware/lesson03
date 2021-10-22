let varSignal = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("V")
    varSignal = 0
    while (varSignal < 200) {
        varSignal += 10
        pins.analogWritePin(AnalogPin.P0, varSignal)
        basic.pause(500)
    }
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    for (let index = 0; index < 10; index++) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(500)
    }
    basic.clearScreen()
})
