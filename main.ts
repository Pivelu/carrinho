function tras () {
	
}
function esquerda () {
	
}
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(4)
})
function direita () {
	
}
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
function frente () {
	
}
radio.setGroup(0)
