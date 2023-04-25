//피자 나눠먹기(3)
//[1] 내 풀이 
function solution(slice, n){
    let peice = slice;

    while(true){
        if( parseInt(peice / n) > 0){
            break;
        }
        peice += slice;
    }

    return parseInt(peice/slice);

}

//[2] 다른 풀이
function solution(slice, n){
    return Math.ceil(n/slice);
    //반올림
}

//[3] 다른 풀이 
function solution(slice, n){
    let i = 1; 
    while(slice *i < n){
        i++
    }
    return i;
}