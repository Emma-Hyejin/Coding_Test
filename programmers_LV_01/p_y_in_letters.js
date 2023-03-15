//문자열 내 와 y의 개수
//[1] 내 풀이.
function solution(s){
    var answer = true;
    let count_p = 0; 
    let count_y = 0;

    s = s.toUpperCase()

    for( let i of s){
        if ( i === 'P'){
            count_p++;

        }else if ( i === 'Y'){
            count_y++;
        }
    }

    if( count_p === count_y){
        return answer;
    }else{
        answer = false;
        return answer;
    }

}

//[2] 다른사람 풀이.
function solution(s) {
    return [...s.toUpperCase()].reduce((acc, cur) => {
      if (cur === 'P') {
        return acc + 1;
      } else if (cur === 'Y') {
        return acc - 1;
      }
      console.log(acc);
      return acc;
    }, 0)
      ? false
      : true;
  }
  
