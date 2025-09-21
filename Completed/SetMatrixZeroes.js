var setZeroes = function(matrix){
const n = matrix.length;
const m = matrix[0].length;
const rows = Array(n).fill(false)
const cols = Array(m).fill(false);
for(let i =0; i<n;i++){
    for(let j=0;j<m;j++){
        if(matrix[i][j]===0){
            rows[i] = true;
            cols[j] = true;           
                }
    }
}
for(let i =0; i<n;i++){
    for(let j=0;j<m;j++){  
        if(rows[i]||cols[j]) matrix[i][j] =0;
    }}
}



const matrix =  [[0,1,2,0],[3,4,5,2],[1,3,1,5]];



console.log(matrix);

setZeroes(matrix)


console.log(matrix);