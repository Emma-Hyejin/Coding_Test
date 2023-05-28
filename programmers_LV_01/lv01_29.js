//LV01: 같은 숫자는 싫어 [stack/Queue]
//[1,1,3,3,0,1,1] -> [1, 3, 0 , 1]

function solution(arr) {
    let answer = [];
    for( let i = 0 ; i < arr.length; i++){
        if(arr[i] !== arr[i+1]){
            answer.push(arr[i]);
        }
    }
    return answer;
}

//[2] filter 사용 다른 풀이
function solution(arr){
    //val은 arr 요소 중 현재 요소 arr[i] 
    //index 는 arr 요소 의 현재 index 0,1,2...
    return arr.filter((val, index) => val !== arr[index+1]);
}