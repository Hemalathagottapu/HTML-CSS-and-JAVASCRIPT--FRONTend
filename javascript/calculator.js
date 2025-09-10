let calculation='';
function updatecalculation(value)
{
    calculation+=value;
    displaycalculation(calculation);
}
function displaycalculation(cal)
{
    document.querySelector('.calculation-space')
    .innerHTML=`${cal}`;
}
