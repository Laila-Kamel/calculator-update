let sum=0;
const totalScores = (scoreArr) => {
for(let i=0;i<scoreArr.length;i++){
    sum+=scoreArr[i];
}
    return sum;
};
console.log(totalScores([1000]));