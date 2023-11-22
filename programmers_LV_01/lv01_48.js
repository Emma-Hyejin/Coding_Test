//명예의 전당
//1차 시도 - 몇 테스트 케이스 출력 크기 오바
function solution(k, score){
    let answer = [];
    let topRank = [];

    for( let i = 0; i < k; i++){
        topRank.push(score[i]);
        answer.push(Math.min(...topRank));
    };

    for( let i = k; i < score.length; i++){
        const lowestScore = Math.min(...topRank);

        if( score[i] > lowestScore ){
            const index = topRank.indexOf(lowestScore); // k 번째 요소 위치 체크
            topRank.splice(index, 1);  //기존 요소 삭제
            topRank.push(score[i]); // 새 요소 명예이 전당에 추가
            answer.push(Math.min(...topRank))
        } else {
            answer.push(lowestScore);
        }
    };

    return answer;
};


//2차 시도 
//9번 10번 반례 k = 10, score = [1, 10, 2, 5, 6, 7, 8] , output = [1, 1, 1, 1, 1, 1, 1];

function solution ( k, score){
    let answer = [];
    let topRank = [];

    for( let i = 0 ; i < k; i ++){
        if( i === score.length){
            //i > score.length 하면 정답 배열의 길이가 하나 더 추가 (주의))
            break;
        };
        topRank.sort((a, b) => a - b);
        answer.push(topRank[0]);
    };

    for( let i = k; i < score.length; i++){
        if(topRank[0] < score[i]){
            topRank.shift();
            topRank.push(score[i]);
            topRank.socrt((a, b) => a - b);
            answer.push(topRank[0]);
        } else {
            answer.push(topRank[0]);
        }
    };

    return answer;
}