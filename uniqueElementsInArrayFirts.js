function solution(A) {
  const occurrenceCount = {};

  for (let i = 0; i < A.length; i++) {
    const currentValue = A[i];

  
    if (occurrenceCount[currentValue] === undefined) {
      occurrenceCount[currentValue] = i; // Store the position of the unique number
    } else {
      // If the value has been encountered before, mark it as non-unique
      occurrenceCount[currentValue] = -1;
    }
  }

  let firstUniqueNumber = -1;
  let firstUniquePosition = A.length;

  // Find the first unique number with the lowest position
  for (const value in occurrenceCount) {
    if (
      occurrenceCount[value] !== -1 &&
      occurrenceCount[value] < firstUniquePosition
    ) {
      firstUniqueNumber = parseInt(value); // Convert value to an integer
      firstUniquePosition = occurrenceCount[value];
    }
  }

  return firstUniqueNumber;
}
