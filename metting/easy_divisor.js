//nums = 9  약수는 1, 3, 9 return + 1 + 3+ 9 = 13;

function test02 (num){
    let answer = 0;
    // let divisor = [];
    //divisor.push(i);

    for( let i = 1 ; i <= num; i++){
        if(num % i  === 0){
            answer += i;
        }
    }

    return answer;
}

const print = test02(9);
console.log(print);