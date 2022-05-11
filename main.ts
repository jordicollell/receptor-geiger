pins.onPulsed(DigitalPin.P12, PulseValue.Low, function () {
    cpi += 1
    radio.sendNumber(1)
})
let cpi = 0
radio.setGroup(1)
basic.showLeds(`
    # . . . #
    . . . . .
    . . . . .
    . . . . .
    # . . . #
    `)
