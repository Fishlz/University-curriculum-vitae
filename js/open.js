var oDiv=document.getElementById('op');
oDiv.onmouseover=function()
{
    startMove(0);
};
oDiv.onmouseout=function()
{
    startMove(-180);
};

var timer='null';
function startMove(iTarget) //运动框架
{
    var oDiv=document.getElementById('op');

    clearInterval(timer); //把原来的定时器关掉
    timer=setInterval(function(){
        var speed=0;
        if(oDiv.offsetLeft>iTarget)
        {
            speed=-10;
        }
        else
        {
            speed=10;
        }

        if(oDiv.offsetLeft==iTarget)
        {
            clearInterval(timer);
        }
        else
        {
            oDiv.style.left=oDiv.offsetLeft+speed+'px';
        }
    },30);

};
