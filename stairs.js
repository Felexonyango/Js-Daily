var minCostClimbingStairs = function(cost) {
    const n = cost.length;

    const stairsArry = new Array(n + 1);

    stairsArry[0] = 0;
    stairsArry[1] = 0; 
    

    for (let i = 2; i <= n; i++) {
       
        stairsArry[i] = Math.min(stairsArry[i - 1] + cost[i - 1], 
        stairsArry[i - 2] + cost[i - 2]);
    }

    return stairsArry[n];
}

// The function takes an input array cost, which represents the cost of each step.
// The length of the cost array is stored in a variable n.

// A new array called stairsArry is created with a length of n + 1. 
//This array will store the minimum cost to reach each step.

// The first two elements of stairsArry are set to 0 because the cost to reach 
//step 0 (the starting point) and step 1 is 0. 
//These steps can be considered as the starting point since the cost to reach them is 0.

// A loop is then executed from i = 2 to n, 
//where each iteration calculates the minimum cost to reach the current step i by
// comparing the cost of taking either one or two steps from the previous steps.
// Inside the loop, stairsArry[i] is set to the minimum between
// stairsArry[i - 1] + cost[i - 1] and stairsArry[i - 2] + cost[i - 2]. 
//The first option represents the cost of reaching the current step i from the previous step, 
//and the second option represents the cost of reaching the current step i from two steps back.

// Finally, the function returns stairsArry[n], which represents the minimum cost to reach the last step n.