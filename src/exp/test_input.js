while(true)
{
  var inp = input.checkHeld();
  // Basic Controls
  if(inp == input.A)                   ;
  if(inp == input.B)                   ;
  if(inp == input.X)                   ;
  if(inp == input.Y)                   ;
  if(inp == input.Select)                   ;
  if(inp == input.Start)                   ;
  if(inp == input.L)                   ;
  if(inp == input.R)                   ;
  if(inp == input.ZL)                   ;
  if(inp == input.ZR)                   ;
  // Now for the Dpad(s) Right Analong
  if(inp == input.DRight)                   ;
  if(inp == input.DLeft)                   ;
  if(inp == input.DUp)                   ;
  if(inp == input.DDown)                   ;
  // Circle Pad  Right Analong
  if(inp == input.CPRight)                   ;
  if(inp == input.CPLeft)                   ;
  if(inp == input.CPUp)                   ;
  if(inp == input.CPDown)                   ;
  // C-Stick for left Analog
   if(inp == input.CSRight)                   ;
  if(inp == input.CSLeft)                   ;
  if(inp == input.CSUp)                   ;
  if(inp == input.CSDown)                   ;
  
  
  
  
  
  
  
  else console.log("Try pressing keys"); //if no keys are pressed it will say "No key pressed"
  console.clear(); // clears the console, may cause lag
}
