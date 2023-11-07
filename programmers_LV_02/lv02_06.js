// 숫자의 표현 
//input - 15 output - 4

//첫 시도 : 테스트 일부 실패. 
function solution(n) {
    let count = 0;
    //1에서부터 누적 더하면서 15가 되는 경우를 찾는다. 
    //1에서부터 하나씩 제거해가면서 누적값이 15를 넘을 경우 탈락 
    //마지막 누적값이 15 = 15일 때 끝 
    
    //한번 count 하면 다시 시작 포인트를 줄이면서 for 문 접근 
    let sum = 0;
    let start = 1;
    //시작 포인트가 n 입력 숫자보다 크면 끝 
    while( start <= n){
        for( let i = start ; i <= n; i ++){
            sum += i;
            if(sum === 15){
                count ++;
                break;
                //여기서 한번 끊어야 중복되는 count를 막을 수 있다. 
            } else if (sum > 15){
                //count 하지 않고 for문 벗어나기 
                break;
            }
        };
        //시작 포인트를 늘려가기 + sum 초기화 
        start ++;
        sum = 0;
        
    }
    
    return count;
}