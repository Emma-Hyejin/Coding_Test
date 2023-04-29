//핸드폰 번호 가리기 
//[1] 내 풀이 
function solution(phone_Num){
    var answer = '';
    let arr = [];
    arr = phone_Num.split('');
    for(let i = 0 ; i < arr.length -4; i++){
        arr[i] = "*";
    }

    answer = arr.join('');
    return answer;
}

//[2] 다른 풀이 
//정규식
function solution(phone_Num){
    return phone_Num.replace(/\d(?=\d{4})/g, "*");
    //digit (d) 숫자 중 4개의 연속 된 숫자의 ?= 전방 탐색 : 앞에는 *로 replace 하겠다. 
    // 전방 탐색으로 찾아 낸 뒤의 숫자 4개는 매칭 결과에서 제외하겠다!라는 의미. 
}