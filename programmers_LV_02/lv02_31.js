//타겟 넘버
//DFS - 깊이 우선 탐색 : 자식부터 탐색하면서 원하는 값이 나올 때까지 재귀함수 사용
function solution(numbers, target){
    let asnwer = 0;
    const length = numbers.length;
    
    function dfs(count, sum) {
        if(count === length){
            if(target === sum){
                answer ++;
            }
            return;
        }
        dfs(count + 1, sum + numbers[count]);
        dfs(count + 1 , sum - numbers[count]);
    };

    dfs(0,0);

    return answer;

}