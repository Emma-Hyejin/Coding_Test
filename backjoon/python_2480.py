#주사위 세개 - 2480번

a,b,c = sorted(map(int, input().split()));
#sorted 함수는 입력 받은 값을 순서대로 정렬 해주는 함수 입니다. 

if(a == b ==c) : 
    print(10000 + (a*1000));
elif(a ==b or b == c) : 
    if(a ==b) : 
        print(1000 + (a*1000));
    elif(b == c):
        print(1000 + (b * 100));
else:
    #3 값이 모두 다르다면 가장 큰 수에 100을 곱해야 하는데 이미 sorted로 정렬이 되었기 때문에 c 에 곱해주면 된다. 
    print(c * 100);