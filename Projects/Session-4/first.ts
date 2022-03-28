let a:number;
a = 56;

let b:number = 12;

let fname:string = "Alex";

console.log(a+b);
console.log(fname);

function test(num1: number, num2: number): number{
    return num1+num2;
}

console.log(test(3,5));

//Compile .ts file using (tsc first.ts)
//Run .js file using (tsc first.js)