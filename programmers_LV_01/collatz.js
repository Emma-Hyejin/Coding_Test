//콜라츠 추측 : 중간 어려움
//[1] 첫 번째 풀이 
let cnt = 0;
function solution(num){
    if(num === 1 && cnt === 0){
        return 0;
    }else if (num === 1 && cnt < 500){
        return cnt;
    }

    if(num%2 === 0 && cnt < 500){
        cnt ++;
        return solution(num/2);
    }else if(num%2 === 1 && cnt < 500){
        cnt ++;
        return solution((num*3)+1);
    }else if (cnt >= 500){
        return -1;
    }
}

//[2] 다른 풀이
function solution(num){
    var answer = 0;
    while(num !== 1 && answer != 500){
        num%2 === 0 ? num = num/2 : num = num*3 +1;
        answer ++;
    }

    return num === 1 ? answer : -1;
    //어차피 num이 1이며 바로 answer 0을 리턴한다. 
    // 그리고 answerl 500번을 반복 할 때까지 1이 되지 않는다면 
    // while문에도 어차피 걸리지 않으므로 -1을 반환한다. 
}