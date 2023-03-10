//약수의 합 구하기 

function solution(n){
    //n의 제한 조건 
    if(n<=0 && n>- 3000){
        return false;
    }

    //약수의 합 구하기
    var answer = 0;
    for ( let i = 1; i<= n; i++){
        if(n % i === 0){
            answer += i;
        }
    }
    return answer;
}