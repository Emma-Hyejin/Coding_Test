//정수를 요소로 갖는 배열을 입력 받아 3개의 요소를 곱해 나올 수 있는 최대값을 리턴
const largestProductOfThree = function (arr) {
    const sorted = arr.slice().sort((a,b) => a-b);
    const a = sorted[sorted.length - 2] * sorted[sorted.length -2] * sorted[sorted.length -3];
    const b = sorted[sorted.length -1] * sorted[0] * sorted[1];

    return Math.max(a, b);
}