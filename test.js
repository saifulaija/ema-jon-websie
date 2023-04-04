const products = {
    name  : 'sobuj',
    quantity : 5
};

products['quantity']=100;
console.log(products);

const student1= {
    name: "rafique", 
    marks: 79, 
    result: "A+"
  };
  console.log(student1.mark + 1);
  
  const obj = {name :'jack',age:27}
const a= 'name' in obj;
console.log(a)