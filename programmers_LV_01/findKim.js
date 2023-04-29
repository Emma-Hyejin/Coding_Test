//김서방 찾기
//[1] 내 풀이
function solution(seoul){
    var answer = '';

    for( let i = 0 ; i < seoul.length; i++){
        if( seoul[i] === 'Kim'){
            answer = `김서방은 ${i}에 있다`;
        }
    }

    return answer;
}

//[2] indexOf 사용
// 해당 요소의 인덱스를 반환
function solution (seoul){
    return `김서방은 ${seoul.indexOf('Kim')}에 있다`;
}



//[3] findIndex
// (ES6+) 콜백 함수를 이용해 배열에서 첫 번째로 발견되는 요소의 인덱스를 반환
const solution = (seoul) => `김서방은 ${seoul.findIndex(e => e === 'Kim')}에 있다`;
