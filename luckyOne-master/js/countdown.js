/**
 * Created by wanghaobo on 15/12/22.
 */
var WINDOW_WIDTH = 1440;
var WINDOW_HEIGHT = 768;
var RADIUS = 8;
var MARGIN_TOP = 180;
var MARGIN_LEFT = 180;
var url = window.location.search;
var DOUBLE_NOTE = 13;
var SINGLE_NOTE = 12;

window.onload = function()
{
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    canvas.width = WINDOW_WIDTH;
    canvas.height = WINDOW_HEIGHT;

    render(context);
}
function render(cxt)
{

    var num = url[11];

    if (url.length == DOUBLE_NOTE) {
        renderDigit(MARGIN_LEFT, MARGIN_TOP, url[5], cxt)
        renderDigit(MARGIN_LEFT + 15 * (RADIUS + 1), MARGIN_TOP, url[6], cxt)

        renderDigit(MARGIN_LEFT + 30 * (RADIUS + 1), MARGIN_TOP, url[7], cxt)

        renderDigit(MARGIN_LEFT + 45 * (RADIUS + 1), MARGIN_TOP, url[8], cxt)
        renderDigit(MARGIN_LEFT + 60 * (RADIUS + 1), MARGIN_TOP, url[9], cxt)

        renderDigit(MARGIN_LEFT + 75 * (RADIUS + 1), MARGIN_TOP, url[10], cxt)

        renderDigit(MARGIN_LEFT + 90 * (RADIUS + 1), MARGIN_TOP, url[11], cxt)
        renderDigit(MARGIN_LEFT + 105 * (RADIUS + 1), MARGIN_TOP, url[12], cxt)
    }
    else if (url.length == SINGLE_NOTE)
    {


        renderDigit(MARGIN_LEFT, MARGIN_TOP,13, cxt)
        renderDigit(MARGIN_LEFT + 15 * (RADIUS + 1), MARGIN_TOP, 11, cxt)

        renderDigit(MARGIN_LEFT + 30 * (RADIUS + 1), MARGIN_TOP, 12, cxt)

        renderDigit(MARGIN_LEFT + 45 * (RADIUS + 1), MARGIN_TOP, url[7], cxt)
        renderDigit(MARGIN_LEFT + 60 * (RADIUS + 1), MARGIN_TOP, url[8], cxt)

        renderDigit(MARGIN_LEFT + 75 * (RADIUS + 1), MARGIN_TOP, url[9], cxt)

        renderDigit(MARGIN_LEFT + 90 * (RADIUS + 1), MARGIN_TOP, url[10], cxt)
        renderDigit(MARGIN_LEFT + 105 * (RADIUS + 1), MARGIN_TOP, url[11], cxt)

    }
}
function renderDigit(x,y,num,cxt)
{
    cxt.fillStyle = "rgb(0,200,0)";

    for(var  i = 0; i < digit[num].length;i++)
        for(var j = 0 ; j < digit[num][i].length;j++)
        {
            if (digit[num][i][j] == 1)
            {
                cxt.beginPath()
                cxt.arc(x+j*2*(RADIUS+1)+(RADIUS+1), y+i*2*(RADIUS+1)+(RADIUS+1), RADIUS, 0, 2*Math.PI)
                cxt.closePath()

                cxt.fill()
            }
        }
}