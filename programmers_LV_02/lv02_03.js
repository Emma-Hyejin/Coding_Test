function solution(A, B){
    let answer = 0;

    //제일 작은 수와 제일 큰 수를 곱하고 그 다음 작은 수와 그 다음 큰 수를 곱한 값의 누적값이 최적의 최솟값
    A = A.sort((acc, cur) => acc - cur);
    B = B.sort((acc, cur) => cur - acc);

    for( let i = 0; i < A.length; i++){
        answer += A[i] * B[i];
    };

    return answer;

}

//arr.filter((el) => !Number.isNaN(el))
//arr 배열 중에 숫자가 아니고 isNaN요소를 제외하기 위해 filter 로 사용합니다. 