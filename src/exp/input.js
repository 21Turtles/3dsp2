while(true)
{
  var inp = input.checkHeld();
  if(inp == input.A) console.log("A pressed"); // preforms action if a key is pressed current action=print A pressed!"
  else if(input.Start) system.powerOff(); // if start pressed console will turn off
  else if(input.Select) system.exitApp(); // if select is pressed 3djs will close
  else if(input.B) Break; // if B pressed the code will end/stops the loop
  else console.log("No key pressed"); //if no keys are pressed it will say "No key pressed"
  console.clear(); // clears the console, may cause lag
}
