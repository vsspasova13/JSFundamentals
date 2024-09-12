function KingDjoserPyramid(base, increment)
{
let marble=0;
let stone=0;
let lapis=0;
let gold=0;
let height=0;
let steps=0;

let ind=base;
while(ind>0)
{
    if((steps+1)%5===0 && steps>1)
    {
        lapis=lapis+(ind*4-4)*increment;
    }
    else if(ind<=2)
    {
        gold=gold+(ind*ind)*increment;
        steps++;
        break;
    }
    else
    {
        marble=marble+(ind*4-4)*increment;
    }
    
    ind=ind-2;
    stone=stone+(ind*ind)*increment;
    steps++;
}
height=Math.floor(steps*increment);
console.log(`Stone required: ${Math.ceil(stone)}`);
console.log(`Marble required: ${Math.ceil(marble)}`);
console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
console.log(`Gold required: ${Math.ceil(gold)}`);
console.log(`Final pyramid height: ${height}`)
}


KingDjoserPyramid(3,1);