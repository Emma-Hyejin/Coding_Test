//피자 나눠먹기 (2)
//[1] 내 풀이
function solution (n) {
    let answer = 0 ; 
    if( n % 6 === 0){
        answer = n;
    }else{
        for( let i = i ; i>0; i++){
            if((i * 6) % n === 0){
                answer = i;
                break;
            }
        }
    }
    return answer;
}

//[2] 다른 사람 풀이
function solution (n) {
    let piece = 6;
    
    while(true){
        if(piece % n === 0){
            break;
            //break로 while 문을 빠져나가서 return 으로 값 출력
        }
        piece += 6
        //6을 더패서 n으로 나눠지는 알맞은 6의 배수를 찾아감 
    }

    return piece/6
}