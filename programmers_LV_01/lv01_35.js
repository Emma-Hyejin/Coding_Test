//삼총사 
//완전탐색알고리즘 - 가능한 모든 조합을 확인하거나 가능한 모든 경우를 시도하는 방식으로 문제를 해결하는 알고리즘 
//시간 복잡도가 문제의 입력 크기에 따라 지수적으로 증가할 수 있다. 
//입력 크기가 큰 경우에는 처리 시간이 급격하게 증가할 수 있으므로 입력 크기와 문제의 복잡성에 따라 처리 시간이 크게 다를 수 있다. 

// 대표적인 방법 : 재귀함수, 3중 for문, 백트래킹 
//시간 복잡도 : O(2^n), O(n!) 또는 O(n^2)와 같이 지수적으로 증가
//슨열 - O(n!)  부분집합 생성 - o(2^n)


//재귀함수 사용
//재귀함수 

function recursion (arr, n) {
    const results = [];
    if(n=== 1) return arr.map(el => [el])
    arr.forEach((fixed, index, origin ) => {
        const rest = origin.slice(index + 1);
        const combinations = recursion(rest, n-1);
        const attached = combinations.map((el) => [fixed, ...el]);
        results.push(...attached);
    });
    return results;
}


function solution(number) {
//number [] 중에 3개의 합이 0 이 되는 경우의 수를 return 
//조합 - [0,1] = [0, 1]
//재귀로 접근하는 수 밖에 
    let count = 0;
    
    const totalArr = recursion(number, 3);
    console.log(recursion(number, 3));
    
    totalArr.forEach((el) => {
        let sum = 0;
        for( let i = 0 ; i < el.length; i++){
            sum += el[i];
        };
        
      
        sum === 0 ? count++ : count;
    })
    
    return count;
   
    
};

//DFS 사용한 다른 사람 풀이 법 

function solution(number) {
    let check = Array.from({ length: number.length }, () => false);
    let result = 0;
    const DFS = (idx, cnt) => {
      if (cnt === 3) {
        let SUM = 0;
        check.map((v, i) => {
          if (v === true) SUM += number[i];
        });
        result += SUM === 0 ? 1 : 0;
      }
      for (let i = idx; i < number.length; i++) {
        if (check[i] === true) continue;
        check[i] = true;
        DFS(i, cnt + 1);
        check[i] = false;
      }
    };
    DFS(0, 0);
    return result;
  }



//reduce 함수를 활용해서 미니 재귀함수를 만든 다른 사람 풀이 
function solution(number) {
    let result = 0;
    
    const combination = (current, start) => {
        if(current.length === 3){
            result += current.reduce((acc, cur) => acc + cur, 0) === 0 ? 1 : 0;
            return;
        }

            
        for( let i = start; i < number.length; i++){
            combination([...current, number[i]], i+1);
        }
    }
    
    combination([], 0);
    return result;
    
}