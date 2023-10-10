//기능개발 : Stack - Queue
function solution(progresses, speeds) {
    //progress : 1순위 , 2순위 .. 순으로 진행도가 index 
    //sppeds : 각 작업 속도 
    //answer = 각 배포마다 몇개의 기능이 배포되는가 (일자는 상관없음 - 배포 가능한 날에 몇개씩 이루어지는가 )
    //순서대로 작업이 끝나야 다음 작업을 진행할 수 있다. 
    
    //Queue FIFO
    //작업이 끝나면 Queue에 넣기 
    //각 남은 작업 일수를 담은 배열 생성 
    // const leftWork = [];
    let answer = [];
    //이 부분을 map 함수로 
    // for( let i = 0; i < progresses.length; i++){
    //     leftWork[i] = Math.ceil((100-progresses[i])/speeds[i]);
    // };
    
    const leftWork = progresses.map((el, index) => Math.ceil((100-el)/speeds[index]));
    
    console.log(leftWork);
    
    let count = 1;
    let base = leftWork[0];
    
    for( let i = 1 ; i < leftWork.length; i ++){
        if(base >= leftWork[i]){
            count++;
        } else {
            answer.push(count);
            count = 1;
            base = leftWork[i];
        }
    }
    
    answer.push(count);

    console.log(answer);    
    return answer;
}