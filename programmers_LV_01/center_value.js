//중앙값 구하기
function solution(array){
    var answer = 0; 
    array.sort(function (a, b) {return a-b}); //sort로 순서대로 정렬
    answer = array[Math.floor(array.length/2)]; // 배열의 길이/2 - 내림 으로 중앙 값 할당
    return answer;
}