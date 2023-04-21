Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Right, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
    if (!(Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Left))) {
        basic.showNumber(1)
    } else {
        if (Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Left)) {
            basic.showNumber(1)
        }
    }
})
basic.forever(function () {
    basic.showNumber(0)
})
