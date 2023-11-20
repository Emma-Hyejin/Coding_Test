//추억 점수 
//풀이 - 약 5분 소요
function solution(name, yearning, photo){
    let answer = [];
    photo.forEach((el) => {
        let sum = 0;

        for( let i = 0; i < name.length; i++){
            if(el.includes(name[i])){
                sum += yearning[i];
            }
        }

        answer.push(sum);
    });

    return answer;
};

//다른 사람 풀이 
function solution(name, yearning, photo){
    let answer = [];
    let score = {};
    name.forEach((el, idx) => {
        //객체로 이름 : 점수 생성
        score[el] = yearning[idx];
    });

    for( let i of photo){
        let sum = 0;

        i.forEach((el) => {
            //객체에 해당 속성이 존재하면 해당 속성을 더해주고 아니면 0
            sum += score[el] ? score[el] : 0 ;
            answer.push(sum);
        })
    }

    return answer;
};


//다른 사람 풀이 - set
function solution(name, yearning, photo){
    const score = new Map();
    name.forEach((el, idx) => {
        //이름과 점수 map 생성
        score.set(el, yearning[idx]);
    });

    return photo.map(names => names.reduce((a, n) => a + (score.get(n) || 0), 0));
}