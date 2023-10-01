//가장 큰 수 [정렬]

function solution(array){
    //일일히 숫자를 가지고 나열하면 시간 초과 
    //문자열로 접근 

    const answer = array
        .map(el => String(el))
        .sort((acc, cur) => (cur + acc) - (acc + cur))
        .join('')
    ;

    //test11 : edge case : 0, 0 으로 들어올 경우 -> '00'
    return answer[0] === '0' ? '0' : answer;
}