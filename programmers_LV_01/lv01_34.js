//크기가 작은 부분 문자열
function solution(t, p) {
    //p의 문자열 길이 수 구하기 - length;
    //length 길이 만큼으로 앞에서부터 t 문자열 자르는 경우의 값들 구하기 - 배열에 넣기
    // 배열 중 p 보다 작은 요소의 갯수가 answer;
    let length = p.length;
    let str = t.split('');
    var answer = 0;
    //let temp = [] - 배열에 넣을 필요 없이 count 하면 됨. 
    for( let i = 0 ; i <= str.length-length; i++){
        let check = str.slice(i, i+length).join('');
        //splice가 원본을 해치던가 ? Yes , 짜르고 남은 배열 출력
        //slice가 원본을 해치던가? No, 짜른 배열 출력     
        //마지막 length에 미달하기 전에는 for 문 멈춰야 함. str.length-length
        if(check <= p){
            answer++;
        }
        
    }
    return answer;
}