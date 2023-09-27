//JadenCase 문자열 만들기 

function solution(s) {
    const answer = s.split(' ').map(sentence => sentence.replace(/\w/g,(t,idx)=>{
        return idx === 0 ? t.toUpperCase() : t.toLowerCase()
    })).join(' ')
    return answer
}

//다른 방법 charAt
//charAt : 문자열에서 특정 위치에 있는 요소를 반환
function solution(s) {
    return s.split(" ").map(v => 
        v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()).join(" ");
}

//단순 for 문으로 접근하면 항상 효율성 문제나 시간에서 문제가 생기는 듯 
function solution(s) {
    //입력 받은 문자열 s를 '' split
    //각 요소의 첫 문자는 무조건 대문자 그 이후는 무조건 소문자 처리 
    //숫자일 경우는 무시 혹은 그대로 
    // 다시 join
    //예외 연속 공백 처리 - split 하면 "" 만남 - 무시 
    const strArr = s.split(' ');
    for( let i = 0 ; i < strArr.length; i ++){
        //무조건 첫 문자요소는 대문자 처리
        strArr[i] = strArr[i][0].toUpperCase() + strArr[i].substring(1).toLowerCase();
        //숫자인 경우는 무시 
        if(typeof strArr[i][0] === Number){
            continue;
        }
        if(strArr[i] === " "){
            continue;
        }
    }
    console.log(strArr);
    return strArr.join(' ');
}

//3차 시도 map - 실패
function solution(s) {
    const strArr = s.split(' ');
    
    const answer = strArr.map((element) => {
        return element[0].toUpperCase() + element.substring(1).toLowerCase();
        if(element === " "){
            return;
        }
    }).join(' ');
    
    console.log(answer);
    return answer;
}