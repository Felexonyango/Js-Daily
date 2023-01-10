// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

function mergeLists(list1, list2) {
  let dummy = new ListNode();
  let current = dummy;

  while (list1 && list2) {
      if (list1.val < list2.val) {
          current.next = list1;
          list1 = list1.next;
      } else {
          current.next = list2;
          list2 = list2.next;
      }
      current = current.next;
  }

  current.next = list1 || list2;

  return dummy.next;
}

console.log(mergesorted([2, 4, 8, 9], 4, [0, 4, 6, 9], 4));
