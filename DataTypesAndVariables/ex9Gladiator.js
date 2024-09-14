function GladiatorExpences(lost, helmet,sword,shield,armor)
{
    let isHelmetBroken=false;
    let isSwordBroken=false; 
    let shieldBrokenTimes=0;
    let money=0.0;

    for(let i=1;i<=lost;i++)
    {
        if(i%2===0)
        {
            isHelmetBroken=true;
            money+=helmet;
        }
        if(i%3===0)
        {
            isSwordBroken=true;
            money+=sword;
        }
        if(isHelmetBroken===true && isSwordBroken===true)
        {
            shieldBrokenTimes++;
            money+=shield;
            if(shieldBrokenTimes%2===0)
            {
                money+=armor;
            }
        }

        isSwordBroken=false;
        isHelmetBroken=false;

    }

    console.log(`Gladiator expenses: ${money.toFixed(2)} aureus`)
}

GladiatorExpences(23,
    12.50,
    21.50,
    40.0,
    200.0)