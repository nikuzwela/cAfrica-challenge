function subarray(arr, target) {
    let currentSum = 0;
    let start = 0;

    for (let end = 0; end < arr.length; end++) {
        currentSum += arr[end];
        while (currentSum > target && start <= end) {
            currentSum -= arr[start];
            start++;
        }

        if (currentSum === target) {
            return true;
        }
    }

    return false;
}

function runTestCase(arr, target, expected) {
    const result = subarray(arr, target);
    console.log(`Input: arr = ${JSON.stringify(arr)}, target = ${target}`);
    console.log(`Expected: ${expected}, Actual: ${result}`);
    console.log(result === expected ? "✅ Test Passed" : "❌ Test Failed");
    console.log('');
}

const testCases = [
    { arr: [4, 2, 7, 1, 9, 5], target: 14, expected: true },    
    { arr: [1, 2, 3, 4, 5], target: 9, expected: true },         
    { arr: [1, 2, 3, 4, 5], target: 15, expected: true },        
    { arr: [1, 2, 3, 4, 5], target: 16, expected: false },      
    { arr: [0, 0, 0, 0], target: 0, expected: true },            
    { arr: [5], target: 10, expected: false },                   
    { arr: [5, -3, 2, 3, 1], target: 5, expected: true },      
    { arr: [1, -1, 1, -1, 1, -1], target: 0, expected: true },   
];

testCases.forEach((test, index) => {
    console.log(`Test Case ${index + 1}:`);
    runTestCase(test.arr, test.target, test.expected);
});
