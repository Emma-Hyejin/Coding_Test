//가운데 글자 가져오기
//[1] 내 풀이 
function solution(s) {
    var answer = '';
    let arr = s.split('');
    let leng = parseInt(arr.length/2);

    //짝수 일 때, 
    if( arr.length % 2 === 0){
        answer = arr.slice(leng -1, leng +1).join('');
    }
    //홀수 일 때, 
    else {
        answer = arr.slice(leng, leng +1).join('');
    }

    return answer;
}