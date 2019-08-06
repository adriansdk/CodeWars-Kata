function XO(str) {
    let oCount = 0
    let xCount = 0
    for(i=0; i < str.length; i++){
    if (str.charAt(i).toLowerCase() == "x"){
      xCount++;
    } else if (str.charAt(i).toLowerCase() == "o"){
      oCount++;
    }
    console.log(xCount, oCount)
}
    if (xCount === oCount){
    return true;
  } else if (xCount !== oCount){
    return false;
  } else if (xCount === 0 && oCount === 0){
  return true
  }
}

//https://www.codewars.com/kata/exes-and-ohs/train/javascript