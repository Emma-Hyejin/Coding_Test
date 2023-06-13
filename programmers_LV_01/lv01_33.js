//Lv01 33번 : 시저 암호 
//Ex "AB" -> n:1 -> "BC"
function solution(s, n){
    let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let answer = [];
    
    //배열로 분산 시켜버리기
    s.split('');
    //하나씩 접근하면서 뒤로 미루기
    for( let i = 0 ; i < s.length; i++){
        if(s[i] === ' '){
            answer[i] = ' '
        }
        else if(s[i] === s[i].toUpperCase()){
            answer[i] = alpha[(alpha.indexOf(s[i])+n)%26]
            
        }else if(s[i] === s[i].toLowerCase()){
            answer[i] = alpha[(alpha.indexOf(s[i].toUpperCase())+n)%26].toLowerCase();
            
        }else if(s[i] === 'Z' || s[i] === 'z'){
            //이부분은 사실 위 조건문에서 %26으로 뒤쪽 부분을 처리해줘서 없어도 됨.
            s[i] === 'Z' ? answer[i] = alpha[n] : answer[i] = alpha[n].toLowerCase();
            
        }
    }
    
    return answer.join('');
}

//* for 문 안쪽을 이렇게 처리할 수도 있을 듯. 
// for (let i = 0; i < s.length; i++) {
//     if (s[i] === ' ') {
//         answer[i] = ' ';
//     } else {
//         let isUpperCase = s[i] === s[i].toUpperCase();
//         let index = alpha.indexOf(s[i].toUpperCase());
//         answer[i] = alpha[(index + n) % 26];
//         if (!isUpperCase) {
//             answer[i] = answer[i].toLowerCase();
//         }
//     }
// }