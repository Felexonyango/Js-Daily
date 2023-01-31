function commonString(list1, list2) {
    const map1 = new Map();
    const map2 = new Map();
    const result = [];
    let minSum = Infinity;
  
    for (let i = 0; i < list1.length; i++) {
      if (!map1.has(list1[i])) {
        map1.set(list1[i], i);
      }
    }
  
    for (let i = 0; i < list2.length; i++) {
      if (!map2.has(list2[i])) {
        map2.set(list2[i], i);
      }
    }
  
    for (const str of list1) {
      if (map2.has(str)) {
        const sum = map1.get(str) + map2.get(str);
        if (sum < minSum) {
          result.length = 0;
          result.push(str);
          minSum = sum;
        } else if (sum === minSum) {
          result.push(str);
        }
      }
    }
  
    return result;
  }
  

function commonStrings(list1, list2) {
    const map1 = {};
    const map2 = {};
    const result = [];
    let minSum = Infinity;
  
    for (let i = 0; i < list1.length; i++) {
      if (!map1[list1[i]]) {
        map1[list1[i]] = i;
      }
    }
  
    for (let i = 0; i < list2.length; i++) {
      if (!map2[list2[i]]) {
        map2[list2[i]] = i;
      }
    }
  
    for (const str of list1) {
      if (map2[str] !== undefined) {
        const sum = map1[str] + map2[str];
        if (sum < minSum) {
          result.length = 0;
          result.push(str);
          minSum = sum;
        } else if (sum === minSum) {
          result.push(str);
        }
      }
    }
  
    return result;
  }
  