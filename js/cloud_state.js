let cloudState = moment().minute()%10;
setInterval(function(){
    cloudState = moment().minute()%10;
    refetchCloudState();
},60000);
function refetchCloudState(){
    let delayValue = Math.round(Math.random()*200) + 300;
    if( cloudState === 0 ){
        $('.cloud-item li').eq(0).find('em').last().html('高危攻击');
        $('.cloud-item li').eq(0).find('em').last().addClass('exception');
    } else {
        $('.cloud-item li').eq(0).find('em').last().html('正常');
        $('.cloud-item li').eq(0).find('em').last().removeClass('exception');
    }
    if( cloudState === 1 ){
        $('.cloud-item li').eq(13).find('em').last().html('延迟'+ delayValue +'ms');
        $('.cloud-item li').eq(13).find('em').last().addClass('delay');
    } else {
        $('.cloud-item li').eq(13).find('em').last().html('正常');
        $('.cloud-item li').eq(13).find('em').last().removeClass('delay');
    }
    if( cloudState === 2 ){
        $('.cloud-item li').eq(7).find('em').last().html('高危攻击');
        $('.cloud-item li').eq(7).find('em').last().addClass('exception');
    } else {
        $('.cloud-item li').eq(7).find('em').last().html('正常');
        $('.cloud-item li').eq(7).find('em').last().removeClass('exception');
    }
    if( cloudState === 3 ){
        $('.cloud-item li').eq(4).find('em').last().html('延迟'+ delayValue +'ms');
        $('.cloud-item li').eq(4).find('em').last().addClass('delay');
    } else {
        $('.cloud-item li').eq(4).find('em').last().html('正常');
        $('.cloud-item li').eq(4).find('em').last().removeClass('delay');
    }
    if( cloudState === 6 ){
        $('.cloud-item li').eq(6).find('em').last().html('高危攻击');
        $('.cloud-item li').eq(6).find('em').last().addClass('exception');
    } else {
        $('.cloud-item li').eq(6).find('em').last().html('正常');
        $('.cloud-item li').eq(6).find('em').last().removeClass('exception');
    }
    if( cloudState === 7 ){
        $('.cloud-item li').eq(9).find('em').last().html('延迟'+ delayValue +'ms');
        $('.cloud-item li').eq(9).find('em').last().addClass('delay');
    } else {
        $('.cloud-item li').eq(9).find('em').last().html('正常');
        $('.cloud-item li').eq(9).find('em').last().removeClass('delay');
    }
}
refetchCloudState();