//과일장수 : 약 2~30분 소요
//1(최하) ~ k(최상)
//한 상자에 사과 m 개씩 포장 ( 가장 낮은 점수의 사과가 p 일 때 사과 상자 가격은 p(최저 사과 가격) * m(갯수) )
//얻을 수 있는 최대 이익 - 상자 단위로 판매/ 낱개는 버리기
//input - 3, 4, [1, 2, 3, 1, 2, 3, 1] output - result;
function solution (k, m, score) {
    let answer = 0;
    
    //시작부터 박스포장 불가한 경우 제거 
    if( score.length < m ) return 0;

    //오름차순으로 정렬
    score.sort((a, b) => a - b );

    //거꾸로 접근하면서 splice 로 m 개씩 제거. 
    for( let i = score.length; i >= 0; i--){
        const box = score[score.length-m] * m;

        //포장한 사과 갯수는 제거
        score.splice(score.length - m , score.length + 1);

        //박스 값 누적
        answer += box;

        //포장하다가 남은 사과 갯수가 m 개 이하면 break;
        if( score.length < m ) break;
    };

    return answer;

};

//계속 햇깔리는 것 - slice (원본 배열 보존) , splice (원본 배열 해침)
//splice 는 배열의 요소중 교체하거나 추가할 수도 있지만 제거할 수도 있음 
//  - begin은 배열처럼 다룸 0 index 에서 end 갯수 제거한 후 배열.
//slice 는 배열의 begin ~ end 에 대한 얕은 복사로 해당 배열 객체를 반환 
//  - begin 도 index 처럼 다룸 0 <= ~ < end 미포함


//다른 사람 풀이 
function solution (k, m, score){
    let answer = 0
    //score 배열을 복사한 다음, 
    //오름차순으로 정렬 후, 
    //딱 뒤에서부터 m 개는 제외할 수 있도록 처리 - 딱 맞아 떨어지면 모두 포장 가능/ 안 떨어지면 어차피 낱개니까.
    const sortedScore = score.slice().sort((a, b) => a-b).slice(score.length % m);

    //각 상자의 최솟값 
    for( let i = 0 ; i < sortedScore.length; i += m ){
        answer += sortedScore[i] * m ;
    };

    return answer;
};