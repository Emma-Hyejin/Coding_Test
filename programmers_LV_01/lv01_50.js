//2016 : newDate 사용
function solution (a, b) {
    let week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', ];
    let dateStr = "2016-" + a + "-" + b;
    let date = new Date(dateStr);
    return week[date.getDay()];
};



//date 미사용시 
function solution (a, b) {
    let arr = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
    let week = ['FRI', 'SAT','SUN', 'MON', 'TUE', 'WED', 'THU',  ];

    //1월 1일부터 a월 b 일 까지 며칠 차이인지 저장ㅇ할 변수 
    let passDays = 0;
    //a 달 전까지의 모든 달에 대해 각 달의 날짜 수를 더하기 
    //a = 2월 일 때 1월 까지만 더해야 하는데 i = 0 으로 설정을 하면 0, 1 해서 2월에 해당하는 
    //달까지 더하게 된다. 그래서 부득이하게 0을 arr 맨앞에 넣고 i = 1으로 시작.
    // 1 ~ < 2 해서 해당하는 달 전까지만 더하게 된다. 
    for( let i = 1 ; i < a; i++){
        passDays += arr[i];
    };

    //b일을 더해주고 1월 0일이 아닌 1월 1일부터 시작하기 때문에 -1;
    passDays += b-1;
    return week[passDays%7]
}