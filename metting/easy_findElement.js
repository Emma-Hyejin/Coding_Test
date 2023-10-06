//numbers = [3,4,1,2,6,8,0,9] => return 5 + 7 = 12

function test01 (numbers) {
    let nums = "0123456789";
    let answer = 0;
    numbers.sort();

    let numsArr = nums.split('');
    //문자열 배열 요소로 저장.
    //console.log(numsArr);

    for( let i = 0 ; i < numsArr.length; i++){
        if( !numbers.includes(Number(numsArr[i]))){
            answer += Number(numsArr[i]);
            console.log(numsArr[i])
        }
    }

    return answer;
    
}
const example = [3,4,1,2,6,8,0,9];
const print = test01(example);
console.log(print);