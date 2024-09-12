function bitcoin(input)
{
let firstDay=0;
let bitcoinsBought=0;
let money=0;
let gold=0;
const goldToMoney=67.51;
const bitcoinPrice=11949.16;

for(let i=0; i<input.length;i++)
{
    gold=input[i];
    if(i+1==3)
    {
        gold=gold-30*input[i]/100;
    }
    money=money+gold*goldToMoney;
    if(money>=bitcoinPrice)
    {
        if(firstDay==0){firstDay=i+1;}
       while(money>=bitcoinPrice)
       {
        money=money-bitcoinPrice;
        bitcoinsBought++;   
       }

    }

}

console.log(`Bought bitcoins: ${bitcoinsBought}`);
if(firstDay!==0){console.log(`Day of the first purchased bitcoin: ${firstDay}`);}

console.log(`Left money: ${money.toFixed(2)} lv.`)

}

bitcoin([1,2,1111]);