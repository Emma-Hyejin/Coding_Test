//소수 ㅏㅈ기 : 완전 탐색 
//이렇게 하면 "011"이 입력되었을 때,아래와 같이 중복 출력 됨. 
[
  '0',   '1',   '1',
  '01',  '01',  '10',
  '11',  '10',  '11',
  '011', '011', '101',
  '110', '101', '110'
]
//실패 : ㅜ
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    
    if (num % 2 === 0 || num % 3 === 0) return false;
    
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    
    return true;
}

//순열 
function getPermutations (arr, length){
    const result = [];
    if(length === 1)return arr.map((el) => [el]);
    
    arr.forEach((fixed, index, origin) => {
        const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
        const permutations = getPermutations(rest, length - 1 );
        const attached = permutations.map(el => [fixed, ...el]);
        result.push(...attached);
    });
    return result;
};

function solution(numbers) {
    let answer = 0;
    //만들 수 있는 조합의 수를 만들면서 if로 소수인지 아닌지 판별 해서 answer ++;
    //for문 접근 //문자열 쪼개기 
    const arr = numbers.split('');
    let permutArr = [];
    
    for( let i = 1 ; i <= numbers.length ; i++){
        let temp = getPermutations(arr, i);
        if(temp.length !== 0){
            temp.forEach(el => {
                // const num = parseInt(el.join(''));
                permutArr.push(el.join(''));
            })
        }
    }

    console.log(permutArr);
    
    for( let i of permutArr){
        //console.log(parseInt('077'));
        // 77 (leading zeros are ignored)
        if(isPrime(i)){
            answer++;
        }
    }
    
    return answer;
}
