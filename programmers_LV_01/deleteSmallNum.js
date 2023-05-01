//제일 작은 수 제거하기
//[1] 내 풀이 
//(주의) : sort 는 원본 배열을 변경합니다. 
function solution(arr) {
    var answer = [];
    if( arr.length <= 1 ){
        return [-1];
    }
    else {
        //원본 배열 보존을 위해 ... 함수로 보존 
        answer = [...arr].sort((a,b) => a-b);
        let small = answer[0];
        //제일 작은 수만 빼고 필터링
        arr = arr.filter(e => e !== small)
        //return arr.filter(e => e !== small)
    }
    return arr;
}

//[2] 다른 풀이 
//Math.min 함수 
function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
    if(arr.length < 1) return [-1];

    return arr;
}