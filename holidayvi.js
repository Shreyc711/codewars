function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    var timeYou = pontoonDistance / youSpeed;
      
      // Calculate shark's effective speed based on the presence of a dolphin
      var effectiveSharkSpeed = dolphin ? sharkSpeed / 2 : sharkSpeed;
      
      // Calculate time for the shark to reach the pontoon
      var timeShark = sharkDistance / effectiveSharkSpeed;
      
      // Compare times to determine outcome
      if (timeYou <= timeShark) {
          return "Alive!";
      } else {
          return "Shark Bait!";
      }
  }