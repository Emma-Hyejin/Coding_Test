//자릿수 더하기
//1234 -> 10

function solution (n) {
    let sum = 0;
    //1. : forEach
    String(n).split('').forEach((char) => {
        sum += parseInt(char);
    });

    //2. : reduce
    String(n).split('').reduce((acc, cur) => acc + parseInt(cur), 0);

    return sum;
}