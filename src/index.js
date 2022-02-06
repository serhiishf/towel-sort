// You should implement your task here.



module.exports = function towelSort (matrix) {
  const result = [];
  if(matrix){
    matrix.forEach((el, index) => {
      while(el.length !== 0){
            if(index % 2 === 0){
        result.push(el.shift());
      }
      else{
        result.push(el.pop());
      }
      }
  
    })
  }
  
  return result;
}
