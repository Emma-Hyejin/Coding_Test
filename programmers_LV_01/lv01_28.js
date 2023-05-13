//LV01 28번 : 없는 숫자 더하기
//[1] 내 풀이 
//Ex. numbers = [1,2,3,4,6,7,8,0]   // 5 + 9 = 14
function solution(numbers){
 const missing = Array.from({length: 10}, (_, i) => i)
 //filter 함수를 통해 numbers 배열에 속하지 않은 요소들을 0~9 중에서 찾음
 .filter(num => !numbers.includes(num));   
 let sum = 0;
 missing.forEach(el => sum += el);
 return sum;
}