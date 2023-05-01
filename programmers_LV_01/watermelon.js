//수박수
//[1] 내 풀이 
function solution(n){
    let answer = '수박';
     
    if( n === 1){
        return '수';
    }else if (n === 2){
        return '수박';
    }else if ( n > 2){
        for( let i = 2 ; i < n; i++){
            if( i % 2 === 0){
                answer = answer + '수';
            }else {
                answer = answer + '박';
            }
        }
    }
    return answer;
}

//[2] 다른 풀이 
function solution(n){
    let answer = '수박'.repeat(n).slice(0, n);
    return answer;
}