//문자 반복 출력하기 
// [1] 내 풀이
function solution(str, n){
    var answer = '';
    let arr = str.split('');

    arr = arr.map( e => e.repeat(n));
    answer = arr.join('');

    return answer;
}

//[2] 다른 풀이 - [1]을 간단하게 정리 
function solution(str, n){
    var answer = [...str].map( e => e.repeat(n)).join('');
    return answer;
}

//[3] 다른 풀이 
function solution(str, n){
    return str.split('').reduce((acc, cur) => acc + cur.repeat(n), '');
}

//[4] 다른 풀이 - for 문 사용 시 
function solution (str, n){
    let ans = '';
    for( let i of str){
        ans += i.repeat(n);
    }

    return ans;
}

//[5] 다른 풀이 - for 문 정석 
function solution (str, n){
    var answer = '';
    for( let i = 0; i< str.length; i++){
        //입력 받은 n 만큼 answer에 요소를 집어 넣는 것 
        for( let j = 0; j < n; j++){
            answer += str[i];
        }
    }
}