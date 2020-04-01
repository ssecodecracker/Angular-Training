interface Calculator {
    calculate(input1:number,input2:number,input3:number):number;
}

class InterestCalculator  implements Calculator{
    /* 
        input1 = Principal, input2 = Rate, input3 = Time
    */
   calculate(input1:number,input2:number,input3:number):number{
        return (input1 * input2 * input3)/100;
    }
}

class ShapeCalculator  implements Calculator{
    /* 
        input1 = Length, input2 = Width, input3 = Height
    */
   calculate(input1:number,input2:number,input3:number):number{
        return input1 * input2 * input3;
    }
}

let interestCalculator = new InterestCalculator();
let shapeCalculator = new ShapeCalculator();

console.log(interestCalculator.calculate(10000,12,5));
console.log(shapeCalculator.calculate(5,10,15));