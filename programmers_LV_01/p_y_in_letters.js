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
