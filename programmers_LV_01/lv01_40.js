//문자열 내 마음대로 정렬하기 
//input = ['sun', 'bed', 'car'], n = 1; return = ["car", "bed", "sun"]
// 각 문자열 요소의 [n] 위치를 기준으로 정렬 

function solution(strings, n) {
    let answer = [];

    answer = strings.sort((acc, cur) => {
        if(acc[n] !== cur[n]){
            //오름 차순
            return acc[n] > cur[n] ? 1 : -1
        };

        return acc > cur ? 1 : -1
    });

    return answer;
}

//미친놈 코드 하나 발견함 

function solution(strings, n){
    return strings.sort((acc, cur) => acc[n] === cur[n] ? acc.localeCompare(cur) : acc[n].localeCompare(cur[n]));

};

//**localeCompare : 
//문자열의 사전상 순서에서 해당 문잦가 뒤에 있는니 앞에 있는지  혹은 같은 지 판단해서 1, 0, -1을 반환 
//오름차순 : arr.sort((a, b) => a.localeCompare(b));
//내림차순 : arr.sort((a, b) => b.localeCompare(a));