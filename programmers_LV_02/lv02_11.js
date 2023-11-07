//영어 끝말잇기 


// 1차 시도 : 예제 통과 - 몇 테스트 실패 
function solution(n, words) { //사람 수, 배열 
    // [사람 번호, 몇 번 돌았는지]
    let answer = [];
    
    //words 배열의 길이가 n의 배수이면 몫이 B, A는 사람 번호.
    //근데 마지막 단어가 중복 되면 안됨 
    if(words.length % n === 0) {
        const lastIndex = words[words.length -1];
        // const isLastIndex = words.splice(-1, 1).includes(lastIndex); - 실패 
        // splice 가 수정된 배열을 반환하기 때문에 여기서는 원본 배열에 includes가 적용된 것임 
        //뒤에 true 일 경우 원본 배열을 사용해야 해서 해치지 않는 slice 사용 
        const filtered = words.slice(0, -1);
        const isLastIndex = filtered.includes(lastIndex);

        if(isLastIndex){
            //words.includes(words[words.length - 1]) 이거는 그 마지막 요소가 당연히 배열에 포함되있으니까..무조건 true
            const round = Math.floor(words.length/n);
            return [n, round];
        } else {
            //중복이 없으면 - 탈락자 없는 경우.
            return [0, 0]
        }
    };
    
    //홀수 일 경우 
    for( let i = 1; i < words.length; i++){
        const prev = words[i-1];
        const cur = words[i];
        // console.log(prev[prev.length-1], cur[0]);
        
        if(prev[prev.length-1] !== cur[0]){
            //같지 않은게 걸리면
            const people =  Math.floor((i+1) % n) //소수점 버리기 1
            const round =  Math.ceil((i+1) / n)//소수점 반올림 2.5

            answer = [people, round];
            break;
        }
    }


    return answer;
}