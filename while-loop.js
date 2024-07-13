//while-loop

let i=0;

    while(i > 5)
    {
        console.log(i);
        i++;

    }


    
//while loop reverse
i=5;

    while(i >= 0)
    {
        console.log(i);
        i--;
    }




//do while loop
i=10;
do 
{
    console.log(i);
    i++;
}
while(i < 10);  /* when this run 1st run the console.log(10); 
                    then i++ so i=11
                    then check the condition in while it will be wrong because while (11 < 10 ) is false
                */

 /*
     while(i > 10); when it is executed 
        1st console.log(10);
            i++ value of i becomes i = 11
                
            then check the condition it is true 
            while ( 11 > 10 ) it is true 
            so the result become infinite 
*/