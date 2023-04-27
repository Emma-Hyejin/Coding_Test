//직각삼각형 만들기 *
//readline 사용 
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on('line', function(line){
    input = line;
}).on('close', function(){
    let inputNum = Nunmber(input);
    for( let i = 1; i <= inputNum; i++){
        console.log("*".repeat(i));
    }
})