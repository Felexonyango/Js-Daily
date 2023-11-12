/**
 * @param {number[]} buckets
 * @param {number} loss
 * @return {number}
 */
var maximizeWater = function(buckets, loss) {
    const EPSILON = 1e-5;

    function canReachTarget(target) {
        let poured = 0;

        for (let i = 0; i < buckets.length; i++) {
            if (buckets[i] > target) {
                poured += (buckets[i] - target) / (1 - loss / 100);
            }
        }

        return poured <= target;
    }

    function binarySearch(low, high) {
        while (low + EPSILON < high) {
            const mid = (low + high) / 2;
            if (canReachTarget(mid)) {
                high = mid;
            } else {
                low = mid;
            }
        }

        return low;
    }

    const maxBucket = Math.max(...buckets);
    return binarySearch(0, maxBucket);
};

// Example usage:
const buckets = [1, 2, 3];
const loss = 25;
const result = maximizeWater(buckets, loss);
console.log(result);
