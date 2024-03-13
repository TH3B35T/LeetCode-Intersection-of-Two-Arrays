/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const nums1_set = new Set(nums1);
    // const nums2_set = new Set(nums2);
    const intersections = new Set();

    // for(let num of nums1_set){
    //     if(nums2_set.has(num)) intersections.push(num)
    // }
    for(let num of nums2){
        if(nums1_set.has(num)) intersections.add(num)
    }

    return [...intersections];



    // return [...nums1_set].filter(num => nums2_set.has(num));


};
