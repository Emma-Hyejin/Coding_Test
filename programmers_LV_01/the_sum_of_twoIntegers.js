// 두 정수 사이의 합
// a와 b가 주어지며 두 정수의 대소관계는 정해져있지 않음 
function solution(a,b){
    var answer = 0;
    let acc = 0; //작은 수
    let pre = 0; // 큰 수

    if(a >=  b){
        acc = b;
        pre = a;
    }else{
        acc = a;
        pre = b;
    }

    for( let i = acc; i <= pre; i++){
        answer += i;
    }
    return answer;
}