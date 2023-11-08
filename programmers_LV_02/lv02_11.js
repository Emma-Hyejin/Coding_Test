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
};


//2차 시도 Hash 맵
function solution(n, words) {
    //Hash map?
        let answer = [];
        const table = {}; 
        
        for( let i = 0 ; i < words.length; i++){
            const current = words[i];
            const next = words[i+1];
    
            table[current] = table[current] ? table[current] + 1 : 1;
            //table[next] = (next && current[current.length-1] !== next[0]) ? 0 : 1;  
        }
    
        
        for( let i = 0 ; i < words.length-1; i++){
            const current = words[i];
            const next = words[i+1];
            
            table[next] = (next && current[current.length-1] !== next[0]) ? table[next] - 1 : table[next];  
        }
    
        
        console.log(table);
        for( let i in table){
            if(table[i] === 2){
                const index = words.lastIndexOf(i) + 1;
                //딱 떨어질 경우 
                if(index % n === 0) return [(index / n), (index / n)];

                const people = Math.floor(index / n);
                const round = Math.floor(index / n);
                return [people, round]
            }
            if(table[i] == 0){
                const index = words.lastIndexOf(i) + 1;
                console.log(index);
                const people = Math.floor(index % n);
                const round = Math.ceil(index / n);
                return [people, round];
            }
        }
        
        //모두 무사히 통과한 경우, 
        answer = [0, 0]    
        //console.log(table);
    
        return answer;
    };



    //3차 시도 - 성공 
    function solution(n, words) {
        let answer = [];
        for( let i = 1 ; i < words.length; i ++){
            const current = words[i];
            const prev = words[i-1];
            
            //중복 요소  
            //words[i]가 현재 위치에 있지 않은 경우 
            if(words.indexOf(current) !== i){
                //ex. i = 8;
                //console.log(i)
                const people = i % n + 1 ;  //소수점 버리기 1
                const round = Math.floor(i / n) + 1 ; //소수점 반올림 2.5
                return [people, round]
            }
            
            //규칙에 맞지 않는 경우 : 앞 뒤 다른 경우 
            if(prev[prev.length - 1 ] !== current[0]){
                const people = i % n + 1 ;
                const round = Math.floor( i / n ) + 1 ;
                return [people, round];
            }
        }
        
        //조건문을 돌 동안 모두 통과하면 
        return [0, 0]
    
    };

    //다른 사람 풀이 
    function solution(n, words) {
        let answer = [0, 0];
      
        for (let i = 0; i < words.length; i++) {
          let word = words[i];
          let p = i % n + 1;
          let turn = Math.ceil((i + 1)/n);
      
          if (i > 0) {
            // 이전 단어 마지막 글자
            let last = words[i - 1].split("").pop();
      
            // 중복이거나 틀린 경우
            if (i > words.indexOf(word) || words[i][0] !== last) {
              answer = [p, turn];
              break;
            }
          }
        }
      
        return answer;
      }