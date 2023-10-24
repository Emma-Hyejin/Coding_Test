//[1차] 비밀지도
function solution(n,arr1,arr2){
    let newArr1 = [];
    let newArr2 = [];
    let answer = [];
    
    for(let x of arr1){
        let tempArr = [];//임시배열 저장
        x = x.toString(2);//2진수로 변경
        //n보다 배열길이가 작을경우, 0을 push 반복
        for(let i=0;i<n-x.length;i++){
            tempArr.push(0);
        }
        tempArr.push(x);
        newArr1.push(tempArr.join(''));
        console.log(newArr1);
    }
    
    for(let x of arr2){
        let tempArr = [];//임시배열 저장
        x = x.toString(2);//2진수로 변경
        //n보다 배열길이가 작을경우, 0을 push 반복
        for(let i=0;i<n-x.length;i++){
            tempArr.push(0);
        }
        tempArr.push(x);
        newArr2.push(tempArr.join(''));
        console.log(newArr2);
    }
    
    for(let i=0;i<n;i++){
        let str='';
        for(let j=0;j<n;j++){
            if(newArr1[i][j]==='0' && newArr2[i][j]==='0'){
               str+=' ';
            }else str+='#';
        }
        answer.push(str);
    }
    console.log(answer);
    return answer;
}