//LV01: 3진법 뒤집기 
// n -> 3 진법 -> 뒤집고 -> 10진법 
// ex. n = 45 / answer = 7

function solution(n) {
    let arr = [];
    let answer = 0;

    //n을 3진법으로 바꾸면서 뒤집어서 배열에 넣기
    while(n > 0){
        let decimal = Math.floor(n/3);
        arr.push(decimal)
        n = Math.floor(n/3);
    }

    //parseInt사용을 위해 문자열로 합쳐줌
    arr = arr.join('');
    //3진법을 10진법으로 바꿔주는 기능 수행
    answer = parseInt(arr, 3);
    
    return answer;
}

//[2] 다른 사람 풀이 
function solution(n){
    return parseInt([...n.toString(3).reverse().join(''), 3]);
}