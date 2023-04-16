//하샤드의 수
function solution(x){
    let answer = true;
    let sum = 0;

    arr = String(x).split(''); //문자열 배열
    for( let i = 0 ; i<arr.length;i++){
        sum += Number(arr[i]); //숫자로 전환 후 누적 덧셈
    }

    if(x % sum === 0){
        return answer;
    }else{
        return false;
    }
}