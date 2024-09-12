function login(input)
{
    let username=input[0];
    let rev='';
    let ind=1;

    while(ind<=username.length)
    {
    rev=rev+username[username.length-ind];
    ind++;
    }

    let count=0;
    let length=input.length;
    for(let i=1;i<length;i++)
    {
        if(input[i]===rev)
        {
            console.log("User "+username+" logged in.");
            return;
        }
        else 
        {
            count++;
            if(count===4){ console.log("User "+username+" blocked!");}
            else {console.log("Incorrect password. Try again.")}
        }
    }
}

login(['sunny','rainy','cloudy','sunny','not sunny']);