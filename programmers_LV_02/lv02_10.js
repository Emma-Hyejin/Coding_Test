//카펫 - 완전 탐색 : 그냥 수학 공식 아님?
function solution (b, y){
    let answer =[];
    for( let col = 3; row <= (b+y)/col; col ++){
        let row = Math.floor((b + y)/col);

        //노랑색 면적 닿는 부분 이외 체크 
        //만약 y=1 일때 b=8 이다. (가로:3, 세로:3)
        //노랑색이 닿는 면적을 제외하면 각각 2개씩 추가 되는 셈
        //노랑색 숫자를 구하기 위해서 제외되는 부분을 가로와 세로에서 각각 빼주면 노랑색의 숫자가 나옴.
        if((b-2)*(y-2) === col){
            answer = [row, col];
            break;
        }
    };

    return answer;
}