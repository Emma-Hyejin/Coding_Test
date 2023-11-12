//카드뭉치
//1차 시 - 25번째 반례 실패 
//solution(['a', 'b', 'c'], ['d', 'e', 'f'], ['a', 'd', 'f']);

function solution(cards1, cards2, goal) {
    let answer = 'Yes';
    let temp1 = [];
    let temp2 = [];
  
    for (let i = 0; i < goal.length; i++) {
      const index1 = cards1.indexOf(goal[i]);
      const index2 = cards2.indexOf(goal[i]);
      temp1.push(index1 !== -1 ? index1 : -1);
      temp2.push(index2 !== -1 ? index2 : -1);

    }
    console.log(temp1, temp2);
  
    //각 배열이 순서대로 정렬되어 있는가 여부
    for (let i = 1; i < temp1.length; i++) {
      if (temp1[i] < temp1[i - 1]) {
        answer = 'No';
        break;
      }
    }
  
    for (let i = 1; i < temp2.length; i++) {
      if (temp2[i] < temp2[i - 1]) {
        answer = 'No';
        break;
      }
    }
  
    return answer;
};


//2차 시도 
function solution(cards1, cards2, goal) {
    let answer = 'Yes';
    let temp1 = [];
    let temp2 = [];
    let maxIndex1 = -1;
    let maxIndex2 = -1;
  
    cards1.forEach((el) => {
      const index = goal.indexOf(el);
      if (index !== -1) {
        temp1.push(index);
        maxIndex1 = Math.max(maxIndex1, index);
      } else {
        temp1.push(undefined);
      }
    });
  
    cards2.forEach((el) => {
      const index = goal.indexOf(el);
      if (index !== -1) {
        temp2.push(index);
        maxIndex2 = Math.max(maxIndex2, index);
      } else {
        temp2.push(undefined);
      }
    });
  
    console.log(temp1, temp2);
    console.log(maxIndex1, maxIndex2);
    //각 배열이 순서대로 정렬되어 있는가 여부
    for (let i = 1; i < temp1.length; i++) {
      if (
        temp1[i] < temp1[i - 1] ||
        (temp1[i] === undefined && maxIndex1 > temp1[i - 1])
      ) {
        answer = 'No';
        break;
      }
    }
  
    for (let i = 1; i < temp2.length; i++) {
      if (
        temp2[i] < temp2[i - 1] ||
        (temp2[i] === undefined && maxIndex2 > temp2[i - 1])
      ) {
        console.log(`여기야 ${temp2[i]}, ${i}`);
        answer = 'No';
        break;
      }
    }
    console.log(answer);
    return answer;
};

//다른 사람 풀이 
//goal 을 앞에서부터 접근하면서 하나씩 삭제를 해나가기때문에 
//순서대로 접근도 가능, 두 배열에도 접근 가능.. 

function solution (cards1, cards2, goal){
    for( const i of goal ){

        if(cards1[0] === i){
            //cards1[0]을 앞에서 삭제
            cards1.shift();
        } else if (cards2[0] === i){
            //cards2[0]을 앞에서 삭제
            cards2.shift();
        } else {
            return 'No';
        }
    };

    return 'Yes';
};

//다른 사람 풀이 3
function solution (cards1, cards2, goal){
    let j = 0; 
    let k = 0;
    //j와 K의 합산 값은 그냥 if문 조건 쓰기 위한 요소인듯 
    for( let i = 0; i < goal.length; i++){
        if( goal[i] === cards1[i]) j ++;
        else if (goal[i] == cards2[k]) k++;
        else return 'No';
    };

    return 'Yes';
}