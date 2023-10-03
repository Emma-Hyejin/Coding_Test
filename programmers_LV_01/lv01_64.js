//완주하지 못한 선수 [해시]
//1차 시도 - 예제는 통과 - 효율성에서 탈락 
function solution(participant, completion) {
    //동명이인이 있을 수 있음 주의 , 완주하지 못한 선수의 이름을 "" 으로 리턴 : 단 한명 
    let answer = '';
    const table = {};
    //완주한 사람의 이름을 해당 객체의 키로 
    participant.forEach((i) => {
        table[i] = table[i] ? table[i] + 1 : 1;
        //console.log(table);
    })

    completion.forEach((c) => {
        table[c] = table[c] ? table[c] -1 : table[c];
        console.log(table);
    })

    
    const keyOfTable = Object.keys(table);
    answer = keyOfTable.find((key) => table[key] === 1);
    // console.log(Object.keys(table)[0])
    
    return answer;
}