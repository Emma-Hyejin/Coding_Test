//다음 큰 숫자
function countOne(num){
    let count = 0;
    let bin = num.toString(2);
    count = bin.split('1').length -1;
    return count;
}


function solution(n) {
    // 답은 자연수여야 한다. 
    // 답과 n의 2진수의 1의 갯수는 같아야 한다. 
    // 나오는 예시 중 가장 작은 수여야 한다. 
    
    //n 다음 숫자를 하나씩 접근하다가 제일 먼저 찾은 답에서 멈춘다. 
    // 1. n의 2진수의 1갯수를 저장 
    // 2. 조건문 안에서 하나씩 2진수로 바꾸고 1 갯수를 추출
    // 3. 조건문 안의 1 갯수와 n의 2진수의 갯수를 비교
    // 같은 것이 나오면 바로 조건문 중단
    
    //2진수 안의 1 갯수를 세는 함수를 따로 만든다. 

    let numberOfOne = countOne(n);

    let nextNum = n + 1;
    while(countOne(nextNum) !== numberOfOne){
        nextNum++;
    }
    
   return nextNum;
}

//일반적으로 for문이나 while문을 사용해서 2진수로 만들면 효율성 테스트에서 계속 걸렸습니다.
//비트 연산자를 활용한 효율성도 실패였습니다. 