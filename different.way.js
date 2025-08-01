for(let i = 0; i<20; i++){
    if(i%2===1){
        console.log('odd number',
             i);
        
    }
}
for(let x= 0; x<30; x++){
    if(x%2!==0){
        console.log(x);
        
    }
}
for (let y =1; y<=30; y++){
    if(y%5 ===0){
        console.log(y);
        
    }
}
for(let z=0; z<60; z++){
    if(z%3===0){
        console.log(z);
        
    }
}
for(let a =0; a<60; a++){
    if(a%3===0 && a%5===0){
        console.log(a);
        
    }
}
for(c=0; c<=30; c++){
    if(c%3===0 || c%5===0 ){
        console.log(c);
        
    }
}
let total=0;
for(let d=0; d<20; d++){
    if(d%3===0){
        total=total +d
        console.log('total', total);
        
    }
}
console.log('sum of the numbers from divisiable 3', total);
