input.onButtonPressed(Button.A, function () {
    music.setVolume(100)
    music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Forever)
})
input.onButtonPressed(Button.B, function () {
    music.stopMelody(MelodyStopOptions.All)
})
basic.forever(function () {
    basic.showString("M.4/11")
})
basic.forever(function () {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Red)
    basic.pause(100)
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Green)
    basic.pause(100)
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Blue)
    basic.pause(100)
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.White)
    basic.pause(100)
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Cyan)
    basic.pause(100)
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Pinkish)
    basic.pause(100)
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Yellow)
    basic.pause(500)
})
