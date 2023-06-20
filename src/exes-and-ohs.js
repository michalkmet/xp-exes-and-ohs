function exesAndOhs(string) {
  if(typeof string !== 'string'){
    return true;
  }
  let str = string.toLowerCase();
  
  let xOCounts = 0;
  for(let i = 0; i < str.length;i++){
    if( str[i] === 'x' ) {
      xOCounts++;
    } else if (str[i] === 'o'){
      xOCounts--;
    }
  }
  return xOCounts === 0;
}

module.exports = exesAndOhs;
