//나머지가 1이 되는 수 찾기 
//[1] 본인 풀이
function solution(n){
    let x = 1;
    let answer = 0;
    while( x > 0 ){
        if( n % x === 1){
            answer = x;
            break;
        }else {
            x++;
        }
    }
    return answer;
}

//[2] 다른 사람 풀이
function solution(n, x = 1){
    while( x++ ){
        if( n % x === 1){
            return x;
        }
    }
}