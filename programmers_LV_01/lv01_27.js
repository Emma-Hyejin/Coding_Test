//음양 더하기 
//absoltues = [4, 7, 12]     signs = [true, false, true]
// + 4 - 7 + 12 :: 9
//[1] 내 풀이 
function solution(absolutes, signs){
    for( let i = 0 ; i < signs.length; i++){
        //음수면 - 붙이기
        if(signs[i] === false){
            absolutes[i] = -absolutes[i];
            //Math.abs(absolutes[i]) 하면 양수/음수 부호 바뀜
            //Math.sign() 주어진 부호를 반환 : + / -1
        }
    }
    let sum = 0;
    for( let j = 0 ; j <absolutes.length; j++){
        sum += absolutes[j];
    }
    return sum;
}

//[2] 다른 풀이 
//참고로 이 문제에서는 reduce 보다는 for이 빠르다고 함. 
//reduce는 내부적으로 최적화 : 가독성과 유지보수성이 좋음 : 코드가 간결 
function solution(absolutes, signs){
    //reduce 함수의 세번째 인자는 현재 순회 중인 요소의 인덱스를 나타냅니다.
    //마지막의 0은 누적값의 초기값을 설정하기 위해서입니다. 
    //초기값 생략시 reduce 함수는 배열의 첫 번재 요소를 초기값으로 사용합니다.
    //acc는 갱신되어 누적되는 값 (누적)
    //val 은 순회 중인 배열의 현재 요소 값(갱신)
    return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
}

//[3] forEach 사용
//forEach(callback(currentvalue:처리할 현재 요소, index:처리할 현재 요소의 '인덱스');
function solution(absolutes, signs){
    let answer = 0;
    absolutes.forEach( (v, i) =>{
        //signs[i]을 그대로 조건문을 걸면 true 일때로 걸려짐
        if(signs[i]){ //i 요소의 인덱스 0
            //v 현재 요소 ex. [4]
            answer += v;
        }else{
            answer += -v;
        }
    });
    return answer;
}