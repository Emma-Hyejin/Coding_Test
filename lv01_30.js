//lv01_30번 : 부족한 금액 계산하기
//[1]
function solution(price, money, count){
    let answer = 0;
    for( let i = 1; i <= count; i++){
        answer += price * i;
    }

    if( answer > money){
        return answer - money;
    }else{
        return 0;
    }
}

//[2] : 가우스 공식 ??
function solution(price, money, count){
    const tmp = price * count * (count + 1)/2 - money;
    return tmp > 0 ? tmp : 0;
}
