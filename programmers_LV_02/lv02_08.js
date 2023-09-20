//피보나치 수 

function solution(n) {
    let figo = [];
    //일반 재귀함수를 사용할 때 런타임 에러가 나는 경우 
    // -> 일부 언어는 재귀 호출을 할 수 있는 횟수가 정해져 있고, 횟수를 넘어 재귀 호출을 하면 런타임 에러 발생
    //for문 사용 - 동적계획법
    for( let i = 0 ; i  <= n; i++){
        if(i === 0){0
            fibo.push(0);
        }else if (i === 1){
            fibo.push(1);
        }else {
            //나머지 연산의 성질 -> (a + b) % m = ((a % m) + (b % m)) % m
            //표현할 수 있는 언어의 자료형 범위가 넘어가 오버플로우가 나는 경우를 방지하기 위해 사용.
            fibo[i] = fibo[i] = (fibo[i-1])%1234567 + (fibo[i-2])%1234567
        }
    }
    let answer = fibo[n] % 1234567;
    return answer;
}