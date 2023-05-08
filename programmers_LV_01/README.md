# Programmers LV01 
프로그래머스 LV01을 풀면서 추가로 공부해야 하거나 정리가 필요한 메서드나 문법들을 정리해둡니다

## [문자열 다루기](https://github.com/Emma-Hyejin/Coding_Test/blob/main/programmers_LV_01/hideNum.js) 
주어진 문자열이 **정규 표현식**을 만족하는지 판별하고 그 여부를 **true/false**로 반환

```javaScript
test()

const str = 'table football';
const regex = new RegExp('foo*');
const globalRegex = new RegExp('foo*', 'g');

console.log(regex.text(str)); // true
console.log(globalRegex.test(str)); // true
```
> 추가 확인 필요 내역 : lastIndex( )
