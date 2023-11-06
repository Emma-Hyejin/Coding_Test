-- 12세 이인 여자 환자 목록 출력하기
-- 코드를 입력하세요
-- TLNO 컬럼이 null 이면 NONE 으로 출력
-- 12세 이하인 여자 환자 조건 
-- 나이를 기준으로 내림차순 정렬 
-- 나이가 같다면 환자 이름으로 오름차순 정렬

SELECT PT_NAME, PT_NO, GEND_CD, AGE, ifnull(TLNO, 'NONE') as TLNO
from PATIENT -- 테이블
where (AGE <= 12) and (GEND_CD = 'W')
order by AGE DESC, PT_NAME

-- order by : 오름차순 및 내림차순으로 정렬할 수 있다. 
-- ifnull 함수로 null 일 때 값을 쉽게 값을 변경할 수 있다. 
-- ifnull(컬럼, null 일 때 바꾸고 싶은 값)