//프로그래머스 중괄호 스택 LV02

function test03 (str) {

    let answer = false;
    let stack = ["("];

    if(str.length % 2 === 1 || str.charAt(0) === ")"){
        answer = false;
    }

    for( let i = 1; i < str.length; i++){
        if(stack[0] === str[i]){
            stack.push(str[i]);
        }else {
            stack.pop();
            answer = true;
        }
    }


    return answer;
}

const print = test03("(())()");
console.log(print);

//프로그래머스에서는 몇가지 예제에서 통과 못함.
//효율성 문제
//2차 시도 : 테스트 전부 통과 효율성 테스트 1만 실패 
//무의미한 반복문 진행을 피해야 함
function solution(s) {
    let answer = flase;
    let stack =[];
    if(s[0] === ")") answer = false;

    s.split('').map((element) => {
        if(element === ")" && stack[stack.length-1] === "("){
            stack.pop();
        }else{
            stack.push(element);
        }
    });

    if(stack.length === 0){
        answer = true;
    }else{
        answer = false;
    }

    return answer;
};

//3차 시도 + - 합 = 0 이 될 때 그리고 문자열을 다 돌면  return 
function solution(s){
    let answer = true;
    let bracket = 0;
    const length = s.length;
    
    //무의미하게 반복문이 진행되는 것을 방지하기 위해 분기점 
    //1. bracket -1 이 되면 멈추기 - ) 
    //2. bracket 양수 값이 남은 괄호이 수 보다 많다면 중단
    //3. 계산 완료시 0이 아니라면 false
    
    for( let i = 0; i < s.length; i++){
        if(s[i] === ")"){
            bracket --;
        } else {
            bracket ++;
        };
    //중단점 1과 2
        if(bracket < 0 || bracket >= length -i){
            answer = false;
            break;
        };
    };

    //중단점 3
    if(bracket !== 0){
        answer = false;
    }
    return answer;
};

//다른 사람 풀이 
//효율성 테스트 1 성공할 대도 있고 아닐 때도 있다 함 
function solution(s){
    let cum = 0;
    for( let i of s){
        cum += (i === "(" ? 1: -1);
        if(cum < 0){
            return false;
        }
    }
    return (cum === 0) ? true : false;

}