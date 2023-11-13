//구명보트 - 그리디
function solution(people, limit) {
    let answer = 0;
    people.sort((a, b) => a-b);
    
    while(people.length > 0){
        let heavy = people.pop();
        if(heavy + people[0] <= limit) people.shift();
        answer++;
    }
    return answer;
}