function calculator(num1,op,num2)
{
    switch(op)
    {
        case '+':console.log((num1+num2).toFixed(2));break;
        case '-':console.log((num1-num2).toFixed(2));break;
        case '*':console.log((num1*num2).toFixed(2));break;
        case '/':console.log((num1/num2).toFixed(2));break;
        case '%':console.log((num1%num2).toFixed(2));break;
    }
}

