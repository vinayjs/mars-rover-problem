const currentState = "00N"
const command = "RLM"
const roverCommand = (currentState, command) => {
    let result = [];
    let currentCordinate = currentState.split("");
    let x = parseInt (currentCordinate[0])
    let y = parseInt (currentCordinate[1])
    let pole = currentCordinate[2]
    result.push(x)
    result.push(y)
    result.push(pole)
    let move = command.split("")
    //console.log(move)
    for(let i = 0; i < move.length; i++) {

        if(move[i] === 'L'){
            if(result[2]==="N") result[2] = "W"
            else if(result[2]==="W") result[2] = "S"
            else if(result[2]==="S") result[2] = "E"
            else if(result[2]==="E") result[2] = "N"
        }
        else if(move[i] === 'R'){
            if(result[2]==="N") result[2] = "E"
            else if(result[2]==="E") result[2] = "S"
            else if(result[2]==="S") result[2] = "W"
            else if(result[2]==="W") result[2] = "N"
        }
        else if(move[i] === 'M'){
            if(result[2]==="N") result[1] += 1;
            else if(result[2]==="E") result[0] += 1
            else if(result[2]==="S") result[1] -= 1
            else if(result[2]==="W") result[0] -= 1
        }    
    }
return result;
}
console.log(roverCommand("00N","RM"))