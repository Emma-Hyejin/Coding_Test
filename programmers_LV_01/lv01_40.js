//가장 가까운 같은 글자 
function solution(s) {
    //앞에서부터 배열에 넣어서 shift(); 위치 + 1 
    //findInex 찾은 요소의 index 반환 , 첫 번째 위치 반환 함수만 인수로 받음
    //indexOf
    let temp = [];
    let answer = [];
    
    for( let i = 0 ; i < s.length; i ++){
        if(temp.indexOf(s[i]) === -1){
            temp.unshift(s[i]);
            answer.push(-1);
            
        }else{
            const index = temp.indexOf(s[i]) + 1 ;
            console.log(index)
            answer.push(index);
            temp.unshift(s[i])
        }
    }
    //console.log(answer);
    return answer;
}