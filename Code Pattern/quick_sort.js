
/**
 * @param {number[]} nums
 * @return {number[]} 
 */

// Quicksort is a divide-and-conquer algorithm. 
// It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, 
// according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively. 
// This can be done in-place, requiring small additional amounts of memory to perform the sorting.

// Quicksort is a comparison sort, meaning that it can sort items of any type for which a "less-than" relation (formally, a total order) is defined.
// Efficient implementations of Quicksort are not a stable sort, meaning that the relative order of equal sort items is not preserved.

var quick_sort = function(nums, l, r) {
    if (l >= r) return;
    let i = l;
    let j = r;
    let temp = nums[l];
    while(i < j) {
        while(nums[j] > temp && i < j) {
            j--;
        }
        if (i < j) {
            nums[i] = nums[j];
        }
        while(nums[i] < temp && i < j) {
            i++;
        }
        if (i < j) {
            nums[j] = nums[i];
        }
    }
    nums[i] = temp;
    quick_sort(nums, l, i - 1);
    quick_sort(nums, i + 1, r);
}





function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}

function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}


/**
 * @param {number[]} nums
 * @return {number[]} 
 */
function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        console.log(index);
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}
// first call to quick sort
var items = [1, 2, 3, 5, 6, 4];
var sortedArray = quickSort(items, 0, items.length - 1);
console.log(sortedArray); //prints [2,3,5,6,7,9]


// let x = partition(nums, 0, nums.length - 1);
// console.log(nums);