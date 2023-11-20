//기사단원의 무기 
//약수 구하기 효율성 고려하면 단순 for 문보다는 Math.sqrt를 사용하면 많이 줄일 수 있다. 
function division (n) {
    let count = 0;
    for( let i = 1; i <= Math.sqrt(n); i++){
        if( n % i === 0){
            count++;
            if( n / i !== 0) count++;
        }
    };

    return count;
};

function solution(number, limit, power){
    let answer = 0;

    for( let i = 1; i <= number; i++){
        const getDivision = division(i);
        if( getDivision > limit ){
            answer += power;
        } else {
            answer += getDivision;
        }
    };

    return answer;
};


//다른 사람 풀이 
function solution(number, limit, power){
    let answer = 0;

    for( let i = 1; i <= number; i++){
        let count = 0;
        
        for( let j = 1; j * j <= n; j++){
            if( j * j === n) count ++;
            else if ( n % j === 0) count += 2;
        }

        if( count > limit) count = power;
        answer += count;
    };

    return answer;
}