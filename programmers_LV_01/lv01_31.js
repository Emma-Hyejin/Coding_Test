//31번 lv01: 이상한 문자 만들기 
//Ex. s = "try hello world" => Try HeLlo WoRlD"
function solution(s){
    let arr = [];
    let answer = [];
    //1. 에러 : arr 배열에 그대로 toUpperCase() 적용하려 하였으나, 
    // JS에서 문자열은 변경할 수 없는 값 = 직접 접근해서 변경 불가
    // 문자열의 일부분을 추출해서 수정한 다음에 다른 문자열로 생성하는 방식으로 접근해야 한다. 

    arr = s.split(' ');
    for( let i of arr){
        for( let j = 0 ; j < i.length; j++){
            if(j === 0 || j%2 === 0){
                answer.push(i[j].toUpperCase());
            }else{
                //2. 에러 : 홀수 자리에 대문자가 왔을 경우를 고려하지 못하였음 - toLowerCase()적용.
                answer.push(i[j].toLowerCase());
            }
        }
        //3. 에러 : 각 단어 사이의 띄어쓰기 부분을 해결하기 위해 따로 공백을 넣어주고 
        // return 할 때는 마지막 공백은 제거 
        answer.push(' ');
    }

    return answer.join('').slice(0, -1);
}