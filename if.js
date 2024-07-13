// if statement 
let number = 6;

if(number > 0)
{
    console.log(`${number} is greater than 0`);
}

//if else checking odd or even
let num = 6;

    if(num % 2== 0)
    {
        console.log(`${num} is even`);
    }
    else
    {
        console.log(`${num} is odd`);
    }

//if else if to find greatest of 3 number 
let number1 = 10;
let number2 = 50;
let number3 = 30;

    if(number1 > number2 && number1 > number3)
    {
        console.log(`${number1} is larger`);
    }
    else if(number2 > number1 && number2 > number3)
    {
        console.log(`${number2} is larger`);
    }
    else
    {
        console.log(`${number3} is larger`);
    }


//nested if  to find given number is positive or negative

let num1=10;
    if(num1 >= 0)
    {
        if(num1 == 0)
        {
            console.log(`${num1} is 0`);
        }
        else
        {
            console.log(`${num1} is positive`);
        }
    }   
    else
    {
        console.log(`${num1} is negative`);
    }