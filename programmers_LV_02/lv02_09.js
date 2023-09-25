//짝지어 제거하기
//루트 반복은 STACK 
function solution(s){    
    //붙어있는 같은 알파벳 2개 제거 : [0]에서부터 찾다가 b "aa" baa -> "bb" aa -> aa -> 0
    //**STACK 을 이용 - 루트 반복
    let arr = [];
    
    for( let i = 0 ; i < s.length; i ++){
        if(arr[arr.length-1] === s[i]){
            //같으면 빼고 
            arr.pop()
        } else {
            //틀리면 넣고 
            arr.push(s[i]);
        }
    }
        
    return arr.length === 0 ? 1: 0;

}