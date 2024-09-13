function GladiatorExpences(lost, helmet,sword,shield,armor)
{
    let isHelmetBroken=false;
    let isSwordBroken=false; 
    let shieldBrokenTimes=0;
    let money=0;

    for(let i=1;i<=lost;i++)
    {
        if(i%2===0)
        {
            
            money+=helmet;
        }
        if(i%3===0)
        {
            
            money+=sword;
        }
        if(i%6===0)
        {
            
            money+=shield;
        }

        if(i%12===0)
        {
            money+=armor;
        }

    }

    console.log(`Gladiator expenses: ${money.toFixed(2)} aureus`)
}

GladiatorExpences(23,
    12.50,
    21.50,
    40,
    200)