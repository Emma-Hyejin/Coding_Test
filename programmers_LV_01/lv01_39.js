//숫자 문자열과 영단어
function solution(s) {
    let strArr = ["zero", "one", "two", "three", "four", "five", "six", "seven" ,"eight", "nine" ];
    
    let answer = s;
    for( let i = 0 ; i < strArr.length; i++){
        let arr = answer.split(strArr[i]);
        answer = arr.join(i);
    }
    
    return Number(answer);
}