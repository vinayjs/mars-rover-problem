const roverCommand = (currentState, command, grid) => {

    let result = baseCondition(currentState);    
    return moveFunction(command, result, grid);
}


const baseCondition  = (currentState) => {
    let output = []
    let currentCordinate = currentState.split("");
    let x = parseInt (currentCordinate[0])
    let y = parseInt (currentCordinate[1])
    let pole = currentCordinate[2]
    output.push(x)
    output.push(y)
    output.push(pole)
    return output;
}



const gridCondition = (result, grid) => {
    let totalPlot = grid + "";
    const roverLimit  =  totalPlot.split('')
    const ouptput = !(result[0] > roverLimit[0]) || (result[1] > roverLimit[1]) ? true : false;
    return ouptput;
}


const moveFunction = (command, result, grid) => {

    let move = command.split("");
    let  girdLimit = gridCondition(result, grid);

    for(let i = 0; i < move.length; i++) {

      if(move[i] === 'L' && girdLimit === true ){
          if(result[2]==="N") result[2] = "W"
          else if(result[2]==="W") result[2] = "S"
          else if(result[2]==="S") result[2] = "E"
          else if(result[2]==="E") result[2] = "N"
      }
      else if(move[i] === 'R' && girdLimit === true ){
          if(result[2]==="N") result[2] = "E"
          else if(result[2]==="E") result[2] = "S"
          else if(result[2]==="S") result[2] = "W"
          else if(result[2]==="W") result[2] = "N"
      }
      else if(move[i] === 'M' && girdLimit === true){
          if(result[2]==="N") result[1] += 1;
          else if(result[2]==="E") result[0] += 1
          else if(result[2]==="S") result[1] -= 1
          else if(result[2]==="W") result[0] -= 1
      } 
      else if (girdLimit === false) return `My Plot Limit exceeded, My Current Status : ${result}` 
  }
  return result;
  }

console.log(roverCommand("33E","MMRMMRMRRM",55))
console.log(roverCommand("12N","LMLMLMLMM",55))