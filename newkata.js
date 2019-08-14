let marsRover = {
    direction: "N",
    x: 0,
    y: 0,
    move: ["f, b"]
   };
   function turnLeft(marsRover){
    console.log("turnLeft was called!");
    switch(this.marsRover.direction){
    case "N":
        marsRover.direction = "W";
        break;
    case "E":
      console.log("You are now facing North.");
        marsRover.direction = "N";
        break;
    case "S":
      console.log("You are now facing East.");
        marsRover.direction = "E";
        break;
    case "W":
      console.log("You are now facing South.");
        marsRover.direction = "S";
        break;
    }
   }
   function turnRight(rover){
    console.log("turnRight was called!");
    switch(rover){
    case "N":
      console.log("You are now facing East.");
        break;
    case "E":
      console.log("You are now facing South.");
        break;
    case "S":
      console.log("You are now facing West.");
        break;
    case "W":
      console.log("You are now facing North.");
        break;
      }
    }
    
    function whatever(){
      console.log("eai")
    }
      
   