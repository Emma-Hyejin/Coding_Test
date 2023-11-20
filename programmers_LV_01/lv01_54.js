//소수 만들기 - Summer/Winter Coding (~2018)
//재귀 조합 알고리즘 
function combination (arr, num) {
    const results = [];
    
    //nC1 이면 1
    if( num === 1) return arr.map(v => [v]);
    
    arr.forEach((fixed, index, origin )=> {
        //순서에 상관없이 중복이 되면 안됩니다. 현재 값 이후의 배열들만 추출
        const rest = origin.slice(index + 1);
        
        //나머지 배열을 기준으로 다시 조합 실시
        //기준값 fixed 때문에 선택 개수 -1
        const combinations = combination(rest, num-1);
        
        //기준값 fixed 에 돌아온 조합을 붙이기
        const attached = combinations.map(v => [fixed, ...v]);
        
        //붙인 값을 결과 에 넣어주기 
        results.push(...attached);
    });
    
    return results;
}

function isPrime (num) {
    if(num < 2) return false;
    for( let i = 2; i < num; i++){
        if( num % i === 0){
            return false;
        }
    };
    
    return true;
}

function solution(nums) {
    var answer = 0;
    
    const combinationArr = combination(nums, 3);
    
    combinationArr.forEach((el) => {
        const sum = el.reduce((acc, cur) => acc + cur, 0);
        if( isPrime(sum) ){
            answer ++;
        }

    })


    
    return answer;
}


//다른 사람 풀이 