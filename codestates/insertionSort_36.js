//36.insertionSort 
// 삽입 정렬 :: arr = [ 3, 1, 21] -> [ 1, 3, 21];
//1-1. 일반적인 풀이 
const insertionSort = function(arr) {
    for( let i = 1; i < arr.length; i++){
        let temp = arr[i];
        let past = i-1;
        while( (past >= 0) && (arr[past] > temp) ){
            //앞에 요소가 뒤에 요소보다 클 경우,
            //현재 요소는 (더 컸던) 앞에 요소가 된다. 
            arr[past + 1] = arr[past];
            past--;
        }
        //앞에 요소가 뒤에 요소보다 작거나 같을 경우,,
        arr[past + 1 ] = temp;
    }
    return arr;
}

//1-2. 또 다른 일반적인 풀이 
const insertionSort2 = function(arr) {
    //sorted 변수에 첫 번째 요소 집어 넣기
    let sorted = [arr[0]];
    for( let i = 1; i < arr.length; i++){
        if( arr[i] >= sorted[i -1] ){
            //뒤에 요소 >= 앞에 요소일 때, 
            //sorted 배열 뒤에 넣기  
            sorted.push(arr[i])
        } else {
            for( let j = 0 ; j < i ; j++){
                //0 ~ 현재 요소까지 돌면서, 
                if( arr[i] <= sorted[j]){
                    // 현재 요소 보다 새로 만든 sorted 해당 요소가 더 클 때, 
                    // 현재 요소를 sorted맨 뒤에 넣어야 하는데 sorted 앞에 요소가 더 크기 때문에 
                    //sorted를 큰 요소 j 기준으로 나누거 해당 arr[i] 요소를 중앙에 넣고 합치기
                     const left = sorted.slice(0, j);
                    //0 ~ j-1 이전까지 
                    const right = sorted.slice(j);
                    //j 이후 
                    sorted = left.concat(arr[i], right);
                    break;

                }
            }
        }
    }
    return sorted;
}

//2.굳이, callback함수 받아서 그 함수의 리턴값을 기준으로 요소들을 정렬해보기 
const inseertionSort3 = function(arr, transform = (item) => item ) {
    let sorted = [arr[0]];
    for( let i = 1; i < arr.length; i++){
        if( transform(arr[i]) >= transform(sorted[i -1])){
            sorted.push(arr[i])
        } else {
            for( let j = 0 ; j < i ; j++){
                if( transform(arr[i]) <= transform(sorted[j]) ){
                    const left = sorted.slice(0, j);
                    const right = sorted.slice(j);
                    sorted = left.concat(arr[i], right);
                    break;
                }
            }
        }
    }
    return sorted;
}