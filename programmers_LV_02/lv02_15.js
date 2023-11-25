//n개의 최소공배수
function solution(arr) {
    const gcd = (min, max) => {
      return min % max == 0 ? max : gcd(max, min % max);
    };
  
    const nlcm = (nums) => {
      return nums.reduce((a, b) => (a * b) / gcd(a, b));
    };
  
    return nlcm(arr);
}