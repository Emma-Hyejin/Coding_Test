//프로그래머스 중괄호 스택 LV02

function test03 (str) {

    let answer = false;
    let stack = ["("];

    if(str.length % 2 === 1 || str.charAt(0) === ")"){
        answer = false;
    }

    for( let i = 1; i < str.length; i++){
        if(stack[0] === str[i]){
            stack.push(str[i]);
        }else {
            stack.pop();
            answer = true;
        }
    }


    return answer;
}

const print = test03("(())()");
console.log(print);

//프로그래머스에서는 몇가지 예제에서 통과 못함.
//효율성 문제 