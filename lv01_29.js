//lv29 : 문자열 내림차순으로 배치하기
//s : "Zbcdefg"   answer : "gfedcbZ"
function solution(s){
    let arr = [];
    let bigArr = [];
    let smallArr = [];

    smallArr.split('');
    for( let i = 0 ; i <smallArr.length; i++){
        if(smallArr[i].toUpperCase() === smallArr[i]){ //대문자 판별하기
            //대문자만 gitArr 배열에 넣기
            gitArr.push(smallArr[i]);
        }else{
            //소문자만 새로운 arr에 넣기
            arr.push(smallArr[i]);
        }
    }

    //소문자, 대문자 정렬 및 reverse
    smallArr.sort().reverse();
    arr.sort().reverse();
    smallArr.concat(arr);

    return smallArr.join('');

}

//[2]다른 풀이 
function solution(s){
    return s
        .split('')
        .sort()
        .reverse()
        .join('')

}

//[3] 다른 풀이 
function solution(s){
    return s.splilt('').sort((a,b) => {
        //내림차순으로 정렬
        //-1을 반환하면 a와 b의 순서를 바꾼다. 
        if(a>b) return -1;
        //1이나 0이면 그대로 냅둔다. 
        if(b>a) return 1;
        return 0;
    }).join('');
}