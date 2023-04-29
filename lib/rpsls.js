export { rps }

var shot = ["rock", "paper", "scissors"];
var opp = Math.floor(Math.random() * 3);
     switch (opp) { 
       case 0: opp = "rock"; 
         break; 
       case 1: opp = "paper"; 
         break; 
       case 2: opp = "scissors"; 
         break; 
     };

function game(shot, opp) {
  if (shot === opp){
    return "tie";
   } else if (shot === rock) {
    if (opp === scissors) {
      return "win";
    } else if (opp === paper) {
      return "lose";
    }
  }
  else if (shot === paper) {
    if (opp === rock) {
      return "win";
    } else if (opp === scissors) {
      return "lose";
    }
  }
  else if (shot === scissors) {
    if (opp === rock) {
      return "lose";
    } else if (opp === paper) {
      return "win";
    }
  }};

function rps(shot) {
      const player = shot.toLowerCase();
      const opponent = opp();
      const result = game();
      if (shot === null || shot === undefined){
        return {
          'player': player}
        }
       if (shot.includes(shot)){
        return {
        'player': player,
        'opponent': opponent,
        'result': result,
      };
    }
  }