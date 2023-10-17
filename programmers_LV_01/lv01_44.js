//푸드 파이터 대회
function solution(food) {
    //[0 ~ 끝] 1번 2번 3번 음식의 갯수 
    let answer = [];
    for( let i = 1 ; i < food.length; i++){
        let divideFood = Math.floor(food[i]/2);
        for( let j = 0 ; j < divideFood; j++){
            answer.push(i);
        }
    }
    let reversed = [...answer].reverse();
    answer.push(0);
    let finalAnswer = answer.concat(reversed);

    return finalAnswer.join('');
}

//다른 사람 풀이
function solution(food){
    let res ='';
    for( let i = 1 ; i < food.length; i++){
        res += String(i).repeat(Math.floor(food[i]/2));
    }

    return res + '0' + [...res].reverse().join('');
}

//굉장히 직관적인 코드 
function solution(food){
    let player1 = [];
    let player2 = [];
    for( let i = 1 ; i <= food.length; i++){
        if(food[i] > 1){
            repeat = Math.floor(food[i]/2);
            for(let j = 0 ; j < repeat; j++) player1.push();
            for(let k = 0 ; k < repeat; k++) player2.unshift();
        }
    };
    player1.push(0);
    player1 = player1.concat(player2);
    return player1.jsoin('');
}