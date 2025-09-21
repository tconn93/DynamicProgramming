/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {

    if(n<=3) return n;

    let prev1 = 3;
    let prev2 =2;
    let cur = 0;

    for(let i=3;i<n;i++){
        cur = prev1+prev2;
        prev2 = prev1;
        prev1 = cur;
    }

    return cur;
};

Math.sqrt()


console.log(climbStairs(1))
console.log(climbStairs(2))
console.log(climbStairs(3))
console.log(climbStairs(4))
console.log(climbStairs(5))
console.log(climbStairs(6))
console.log(climbStairs(7))