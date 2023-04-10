// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and 
// column-wise, return the
//  number of negative numbers in grid.
var countNegatives = function(grid) {
    grid.flat().filter((el)=>el<0).length;
};