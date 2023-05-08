//최대 공약수 최소 공배수 
// 최대 공약수 : 두 수 의 공통된 약수 중 가장 큰 수 
// 최소 공배수 : 두 수의 공통된 배수 중 가장 작은 수 

//[1] 유클리드 호제법
function solution(n, m){
    let gcd = (n, m) => m > 0 ? gcd(m, n%m) : n;
    let lcm = (n, m) => n*m / gcd(n, m);
    
    return [gcd(n,m), lcm(n,m)]
}
