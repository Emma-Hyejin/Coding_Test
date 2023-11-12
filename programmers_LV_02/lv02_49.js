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
}