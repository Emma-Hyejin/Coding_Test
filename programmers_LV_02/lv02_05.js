//이진 변환 반복하기 

//[이진변환 횟수, 제거할 0의 총 갯수];
//input - "110010101001"  outpu - [3, 8];

function solution (s) {
    let answer = [];
    //deleteZero - 제거할 0의 갯수들을 담는 배열 / count - 2진 변환 횟수 카운드 
    let delteZero = [];
    let count = 0;

    //재귀함수 생성 ( 2진 변환과 0을 제거하는 함수)
    function transform (input){
        const str = input.replace(/0/g, 2); // "110010101001" -> "111111"

        //0 제거 후의 길이 
        const leftZero = str.length;
        delteZero.push(input.length - str.length);
        count++;

        //2진 변환
        let binary = '';
        while( leftZero > 0){
            const reminder = leftZero % 2;
            binary = reminder + binary; // "" -> "1" -> "11" -> "110"

            leftZero = Math.floor(leftZero / 2);
        };

        if(leftZero === 0 ) return binary;
    };

    //실제 적용.
    //입력 값이 "1" 일 때 while 을 종료
    let result = s;
    while( result !== "1" ){
        result = digit(result);
    };

    //deleteZero 의 모든 갯수 더해주기
    const totalZero = delteZero.reduce((acc, cur) => acc + cur, 0);

    answer = [count, totalZero];
    return answer;
};


//다른 사람 풀이 
function solution(s) {
    let answer = [0,0];

    while(s.length > 1){
        answer[0] ++ ;
        //||[] - 0이 없을 땐 s.match(0/g)이 null이 디어서 null.length 가 되는 것을 방지하는 코드 
        // match에서 0과 일치하는 부분이 없을 대는 null을 반환.
        answer[1] += (s.match(/0/g) || []).length;
        s = s.replace(/0/g, '').length.toString(2); 
    };

    return answer;
}