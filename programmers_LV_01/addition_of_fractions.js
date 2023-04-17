//분수의 덧셈 
function solution(num1, denum1, num2, denum2){
    let answer = [];

    //분자
    let topNum = num1*denum2 + num2*denum1;
    //부모
    let botNum = denum1*denum2;
    //최대공약수
    let maximum = 1;

    for( let i = 1; i <= topNum; i ++){
        // 분자와 분모 모두 나눠지는 최대공약수를 찾아서 maximum에 넣어줌
        if( topNum % i === 0 && botNum % i === 0){
            maximum = i;
        }
    }
    // 각 분자와 분모를 최대공약수로 약분해주기
    answer = [ topNum/maximum, botNum/maximum];

    return answer;
}