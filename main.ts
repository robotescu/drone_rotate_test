input.onButtonPressed(Button.B, function () {
    basic.pause(2000)
    Drones.Basic_action(Drones.Basicoptions.Takeoff)
    Drones.Hovering(1)
    Drones.Move_action(Drones.Directionoptions.Up, 20)
    Drones.Move_action(Drones.Directionoptions.Down, 20)
    Drones.Hovering(1)
    basic.showString("R")
    Drones.Rotation_action(Drones.Angleoptions.Left, 180)
    Drones.Hovering(1)
    basic.showArrow(ArrowNames.North)
    Drones.Move_action(Drones.Directionoptions.Forward, 60)
    Drones.Hovering(1)
    basic.showString("R")
    Drones.Rotation_action(Drones.Angleoptions.Right, 180)
    Drones.Hovering(1)
    Drones.Basic_action(Drones.Basicoptions.Landing)
})
Drones.initModule(Drones.Runmodes.Master)
basic.showIcon(IconNames.Yes)
