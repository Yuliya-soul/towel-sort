
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix==undefined){return []}
  let matrix1=matrix;
  if(matrix1.length==0){return []}
  for (let i=0;i<=matrix1.length;i++){
    if (i%2){
     matrix1[i]=matrix1[i].reverse();
    }
    }
  let result=matrix1.flat();

  return result;
}
