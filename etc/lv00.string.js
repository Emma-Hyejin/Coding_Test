//문자열안에 문자열
function solution(str1, str2) {
    //보유하면 1, 없다면 2
    let answer = 1;
    let newArr = str1.split(str2); //는 배열 
    // includes, indexOf 가능
    // JavaScript의 문자열 메소드인 indexOf는 특정 문자열이 처음으로 나타나는 인덱스를 반환
    // 만약 해당 문자열이 존재하지 않는다면, -1을 반환합니다
    // str1.indexOf(str2) === -1 ? 2 : 1;
    // str1.includes(str2) ? 1 : 2;
    
    if(newArr.length === 1){
        answer = 2;
    }
    
    return answer;
    
}