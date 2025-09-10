   const score={
    wins:0,
    losses:0,
    ties:0
}
updateScoreElement();

//console.log(locolStorage .getItem('message'));
let isAutoPlaying=false;
let intervalid;
/*const autoplay=()=>
{

}*/
document.querySelector('.js-auto-play-button')
.addEventListener('click',()=>autoplay());
function autoplay()
{
    const name=document.querySelector('.js-auto-play-button');
    if(!isAutoPlaying)
    {
        intervalid=setInterval(()=>
        {
            const palyermove=pickComputerMove();
            playgame(palyermove);
        },1000);
        isAutoPlaying=true;
        name.innerHTML='stopplaying';
    }
    else
    {
        clearInterval(intervalid);
        isAutoPlaying=false;
        name.innerHTML='autiplay';
    }
}
document.querySelector('.js-rock-button')
.addEventListener('click',()=>playgame('rock'));
document.querySelector('.js-paper-button')
.addEventListener('click',()=>playgame('paper'));
document.querySelector('.js-scissors-button')
.addEventListener('click',()=>playgame('scissors'));
document.body.addEventListener('keydown',(event)=>
{
    if(event.key==='r')
    {
        playgame('rock');
    }
    else if(event.key==='p')
    {
        playgame('paper');
    }
    else if(event.key==='s')
    {
        playgame('scissors');
    }
    if(event.key==='a')
    {
        autoplay();
    }
    if(event.key==='Backspace')
    {
        showresetconfirmation();
        
    }
})
function playgame(playermove)
{
    let cm=pickComputerMove();
    let result='';
    if(playermove==='scissors')
    {
        if(cm==='rock')
        {
            result='you lose';
        }
        else if(cm==='paper')
        {
            result='you won';
        }
        else if(cm===playermove)
        {
            result='tie';
        }
    }
    else if(playermove==='paper')
    {
        if(cm==='rock')
        {
            result='you won';
        }
        else if(cm==='paper')
        {
        result='tie';
        }
        else if(cm==='scissors')
        {
            result='you lose';
        }
    }
    else
    {
        if(cm==='rock')
        {
            result='tie';
        }
        else if(cm==='paper')
        {
            result='you lose';
        }
        else if(cm==='scissors')
        {
            result='you won';
        }
    }
    if(result==='you won')
    {
        score.wins+=1;
    }
    else if(result==='you lose')
    {
        score.losses+=1;
    }
    else
    {
        score.ties+=1;
    }
    updateScoreElement();
    //locolStorage .setItem('message','hello');
    document.querySelector('.js-result')
    .innerHTML=result;
    document.querySelector('.js-moves')
    .innerHTML=`you
    <img src="photos/${playermove}-emoji.png" class="move-icon">
    <img src="photos/${cm}-emoji.png" class="move-icon">
    computer`;
    
}
function updateScoreElement()
{
        document.querySelector('.js-score')
        .innerHTML=`wins:${score.wins}, losses:${score.losses}, ties:${score.ties}`
}
document.querySelector('.js-reset-score-button')
.addEventListener('click',()=>showresetconfirmation());
function showresetconfirmation()
{
    document.querySelector('.js-reset-confirmation')
    .innerHTML=`
        are you sure u wnat to reset the score!!
        <button class="js-reset-confirm-yes reset-confirm-button">yes</button>
        <button class="js-reset-confirm-no reset-confirm-button">no</button>`
    document.querySelector('.js-reset-confirm-yes')
    .addEventListener('click',()=>
    {
        resetupdate();
        hideresetconfirmation();
    });
    document.querySelector('.js-reset-confirm-no')
    .addEventListener('click',()=> {
        hideresetconfirmation();
    });
    
}
function hideresetconfirmation()
{
    document.querySelector('.js-reset-confirmation')
    .innerHTML=' ';
}
function resetupdate()
{
    score.losses=0;
    score.wins=0;
    score.ties=0;
    updateScoreElement();
    
}
function pickComputerMove()
{
    const a=Math.random();
    let cm=' ';
    if(a>=0 && a<1/3)
    {
        cm='rock';
    }
    else if(a>=1/3 && a<2/3)
    {
        cm='paper';
    }
    else if(a>=2/3 && a<1)
    {
        cm='scissors';
    }
    console.log(cm);
    return cm;
}
