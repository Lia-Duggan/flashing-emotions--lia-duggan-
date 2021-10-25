input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 8; index++) {
        basic.showIcon(IconNames.Happy)
        basic.pause(200)
        basic.clearScreen()
        basic.pause(200)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 6; index++) {
        basic.showIcon(IconNames.Sad)
        basic.pause(200)
        basic.clearScreen()
        basic.pause(200)
    }
})
