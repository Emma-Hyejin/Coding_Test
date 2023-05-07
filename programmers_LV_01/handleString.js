//문자열 다루기 
//[1] 내 풀이 
function check(str){
    const isIncludeAlpha = s => /[a-zA-z]/g.test(s);
    const isIncludeNum = s => /\d/g.test(s);

    return !isIncludeAlpha(str) && isIncludeNum(str)
}

function solution(s) {
    let answer = false;
    if( s.length === 4 || s.length === 6){
        if(check(s)){
            answer = true;
        }
    }
    return answer;
}

//[2] 다른 풀이 
function solution(s){
    let regex = /^\d{6}$|^\d{4}$/;

    return regex.test(s);
    //(정규표현식).test("문자열") 
    // => "문자열"이 "정규표현식"과 매칭하면 true 아니면 false
}

//[3]
function solution(s){
    return s.length === 4 || s.length === 6 ? !isNaN(s) : false;
}
//예전에는 되었으나 11번 케이스 "지수형식" 테스트 불가 ("1e22") ||("10e1")
// + 16진법 숫자 및 아스키 코드 통과 불가