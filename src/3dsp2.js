while(true)
{
  // Basic Buttons
  var a = 0
  var b = 0
  var x = 0
  var y = 0
 var start = 0
 var select = 0
 var L = 0
 var R = 0
 var ZL = 0
 var ZR = 0
 // Normal D-pad
 var DR = 0
 var DL = 0
 var DU = 0
  var DD = 0
  // Circle D-pad
 var CR = 0
 var CL = 0
 var CU = 0
 var CD = 0
  //C-Stick
 var SR = 0
 var SL = 0
 var SU = 0
 var SD = 0
  
  var inp = input.checkHeld();
  // Basic Controls
  if(inp == input.A) var a = 1;
  if(inp == input.B) var b = 1;
  if(inp == input.X) var x = 1;
  if(inp == input.Y)  var y = 1;
  if(inp == input.Select)  var start = 1;
  if(inp == input.Start)  var select = 1;
  if(inp == input.L) var L = 1;
  if(inp == input.R) var R = 1;
  if(inp == input.ZL)  var ZL = 1;
  if(inp == input.ZR)   var ZR = 1;
  // Now for the Dpad(s) Left Analong
  if(inp == input.DRight)  var DR = 1;
  if(inp == input.DLeft)   var DL = 1;
  if(inp == input.DUp)   var DU = 1;
  if(inp == input.DDown)    var DD = 1;
  // Circle Pad  Left Analong
  if(inp == input.CPRight)      var CR = 1;
  if(inp == input.CPLeft)        var CL = 1;
  if(inp == input.CPUp)       var CU = 1;
  if(inp == input.CPDown)        var CD = 1;
  // C-Stick for Right Analog
   if(inp == input.CSRight)         var SR = 1;
  if(inp == input.CSLeft)        var SL = 1;
  if(inp == input.CSUp)          var SU = 1;
  if(inp == input.CSDown)     var SD = 1;
  // 22 Inputs
  
exports("a", a);
  exports("b", b);
  exports("x", x);
  exports("y", y);
  exports("start", start);
  exports("select", select);
  exports("L", L);
  exports("R", R);
  exports("ZL", ZL);
  exports("ZR", ZR);
  exports("DR", DR);
  exports("DL", DL);
  exports("DU", DU);
  exports("DD", DD);
  exports("CU", CU);
  exports("CD", CD);
  exports("CL", CL);
  exports("CR", CR);
  exports("SR", SR);
  exports("SL", SL);
  exports("SU", SU);
  exports("SD", SD);
  
  else console.log("Try pressing keys"); //if no keys are pressed it will say "No key pressed"
  console.clear(); // clears the console, may cause lag
}
