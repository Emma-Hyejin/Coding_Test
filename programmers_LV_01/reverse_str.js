//자연수 뒤집어 배열로 만들기 
// let n = 12345;

function solution (n){
    var answer = [];
    // 1. 문자 풀이 
    // return (n + '').split('').reverse().map( v => Number(v)) or .map( v => parseInt(v))

    // 2. 숫자 풀이
    do{
        // answer에다가 뒤에서부터 떨어져나간 숫자 push : 5push, 4push, 3push..
        answer.push(n%10);  
        // 다시 n에다가 뒤에서 하나씩 사라진 뒤 남은 숫자 할당 : 1234, 123, 12..
        n = Math.floor(n/10); 
    }while(n>0); // n이 0이 되기 전까지 do 반복

    return answer;
}
