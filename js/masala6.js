
let a = 1500;
let b = 10;
let c = 5;
let d ;
for(let i = c ; i <= b ; i++){
  if(i<=5){
    continue  
  }
  d = (i * 0.2).toFixed(1)
 
  console.log(`${d} kg kanfeet narxi ${d*a}`);
}