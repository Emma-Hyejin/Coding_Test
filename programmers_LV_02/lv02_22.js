//H-index
//1차 시도 - 문제는 풀리나 런타임 에러 
function solution(citations) {
    let h = 0;

    citations.sort((a,b) => a-b);

    
    while(true){
    const middle = citations[Math.floor(citations.length/2)];
    let highCnt = 0;
    let lowCnt = 0;
    
    for( let el of citations){
        if(el >= middle){
            highCnt++;
        }
        if(el < middle){
            lowCnt++;
        }
    }
    
    if( highCnt >= middle && lowCnt <= middle ){
        h = middle;
        break;
    } else if(highCnt < middle){
        middle--;
    } else if (lowCnt > middle){
        middle++;
    }
    }
    return h;
}

//2차 정답 
function solution(citations) {
    let answer = 0;

    for(let h=0;h<=10000;h++){
        let moreThanHCount = 0, lessThanHCount = 0
        citations.forEach(citation=>{
            if(citation < h){
                lessThanHCount++
            }
            else{
                moreThanHCount++
            }
        })

        if(lessThanHCount < h && h <= moreThanHCount){
            answer = h
        }
    }

    return answer
}