//아이스 아메리카노 
// [1] 내 풀이 
function solution(money) {
    answer = [];
    answer[0] = parseInt(money/5500);
    answer[1] = money - (answer[0]*5500);
    return answer;
}

//[2] 다른 사람 풀이 
function solution(money){
    return [Math.floor(money/5500), money%5500];
}