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


## 없는 숫자 더하기 
배열의 요소를 돌며 원하는 조건의 존재 여부를 확인하는 방법은 **1.Array.prototype.find()** 과 **2.Array.prototype.filter()**이 있음. 

다만 , Array.prototype.find() 는 배열의 요소 중 원하는 조건의 요소를 찾으면 해당 요소를 반환하고 나머지 요소는 확인하지 않고 함수가 **중지**됩니다. 

* `Array.from()` 
유사 배열 객체나 반복 가능한 객체를 얕게 복사해 새로운 Array객체를 만듭니다. 
```javaScript
Array.from({length:10}, (-, i))
    //객체 전달을 통해 배열의 길이 설정 - 변환할 배열의 길이를 지정
    * 첫 번째 인자 : {length: 10} 
    //매핑 함수를 통해 새로운 배열의 요소를 생성할 수 있는 두 번째 인자
    //28번 예제에서는 사용하지 않으므로 _ 사용
    //i는 인덱스 값을 나타내는 매개변수
    * 두 번째 인자 : (_, i) 
    
```



> find() 와 filter() 은 모든 요소들을 확인해야 하므로 배열의 크기에 따라 선형적인 시간 복잡도를 갖는다. 따라서 입력 배열이 매우 큰 경우, 숫자의 범위가 작고 연산 횟수가 제한적인 경우 더 효율적일 수 있다. 반면에 'for'문의 경우는 순회하는 동안 조건을 체크하여 바로 반환할 수 있으므로 필요한 연산 횟수를 최소화할 수 있어 입력 배열의 크기와 관계없이 일정한 시간 복잡도를 갖는다. 따라서 입력 배열이 매우 큰 경우에도 일정한 성능을 유지할 수 있다. 