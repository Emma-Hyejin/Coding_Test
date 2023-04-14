//정수 내림차순으로 배치하기
//입력 : 118372
//출력 : 873211
//[1] 내 풀이 
function solution(n) {
    var answer = 0; 
    n = String(n).split(''); // n을 str타입으로 하나씩 분해해서 배열로 만듬.
    n.sort(function(a,b){return a-b});  // sort로 작은 순서대로 정렬
    n = n.reverse().join(''); // reverse로 내림차순으로 정렬 후 join으로 문자열로 합치기

    answer = Number(n); // 숫자로 출력해야 하므로 Number()로 변환.
    return answer;
}


//[2] 숫자로 푸는 것이 문자로 푸는 것 보다 빠름 ** 
function solution(n){
    var answer = [];

    do{
        answer.push(n%10); // 맨 뒷 자리가 answer 배열로 push
        n = Math.floor(n/10); // 맨 뒷 자리가 하나씩 사라짐 
        //11837 --> 2
        //1183 --> 7
        //118 --> 3
        //11 --> 8
        //1 --> 1
        //0 --> 1
    }while(n>0)

    return answer.sort((a,b) => b-a).join('')*1;

}