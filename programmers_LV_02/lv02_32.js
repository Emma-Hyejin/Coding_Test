//전화번호 목록 - HASH
//input - ["119", "97674223", "1195524421"]  return false;

function solution(phone_book){
    let answer = true;
    const hash = {};

    //hash map을 생성
    for( let i of phone_book){
        hash[i] = false;
    }

    //특정 요소가 다른 요소에 포함되어 있는지 확인하기 위해 substring을 통해서 점차적으로 확인을 합니다. 
    for( let phoneNum of phone_book){
        for( let i = 1 ; i < phoneNum.length; i++){
            const prefix = phoneNum.substring(0, i);

            if(hash[prefix] === false){
                return false;
            }
            answer = true;
        }
    }
    return answer;
}

//코드 GPT  : 전체 테스트 + 효율성 통과 못함 
//각 전화번호마다 모든 가능한 접두어를 생성하고 중복되는 접두어가 발견되면 즉시 false를 반환 
function solution(phone_book) {
    let hash = {};
    
    for( const phoneNum of phone_book){
        for( let i = 1 ; i < phoneNum.length; i++){
            const prefix = phoneNum.substring(0, i);
            
            if(hash[prefix]){
                //hash[prefix]요소가 있으면 false;
                return false;
            }
            hash[prefix] = true;
        }
    }
    console.log(hash)
    return true;
}