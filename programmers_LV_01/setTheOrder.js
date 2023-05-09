//진료 순서 정하기
//[1] 내 풀이
function solution(emergency){
    var answer = [];
    const leng = emergency.length; 
    let check = [];
    //내림차순으로 정렬
    check = [...emergency].sort((acc, cur) => cur-acc);

    for( let i = 0 ; i < leng; i++){
        answer[i] = check.indexOf(emergency[i]) +1 ; 

    }

    return answer;
}