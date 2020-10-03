
  

const FooBar = (n) => {
    
    for (let i = 1; i < (n+1); i++) {
        if (Number.isInteger(i/5) && Number.isInteger(i/3)){
            console.log('FooBar'); 
        }
        else if  (Number.isInteger(i/5)){
            console.log('Bar');
        }
        else if  (Number.isInteger(i/3)){
            console.log('Foo');
        } else {  console.log(i)}
      
      };
};
  
    FooBar(15);
