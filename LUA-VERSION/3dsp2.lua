-- 3dsp2.lua

Screen_Y = SCREEN_HEIGHT
Screen_X = SCREEN_WIDTH


-- Display an image on the screen
Void screen.blit(screen, 0, 0, 3dsp2.png, [, 0, 0] [, Screen_X, Screen_Y])
until NB_FPS = 60 then
while not Keys.newPress.Start do
Controls.read()

a = 0
b = 0
x = 0
y = 0

up = 0
down = 0
left = 0
right = 0

L = 0
R = 0

-- Normal Dpad

if Keys.held.Left then
    left = 1
end
if Keys.held.Right then
    right = 1
end
if Keys.held.Up then
    up = 1
end
if Keys.held.Down then
    down = 1
end

--Triggers

if Keys.held.L then
    L = 1
end
if Keys.held.R then
    R = 1
end

--Basic X, Y, A, B

if Keys.held.X then
    x = 1
end
if Keys.held.Y then
    y = 1
end
if Keys.held.A then
    a = 1
end
if Keys.held.B then
    b = 1
end
if Keys.held.Select then
    Void render()
    
end
Void Debug.clear()

end
end