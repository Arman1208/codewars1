// complete the function
function solution(string) {
    let newS=''
    for(letter of string){
    if(letter===letter.toUpperCase()){
      newS+=' '
      newS+=letter
    }else{
      newS+=letter
    }
      }
  return newS
}
